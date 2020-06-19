<template>
  <div class="search-container">
    <h1>Search</h1>
    <el-input placeholder="Please Input" v-model="input3" class="input-with-select">
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
    <div class="bottom-container">
      <i class="el-icon-search" />
      <div>Group member</div>
      <div>Files</div>
      <div>Updates</div>
      <div>Files</div>
      <div class="search-filter">Search filter</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'calender',
  data () {
    return {
      test:''
    }
  },
}
</script>
<style scoped>
.search-container{
  margin-left: 10px;
}
.bottom-container{
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}
.search-filter{
  border: 1px solid #000;
  border-radius: 10px;
  padding: 0 6px;
}
</style>
