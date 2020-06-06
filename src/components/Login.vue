<template>
  <div class="hello">
    <div class="login-container">
      <h1 class="please-login">Log In</h1>
      <div class="word-input">
        <span class="emial">Email:</span>
        <el-input class="user-name" v-model="userName" placeholder="please enter your email adress"></el-input>
      </div>
      <div class="word-input">
        <span class="emial">Password:</span>
        <el-input class="password" placeholder="Please enter the password" v-model="passWord" show-password></el-input>
      </div>
      <div class="select-area">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-button class="login-button" plain @click="clickLogin">Log In</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      userName:'',
      passWord:'',
      options: [{
          value: 'employee',
          label: 'employee'
        }, {
          value: 'manager',
          label: 'manager'
        }],
      value: 'employee'
    }
  },
  methods:{
    clickLogin(){
      console.log('userName,passWord',this.userName,this.passWord)
      this.$axios({
				method: "post",
				url: '/login',
				data: {
          emailAddress: this.userName,
          passWord: this.passWord,
          userType:this.value
				}
			})
				.then(res => {
          if(res.data.code){
            alert(res.data.msg)
            this.value = 'true'
          }else{
            console.log(res.data.data)
            this.login=false
            this.courseList=res.data.data.course
            this._id=res.data.data._id
          }
				})
				.catch(err => {
					console.log(err, 'error')
				})
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
  width: 500px;
}
.please-login{
  margin-bottom: 30px;
  text-align: center
}
.password{
  margin-bottom: 30px;
  margin-left: 20px;
}
.user-name{
  margin-bottom: 15px;
  margin-left: 50px
}
.word-input{
  display: flex
}
.emial{
  line-height: 45px;
  font-size: 18px;
}
.select-area{
  display: flex;
  justify-content: space-between;
  margin: 30px 0 50px;
}
.register-button{
  position: absolute;
  right: 0;
}
</style>
