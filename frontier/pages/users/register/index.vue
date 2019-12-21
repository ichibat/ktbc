<template>
  <div class = "l-container">
    <p class="has-text-primary">ユーザー登録</p>
    <input class = "c-input" v-model="name" placeholder="名前:">
    <input class = "c-input" v-model="karteNumber" placeholder="カルテ番号:">
    <input class = "c-input" v-model="lastNameInitial" placeholder="姓のイニシャル:">
    <input class = "c-input" v-model="firstNameInitial" placeholder="名のイニシャル:">
<p>ユーザーの名前は: {{ name }}</p>    
<p>カルテ番号は: {{ karteNumber }}</p>
<p>姓のイニシャル: {{ lastNameInitial }}</p>
<p>名のイニシャル: {{ firstNameInitial }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      karteNumber: '',
      lastNameInitial: '',
      firstNameInitial: ''
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
.c-input {
  display: block
}
</style>