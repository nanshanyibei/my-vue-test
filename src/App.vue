<template>
  <div id="app">
    <div class="header">
      <img class="top-logo" :src="imgUrl">
      <div class="login-sign-up">
        <span class="login-button" @click="clickLogin">Login</span>
        /
        <span class="login-button" @click="clickSignUp">Sign Up</span>
      </div>
    </div>
    <router-view/>
    <div class="footer">
      <div class="about-us" @click="clickAboutUs">About Us</div>
      <div class="about-us" @click="clickContactUs">Contact Us</div>
      <div class="about-us" @click="clickNeedHelp">Need Help</div>
    </div>
    <div class="show-detail" v-if="aboutUs">Details of the relationship company</div>
    <div class="show-detail" v-if="contactUs">The company's contact information such as phone number, email and address</div>
    <div class="show-detail" v-if="needHelp">A dialog box appears and help can be sought online</div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      username:'TEST',
      imgUrl: require('./assets/WechatIMG57.png'),
      aboutUs:false,
      contactUs:false,
      needHelp:false
    }
  },
  methods:{
    clickLogin(){
      this.$router.push('/login')
      this.contactUs=false
      this.aboutUs=false
      this.needHelp=false
    },
    clickSignUp(){
      this.$router.push('/register')
      this.contactUs=false
      this.aboutUs=false
      this.needHelp=false
    },
    clickAboutUs(){
      this.aboutUs=!this.aboutUs
      this.contactUs=false
      this.needHelp=false
    },
    clickContactUs(){
      this.contactUs=!this.contactUs
      this.aboutUs=false
      this.needHelp=false
    },
    clickNeedHelp(){
      this.needHelp=!this.needHelp
      this.aboutUs=false
      this.contactUs=false
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
  display: flex;
  justify-content: space-between;
  height: 54px;
}
.header{
  border-bottom: 1px solid #2c3e50;
}
.footer{
  border-top: 1px solid #2c3e50;
}
.login-sign-up{
  margin-right: 20px;
  font-size: 18px;
  line-height: 54px;
}
.top-logo{
  width: 50px;
  height: 50px;
  margin-left: 20px;
}
.login-button{
  cursor: pointer;
}
.footer{
  display: flex;
  justify-content: space-between
}
.about-us{
  margin-left: 20px;
  margin-right: 20px;
  font-size: 18px;
}
.show-detail{
  width: 880px;
  margin: 10px auto;
  text-align: center
}
</style>
