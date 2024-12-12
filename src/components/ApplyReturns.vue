<template>
  <div class="about-us-content">
		<div class="product-container">
			<div class="image">image</div>
			<div class="name-price">
				<div class="product-name">Product Name: {{productName}}</div>
				<div class="product-name">Product Price: {{productPrice}}</div>
			</div>
		</div>
		<div class="reason-for-return">Reason for Return:</div>
		<div class="cancel-apply">
			<el-button>Cancle</el-button>
			<el-button>Apply</el-button>
		</div>
  </div>
</template>

<script>
export default {
  name: 'ApplyReturns',
  data () {
    return {
			productName: '',
			productPrice: ''
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
.product-container{
	display: flex;
	width: fit-content;
	margin: 0 auto;
	align-items: center;
}
.name-price{
	margin-left: 100px;
}
.image{
	width: 200px;
	height: 200px;
	border: 1px solid #000;
	text-align: center;
	line-height: 200px;
}
.reason-for-return{
	border: 1px solid #000;
	border-radius: 20px;
	height: 200px;
	width: 200px;
	margin: 30px auto;
	text-align: center;
	line-height: 200px;
}
.cancel-apply{
	display: flex;
	justify-content: space-around;
	margin: 50px auto;
}
</style>
