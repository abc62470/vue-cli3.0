<template>
  <div class="setting">
    <div class="navber">
        <div class="navber-left" @click="goback">
            <img src="./images/goBack.png">
        </div>
        <div class="navber-center">个人设置</div>
        <div class="navber-right"></div>
    </div>
    <div class="settingMsg">
      <div class="settingMsgT">
        <router-link to="/setting/passwd" class="titleG">修改密码</router-link>
        <router-link to="/setting/bankCard" class="titleG">修改银行卡</router-link>
        <router-link to="/setting/phoneNum" class="titleG">修改手机号</router-link>
      </div>
      <!-- <div class="hr"></div> -->
      <div class="settingMsgB">
        <router-link to="/" class="titleG">用户协议</router-link>
        <router-link to="/setting/aboutUs" class="titleG">关于我们</router-link>
        <router-link to="/setting/feedback" class="titleG">投诉与反馈</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "setting",
  components: {},
  methods: {
    goback() {
      this.$router.push({
        path: "/personal"
      });
    }
  }
};
</script>
<style scoped>
.navber-left {
  width: auto;
}
.setting {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #f4f4f4;
}
.settingMsg {
  padding: 0.88rem 0;
  margin: 0;
}
.titleG {
  padding: 0;
  font-size: 0.3rem;
  color: #333;
  border-bottom: 1px solid #e8e9eb;
}
.settingMsgT {
  margin-bottom: 0.2rem;
  padding: 0 0.4rem;
  background: #fff;
}
.settingMsgT .titleG:last-child {
  border-bottom: none;
}
.settingMsgB {
  padding: 0 0.4rem;
  background: #fff;
}
.settingMsgB .titleG:last-child {
  border-bottom: none;
}
</style>




