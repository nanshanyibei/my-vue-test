<template>
	<div class="default-login-container">
		<div class="top-login-container">
			<div class="project-name">Project Name</div>
			<div class="right-container">
				<i class="el-icon-user-solid to-big"/>
				<i class="el-icon-setting to-big" @click="showOther" v-if="!showDetail" />
				<i class="el-icon-s-tools to-big" @click="dotShowOther" v-else />
				<div v-if="showDetail" class="activity-last-viewd">
					<div>Activity</div>
					<div>Last Viewed</div>
					<div>Updates</div>
				</div>
			</div>
		</div>
		<div class="events-container">
			<div class="events-container-top">
				<div>Milestone</div>
				<div>Owler</div>
				<div>Status</div>
				<div>Due date</div>
			</div>
			<v-event-element v-for="event in events" :key="event.event"
				:milestone='event.event' :owlver='event.fullName'
				:status='event.isFinish' :dueDate='event.date'/>
		</div>
	</div>
</template>

<script>
import eventElement from './eventElement'
export default {
  name: 'defaultLogin',
  data () {
    return {
			showDetail:false,
			events:[]
    }
	},
	components:{
		'v-event-element':eventElement
	},
	mounted(){
		this.$axios({
			methods:'get',
			url:"/get-time-event",
			params: {
				fullName:this.$route.query.id,
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
	},
	methods:{
		showOther(){
			this.showDetail=true
		},
		dotShowOther(){
			this.showDetail=false
		}
	}
}
</script>
<style scoped>
.default-login-container{
	margin-left: 20px;
}
.top-login-container{
	display: flex;
}
.to-big{
	transform: scale(1.5);
	margin-left: 20px;
}
.activity-last-viewd{
	float: right;
	margin-left: 30px;
	margin-top: -30px;
}
.events-container-top{
	margin-bottom: 10px;
}
.events-container-top div{
	display: inline-block;
	width: 178px;
	margin-top: 30px;
}
</style>