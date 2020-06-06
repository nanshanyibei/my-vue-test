<template>
  <div class="noticication-body">
    <h1>Inbox</h1>
		<div class="message-container">
			<div class="username">username</div>
			<v-show-more/>
		</div>
		<i class="el-icon-circle-plus-outline to-big" @click="addEmail" />
  </div>
</template>

<script>
import showMore from './showMore'
export default {
	name: 'notification',
	components:{
		'v-show-more':showMore
	},
  data () {
    return {
      
    }
	},
	methods:{
		addEmail(){
			console.log('show-more')
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.noticication-body{
	margin-left: 20px;
	font-size: 18px;
}
.message-container{
	width: 500px;
	padding: 10px;
	border: 1px solid #2c3e50;
	margin: 0 auto;
}
.username{
	font-size: 20px;
}
.to-big{
	transform: scale(4);
	margin-left: 20px;
  margin-top: 60px;
}
</style>
