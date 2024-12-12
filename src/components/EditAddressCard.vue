<template>
  <div class="about-us-content">
		<div class="bank-card-element-container">
			<el-table
				:data="tableData"
				style="width: 100%"
				@>
				<el-table-column
					label="Address"
					width="780">
					<template slot-scope="scope">
						<el-input v-if="scope.row.isEdit" v-model="scope.row.address" />
						<span v-else style="margin-left: 10px">{{ scope.row.address }}</span>
					</template>
				</el-table-column>
				<el-table-column label="Edit">
					<template slot-scope="scope">
						<el-button
							v-if="scope.row.isEdit"
							size="mini"
							@click="handleSave(scope.$index, scope.row)">Save</el-button>
						<el-button
							v-else
							size="mini"
							@click="handleEdit(scope.$index, scope.row)">Edit</el-button>
						<el-button
							size="mini"
							type="danger"
							@click="handleDelete(scope.$index, scope.row)">Delete</el-button>
					</template>
				</el-table-column>
			</el-table>
		</div>
		<el-button class="add-new-element-button" @click="addNewElement">Add New</el-button>
  </div>
</template>

<script>
export default {
  name: 'EditAddressCard',
  data () {
    return {
			tableData: [{
					address: '2016-05-02',
					isEdit: false
        }, {
					address: '2016-05-04',
					isEdit: false
        }, {
					address: '2016-05-01',
					isEdit: false
        }, {
					address: '2016-05-03',
					isEdit: false
        }]
    }
	},
	methods: {
		handleEdit(index, row) {
			const element = {
				address: this.tableData[index].address,
				isEdit: true
			}
			this.tableData.splice(index, 1, element)
		},
		handleDelete(index, row) {
			this.tableData.splice(index, 1);
		},
		handleSave(index, row) {
			const element = {
				address: this.tableData[index].address,
				isEdit: false
			}
			this.tableData.splice(index, 1, element)
		},
		addNewElement() {
			this.$router.push('/add-address-card')
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
}
.add-new-element-button{
	margin-top: 20px;
	position: absolute;
	right: 20px;
	bottom: 0;
}
</style>
