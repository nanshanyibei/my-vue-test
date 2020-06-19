<template>
  <div class="invite-member-container">
    <i class="el-icon-user to-big" />
    <div class="new-members">new members</div>
    <div class="enter-email-container">
      <span>Enter Email</span>
      <el-input class="input-email" v-model="input"></el-input>
    </div>
    <el-button class="invite-button">Invite</el-button>
  </div>
</template>

<script>
export default {
  name: 'invite-member',
  data () {
    return {
      input:''
    }
  },
}
</script>
<style scoped>
.invite-member-container{
  margin-left: 10px;
}
.to-big{
  transform: scale(2)
}
.new-members{
  font-size: 20px;
  margin-top: 10px;
}
.enter-email-container{
  margin-top: 20px;
}
.input-email{
  width: 200px;
}
.invite-button{
  float: right;
}
</style>
