<template>
  <div class="about-us-content">
		<div class="detail-bank-card-address-container">
			<div class="edit-my-details" @click="toMyDetailPage">Edit my details</div>
			<div class="edit-my-details" @click="toMyBankCard">Edit my bank card</div>
			<div class="edit-my-details" @click="toMyDeliverAddress">Edit my deliver address</div>
		</div>
		<div class="returns-orders-comments-container">
			<div class="edit-my-details">Returns & Orders</div>
			<div class="edit-my-details" @click="toMyComments">My comments</div>
		</div>
  </div>
</template>

<script>
export default {
  name: 'MyAccount',
  data () {
    return {
    }
	},
	methods: {
		toMyDetailPage(){
			console.log('-----')
			this.$router.push({path: '/edit-my-detail', query: {emailAddress: this.$route.query.emailAddress}})
		},
		toMyBankCard(){
			this.$router.push('/edit-my-bank-card')
		},
		toMyDeliverAddress(){
			this.$router.push('/edit-address-card')
		},
		toMyComments(){
			this.$router.push('/my-comments')
		}
	},
	mounted(){
		console.log('this.$router', this.$route)
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about-us-content{
  margin: 30px auto;
  width: 980px;
}
.top-navigation-container{
  margin-top: 40px;
  display: flex;
  justify-content: space-around;
}
.detail-bank-card-address-container, .returns-orders-comments-container{
	display: flex;
	width: fit-content;
	margin: 0 auto;
}
.returns-orders-comments-container{
	margin-top: 20px;
}
.edit-my-details{
	border: 1px solid #000;
	padding: 20px 10px;
	width: 200px;
	line-height: 50px;
	height: 50px;
	margin-right: 50px;
	text-align: center;
	cursor: pointer;
}
</style>
