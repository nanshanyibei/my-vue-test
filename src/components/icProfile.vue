<template>
  <div class="ic-proflie-container">
    <div class="left-container">
      <div>My Profile</div>
      <div>Working Status</div>
      <div>Password</div>
      <div>Teams</div>
      <div>Log out</div>
    </div>
    <div>
    <div class="right-container">
      <div class="my-profile">My Profile</div>
      <div class="my-profile-container">
        <div class="element-container">
          <div>Email:</div>
          <div class="email-right"></div>
        </div>
        <div class="element-container">
          <div>Phone:</div>
          <div class="email-right"></div>
        </div>
        <div class="element-container">
          <div>Location:</div>
          <div class="email-right"></div>
        </div>
        <div class="element-container">
          <div>Personal Profile:</div>
          <div class="email-right"></div>
        </div>
      </div>
    </div>
    <div class="right-container">
      <div class="my-profile">Working Status</div>
      <div class="my-profile-container">
        <div class="choose-one">Choose One<i class="el-icon-arrow-down to-big" /></div>
        <div class="working-time">Working time</div>
        <div class="working-time">Family time</div>
        <div class="working-time">Holiday time</div>
        <div class="working-time">Break time</div>
      </div>
    </div>
    <div class="right-container">
      <div class="my-profile">Teams</div>
      <div class="my-profile-container">
        <div class="teams-news">Teams + News</div>
        <div class="zhaoqing">zhaoqing</div>
        <div class="zhaoqing"></div>
      </div>
    </div>
    <div class="right-container">
      <div class="my-profile">Password</div>
      <div class="my-profile-container">
        <div class="element-container">
          <div>Old Password:</div>
          <div class="email-right"></div>
        </div>
        <div class="element-container">
          <div>new Password:</div>
          <div class="email-right"></div>
        </div>
        <div class="element-container">
          <div>Confirm Password:</div>
          <div class="email-right"></div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ic-profile',
  data () {
    return {
      test:''
    }
  },
}
</script>
<style scoped>
.ic-proflie-container{
  width: 880px;
  margin: 10px auto;
  display: flex
}
.left-container{
  margin-top: 30px;
  border: 1px solid #000;
  width: 160px;
  font-size: 18px;
  height: fit-content
}
.left-container div{
  height: 80px;
  line-height: 80px;
  padding-left: 10px;
}
.right-container{
  margin-left: 120px;
}
.my-profile{
  font-size: 18px;
  color: red;
  margin: 10px 0;
}
.my-profile-container{
  border: 1px solid #000;
  padding: 10px;
}
.element-container div{
  display: inline-block;
  margin-top: 10px;
  line-height: 20px;
}
.email-right{
  height: 20px;
  width: 200px;
  border: 1px solid #000;
}
.choose-one{
  border: 1px solid #000;
  padding: 5px;
  width: fit-content;
  margin-bottom: 16px;
}
.to-big{
  transform: scale(1.5);
  margin-left: 30px;
  margin-right: 10px;
}
.working-time{
  width: 300px;
  text-align: right;
  padding-right: 6px;
  margin-top: 5px;
}
.teams-news{
  font-size: 20px;
}
.zhaoqing{
  height: 30px;
  line-height: 30px;
  border: 1px solid #000;
  border-radius: 16px;
  padding-left: 10px;
  margin-top: 10px;
}
</style>
