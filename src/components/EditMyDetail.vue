
<template>
  <div class="about-us-content">
		<div class="photo-address-container">
			<div class="left-image">
				<div class="my-photo">My Photo</div>
				<el-button class="update-photo">Update new photo</el-button>
			</div>
			<div class="right-container">
				<el-input v-model="name" placeholder="name" class="input-element"></el-input>
				<el-input v-model="phone" placeholder="phone" class="input-element"></el-input>
			</div>
		</div>
		<div class="change-password-done">
			<el-button @click="changePassword">Change Password</el-button>
			<el-button @click="changePersonalMessage">Done</el-button>
		</div>
  </div>
</template>

<script>
export default {
  name: 'MyAccount',
  data () {
    return {
			radio: 0,
			name: '',
			phone: ''
    }
	},
	methods: {
		changePassword(){
			this.$router.push('/change-password')
		},
		changePersonalMessage(){
			this.$axios({
        method: "post",
        url: '/update-personal-message',
        data: {
          emailAddress: this.$route.query.emailAddress,
					userName: this.name,
					phoneNo: this.phone
        }
      })
        .then(res => {
          if(res.data.code){
            alert(res.data.msg)
          }else{
            alert('You have successfully update your message')
          }
        })
        .catch(err => {
          alert('更新有误，请重新更新')
          console.log(err, 'error')
        })
		}
	},
	mounted(){
		console.log('this.$router', this.$route)
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about-us-content{
  margin: 30px auto;
  width: 980px;
}
.photo-address-container{
	display: flex;
}
.left-image{
	width: 300px;
}
.my-photo{
	width: 200px;
	height: 200px;
	border-radius: 100px;
	border: 1px solid #000;
	text-align: center;
	line-height: 200px;
	margin: 0 auto;
}
.update-photo{
	margin: 30px auto;
	display: block;
}
.right-container{
	width: 660px;
	padding-top: 50px;
}
.input-element{
	margin: 10px auto;
	display: block;
	width: 500px;
}
.change-password-done{
	display: flex;
	justify-content: space-around;
	margin-top: 60px;
}
.label-radio{
	display: flex;
}
.input-gender{
	margin-right: 20px;
	line-height: 34px;
}
</style>
