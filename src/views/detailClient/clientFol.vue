<template>
  <div id="addLinkman">
    <div class="navber">
        <div class="navber-left" @click="goback">
            <img src="./images/goBack.png">
        </div>
        <div class="navber-center">客户跟进</div>
        <router-link to="/addFol">
            <div class="navber-right">
                <img src="./images/addInclude.png">
            </div>
        </router-link>
    </div>
    <div class="msg">
        <router-link to="/folMsg">
            <div class="titleG">
                <div class="title-left">2018-11-09 14:00</div>
                <div class="title-right">跟进人：陈震宇</div>
            </div>
        </router-link>
        <div class="titleG">
            <div class="title-left">2018-11-09 14:00</div>
            <div class="title-right">跟进人：陈震宇</div>
        </div>
        <div class="titleG">
            <div class="title-left">2018-11-09 14:00</div>
            <div class="title-right">跟进人：陈震宇</div>
        </div>
        <div class="titleG">
            <div class="title-left">2018-11-09 14:00</div>
            <div class="title-right">跟进人：陈震宇</div>
        </div>
        <div class="titleG">
            <div class="title-left">2018-11-09 14:00</div>
            <div class="title-right">跟进人：陈震宇</div>
        </div>
        <div class="titleG">
            <div class="title-left">2018-11-09 14:00</div>
            <div class="title-right">跟进人：陈震宇</div>
        </div>
        <div class="titleG">
            <div class="title-left">2018-11-09 14:00</div>
            <div class="title-right">跟进人：陈震宇</div>
        </div>
        <div class="titleG">
            <div class="title-left">2018-11-09 14:00</div>
            <div class="title-right">跟进人：陈震宇</div>
        </div>
        <div class="titleG">
            <div class="title-left">2018-11-09 14:00</div>
            <div class="title-right">跟进人：陈震宇</div>
        </div>
        <div class="titleG">
            <div class="title-left">2018-11-09 14:00</div>
            <div class="title-right">跟进人：陈震宇</div>
        </div>
        <div class="titleG">
            <div class="title-left">2018-11-09 14:00</div>
            <div class="title-right">跟进人：陈震宇</div>
        </div>
        <div class="titleG">
            <div class="title-left">2018-11-09 14:00</div>
            <div class="title-right">跟进人：陈震宇</div>
        </div>
        <div class="titleG">
            <div class="title-left">2018-11-09 14:00</div>
            <div class="title-right">跟进人：陈震宇</div>
        </div>
        <div class="titleG">
            <div class="title-left">2018-11-09 14:00</div>
            <div class="title-right">跟进人：陈震宇</div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "addLinkman",
  components: {},
  created() {
      this.menu();
  },
  methods: {
    goback() {
      this.$router.push({
          path: '/detailClient'
      })

    },
    menu() {
      window.scrollTo(0, 0);
    }
  }
};
</script>
<style lang="less" scoped>
.navber {
  .navber-right {
    color: #dd5959;
  }
}
.msg {
  padding: 0.88rem 0.4rem 0;
  .titleG {
    height: 1rem;
    padding: 0;
    justify-content: space-between;
    .title-left{
        color: #333;
        font-size: 0.3rem;
    }
    .title-right {
      padding-right: 0.4rem;
      font-size: 0.26rem;
      color: #333;
    }
  }
}
</style>




