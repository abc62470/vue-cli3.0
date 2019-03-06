<template>
  <div class="phoneNum">
    <div class="navber">
        <div class="navber-left" @click="goback">
            <img src="./images/goBack.png">
        </div>
        <div class="navber-center">修改手机号</div>
        <div class="navber-right"></div>
    </div>
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
export default {
  name: "phoneNum",
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
.phoneNum {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #f4f4f4;
}
.phoneNumMsg {
  padding: 0 0.4rem;
  background: #fff;
  margin-bottom: 0.2rem;
}
.msg {
  padding-top: 0.88rem;
}
.phoneNumMsg input {
  display: inline-block;
  width: 100%;
  border: none;
  font-size: 0.3rem;
  height: 1rem;
  border-bottom: 1px solid #eee;
  color: #333;
}
.phoneNumMsg input:last-child {
  border-bottom: none;
}
.phoneNumBtn {
  margin: 0.8rem 0.4rem;
}
.phoneNumBtn p {
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




