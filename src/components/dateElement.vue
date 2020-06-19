<template>
	<div class="calendar-container">
		<div class="top-date" @click="changeToShowStatus">{{dateDay!==','?dateDay.slice(6,8):'not'}}</div>
		<div class="calendar-input" v-if="isInput">
			<el-input
				class="textarea-input"
				type="textarea"
				:rows="3"
				placeholder="请输入内容"
				v-model="textarea">
			</el-input>
		</div>
		<div class="calendar-element" v-else>{{toDo}}</div>
	</div>
</template>

<script>
export default {
  name: 'dateElement',
  data () {
    return {
			isInput:false,
			textarea: ''
    }
	},
	props:[
		'dateDay','toDo'//dateDay给出类似于20200621样式的
	],
	mounted(){
	},
	methods:{
		changeToShowStatus(){
			if(!this.isInput){
				this.isInput=true
			}else{
				this.$axios({
					method: "post",
					url: '/time-event',
					data: {
						date: this.dateDay,
						event: this.textarea,
						fullName:this.$route.query.id
					}
				})
					.then(res => {
						console.log('res',res)
						if(res.data.code){
							alert(res.data.msg)
						}else{
							console.log(res.data.data)
							this.isInput=false
						}
					})
					.catch(err => {
						console.log(err, 'error')
					})
			}
			this.toDo=this.textarea
		}
	}
}
</script>
<style scoped>
.calendar-container{
	font-size: 18px;
	width: 105px;
	height: 100px;
	display: inline-block;
	border-top: 1px solid #000;
	border-right: 1px solid #000;
}
.textarea-input{
	position: absolute;
  width: 104px;
}
.calendar-element{
	position: absolute;
	width: 104px;
	word-break: break-all;
	display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.top-date{
	text-align: center;
	cursor: pointer;
}
.textarea-inner{
	width: 100px;
	height: 80px;
}
</style>
