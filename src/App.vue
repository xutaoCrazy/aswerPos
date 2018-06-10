<template>
  <div id="app">
    <leftnav></leftnav>
    <div class='main'>
        <router-view/>
    </div>
  </div>
</template>
<script>
import leftnav from '@/components/common/leftNav'
export default {
  name: 'app',
  components: {
    leftnav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%
}
.main{
  float: left;
  /* background: chocolate; */
  height: 100%;
  width: 95%;
}
</style>
