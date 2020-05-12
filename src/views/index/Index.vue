<template>
  <div>
    <p>
      <a href="register.html?a=11">注册页</a>
    </p>
    <hr>
    <p>
      <a href="login.html">登录页</a>
    </p>
  </div>
</template>
<script>
export default {
  name: 'Home',
  methods: {
    jump () {
      window.location.href = `login.html?a=${this.a}&b=${this.b}`
    }
  }
}
</script>