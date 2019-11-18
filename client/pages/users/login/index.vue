<template>
  <div>
    <img alt="KT法" />
    <p class="display-1">ユーザーログイン</p>
    <form method="post" action="/users/login">
      <div class="field">
        <label for="email">Eメール</label>
        <input id="email" type="email" name="email" required />
      </div>
      <div>
        <label for="password">パスワード</label>
        <input id="password" type="password" name="password" required />
      </div>
      <button type="submit" is-primary>入力</button>
    </form>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
