<template>
  <div class="password">
    <div class="navber">
        <div class="navber-left" @click="goback">
            <img src="./images/goBack.png">
        </div>
        <div class="navber-center">修改密码</div>
        <div class="navber-right"></div>
    </div>
    <div class="msg">
      <div class="passwdMsg">
        <input type="text" placeholder="请输入原密码">
        <input type="text" placeholder="请输入新密码">
        <input type="text" placeholder="请再次确认密码">
      </div>
      <div class="passwdBtn">
        <p>确认修改</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "password",
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
.password {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #f4f4f4;
}
.passwdMsg {
  padding: 0 0.4rem;
  background: #fff;
}
.msg {
  padding-top: 0.88rem;
}
.passwdMsg input {
  display: inline-block;
  width: 100%;
  border: none;
  font-size: 0.3rem;
  height: 1rem;
  border-bottom: 1px solid #eee;
  color: #333;
}
.passwdMsg input:last-child {
  border-bottom: none;
}
.passwdBtn {
  margin: 0.8rem 0.4rem;
}
.passwdBtn p {
  color: #fefefe;
  background: #de6868;
  text-align: center;
  padding: 0.28rem 0;
  border-radius: 0.1rem;
  font-size: 0.3rem;
}
::-webkit-input-placeholder {
    color:#b8b8b8;
}
</style>




