<template>
  <div class="content">
    <div class="top-navigation-bar">
      <div class="top-navigation-bar-before">
        <el-menu :default-active="activeIndex" class="el-menu-demo position-in-center" mode="horizontal" @select="handleSelect">
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
            <el-menu-item index="5-4">Security & Refunds</el-menu-item>
            <el-menu-item index="5-5">Returns & Refunds</el-menu-item>
            <el-menu-item index="5-6">Join the Newslettery</el-menu-item>
            <el-menu-item index="5-7">Terms & Conditions</el-menu-item>
            <el-menu-item index="5-8">Deliver & Payment</el-menu-item>
            <el-menu-item index="5-9">Contact Us</el-menu-item>
          </el-submenu>
          <el-menu-item index="6">Account</el-menu-item>
          <el-menu-item index="7">Login/Register</el-menu-item>
        </el-menu>
      </div>
    </div>
    <router-view/>
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
      onFirstWord: 'wine only'
    }
  },
  methods:{
    fristWordClick(num){
    }
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
