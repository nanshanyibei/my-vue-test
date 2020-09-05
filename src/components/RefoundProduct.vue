<template>
  <div class="about-us-content">
		<el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="orderId"
        label="订单号"
        width="80">
      </el-table-column>
      <el-table-column
        prop="refoundReason"
        label="退款原因"
        width="180">
      </el-table-column>
			<el-table-column
        prop="shuliang"
        label="退款数量"
        width="80">
      </el-table-column>
			<el-table-column
        prop="money"
        label="退款金额"
        width="180">
      </el-table-column>
      <el-table-column
        prop="status"
        label="退款状态"
				width="180">
      </el-table-column>
			<el-table-column
        prop="isOK"
        label="是否批准">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'RefoundProduct',
  data () {
    return {
			tableData: [
				{orderId: '123', refoundReason: '不喜欢', 'shuliang': 1, money: 40, status: '已处理', isOK: '同意'},
				{orderId: '231', refoundReason: '不喜欢', 'shuliang': 1, money: 40, status: '已处理', isOK: '同意'},
				{orderId: '543', refoundReason: '不喜欢', 'shuliang': 1, money: 40, status: '已处理', isOK: '同意'}
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
.top-navigation-container{
  margin-top: 40px;
  display: flex;
  justify-content: space-around;
}
</style>
