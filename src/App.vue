<template>
  <div class="content">
    <div class="top-container">
      <div class="top-content">
        <span>TEST</span>
        <span>wine only</span>
        <span>rose only</span>
        <span>hamper only</span>
        <span>fruit only</span>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
}
</style>
