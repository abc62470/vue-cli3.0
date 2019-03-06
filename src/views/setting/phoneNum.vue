<template>
  <div class="phoneNum">
    <v-navber title="修改手机号"></v-navber>
    <div class="msg">
      <div class="phoneNumMsg">
        <input type="text" placeholder="请输入手机号">
        <div class="authCode">
          <input type="text" placeholder="请输入验证码">
          <span>获取验证码</span>
        </div>
      </div>
      <div class="phoneNumBtn">
        <p>确认修改</p>
      </div>
    </div>
  </div>
</template>
<script>
import vNavber from "@/components/navber/navber.vue";
export default {
  name: "phoneNum",
  components: {
    vNavber
  },
  methods: {
    goback() {
      this.$router.push({
        path: "/setting"
      });
    }
  }
};
</script>
<style lang="less" scoped>
@import '../../styles/mixin.less';

.phoneNum {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #f4f4f4;
  .msg {
    padding-top: 0.88rem;
    ::-webkit-input-placeholder {
      color: #b8b8b8;
    }
    .phoneNumMsg {
      .setPLR();
      background: #fff;
      margin-bottom: 0.2rem;
      input {
        display: inline-block;
        width: 100%;
        border: none;
        font-size: 0.3rem;
        height: 1rem;
        border-bottom: 1px solid #e8e9eb;
        color: #333;
      }
      input:last-child {
        border-bottom: none;
      }
      .authCode {
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-between;
        input {
          display: inline-block;
          width: auto;
          border-bottom: none;
        }
        span {
          display: inline-block;
          color: #da4545;
          font-size: 0.3rem;
        }
      }
    }
    .phoneNumBtn {
      margin: 0.8rem 0;
      .setPLR();
      p {
        color: #fefefe;
        background: linear-gradient(left, #de6868, #da4040);
        text-align: center;
        padding: 0.28rem 0;
        border-radius: 0.1rem;
        font-size: 0.3rem;
      }
    }
  }
}
</style>




