<template>
  <div class="register-content">
    <div class="moncherigift">Moncherigift</div>
    <div class="register-content-container">
      <el-input v-model="emailAddress" class="register-element" placeholder="User Account" />
      <el-input v-model="password" class="register-element" placeholder="User Password" />
    </div>
		<div class="trouble-loggin-terms-of">
			<el-button>Trouble loggin in ?</el-button>
			<el-button>Terms of use</el-button>
		</div>
		<div class="register-login-container">
			<el-button @click="toRegister">Register</el-button>
			<el-button @click="toLogin">Login</el-button>
		</div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      emailAddress: '',
      password: '',
    }
	},
	methods: {
		toRegister() {
			this.$router.push('/register')
    },
    toLogin() {
      this.$axios({
        method: "post",
        url: '/login',
        data: {
          emailAddress: this.emailAddress,
          password: this.password,
          userType: 'employee'
        }
      })
        .then(res => {
          if(res.data.code){
            alert(res.data.msg)
          }else{
            alert('You have successfully logged in')
            this.$router.push({ path: 'personal-page',  params: { userId: this.userAccount }}) 
          }
        })
        .catch(err => {
          alert('登录有误，请重新登录')
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
.trouble-loggin-terms-of{
	width: fit-content;
	margin: 60px auto 0;
}
.register-login-container{
	width: fit-content;
	margin: 60px auto 150px;
}
</style>
