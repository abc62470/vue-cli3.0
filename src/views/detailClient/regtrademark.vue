<template>
  <div id="regtrade">
    <v-navber title="注册商标"></v-navber>
    <div class="registe-cont">
      <div class="registe-block">
        <div class="reg-left">
          <img src="./images/trade-img.png" alt>
        </div>
        <div class="reg-right">
          <p class="reg-til">多乐</p>
          <p class="reg-date">注册日期：2013-07-25</p>
          <p class="reg-kind">商标类别：第六类</p>
        </div>
      </div>
      <div class="registe-block">
        <div class="reg-left">
          <img src="./images/trade-img.png" alt>
        </div>
        <div class="reg-right">
          <p class="reg-til">多乐</p>
          <p class="reg-date">注册日期：2013-07-25</p>
          <p class="reg-kind">商标类别：第六类</p>
        </div>
      </div>
      <div class="registe-block">
        <div class="reg-left">
          <img src="./images/trade-img.png" alt>
        </div>
        <div class="reg-right">
          <p class="reg-til">多乐</p>
          <p class="reg-date">注册日期：2013-07-25</p>
          <p class="reg-kind">商标类别：第六类</p>
        </div>
      </div>
      <div class="registe-block">
        <div class="reg-left">
          <img src="./images/trade-img.png" alt>
        </div>
        <div class="reg-right">
          <p class="reg-til">多乐</p>
          <p class="reg-date">注册日期：2013-07-25</p>
          <p class="reg-kind">商标类别：第六类</p>
        </div>
      </div>
      <div class="registe-block">
        <div class="reg-left">
          <img src="./images/trade-img.png" alt>
        </div>
        <div class="reg-right">
          <p class="reg-til">多乐</p>
          <p class="reg-date">注册日期：2013-07-25</p>
          <p class="reg-kind">商标类别：第六类</p>
        </div>
      </div>
      <div class="registe-block">
        <div class="reg-left">
          <img src="./images/trade-img.png" alt>
        </div>
        <div class="reg-right">
          <p class="reg-til">多乐</p>
          <p class="reg-date">注册日期：2013-07-25</p>
          <p class="reg-kind">商标类别：第六类</p>
        </div>
      </div>
      <div class="registe-block">
        <div class="reg-left">
          <img src="./images/trade-img.png" alt>
        </div>
        <div class="reg-right">
          <p class="reg-til">多乐</p>
          <p class="reg-date">注册日期：2013-07-25</p>
          <p class="reg-kind">商标类别：第六类</p>
        </div>
      </div>
      <div class="registe-block">
        <div class="reg-left">
          <img src="./images/trade-img.png" alt>
        </div>
        <div class="reg-right">
          <p class="reg-til">多乐</p>
          <p class="reg-date">注册日期：2013-07-25</p>
          <p class="reg-kind">商标类别：第六类</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vNavber from "@/components/navber/navber.vue";
export default {
  name: "regtrade",
  components: {
    vNavber
  },
  created() {
    this.menu();
  },
  methods: {
    menu() {
      window.scrollTo(0, 0);
    }
  }
};
</script>
<style lang="less" scoped>
.registe-cont {
  padding: 0.88rem 0.4rem 0;
  .registe-block {
    padding: 0.4rem 0;
    border-bottom: 1px solid #e8e9eb;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .reg-left {
      width: 1.7rem;
      border: 1px solid #e8e9eb;
      height: 1.12rem;
      text-align: center;
      overflow: hidden;
      position: relative;
      border-radius: 0.1rem;
      img {
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        display: inline-block;
        transform: translate(0, -50%);
      }
    }
    .reg-right {
      width: 70%;
      .reg-til {
        margin-bottom: 0.2rem;
        font-size: 0.34rem;
      }
      .reg-date,
      .reg-kind {
        font-size: 0.24rem;
        color: #666;
        margin-bottom: 0.1rem;
      }
      .reg-kind {
          margin: 0;
      }
    }
  }
}
</style>




