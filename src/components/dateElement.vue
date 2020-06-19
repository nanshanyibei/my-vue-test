<template>
	<div class="calendar-container">
		<div class="top-date" @click="changeToShowStatus">{{dateDay?dateDay:0}}</div>
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
			date: 'TEST',
			isInput:false,
			textarea: ''
    }
	},
	props:[
		'dateDay','toDo'
	],
	mounted(){
	},
	methods:{
		changeToShowStatus(){
			this.isInput=!this.isInput
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
