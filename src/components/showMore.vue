<template>
	<div class="user-message" :class="isShowMore?'show-more':''" @click="showMore">
		fhajsfkajshfjkashfdkjashfjkhfjasdfjkasdhfjaksfhsakhfasdjkfsh
		fhajsfkajshfjkashfdkjashfjkhfjasdfjkasdhfjaksfhsakhfasdjkfsh
		fhajsfkajshfjkashfdkjashfjkhfjasdfjkasdhfjaksfhsakhfasdjkfsh
		fhajsfkajshfjkashfdkjashfjkhfjasdfjkasdhfjaksfhsakhfasdjkfsh
	</div>
</template>

<script>
export default {
  name: 'show-more',
  data () {
    return {
      isShowMore:false
    }
	},
	methods:{
		showMore(){
			this.isShowMore=true
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.user-message{
	width: 100%;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;
	overflow: hidden;
	cursor: pointer;
}
.show-more{
	-webkit-line-clamp: 100;
}
</style>
