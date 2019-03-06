<template>
  <div class="setting">
    
    <v-navber title="个人设置" goBackUrl="/personal"></v-navber>

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
import vNavber from "@/components/navber/navber.vue";

export default {
  name: "setting",
  components: {
    vNavber
  },
  methods: {
    goback() {
      this.$router.push({
        path: "/personal"
      });
    }
  }
};
</script>
<style lang="less" scoped>
@import '../../styles/mixin.less';
.setting {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #f4f4f4;
  .settingMsg {
    padding: 0.88rem 0;
    margin: 0;
    .settingMsgT {
      .setPLR();
      margin-bottom: 0.2rem;
      background: #fff;
      .titleG {
        padding: 0;
        font-size: 0.3rem;
        color: #333;
        border-bottom: 1px solid #e8e9eb;
      }
      .titleG:last-child {
        border-bottom: none;
      }
    }
    .settingMsgB {
      .setPLR();
      background: #fff;
      .titleG {
        padding: 0;
        font-size: 0.3rem;
        color: #333;
        border-bottom: 1px solid #e8e9eb;
      }
      .titleG:last-child {
        border-bottom: none;
      }
    }
  }
}

</style>




