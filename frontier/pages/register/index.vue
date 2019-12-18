<template>
  <div class = "l-container">
    <p>ユーザー登録</p>
    <input v-model="message" placeholder="カルテ番号:">
<p>カルテ番号は: {{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: ''
    }
  }
}
</script>

<style>
.l-container {
  background: lightgray;
  margin: auto;
  width: 80%;
  padding: 10px;
}
</style>