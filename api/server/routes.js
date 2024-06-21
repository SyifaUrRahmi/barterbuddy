const registerHandler = require("./handlers/registerHandler");
const loginHandler = require("./handlers/loginHandler");
const getUserHandler = require("./handlers/getUserHandler");
const postHandler = require("./handlers/postHandler");
const deletePostHandler = require("./handlers/deletePostHandler");
const userPostsHandler = require("./handlers/userPostsHandler");
const allPostsHandler = require("./handlers/allPostsHandler");
const singlePostHandler = require("./handlers/singlePostHandler");
const searchHandler = require("./handlers/searchHandler");
const searchHistoryHandler = require("./handlers/searchHistoryHandler");
const deleteSearchHistoryHandler = require("./handlers/deleteSearchHistoryHandler");
const editPostHandler = require("./handlers/editPostHandler");
const editProfileHandler = require("./handlers/editProfileHandler");
const interestPostHandler = require("./handlers/interestPostHandler");
const removeInterestPostHandler = require("./handlers/removeInterestPostHandler");
const postsPageHandler = require("./handlers/postsPageHandler");
const sendMessageHandler = require("./handlers/sendMessageHandler");
const getChatHistoryHandler = require("./handlers/getChatHistoryHandler");

const routes = [
  {
    method: "POST",
    path: "/register",
    handler: registerHandler,
  },
  {
    method: "POST",
    path: "/login",
    handler: loginHandler,
  },

  {
    method: "GET",
    path: "/user/{userId}",
    handler: getUserHandler,
  },
  {
    method: "PUT",
    path: "/{userId}/profile",
    options: {
      payload: {
        output: "stream",
        parse: true,
        allow: "multipart/form-data",
        multipart: true,
      },
    },
    handler: editProfileHandler,
  },

  {
    method: "POST",
    path: "/{userId}/post",
    options: {
      payload: {
        output: "stream",
        parse: true,
        allow: "multipart/form-data",
        multipart: true,
      },
    },
    handler: postHandler,
  },
  {
    method: "PUT",
    path: "/{userId}/post/{postId}",
    options: {
      payload: {
        output: "stream",
        parse: true,
        allow: "multipart/form-data",
        multipart: true,
      },
    },
    handler: editPostHandler,
  },
  {
    method: "DELETE",
    path: "/{userId}/delete/{postId}",
    handler: deletePostHandler,
  },
  {
    method: "GET",
    path: "/user/{userId}/posts",
    handler: userPostsHandler,
  },
  {
    method: "GET",
    path: "/posts",
    handler: allPostsHandler,
  },
  {
    method: "GET",
    path: "/page/posts",
    handler: postsPageHandler,
  },
  {
    method: "GET",
    path: "/post/{postId}",
    handler: singlePostHandler,
  },
  {
    method: "POST",
    path: "/{userId}/post/{postId}/interest",
    handler: interestPostHandler,
  },
  {
    method: "POST",
    path: "/{userId}/post/{postId}/uninterest",
    handler: removeInterestPostHandler,
  },
  {
    method: "GET",
    path: "/{userId}/search",
    handler: searchHandler,
  },
  {
    method: "GET",
    path: "/{userId}/search_history",
    handler: searchHistoryHandler,
  },
  {
    method: "DELETE",
    path: "/{userId}/search_history/{entryId}",
    handler: deleteSearchHistoryHandler,
  },
  {
    method: "POST",
    path: "/send_message",
    handler: sendMessageHandler,
  },
  {
    method: "GET",
    path: "/chat_history",
    handler: getChatHistoryHandler,
  },
];

module.exports = routes;
