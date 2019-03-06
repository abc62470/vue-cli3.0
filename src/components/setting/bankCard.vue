<template>
  <div class="bankcard">
    <div class="navber">
        <div class="navber-left" @click="goback">
            <img src="./images/goBack.png">
        </div>
        <div class="navber-center">修改银行卡</div>
        <div class="navber-right"></div>
    </div>
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
export default {
  name: "bankcard",
  components: {},
  methods: {
    goback() {
      this.$router.push({
        path: "/setting"
      });
    }
  }
};
</script>
<style scoped>
.navber-left {
  width: auto;
}
.bankcard {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #f4f4f4;
}
.bankcardMsg {
  padding: 0 0.4rem;
  background: #fff;
  margin-bottom: 0.2rem;
}
.msg {
  padding-top: 0.88rem;
}
.bankcardMsg input {
  display: inline-block;
  width: 100%;
  border: none;
  font-size: 0.3rem;
  height: 1rem;
  border-bottom: 1px solid #eee;
  color: #333;
}
.bankcardMsg input:last-child {
  border-bottom: none;
}
.bankcardBtn {
  margin: 0.8rem 0.4rem;
}
.bankcardBtn p {
  color: #fefefe;
  background: #de6868;
  text-align: center;
  padding: 0.28rem 0;
  border-radius: 0.1rem;
  font-size: 0.3rem;
}
.authCode {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
}
.authCode input {
  display: inline-block;
  width: auto;
  border-bottom: none;
}
.authCode span {
  display: inline-block;
  color: #da4545;
  font-size: 0.3rem;
}
::-webkit-input-placeholder {
    color:#b8b8b8;
}
</style>




