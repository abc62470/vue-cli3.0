<template>
    <div class="navber">
        <div class="navber-left" @click="goback">
            <img src="./images/goBack.png">
        </div>
        <div class="navber-center">{{title}}</div>
        <div class="navber-right"></div>
    </div>
</template>

<script>
export default {
  name: "setting",
  components: {},
  props:[
      'title',
      'goBackUrl'
  ],
  methods: {
    goback() {
        this.goBackUrl ? this.$router.push(this.goBackUrl) : this.$router.go(-1);
    }
  }
};
</script>
<style lang="less" scoped>
.navber {
    .navber-left{
        width: auto;
    }
}
</style>




