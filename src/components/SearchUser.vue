<template>
  <div class="about-us-content">
		<div class="">
			<el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
				<el-button slot="append" icon="el-icon-search"></el-button>
			</el-input>
		</div>
		<div class="user-container">
			<div class="user-name-id-container">
				<span class="user-name" style="border-left: none">用户名：{{userMessage.name}}</span>
				<span>用户ID：{{userMessage.id}}</span>
				<span>创建日期：{{userMessage.created}}</span>
				<span>消费金额：{{userMessage.buyMoney}}</span>
			</div>
		</div>
		<div class="refount-list-container">
			<div class="refount">退款记录</div>
			<el-table
				:data="refoundList"
				style="width: 100%">
				<el-table-column
					prop="product"
					label="商品名称"
					width="180">
				</el-table-column>
				<el-table-column
					prop="time"
					label="日期"
					width="180">
				</el-table-column>
				<el-table-column
					prop="shuliang"
					label="数量"
					width="180">
				</el-table-column>
				<el-table-column
					prop="reason"
					label="原因">
				</el-table-column>
			</el-table>
		</div>
		<div class="refount-list-container">
			<div class="refount">评论记录</div>
			<el-table
				:data="refoundList"
				style="width: 100%">
				<el-table-column
					prop="product"
					label="商品名称"
					width="180">
				</el-table-column>
				<el-table-column
					prop="time"
					label="日期"
					width="180">
				</el-table-column>
				<el-table-column
					prop="shuliang"
					label="数量"
					width="180">
				</el-table-column>
				<el-table-column
					prop="reason"
					label="评论">
				</el-table-column>
			</el-table>
		</div>
		<div class="refount-list-container">
			<div class="refount">消费记录</div>
			<el-table
				:data="refoundList"
				style="width: 100%">
				<el-table-column
					prop="product"
					label="商品名称"
					width="180">
				</el-table-column>
				<el-table-column
					prop="time"
					label="日期"
					width="180">
				</el-table-column>
				<el-table-column
					prop="shuliang"
					label="数量">
				</el-table-column>
			</el-table>
		</div>
  </div>
</template>

<script>
export default {
  name: 'SearchUser',
  data () {
    return {
			userMessage: {
				name: 'name',
				id: 'id-1',
				created: '12-12',
				buyMoney: 1234
			},
			refoundList: [
				{product: '商品1', time: '20200120', shuliang: 2, reason: '不合适'},
				{product: '商品2', time: '20200223', shuliang: 1, reason: '不合适'},
				{product: '商品3', time: '20200120', shuliang: 2, reason: '不合适'},
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
.user-name-id-container{
	border: 1px solid #000;
	margin-top: 50px;
	width: fit-content;
}
.user-name-id-container span{
	border-left: 1px solid #000;
	padding: 0 10px;
	height: 20px;
	line-height: 20px;
	display: inline-block;
	text-align: center;
}
.refount-list-container{
	margin-top: 100px;
}
.refount{
	margin-bottom: 10px;
}
</style>
