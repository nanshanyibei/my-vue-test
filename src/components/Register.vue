<template>
  <div class="register-content">
    <div class="moncherigift">Moncherigift</div>
    <div class="register-content-container">
      <el-input v-model="accountName" class="register-element" placeholder="account name" />
      <el-input v-model="password" show-password class="register-element" placeholder="Password" />
      <el-input v-model="firstName" class="register-element" placeholder="First Name" />
      <el-input v-model="lastName" class="register-element" placeholder="Las tName" />
      <el-input v-model="emailAddress" class="register-element" placeholder="Email" />
      <el-input v-model="mobile" class="register-element" placeholder="Mobile" />
      <div class="bottom-words">
        By creating an account, you agree that you have read and accepted our Conditions of
        Use and Privacy Notice.
      </div>
    </div>
    <el-button @click="createAccount" class="create-account">Create account</el-button>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      accountName: '',
      password: '',
      firstName: '',
      lastName: '',
      emailAddress: '',
      mobile: '',
      userType: 'employee'
    }
  },
  methods: {
    createAccount(){
      console.log('test----createAccount', this.accountName, this.password, this.firstName, this.lastName, this.emailAddress);
      this.$axios({
        method: "post",
        url: '/sign-up',
        data: {
          accountName: this.accountName,
          password: this.password,
          firstName: this.firstName,
          lastName: this.lastName,
          emailAddress: this.emailAddress,
          mobile: this.mobile,
          userType: this.userType
        }
      })
        .then(res => {
          if(res.data.code){
            alert(res.data.msg)
          }else{
            alert(res.data.msg)
            this.$router.push('/login')
          }
        })
        .catch(err => {
          alert('注册有误，请重新登录')
          console.log(err, 'error')
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.moncherigift{
  width: 500px;
  margin: 150px auto 0;
  border: 1px solid #000;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.register-content-container{
  width: 400px;
  margin: 0 auto;
  border: 1px solid #000;
  border-top: none;
  padding-top: 20px;
}
.register-element{
  width: 300px;
  margin: 0 auto 20px;
  display: block;
}
.bottom-words{
  width: 300px;
  margin: 0 auto 20px;
}
.create-account{
  border: 1px solid #000;
  margin: 40px auto 150px;
  display: block;
  width: fit-content;
}
</style>
