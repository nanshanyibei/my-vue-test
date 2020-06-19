<template>
	<div class="default-login-container-element" style="width:750px">
		<div>{{milestone}}</div>
		<div>{{owlver}}</div>
		<div class="status-change" @click="changeStatus">{{statusState=='0'?'Working':"Done"}}</div>
		<div>{{dueDate}}</div>
	</div>
</template>

<script>
export default {
  name: 'eventElement',
  data () {
    return {
			statusState:'',
    }
	},
	props:[
		'milestone','owlver','status','dueDate','id'
	],
	mounted(){
		this.statusState=this.status
	},
	methods:{
		changeStatus(){
			if(this.statusState=='0'){
				this.statusState='1'
			}else{
				this.statusState='0'
			}
			this.$axios({
				method:'post',
				url:"/update-event",
				data: {
					id:this.id,
					status:this.statusState
				}
			})
				.then(res => {
					if(res.data.code){
						console.log('res',res.data.data)
						this.events=res.data.data
					}
				})
				.catch(err => {
					console.log(err,'error')
				})
		}
	}
}
</script>
<style scoped>
.default-login-container-element{
	width: 750px;
}
.default-login-container-element div{
	width: 178px;
	overflow: hidden;
	display: inline-block
}
.status-change{
	cursor: pointer;
}
</style>