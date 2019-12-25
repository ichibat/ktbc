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

class PostService {
  // Get Posts


  // Create Post
  

  // Delete Post
}