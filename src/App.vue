<template>
  <div class="content">
    <div class="top-container">
      <div class="top-content">
        <span>{{onFirstWord}}</span>
        <span @click="fristWordClick(0)">wine only</span>
        <span @click="fristWordClick(1)">rose only</span>
        <span @click="fristWordClick(2)">hamper only</span>
        <span @click="fristWordClick(3)">fruit only</span>
      </div>
    </div>
    <div class="center-content">
      <div class="center-content-element">
        <div class="one-picture">一张图片</div>
        <div class="one-word">一些文字</div>
      </div>
      <div class="center-content-element">
        <div class="one-picture">另一张图片</div>
        <div class="one-word">另一些文字</div>
      </div>
      <div class="center-content-element">1300 767 376</div>
    </div>
    <div class="router-container">
      <div class="router-container-body">
        <div class="router-container-body-word">SPECIALS</div>
        <div class="router-container-body-word">BIRTHDAY</div>
        <div class="router-container-body-word">ROMANCE</div>
        <div class="router-container-body-word">NEW BABY</div>
        <div class="router-container-body-word">SYMPATHY</div>
        <div class="router-container-body-word">GET WALL</div>
        <div class="router-container-body-word">ALL FLOWSER</div>
      </div>
    </div>
    <router-view/>
    <div class="zhanwei"></div>
    <div class="footer">
      <div class="footer-body">
        <div>Information</div>
        <div>The Fine Print</div>
        <div>Style</div>
        <div>By Price</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      onFirstWord: 'wine only'
    }
  },
  methods:{
    fristWordClick(num){
      switch(num){
        case 0:
          this.onFirstWord = 'wine only'
          break
        case 1:
          this.onFirstWord = 'rose only'
          break
        case 2:
          this.onFirstWord = 'hamper only'
          break
        case 3:
          this.onFirstWord = 'fruit only'
          break
      }
    }
  }
}
</script>

<style scoped>
.top-container{
  width: 100%;
  height: 102px;
  background: linear-gradient(#fff,#e1e1e1);
  border-bottom: 1px solid #d2d2d2;
  display: flex;
  align-items: flex-end;
}
.top-content{
  width: 1000px;
  margin: 0 auto;
}
.top-content span:first-child{
  transform: scale(1.6);
}
.top-content span:nth-child(2){
  margin-left: 44px;
}
.top-content span{
  display: inline-block;
  width: 142px;
  height: 62px;
  background: goldenrod;
  border: 1px solid #000;
  line-height: 62px;
  font-size: 18px;
  text-align: center;
  cursor: pointer;
}
.center-content{
  display: flex;
  width: 1200px;
  margin-left: 360px;
}
.center-content-element{
  width: 400px;
  border: 1px solid #ff6666;
  display: flex
}
.one-picture{
  width: 60px;
  height: 60px;
  background: #ffcccc;
}
.router-container{
  width: 100%;
  background: #333;
  height: 44px;
  color: #fff;
}
.router-container-body{
  display: flex;
  width: 880px;
  margin: 0 auto;
  justify-content: space-evenly
}
.router-container-body-word{
  line-height: 44px;
  text-align: center;
  cursor: pointer;
  font-weight: normal;
  font-family: BrandonL,Helvetica,sans-serif;
  text-transform: uppercase;
  font-size: 15px;
}
.router-container-body-word:hover{
  color: #3d3d3d;
}
.zhanwei{
  width: 100%;
  height: 200px;
}
.footer{
  width: 100%;
  height: 100px;
  background: #353535;
}
.footer-body{
  width: 880px;
  color: #fff;
  font-size: 24px;
  display: flex;
  margin: 0 auto;
  justify-content: space-evenly;
}
</style>
