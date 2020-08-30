<template>
  <div class="page-container">
    <div class="gift-for" @click="toGiftsPage('her')">Gifts for her</div>
		<div class="fashion-container">
			<div class="images-name-container">
				<div v-for="(item, index) in fashionFirstLine" :key="index" class="element-container">
					<div class="image-price-container" @click="toProductItem">
						<div class="image">image{{item}}
							<div class="price">price{{item}}</div>
						</div>
					</div>
					<div class="store-name">Name{{item}}</div>
				</div>
			</div>
		</div>
    <div class="gift-for" @click="toGiftsPage('him')">Gifts for him</div>
		<div class="fashion-container">
			<div class="images-name-container">
				<div v-for="(item, index) in fashionFirstLine" :key="index" class="element-container">
					<div class="image-price-container" @click="toProductItem">
						<div class="image">image{{item}}
							<div class="price">price{{item}}</div>
						</div>
					</div>
					<div class="store-name">Name{{item}}</div>
				</div>
			</div>
		</div>
    <div class="gift-for" @click="toGiftsPage('us')">Gifts for us</div>
		<div class="fashion-container">
			<div class="images-name-container" @click="toProductItem">
				<div v-for="(item, index) in fashionFirstLine" :key="index" class="element-container">
					<div class="image-price-container">
						<div class="image">image{{item}}
							<div class="price">price{{item}}</div>
						</div>
					</div>
					<div class="store-name">Name{{item}}</div>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
      fashionFirstLine: [1,2,3,4,5]
    }
  },
  methods: {
    toGiftsPage(giftPageType) {
      this.$router.push({path:'/gift-page', query: {giftType: giftPageType}})
		},
		toProductItem(){
			this.$router.push('/product-item')
		}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page-container{
	width: 970px;
	margin: 30px auto;
}
.gift-for{
	font-size: 20px;
	font-weight: 500;
  margin-top: 30px;
  cursor: pointer;
}
.fashion-container{
	margin-top: 30px;
}
.element-container{
	width: 190px;
	height: 240px;
	margin-right: 5px;
}
.images-name-container{
	display: flex;
	margin-top: 30px;
}
.image-price-container{
	border: 1px solid #000;
	height: 190px;
	position: relative;
}
.price{
	position: absolute;
	right: 0;
	bottom: 0;
}
.store-name{
	margin-top: 30px;
	border-bottom: 1px solid #000;
}
</style>
