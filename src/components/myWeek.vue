<template>
  <div class="week-container">
    <div class="my-week">May 11-May 17</div>
    <div class="today">Tody(0)</div>
    <div class="upcoming">Upcoming(0)</div>
    <div class="done">Done(0)</div>
  </div>
</template>

<script>
export default {
  name: 'my-week',
  data () {
    return {
      test:''
    }
  },
}
</script>
<style scoped>
.week-container{
  margin-left: 10px;
}
.my-week{
  font-size: 20px;
  margin-bottom: 10px;
}
.today,.upcoming,.done{
  width: 300px;
  height: 30px;
  line-height: 30px;
  border-radius: 20px;
  border: 1px solid #000;
  margin-bottom: 20px;
  padding-left: 10px;
}
</style>
