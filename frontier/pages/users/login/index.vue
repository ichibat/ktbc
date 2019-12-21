<template>
  <div class = "l-container">
  <img src="/img/logo.png" alt="KT法" class="logo">
  <p>ユーザーログイン</p>
    <div class="field">
      <label for="email" class="label">Eメール</label>
      <input type="email" class="control" v-model="email" required>
      <p>{{email}}</p>
    </div>
    <div class="field">
      <label for="password" class="label">パスワード</label>
      <input type="password" class="control" v-model="password" required>
    </div>
    <button type="submit" class="button is-primary ">入力</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
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