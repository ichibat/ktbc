<template>
<div>
  <p>hello!</p>
  <div
  v-for="(post,index) in posts"
  v-bind:item="post"
  v-bind:index="index"
   v-bind:key="post._id"
>
  後{{post}}{{index}}</div>
  <h1>Latest Posts</h1>
    <div class="create-post">
      <label for="create-post">Say Something...</label>
      <input type="text" id="create-post" v-model="text" placeholder="Create a post" />
      <button v-on:click="createPost">Post!!</button>
    </div>
  
  </div>
</template>

<script>
import PostService from "./PostService";

export default {
  name: "PostComponent",
  data() {
    return {
      posts: ["shaku", "nerima", "tokyo"],
      error: "",
      text: ""
    };
  },
  async created() {
    try {
      this.posts = await PostService.getPosts();
    } catch (err) {
      this.error = err.message;
    }
  },
  methods: {
    async createPost() {
      await PostService.insertPost(this.text);
      this.posts = await PostService.getPosts();
    },
    async deletePost(id) {
      await PostService.deletePost(id);
      this.posts = await PostService.getPosts();
    }
  }
};
</script>