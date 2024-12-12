<template>
  <div class="about-us-content">
		<h1 class="top-checkout-words">Checkout</h1>
		<div class="delivery-style">Delivery</div>
		<div class="delivery-container">
			<div class="left-container">
				<div class="input-element">
					<label>First name</label>
					<el-input class="input-element-value" v-model="firstNameValue"></el-input>
				</div>
				<div class="input-element">
					<label>Last name</label>
					<el-input class="input-element-value" v-model="lastNameValue"></el-input>
				</div>
				<div class="input-element">
					<label>Phone</label>
					<el-input class="input-element-value" v-model="phontValue"></el-input>
				</div>
				<div class="input-element">
					<label>Delivery Address</label>
					<el-input class="input-element-value" v-model="deliveryAddress"></el-input>
				</div>
			</div>
			<div class="right-container">
				<button class="right-button">Use your saved address as shipping address</button>
			</div>
		</div>
		<div class="delivery-style no-top-border">Payment Method</div>
		<div class="delivery-container">
			<div class="left-container">
				<div class="user-new-credit-card">Use New Credit Card</div>
				<div class="input-element">
					<label>Name on Card</label>
					<el-input class="input-element-value" v-model="firstNameValue"></el-input>
				</div>
				<div class="input-element">
					<label>Credit Card Number</label>
					<el-input class="input-element-value" v-model="lastNameValue"></el-input>
				</div>
				<div class="input-element">
					<label>Expiry Date</label>
					<el-date-picker
						class="expire-date-container"
						v-model="value1"
						type="daterange"
						range-separator="to"
						start-placeholder="start date"
						end-placeholder="end date">
					</el-date-picker>
				</div>
				<div class="input-element">
					<label>CVV</label>
					<el-input class="input-element-value" v-model="deliveryAddress" placeholder="e.g 333 or 431"></el-input>
				</div>
			</div>
			<div class="right-container">
				<el-button class="right-button-credit">Use your saved card</el-button>
			</div>
		</div>
		<div class="delivery-style no-top-border">ORDER CONFIMATION</div>
		<div class="delivery-container">
			<div class="left-container-cart">
				Cart Items
			</div>
			<div class="right-container-cart">
				<el-table
					:data="tableData"
					style="width: 870px">
					<el-table-column
						prop="QYR"
						label="QYT"
						width="180">
					</el-table-column>
					<el-table-column
						prop="color"
						label="color"
						width="180">
					</el-table-column>
					<el-table-column
						prop="size"
						label="size"
						width="180">
					</el-table-column>
					<el-table-column
						prop="productName"
						label="商品名称"
						width="180">
					</el-table-column>
					<el-table-column
						prop="productMoney"
						label="$ ???">
					</el-table-column>
				</el-table>
			</div>
		</div>
		<el-button class="submit-button">SUBMIT ORDER NOW</el-button>
  </div>
</template>

<script>
export default {
  name: 'AboutUs',
  data () {
    return {
			firstNameValue: '',
			lastNameValue: '',
			deliveryAddress: '',
			phontValue: '',
			cardName: '',
			cardNumber: '',
			expiryDate: '',
			cVV: '',
			startTime: '',
			endTime: '',
			tableData: []
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
.top-checkout-words{
	text-align: center;
	margin: 30px;
}
.delivery-style{
	font-size: 20px;
	border: 1px solid #000;
	height: 40px;
	line-height: 40px;
	text-align: center;
}
.delivery-container{
	display: flex;
	align-items: center;
	border: 1px solid #000;
	border-top: none;
}
.left-container{
	width: 600px;
}
.input-element{
	display: flex;
	margin: 10px 0
}
.input-element label{
	width: 200px;
	height: 40px;
	line-height: 40px;
	text-align: right;
	margin-right: 30px
}
.input-element-value{
	width: 360px;
}
.right-button{
	width: 200px;
	border-radius: 5px;
	background: #ffffff;
	height: 60px;
	font-size: 16px;
	border: 1px solid #DCDFE6;
	color: #606366;
	margin-left: 40px;
}
.expire-date-container{
	width: 360px;
}
.user-new-credit-card{
	margin: 10px 0 10px 40px;
}
.right-button-credit{
	margin-left: 40px;
}
.no-top-border{
	border-top: none;
}
.left-container-cart{
	width: 110px;
	padding: 20px;
	padding-left: 10px;
}
.submit-button{
	margin: 80px auto 50px;
	display: block;
}
</style>
