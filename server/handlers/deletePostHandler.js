const admin = require('../firebase');

const deletePostHandler = async (request, h) => {
  const { userId, postId } = request.params;

  try {
    const db = admin.firestore();
    const postRef = db.collection('users').doc(userId).collection('posts').doc(postId);

    const postDoc = await postRef.get();
    if (!postDoc.exists) {
      return h.response({ error: 'Post not found' }).code(404);
    }

    const postData = postDoc.data();
    const imageFileName = `${postData.image.split('/').pop()}`; 

    const bucket = admin.storage().bucket();
    const file = bucket.file(`${userId}/posts/${imageFileName}`);

    try {
      await file.delete();
    } catch (error) {
      if (error.code === 404) {
        console.log(`Image file not found in Firebase Storage: ${imageFileName}`);
      } else {
        throw error; 
      }
    }

    await postRef.delete();

    return h.response({ success: true }).code(200);
  } catch (error) {
    return h.response({ error: error.message }).code(500);
  }
};

module.exports = deletePostHandler;
