<template>
  <div class="shopping-cart-content">
		<h1 class="shopping-cart">Shopping Cart</h1>
		<div class="shipment-container">
			<div class="shipment-words">Shipment 1</div>
			<div class="picture-product-name-container">
				<div class="product-picture">商品图片</div>
				<div class="product-name-container">
					<div class="product-name">商品名称</div>
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
			</div>
			<el-button class="remove-button">Remove</el-button>
			<span class="sub-total-calcu">Sub Total $???</span>
		</div>
		<el-button @click="checkoutClick" class="checkout-button">CHECKOUT</el-button>
  </div>
</template>

<script>
export default {
  name: 'ShoppingCart',
  data () {
    return {
			productNum: [],
			productColor: [],
			productSize: 'S',
			sizeOptions: [{
				value: 'S',
        label: 'S'
			}, {
				value: 'M',
				label: 'M'
			}, {
				value: 'L',
				label: 'L'
			}]
    }
	},
	methods: {
		checkoutClick(){
			this.$router.push('checkout')
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.shopping-cart-content{
	width: 980px;
	margin: 0 auto;
}
.shopping-cart{
	margin: 30px auto;
	width: fit-content;
}
.shipment-container{
	border: 1px solid #000;
	width: 700px;
	margin: 0 auto;
}
.shipment-words{
	border-bottom: 1px solid #000;
	height: 40px;
	line-height: 40px;
	text-align: center;
}
.picture-product-name-container{
	display: flex;
	align-items: center;
}
.product-picture{
	width: 160px;
	height: 160px;
	margin: 0 30px;
	border: 1px solid #000;
}
.product-name-container{
	width: 540px;
}
.product-name{
	text-align: center;
	margin: 15px;
}
.quality-container{
	border: 1px solid #000;
	margin-bottom: 15px;
	height: 50px;
	padding-left: 20px;
	margin-right: 20px;
	line-height: 50px;
	display: flex;
	justify-content: space-around;
}
.product-select{
	margin-left: 40px;
}
.remove-button{
	margin-left: 30px;
	margin-bottom: 30px;
}
.sub-total-calcu{
	float: right;
	margin-right: 200px;
	height: 40px;
	line-height: 40px;
}
.checkout-button{
	margin: 50px auto;
	display: block; 
}
</style>
