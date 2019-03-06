<template>
  <div id="forget">
    <!-- 登录 -->
    <div class="navber">
        <div class="navber-left" @click="goback">
            <img src="./images/goback.png">
        </div>
        <div class="navber-center"></div>
        <div class="navber-right"></div>
    </div>
    <!-- 表单验证 -->

    <div class="forgerPw">
      <p class="forger-txt">忘记密码</p>
      <form action="" id="loginform" name="loginform" class="login-box">
        
        <div class="content">
          <input type="text"  placeholder="请输入手机号码" v-model="username">
          
          <div class="authCode">
            <input type="text" placeholder="请输入验证码">
            <span>获取验证码</span>
          </div>
          <input type="password" placeholder="请输入密码" v-model="password">
          <input type="password" placeholder="请再次输入密码" v-model="password">
        </div>

        <div class="login-targer">
          <input id="btnSubmit" name="btnSubmit" type="button" value="确定" class="login-btn">
        </div>
      </form>
    </div>

  </div>
</template>

<script>
import vNavber from "@/components/navber/navber.vue";

export default {
  name: "forget",
  components: {
    vNavber
  },
  data() {
    return {
      username: "",
      password: ""
    };
  },
  mounted() {},

  methods: {
    goback() {
      this.$router.go(-1)
    }
  }
};
</script>

<style lang="less" scoped>
#forget {
  min-height: 100%;
  background-size: 100% auto;
  position: absolute;
  width: 100%;
  height: 100%;
  .navber {
    border: none;
  }
  .forgerPw {
    text-align: center;
    padding: 0.88rem 0.4rem;
    .forger-txt{
      color: #404040;
      font-size: 0.4rem;
      margin: 0.1rem 0 0.6rem;
      font-weight: 600;
    }
    .login-box {
      .content {
        input {
          width: 100%;
          border: none;
          padding: 0.32rem 0.4rem;
          border: 1px solid #dbdbdb;
          margin-bottom: 0.4rem;
          border-radius: 0.1rem;
          font-size: 0.32rem;
          color: #333;
        }
        ::-webkit-input-placeholder {
          color: #a9a9af;
        }
        .authCode {
          display: flex;
          align-items: center;
          width: 100%;
          justify-content: space-between;
          border: 1px solid #dbdbdb;
          border-radius: 0.1rem;
          margin-bottom: 0.4rem;

          input {
            display: inline-block;
            width: auto;
            border: none;
            margin: 0;
            padding: 0.32rem 0 0.32rem 0.4rem;
          }
          span {
            display: inline-block;
            color: #da4242;
            font-size: 0.28rem;
            margin-right: 0.4rem;
          }
        }
      }
      .login-targer {
        .login-btn {
          border: none;
          background: linear-gradient(left, #de6868, #da4040);
          color: #fff;
          width: 100%;
          border-radius: 0.1rem;
          padding: 0.3rem 0;
          font-size: 0.32rem;
        }
      }
    }
  }
  .login-else-targer {
    text-align: center;
    font-size: 0.3rem;
    color: #da4040;
  }
}
</style>
