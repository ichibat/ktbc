import axios from axios; 

const mongoose = require("mongoose");

//Connect to mongoose
mongoose
  .connect("mongodb://tims:Hit135Run@ds019946.mlab.com:19946/ktmethod", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB connected..."))
  .catch(err => {
    console.log(err);
  });

  const url = "/api/posts/";

  class PostService {
    //Get Posts
    static getPosts() {
      return new Promise(async (resolve, reject) => {
        try {
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
  
  
  export default PostService;
  