<template>
  <div class="about-us-content">
		<div class="table-button-container">
			<el-table
				:data="unprocessedRefund"
				stripe
				style="width: 400px">
				<el-table-column
					prop="index"
					label="未处理的退款">
				</el-table-column>
			</el-table>
			<el-button class="to-see-button">查看</el-button>
		</div>
		<div class="table-button-container">
			<el-table
				:data="processedRefund"
				stripe
				style="width: 500px">
				<el-table-column
					prop="index"
					label="已处理的退款">
				</el-table-column>
				<el-table-column
					prop="status"
					label="状态">
				</el-table-column>
			</el-table>
			<el-button class="to-see-button">查看</el-button>
		</div>
  </div>
</template>

<script>
export default {
  name: 'RefundPage',
  data () {
    return {
			unprocessedRefund: [
				{index: '1.要求退款订单号xxxx'},
				{index: '2.要求退款订单号xxxx'},
				{index: '3.要求退款订单号xxxx'}
			],
			processedRefund:[
				{index: '1.要求退款订单号xxxx', status: '同意'},
				{index: '2.要求退款订单号xxxx', status: '同意'},
				{index: '3.要求退款订单号xxxx', status: '拒绝'}
			]
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
.unprocessed-refund{
	border: 1px solid #000;
	width: fit-content;
	padding: 5px 10px;
}
.table-button-container{
	position: relative;
	margin-top: 50px;
}
.to-see-button{
	position: absolute;
	top: 30px;
	right: 30px;
}
.refounf-order{
	border: 1px solid #000;
	border-top: none;
}
</style>
