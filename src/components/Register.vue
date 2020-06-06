<template>
  <div class="hello">
    <div class="login-container">
      <h1 class="please-login">Log In</h1>
      <div class="word-input">
        <span class="emial">Enter your email:</span>
        <el-input class="user-name" v-model="userName" placeholder="please enter your email adress"></el-input>
      </div>
      <div class="word-input">
        <span class="emial">Full Name:</span>
        <el-input class="password" placeholder="Please enter the password" v-model="passWord" show-password></el-input>
      </div>
      <div class="word-input">
        <span class="emial">Password:</span>
        <el-input class="password" placeholder="Please enter the password" v-model="passWord" show-password></el-input>
      </div>
      <div class="word-input">
        <span class="emial">Confrim password:</span>
        <el-input class="password" placeholder="Please enter the password" v-model="passWord" show-password></el-input>
      </div>
      <el-button class="login-button" plain>Log In</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      userName:'',
      passWord:''
    }
  },
  methods:{
    clickRegister(){
      console.log('register')
      this.$router.push('/register')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  margin: 0 auto;
  width: 880px;
}
.login-container{
  margin: 30px auto;
  width: 600px;
}
.please-login{
  margin-bottom: 30px;
  text-align: center
}
.password{
  margin-bottom: 30px;
  width: 430px;
}
.user-name{
  margin-bottom: 15px;
  width: 430px;
}
.word-input{
  display: flex
}
.emial{
  line-height: 45px;
  font-size: 18px;
  width: 170px;
}
.login-button{
  margin: 30px auto;
  display: block
}
.register-button{
  position: absolute;
  right: 0;
}
</style>
