<template>
  <div>
    <p>ユーザー登録</p>
    <form method="post" action="register">
      <div>
        <label for="name">名前</label>
        <input id="name" type="text" name="name" required />
      </div>
      <div>
        <label for="email">Eメール</label>
        <input id="email" type="email" name="email" required />
      </div>
      <div>
        <label for="password">パスワード</label>
        <input id="password" type="password" name="password" required />
      </div>
      <div>
        <label for="password2">確認</label>
        <input id="password2" type="password" name="password2" required />
      </div>
      <button type="submit">入力</button>
    </form>
  </div>
</template>
