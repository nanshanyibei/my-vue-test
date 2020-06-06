<template>
	<div class="calendar-container">
		<div class="calendar-top-container">
			<div class="calendar">calendar</div>
			<i class="el-icon-edit-outline to-big" />
		</div>
		<el-calendar>
			<template
				slot="dateCell"
				slot-scope="{date, data}">
				<p :class="data.isSelected ? 'is-selected' : ''">
					{{ data.day.split('-').slice(1)[1] }} {{ data.isSelected ? '✔️' : ''}}
				</p>
			</template>
		</el-calendar>
	</div>
</template>

<script>
export default {
  name: 'calender',
  data () {
    return {
      value: new Date()
    }
  },
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
.is-selected {
	color: #1989FA;
}
</style>
