<template>
  <div class="bankcard">
    <v-navber title="修改银行卡"></v-navber>
    <div class="msg">
      <div class="bankcardMsg">
        <input type="text" placeholder="请输入银行卡号">
        <input type="text" placeholder="请输入开户银行">
        <input type="text" placeholder="请输入开户支行">
      </div>
      <div class="bankcardMsg">
        <input type="text" placeholder="请输入手机号" value="13422477858">
        <div class="authCode">
          <input type="text" placeholder="请输入验证码">
          <span>获取验证码</span>
        </div>
      </div>
      <div class="bankcardBtn">
        <p>确认修改</p>
      </div>
    </div>
  </div>
</template>

<script>
import vNavber from "@/components/navber/navber.vue";
export default {
  name: "bankcard",
  components: {
    vNavber
  },
  methods: {
    
  }
};
</script>
<style lang="less" scoped>
@import '../../styles/mixin.less';

.bankcard {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #f4f4f4;

  .msg {
    padding-top: 0.88rem;
    ::-webkit-input-placeholder {
      color: #b8b8b8;
    }
    .bankcardMsg {
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
      }
      span {
        display: inline-block;
        color: #da4545;
        font-size: 0.3rem;
      }
    }
    .bankcardBtn {
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




