import axios from "axios";
const mongoose = require("mongoose");
const url = "/api/posts/";

class PostService {
  //Get Posts
  static getPosts() {
    return new Promise(async (resolve, reject) => {
      try {
        console.log("Joyuu");
        const res = await axios.get(url);
        const data = res.data;
        resolve(
          data.map(post => ({
            ...post,
            createdAt: new Date(post.createdAt)
          }))
        );
      } catch (err) {
        reject(err);
      }
    });
  }

  // Create Post
  static insertPost(text) {
    return axios.post(url, {
      text
    });
  }

  // Delete Post
  static deletePost(id) {
    return axios.delete(`${url}${id}`);
  }
}

export default Connecting;
