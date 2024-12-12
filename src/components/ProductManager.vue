<template>
  <div class="about-us-content">
		<div class="product-list-container">
      <div class="product-container">
        <div class="product-picture">商品1</div>
        <el-button class="change">更改</el-button>
        <el-button>下架</el-button>
      </div>
      <div class="product-container">
        <div class="product-picture">商品1</div>
        <el-button class="change">更改</el-button>
        <el-button>下架</el-button>
      </div>
      <div class="product-container">
        <div class="product-picture">商品1</div>
        <el-button class="change">更改</el-button>
        <el-button>下架</el-button>
      </div>
    </div>
    <el-button class="products-on-shelves">上架商品</el-button>
  </div>
</template>

<script>
export default {
  name: 'ProductManager',
  data () {
    return {
    }
	},
	methods: {
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
.product-list-container{
  display: flex;
  justify-content: space-around;
}
.product-picture{
  width: 200px;
  height: 200px;
  line-height: 200px;
  text-align: center;
  border: 1px solid #000;
  margin: 30px 0;
}
.products-on-shelves{
  float: right;
  margin-top: 30px;
}
.change{
  margin-left: 20px;
}
</style>
