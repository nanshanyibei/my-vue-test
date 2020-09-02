<template>
  <div class="content">
    <div class="top-navigation-bar">
      <div v-if="!threeNavigation" class="top-navigation-bar-before">
        <el-menu class="el-menu-demo position-in-center" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">Home</el-menu-item>
          <el-submenu index="2">
            <template slot="title">GIFTS FOR HER</template>
            <el-menu-item index="2-1">Fashion</el-menu-item>
            <el-menu-item index="2-2">Beauty</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">GIFTS FOR HIM</template>
            <el-menu-item index="3-1">Fashion</el-menu-item>
            <el-menu-item index="3-2">Beauty</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">GIFTS FOR US</template>
            <el-menu-item index="4-1">Matching Sets</el-menu-item>
            <el-menu-item index="4-2">Gourmet Hamners</el-menu-item>
            <el-menu-item index="4-3">Hotel Packages</el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">CUSTOMER SERVICE</template>
            <el-menu-item index="5-1">About Us</el-menu-item>
            <el-menu-item index="5-2">FA Questions</el-menu-item>
            <el-menu-item index="5-3">Blog</el-menu-item>
            <el-menu-item index="5-4">Security & Privacy</el-menu-item>
            <el-menu-item index="5-5">Returns & Refunds</el-menu-item>
            <el-menu-item index="5-6">Join the Newslettery</el-menu-item>
            <el-menu-item index="5-7">Terms & Conditions</el-menu-item>
            <el-menu-item index="5-8">Deliver & Payment</el-menu-item>
            <el-menu-item index="5-9">Contact Us</el-menu-item>
          </el-submenu>
          <el-menu-item index="6">Account</el-menu-item>
          <el-menu-item index="7">
            <router-link class="no-underline" v-if="isRegister" to="/register">Register</router-link> / 
            <router-link class="no-underline" v-if="isRegister" to="/login">Login</router-link>
            <span class="no-underline" @click="toPersonalPage" >TEST{{userName}}</span>
          </el-menu-item>
        </el-menu>
      </div>
      <div v-else class="top-navigation-bar-before">
        <div class="navigation-container">
          <span class="navigation-container-home" @click="toHomeClick">Home</span>
          <span class="navigation-container-center">{{dynamicRoute}}</span>
          <span class="navigation-container-logout" @click="toLogout">Logout</span>
        </div>
      </div>
    </div>
    <router-view />
    <div class="footer-navigation">
      <div class="footer-navigation-top">E-BOOKS/LINKS</div>
      <div class="footer-navigation-center">Follow us on Social Media:
        <span>Facebook</span> /
        <span>Instagram</span> /
        <span>Twitter</span> /
        <span>Linkedln</span> /
        <span>YouTube</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      isRegister: true,
      userName: '',
      threeNavigation: false,
      dynamicRoute: ''
    }
  },
  methods:{
    getPathChangeStatus() {
      if (this.$route.path === '/login') {
        this.isRegister = true
      }
    },
    toPersonalPage() {
      this.threeNavigation=true
      this.dynamicRoute = 'My Account'
      this.$router.push({ path: '/my-account',  query: { userId: this.userName }})  
    },
    handleRoute() {

    },
    toLogout() {

    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.threeNavigation = false
      if(keyPath[0] === '1') {
        this.$router.push({path:'/'})
      } else if(keyPath[0] === '2') {
        this.$router.push({path:'/gift-page', query:{giftType: 'her'}})
      } else if(keyPath[0] === '3') {
        this.$router.push({path:'/gift-page', query:{giftType: 'him'}})
      } else if (keyPath[0] === '4') {
        this.$router.push({path:'/gift-page', query:{giftType: 'us'}})
      } else if(keyPath[1] === '5-1'){
        this.$router.push({path:'/about-us'})
        this.dynamicRoute = 'About Us'
        this.threeNavigation = true
      } else if(keyPath[1] === '5-2') {
        this.$router.push({path:'/f-a-question'})
        this.threeNavigation = true
        this.dynamicRoute='FA Questions'
      } else if(keyPath[1] === '5-4') {
        this.$router.push({path:'/security-privacy'})
        this.threeNavigation = true
        this.dynamicRoute='Security & Privacy'
      } else if(keyPath[1] === '5-5') {
        this.$router.push('/return-orders')
        this.threeNavigation=true
        this.dynamicRoute='Returns & Refunds'
      } else if(keyPath[1] === '5-8') {
        this.$router.push('/checkout')
        this.threeNavigation=false
      }
    },
    toHomeClick() {
      this.$router.push({path:'/'})
      this.threeNavigation=false
    }
  },
  watch:{
    '$route':'getPathChangeStatus'
  }
}
</script>

<style scoped>
.top-navigation-bar-before::before{
  display: block;
  content: 'MON CHERI GIFTS';
  border-bottom: 1px solid #000;
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 16px;
}
.top-navigation-bar{
  border-bottom: 1px solid #000;
}
.no-underline{
  text-decoration: none;
}
.navigation-container{
  height: 60px;
  line-height: 60px;
  width: 980px;
  margin: 0 auto;
  color: #909399;
  cursor: pointer;
}
.navigation-container-home{
  border-right: 1px solid #000;
  width: 200px;
  text-align: left;
  display: inline-block;
  color: #909399;
  text-decoration: none;
}
.navigation-container-logout{
  width: 200px;
  text-align: right;
  display: inline-block;
  float: right;
  border-left: 1px solid #000;
}
.navigation-container-center{
  width: 570px;
  text-align: center;
  display: inline-block;
}
.position-in-center{
  width: fit-content;
  margin: 0 auto;
  border: none;
}
.footer-navigation{
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  font-size: 16px;
}
.footer-navigation-center{
  text-decoration: underline;
  width: fit-content;
  margin: 0 auto 15px;
}
.footer-navigation-center span{
  cursor: pointer;
}
.footer-navigation-top{
  width: fit-content;
  margin: 5px auto 15px;
}
</style>
