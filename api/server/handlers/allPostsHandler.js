const admin = require("../firebase");

const allPostsHandler = async (request, h) => {
  try {
    const db = admin.firestore();
    const postsSnapshot = await db.collection("posts").get();

    const posts = [];
    postsSnapshot.forEach((doc) => {
      const postData = doc.data();
      posts.push({ ...postData });
    });

    return h.response({ posts }).code(200);
  } catch (error) {
    return h.response({ error: error.message }).code(500);
  }
};

module.exports = allPostsHandler;
