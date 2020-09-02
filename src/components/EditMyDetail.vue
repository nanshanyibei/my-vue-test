
<template>
  <div class="about-us-content">
		<div class="photo-address-container">
			<div class="left-image">
				<div class="my-photo">My Photo</div>
				<el-button class="update-photo">Update new photo</el-button>
			</div>
			<div class="right-container">
				<el-input v-model="name" placeholder="name" class="input-element"></el-input>
				<el-input v-model="city" placeholder="city" class="input-element"></el-input>
				<div class="input-element label-radio">
					<label class="input-gender">Gender:</label>
					<el-radio-group v-model="radio" class="input-element">
						<el-radio :label="0">Male</el-radio>
						<el-radio :label="1">Female</el-radio>
					</el-radio-group>
				</div>
				<el-input v-model="email" placeholder="email" class="input-element"></el-input>
				<el-input v-model="phone" placeholder="phone" class="input-element"></el-input>
			</div>
		</div>
		
		<div class="change-password-done">
			<el-button @click="changePassword">Change Password</el-button>
			<el-button>Done</el-button>
		</div>
  </div>
</template>

<script>
export default {
  name: 'MyAccount',
  data () {
    return {
			radio: 0
    }
	},
	methods: {
		changePassword(){
			this.$router.push('/change-password')
		}
	},
	mounted(){

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
