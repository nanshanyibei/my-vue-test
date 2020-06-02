<template>
  <div id="app">
    <div class="header">
      <div class="header-border">
        <div class="login-button">Register</div>
        <div class="login-button">Login</div>
        <div class="login-button">{{username}}</div>
        <div class="login-button">Logout</div>
      </div>
    </div>
    <router-view/>
    <div class="footer">
      belong to T12534
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      username:'TEST'
    }
  }
}
</script>

<style>
#app{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 16px;
}
.header,.footer{
  width: 100%;
  background: #2c3e50;
}
.header-border{
  height: 50px;
  line-height: 50px;
  color: #ffffff;
  display: flex;
  width: 880px;
  margin: 0 auto;
}
.login-button{
  width: 100px;
}
.footer{
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: #ffffff;
}
</style>
