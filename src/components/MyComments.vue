<template>
  <div class="about-us-content">
		<div class="bank-card-element-container">
			<el-table
				:data="tableData"
				style="width: 100%">
				<el-table-column
					label="Product Name"
					width="280">
					<template slot-scope="scope">
						<span style="margin-left: 10px">{{ scope.row.productName }}</span>
					</template>
				</el-table-column>
				<el-table-column
					label="Comments"
					width="600">
					<template slot-scope="scope">
						<span style="margin-left: 10px">{{ scope.row.comments }}</span>
					</template>
				</el-table-column>
				<el-table-column label="Delete">
					<template slot-scope="scope">
						<el-button
							size="mini"
							type="danger"
							@click="handleDelete(scope.$index, scope.row)">Delete</el-button>
					</template>
				</el-table-column>
			</el-table>
		</div>
		<div class="preview-next-page">
			<el-button>Preview page</el-button>
			<el-button>Next page</el-button>
		</div>
  </div>
</template>

<script>
export default {
  name: 'MyComments',
  data () {
    return {
			tableData: [{
					productName: '2016-05-02',
					comments: 'false'
        }, {
					productName: '2016-05-04',
					comments: 'false'
        }, {
					productName: '2016-05-01',
					comments: 'false'
        }]
    }
	},
	methods: {
		handleDelete(index, row) {
			this.tableData.splice(index, 1);
		}
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
.bank-card-element-container{
	margin: 50px auto;
	border: 1px solid #000;
	padding: 20px 5px;
}
.preview-next-page{
	margin: 30px;
	display: flex;
	justify-content: space-around;
}
</style>
