<template>
  <div class="about-us-content">
		<div class="bank-card-element-container">
			<el-table
				:data="tableData"
				style="width: 100%"
				@>
				<el-table-column
					label="productName"
					width="250">
					<template slot-scope="scope">
						<span>{{ scope.row.productName }}</span>
					</template>
				</el-table-column>
				<el-table-column
					label="OrderDate"
					width="350">
					<template slot-scope="scope">
						<span>{{ scope.row.orderDate }}</span>
					</template>
				</el-table-column>
				<el-table-column
					label="Price"
					width="200">
					<template slot-scope="scope">
						<span>{{ scope.row.price }}</span>
					</template>
				</el-table-column>
				<el-table-column label="Status">
					<template slot-scope="scope">
						<el-button
							size="mini"
							@click="handleApply(scope.$index, scope.row)">Apply</el-button>
					</template>
				</el-table-column>
			</el-table>
		</div>
		<div class="bank-card-element-container">
			<el-table
				:data="tableDataNext"
				style="width: 100%"
				@>
				<el-table-column
					label="productName"
					width="250">
					<template slot-scope="scope">
						<span>{{ scope.row.productName }}</span>
					</template>
				</el-table-column>
				<el-table-column
					label="OrderDate"
					width="350">
					<template slot-scope="scope">
						<span>{{ scope.row.orderDate }}</span>
					</template>
				</el-table-column>
				<el-table-column
					label="Price"
					width="200">
					<template slot-scope="scope">
						<span>{{ scope.row.price }}</span>
					</template>
				</el-table-column>
				<el-table-column label="Status">
					<template slot-scope="scope">
						<span>{{scope.row.status}}</span>
					</template>
				</el-table-column>
			</el-table>
		</div>
	</div>
</template>

<script>
export default {
  name: 'EditMyBankCard',
  data () {
    return {
			tableData: [{
					productName: '2016-05-02',
					orderDate: false,
					price: '20'
        }, {
					productName: '2016-05-02',
					orderDate: false,
					price: '20'
        }, {
					productName: '2016-05-02',
					orderDate: false,
					price: '20'
        }, {
					productName: '2016-05-02',
					orderDate: false,
					price: '20'
				}],
			tableDataNext: [{
					productName: '2016-05-02',
					orderDate: false,
					price: '20',
					status: 'approved'
        }, {
					productName: '2016-05-02',
					orderDate: false,
					price: '20',
					status: 'approved'
        }, {
					productName: '2016-05-02',
					orderDate: false,
					price: '20',
					status: 'approved'
        }, {
					productName: '2016-05-02',
					orderDate: false,
					price: '20',
					status: 'approved'
        }]
    }
	},
	methods: {
		handleApply(index, row) {
			this.$router.push('/apply-returns')
		},
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about-us-content{
  margin: 30px auto;
  width: 980px;
	padding-bottom: 50px;
	position: relative;
}
.top-navigation-container{
  margin-top: 40px;
  display: flex;
  justify-content: space-around;
}
.top-navigation-container div{
  width: fit-content;
  padding: 20px;
  border: 1px solid #000;
  cursor: pointer;
}
.contact-us{
  margin: 30px auto;
  width: fit-content;
}
.learn-more{
  margin: 30px auto;
  display: block;
}
.bank-card-element-container{
	margin-bottom: 50px;
	border: 1px solid #000;
}
</style>
