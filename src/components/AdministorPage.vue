<template>
  <div class="about-us-content">
		<div class="comment-product-transaction-container">
      <el-button class="comment" @click="commentManager">评论管理页</el-button>
      <el-button class="comment" @click="productManager">商品管理页</el-button>
    </div>
    <div class="comment-product-transaction-container">
      <el-button class="comment" @click="transactionRecord">交易记录</el-button>
      <el-button class="comment" @click="userManager">用户管理</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdministorPage',
  data () {
    return {
    }
	},
	methods: {
    commentManager(){
      this.$router.push('/comment-manager')
    },
    productManager(){
      this.$router.push('/product-manager')
    },
    transactionRecord(){
      this.$router.push('/transaction-record')
    },
    userManager(){
      this.$router.push('/user-manager')
    }
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about-us-content{
  margin: 30px auto;
  width: 980px;
}
.comment-product-transaction-container{
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
}
</style>
