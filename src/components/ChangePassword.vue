<template>
  <div class="about-us-content">
		<div class="password-new-container">
			<el-input class="new-password" show-password placeholder="new password" v-model="password"/>
			<el-input placeholder="repeat new password" show-password v-model="newPassword"/>
		</div>
		<el-button class="done-button" @click="clickDone">Done</el-button>
  </div>
</template>

<script>
export default {
  name: 'ChangePassword',
  data () {
    return {
			password: '',
			newPassword: ''
    }
	},
	methods: {
		clickDone(){
			if(this.password !== this.newPassword) {
				alert('两次输入密码不同，请重新输入')
				this.password=''
				this.newPassword=''
			}else{
				alert('更改成功')
				this.$router.push('/')
			}
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about-us-content{
  margin: 30px auto;
  width: 980px;
	padding-bottom: 80px;
}
.password-new-container{
	padding: 20px;
	width: 400px;
	border: 1px solid #000;
	margin: 0 auto;
}
.new-password{
	margin-bottom: 20px;
}
.done-button{
	float: right;
	margin-top: 20px;
}
</style>
