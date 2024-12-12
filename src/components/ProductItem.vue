<template>
  <div class="about-us-content">
		<div class="picture-container">
			<el-carousel height="150px">
				<el-carousel-item v-for="item in 5" :key="item">
				</el-carousel-item>
			</el-carousel>
		</div>
		<div class="product-name-price">
			<div class="product-name">商品名称</div>
			<div class="product-price">商品价格</div>
		</div>
		<div v-if="isManager" class="manager-edit-area">
			管理员编写区域
		</div>
		<div v-else class="manager-edit-area">
			商品详细信息
		</div>
		<div class="quality-color-size-container">
			<div class="quality-container">
					<div>Quality</div>
					<div class="product-select">
						<el-select v-model="productNum" placeholder="商品下拉框">
							<el-option
								v-for="item in numOptions"
								:key="item.value"
								:label="item.label"
								:value="item.value">
							</el-option>
						</el-select>
					</div>
				</div>
				<div class="quality-container">
					<div>Color</div>
					<div class="product-select">
						<el-select v-model="productColor" placeholder="颜色选择下拉框">
							<el-option
								v-for="item in colorOptions"
								:key="item.value"
								:label="item.label"
								:value="item.value">
							</el-option>
						</el-select>
					</div>
				</div>
				<div class="quality-container">
					<div>Size</div>
					<div class="product-select">
						<el-select v-model="productSize" placeholder="大小尺码下拉框">
							<el-option
								v-for="item in sizeOptions"
								:key="item.value"
								:label="item.label"
								:value="item.value">
							</el-option>
						</el-select>
					</div>
				</div>
		</div>
		<div class="cart-buy-now-container">
			<el-button @click="addToCart">ADD TO CART</el-button>
			<el-button @click="buyNow">BUY NOW</el-button>
		</div>
  </div>
</template>

<script>
export default {
	name: 'ProductItem',
	props: {
		isManager: {
			type: Boolean,
			default: false
		}
	},
  data () {
    return {
			
    }
	},
	methods: {
		addToCart(){
			this.$router.push('/shopping-cart')
		},
		buyNow(){
			this.$router.push('/checkout')
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
.el-carousel__item h3 {
  color: #475669;
	font-size: 14px;
	opacity: 0.75;
	line-height: 150px;
	margin: 0;
}
.el-carousel__item:nth-child(2n) {
	background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n+1) {
	background-color: #d3dce6;
}
.product-name-price{
	display: flex;
	margin: 30px auto;
}
.product-name{
	width: 800px;
	text-align: center;
}
.manager-edit-area{
	height: 200px;
	border: 1px solid #000;
	padding: 10px;
}
.quality-color-size-container{
	display: flex;
}
.quality-container{
	border: 1px solid #000;
	height: 50px;
	line-height: 50px;
	display: flex;
	justify-content: space-around;
	margin: 30px 20px;
	padding: 2px 5px;
}
.quality-container div{
	margin: 0 5px;
}
.cart-buy-now-container{
	display: flex;
	justify-content: space-around;
	margin-bottom: 50px;
}
</style>
