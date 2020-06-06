<template>
	<div class="hello">
		<el-row class="tac col-row-padding">
			<el-col :span="4">
				<el-menu
					default-active="1"
					class="el-menu-vertical-demo">
					<el-menu-item index="1">
						<span class="font-size-18" slot="title" @click="notification">Notification</span>
					</el-menu-item>
					<el-menu-item index="2">
						<span class="font-size-18" slot="title" @click="calender">Calender</span>
					</el-menu-item>
					<el-menu-item index="3">
						<span class="font-size-18" slot="title" @click="myWeek">My week</span>
					</el-menu-item>
					<el-menu-item index="4">
						<span class="font-size-18" slot="title" @click="inviteMember">Invite member</span>
					</el-menu-item>
					<el-menu-item index="5">
						<span class="font-size-18" slot="title" @click="search">Search</span>
					</el-menu-item>
					<el-menu-item index="6">
						<span class="font-size-18" slot="title">IC</span>
					</el-menu-item>
				</el-menu>
			</el-col>
			<el-col :span="18">
				<v-notification v-if="isNotification"></v-notification>
				<v-calender v-if="isCalender"></v-calender>
				<v-inviteMember v-if="isInviteMember"></v-inviteMember>
				<v-myWeek v-if="ismyWeek"></v-myWeek>
				<v-search v-if="isearch"></v-search>
			</el-col>
		</el-row>
	</div>
</template>

<script>
import notification from './Notification'
import calender from './calender'
import inviteMember from './inviteMember'
import myWeek from './myWeek'
import search from './search'
export default {
	name: 'AfterLogin',
	components:{
		'v-notification':notification,
		'v-calender':calender,
		'v-inviteMember':inviteMember,
		'v-myWeek':myWeek,
		'v-search':search
	},
  data () {
    return {
      isNotification:true,
			isCalender:false,
			isInviteMember:false,
			ismyWeek:false,
			isearch:false,
    }
  },
  methods:{
		notification(){
			this.isNotification=true
			this.isCalender=false
			this.isInviteMember=false
			this.ismyWeek=false
			this.isearch=false
		},
		calender(){
			this.isNotification=false
			this.isCalender=true
			this.isInviteMember=false
			this.ismyWeek=false
			this.isearch=false
		},
		myWeek(){
			this.isNotification=false
			this.isCalender=false
			this.isInviteMember=false
			this.ismyWeek=true
			this.isearch=false
		},
		inviteMember(){
			this.isNotification=false
			this.isCalender=false
			this.isInviteMember=true
			this.ismyWeek=false
			this.isearch=false
		},
		search(){
			this.isNotification=false
			this.isCalender=false
			this.isInviteMember=false
			this.ismyWeek=false
			this.isearch=true
		}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  margin: 0 auto;
  width: 1000px;
	font-size: 16px;
}
.col-row-padding{
	padding: 50px 0;
}
.font-size-18{
	font-size: 18px;
}
</style>
