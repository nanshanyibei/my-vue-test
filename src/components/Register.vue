<template>
  <div class="hello">
    <div class="login-container">
      <h1 class="please-login">Welcome</h1>
      <div class="word-input">
        <span class="emial">Enter your email:</span>
        <el-input class="user-name" v-model="emailAddress" placeholder="please enter your email adress"></el-input>
      </div>
      <div class="word-input">
        <span class="emial">Full Name:</span>
        <el-input class="password" placeholder="Please enter the password" v-model="fullName" show-password></el-input>
      </div>
      <div class="word-input">
        <span class="emial">Password:</span>
        <el-input class="password" placeholder="Please enter the password" v-model="passWord" show-password></el-input>
      </div>
      <div class="word-input">
        <span class="emial">Confrim password:</span>
        <el-input class="password" placeholder="Please enter the password" v-model="rePassWord" show-password></el-input>
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
        <el-button class="login-button" plain @click="clickRegister">Sign Up</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      emailAddress:'',
      fullName:'',
      passWord:'',
      rePassWord:'',
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
    clickRegister(){
      if(this.passWord !== this.rePassWord){
        alert('You have input the different password')
      }else{
        this.$axios({
          method: "post",
          url: '/sign-up',
          data: {
            emailAddress: this.emailAddress,
            passWord: this.passWord,
            fullName:this.fullName,
            userType:this.value
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
            console.log(err, 'error')
          })
      }
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
