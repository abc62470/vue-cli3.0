<template>
  <div id="folMsg">
    <!-- <v-navber title="客户详情"></v-navber> -->
    <div class="navber">
        <div class="navber-left" @click="goback">
            <img src="./images/goBack.png">
        </div>
        <div class="navber-center">跟进信息</div>
        <div class="navber-right" @click="compile">编辑</div>
    </div>
    <div class="dtl-cont">
        <!-- 基本信息 -->
        <div class="contact">
            <!-- 联系人资料 -->
            <span>联系时间</span>
            <p>2018-11-09 14:00</p>
            <span>跟进方式</span>
            <p>上门拜访</p>
            <span>联系人</span>
            <p>黄东平</p>
            <span>联系电话</span>
            <p>13744577885</p>
            <span>跟进内容</span>
            <p>打客服电话就好</p>
            <span>跟进结果</span>
            <div class="label-btn">
                <i>已签单</i>
                <i>已上门拜访</i>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "folMsg",
  components: {},
  data() {
    return {};
  },
  created() {},
  methods: {
    goback() {
      this.$router.go(-1);
    },
    compile() {
        this.$router.push({
            path: '/addFol'
        })
    }
  }
};
</script>
<style lang="less" scoped>
.navber {
  .navber-right {
    color: #da4545;
  }
}
.dtl-cont {
  padding: 0.88rem 0 1.3rem;
  // 基本信息
  .contact {
    padding: 0 0.4rem;
    background: #fff;
    span {
      font-size: 0.24rem;
      color: #999;
      padding-top: 0.3rem;
      display: block;
    }
    p {
      color: #333;
      padding: 0.2rem 0 0.3rem;
      border-bottom: 1px solid #e8e9eb;
      font-size: 0.3rem;
    }
    .label-btn {
      padding: 0.24rem 0 0.3rem;
      border-bottom: 1px solid #e8e9eb;

      i {
        color: #fff;
        background: #dd5959;
        border-radius: 0.5rem;
        padding: 0.16rem 0.34rem;
        display: inline-block;
        margin-right: 0.4rem;
        font-size: 0.26rem;
      }
    }
  }
}
</style>
