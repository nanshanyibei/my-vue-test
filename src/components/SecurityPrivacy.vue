<template>
  <div class="about-us-content">
		<el-button>Back</el-button>
    <div class="privacy-policy-container">
      <div class="privacy-policy-box">Privacy Policy</div>
			<div class="privacy-policy-words">Privacy Policy</div>
    </div>
		<div class="privacy-policy-long-words">
			We will protect your privacy and ....
		</div>
  </div>
</template>

<script>
export default {
  name: 'SecurityPrivacy',
  data () {
    return {
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
}
.privacy-policy-box{
  padding: 15px;
	font-size: 16px;
	border: 1px solid #000;
	margin-top: 30px;
	width: fit-content;
}
.privacy-policy-words{
	font-size: 30px;
	font-weight: 500;
	margin: 30px 0;
}
</style>
