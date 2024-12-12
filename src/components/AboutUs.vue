<template>
  <div class="about-us-content">
		<el-button>Back</el-button>
    <div class="top-navigation-container">
      <div>Our Customer Experience</div>
      <div>Our History</div>
      <div>Our Commitment to Diversity</div>
    </div>
    <div class="top-navigation-container">
      <div>Email Address</div>
      <div>Company Address: </div>
    </div>
    <div class="contact-us">Contact Us</div>
    <el-button class="learn-more">Learn more</el-button>
  </div>
</template>

<script>
export default {
  name: 'AboutUs',
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
.top-navigation-container{
  margin-top: 40px;
  display: flex;
  justify-content: space-around;
}
.top-navigation-container div{
  width: fit-content;
  padding: 20px;
  border: 1px solid #000;
  cursor: pointer;
}
.contact-us{
  margin: 30px auto;
  width: fit-content;
}
.learn-more{
  margin: 30px auto;
  display: block;
}
</style>
