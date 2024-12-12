<template>
  <div class="about-us-content">
		<div class="product-pictures-id-container">
			<div class="product-name">{{productName}}</div>
			<div class="product-picture">Picture</div>
		</div>
		<div class="comments-counts">评论总数：{{commentCount}}</div>
		<el-table
				:data="tableData"
				style="width: 100%"
				@>
				<el-table-column
					label="Comment"
					width="550">
					<template slot-scope="scope">
						<span style="margin-left: 10px">{{ scope.row.comment }}</span>
					</template>
				</el-table-column>
				<el-table-column width="100" label="AddApply">
					<template slot-scope="scope">
						<el-button
							size="mini"
							@click="AddApply(scope.$index, scope.row)">添加回复</el-button>
					</template>
				</el-table-column>
				<el-table-column width="100" label="Delete">
					<template slot-scope="scope">
						<el-button
							size="mini"
							@click="handleDelete(scope.$index, scope.row)">删除评论</el-button>
					</template>
				</el-table-column>
				<el-table-column width="100" label="NoSpeck">
					<template slot-scope="scope">
						<el-button
							size="mini"
							@click="noSpeck(scope.$index, scope.row)">禁言用户</el-button>
					</template>
				</el-table-column>
				<el-table-column label="SpeckAgain">
					<template slot-scope="scope">
						<el-button
							size="mini"
							@click="speckAgain(scope.$index, scope.row)">删除用户禁言</el-button>
					</template>
				</el-table-column>
			</el-table>
  </div>
</template>

<script>
export default {
  name: 'CommentManager',
  data () {
    return {
			productName: 'Product1',
			commentCount: 100,
			tableData: [{
				comment: '上海市普陀区金沙江路 1518 弄'
			}, {
				comment: '上海市普陀区金沙江路 1517 弄'
			}, {
				comment: '上海市普陀区金沙江路 1519 弄'
			}, {
				comment: '上海市普陀区金沙江路 1516 弄'
			}]
    }
	},
	methods: {
		AddApply(){

		},
		handleDelete(){

		},
		noSpeck(){

		},
		speckAgain(){

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
.product-name{
	width: fit-content;
	margin: 30px auto 10px;
}
.product-picture{
	width: 200px;
	height: 200px;
	border: 1px solid #000;
	margin: 0 auto 30px;
	line-height: 200px;
	text-align: center;
}
.comments-counts{
	margin: 50px auto;
	width: fit-content;
}
</style>
