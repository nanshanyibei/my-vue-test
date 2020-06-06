<template>
  <div class="hello">
    <h1 class="good-task">A good task roster system</h1>
		<div class="container">
			<div class="login-sign-up">
				<span class="login-button" @click="clickLogin">Login</span>
        /
        <span class="login-button" @click="clickSignUp">Sign Up</span>
			</div>
			<div class="right-words">
				we are a task roster system company dedicated to provided the best service for our user
			</div>
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
    clickLogin(){
      this.$router.push('/login')
    },
    clickSignUp(){
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
	margin-bottom: 50px;
}
.good-task{
  margin-top: 30px;
	text-align: center
}
.container{
	display: flex;
}
.login-sign-up{
	height: 300px;
	width: 400px;
	border: 1px solid #2c3e50;
	margin-top: 50px;
	text-align: center;
	line-height: 300px;
	margin-left: 150px;
}
.login-button{
  cursor: pointer;
}
.right-words{
	width: 250px;
	margin-left: 100px;
	margin-top: 150px;
}
</style>
