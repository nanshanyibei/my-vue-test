<template>
  <div class="about-us-content">
		<div class="name-number-expire-cvv-container">
			<el-input v-model="number" placeholder="house number" class="input-element"/>
			<el-input v-model="street" placeholder="street" class="input-element"/>
			<el-input v-model="city" placeholder="city" class="input-element"/>
			<el-input v-model="state" placeholder="state" class="input-element"/>
		</div>
		<el-button class="done-button">Done</el-button>
	</div>
</template>

<script>
export default {
  name: 'AddAddressCard',
  data () {
    return {
			street: '',
			number: '',
			city: '',
			state: ''
    }
	},
	methods: {
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about-us-content{
	margin: 30px auto;
	width: 980px;
	position: relative;
	padding-bottom: 80px;
}
.name-number-expire-cvv-container{
	padding: 30px 50px;
	width: 740px;
	margin: auto;
	border: 1px solid #000;
}
.input-element{
	width: 700px;
	display: block;
	margin: 0 auto 20px;
}
.done-button{
	position: absolute;
	right: 80px;
	bottom: 1px;
}
</style>
