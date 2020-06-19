<template>
	<div class="calendar-container">
		<div class="calendar-top-container">
			<div class="calendar">calendar</div>
			<i class="el-icon-edit-outline to-big" />
			<div class="day-week-month-year">
				<div>day</div>
				<div>week</div>
				<div>month</div>
				<div style="border:none">year</div>
			</div>
		</div>
		<div>{{value}}</div>
		<div>
			<div class="top-week">
				<div class="week-element">Sunday</div>
				<div class="week-element">Monday</div>
				<div class="week-element">Tuesday</div>
				<div class="week-element">Wednesday</div>
				<div class="week-element">Thursday</div>
				<div class="week-element">Friday</div>
				<div class="week-element">Saturday</div>
			</div>
			<div class="test-weeks">
				<div v-for="week in weeks" :key="week" class="week-container">
					<v-dateElement v-for="day in week" :key="day" :dateDay='day'/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import dateElement from './dateElement'
export default {
	name: 'calender',
	components:{
		'v-dateElement':dateElement,
	},
  data () {
    return {
			value: '',
			months:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
			weeks:[]
    }
	},
	mounted(){
		var weekarray=[]
		let i=0
		const year=(new Date()).getFullYear()
		let month=(new Date()).getMonth()
		month=parseInt(month)
		this.value=`${this.months[month]}  ${year}`
		const start=new Date(year,month,1)
		const end=new Date(year,month+1,0)
		this.calcWeek(start,end,(new Date(year,month+1,0)).getDate(),year,month)
	},
	methods:{
		calcWeek(start,end,days,year,month){
			let weekElement=[]
			let startWeekDay=start.getDay()
			let isFullFlag=false
			if(month+1<10){
				month='0'+month
			}
			if(startWeekDay==0){
				weekElement=[`${year}${month}01`]
			}else if(startWeekDay==1){
				weekElement=[',',`${year}${month}01`]
			}else if(startWeekDay==2){
				weekElement=[',',',',`${year}${month}01`]
			}else if(startWeekDay==3){
				weekElement=[',',',',',',`${year}${month}01`]
			}else if(startWeekDay==4){
				weekElement=[',',',',',',',',`${year}${month}01`]
			}else if(startWeekDay==5){
				weekElement=[',',',',',',',',',',`${year}${month}01`]
			}else{
				weekElement=[',',',',',',',',',',',',`${year}${month}01`]
				isFullFlag=true
			}
			console.log('weekElement',weekElement)
			if(isFullFlag){
				this.weeks.push(weekElement)
				weekElement=[]
			}
			for(let i=2;i<=days;i++){
				if(i<10){
					weekElement.push(`${year}${month}0${i}`)
				}else{
					weekElement.push(`${year}${month}${i}`)
				}
				if(weekElement.length==7){
					this.weeks.push(weekElement)
					weekElement=[]
				}
			}
			this.weeks.push(weekElement)
			if(weekElement.length!=0){
				let j=7-weekElement.length
				for(let i=0;i<j;i++){
					weekElement.push(',')
				}
			}
			console.log(this.weeks)
		}
	}
}
</script>
<style>
.calendar-container{
	font-size: 18px;
}
.calendar-top-container{
	display: flex;
	margin-left: 20px;
	font-size: 24px;
	margin-bottom: 30px;
}
.to-big{
	transform: scale(1.3);
	margin-left: 10px;
  margin-top: 2px;
}
.top-week{
	width: 780px;
}
.test-weeks{
	border-left: 1px solid #000;
	border-bottom: 1px solid #000;
}
.week-element{
	display: inline-block;
	width: 106px;
	text-align: center
}
.day-week-month-year{
	display: flex;
	font-size: 20px;
	border: 1px solid #000;
	margin-left: 260px;
	height: 30px;
}
.day-week-month-year div{
	border-right: 1px solid #000;
	text-align: center;
	line-height: 30px;
	width: 66px;
	cursor: pointer;
}
.week-container{
	width: 780px;
}
</style>
