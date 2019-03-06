<template>
  <div id="app" class="containerView">
    <router-view/>
  </div>
</template>

<script>
export default{
  name: 'app',
  data(){
    return {
    }
  }
}
</script>

<style lang="less">
@import './styles/reset';
@import './styles/common';
</style>
