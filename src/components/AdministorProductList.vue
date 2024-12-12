<template>
  <div class="about-us-content">
		<div class="product-list-container">
      <div class="product-element-container" 
        v-for="(product, index) in productList" :key="index">
        <div class="product-element-top">
          <div class="product-name">商品{{product}}</div>
          <div class="product-name">ID</div>
          <div class="product-name">卖出数量</div>
        </div>
        <div class="product-element-bottom">
          <div class="user-time-shuliang-container"
            v-for="(element,index) in productList" :key="index">
            <span>{{index}}</span>.
            <span>用户</span>，
            <span>时间</span>，
            <span>数量</span>
          </div>
        </div>
      </div>
    </div>
    <div class="transition">每日商品交易记录</div>
    <div class="product-buyers-container">
      <div class="product-user-time-shuliang-container"
        v-for="(element,index) in productBuyers" :key="index">
        <span>{{index+1}}</span>.
        <span>商品ID</span>，
        <span>用户，</span>
        <span>时间，</span>
        <span>数量</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdministorProductList',
  data () {
    return {
      productList: [1,2,3],
      productBuyers: [1,2,3,4,5]
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
}
.product-list-container{
  display: flex;
  justify-content: space-around;
}
.product-element-container{
  width: 260px;
}
.product-name{
  text-align: center;
}
.product-element-top{
  border: 1px solid #000;
}
.transition{
  border: 1px solid #000;
  border-bottom: none;
  width: fit-content;
  margin-top: 200px;
  padding: 5px;
}
.product-element-bottom{
  border: 1px solid #000;
  border-top: none;
}
.product-buyers-container{
  border: 1px solid #000;
  width: 980px;
  margin-bottom: 30px;
  padding: 40px;
  text-align: center;
}
</style>
