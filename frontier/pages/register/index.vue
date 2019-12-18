<template>
  <div class = "l-container">
    <p>ユーザー登録</p>
    <input v-model="karteNumber" placeholder="カルテ番号:">
    <input v-model="lastNameInitial" placeholder="姓のイニシャル:">
    <input v-model="firstNameInitial" placeholder="名のイニシャル:">
<p>カルテ番号は: {{ karteNumber }}</p>
<p>姓のイニシャル: {{ lastNameInitial }}</p>
<p>名のイニシャル: {{ firstNameInitial }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
</style>