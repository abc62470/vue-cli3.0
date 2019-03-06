<template>
  <div id="login">
    <!-- 登录 -->
    <div class="login-header">
      <img src="./images/login-logo.png">
      <div class="login-content">
        点商标代理
      </div>
      <div class="login-content-en">
        DotTrademark Agent
      </div>
      <div class="btn">
        <div class="login-btn" @click="changeBtn('login')">
          <p :class="{active : colorF == 'regist' }" >登录</p>
          <!-- <img src="./images/triangle.png" alt="" v-if="colorF == 'login'"> -->
        </div>
        <div class="regist-btn" @click="changeBtn('regist')">
          <p :class="{active : colorF == 'login' }" >注册</p>
          <!-- <img src="./images/triangle.png" alt="" v-if="colorF == 'regist'"> -->
        </div>
      </div>
    </div>
    <!-- 表单验证 -->
    <form action="" id="loginform" name="loginform" class="login-box">
          <img class="login-img" src="./images/triangle.png" alt="" v-if="colorF == 'login'">
          <img class="regist-img" src="./images/triangle.png" alt="" v-if="colorF == 'regist'">
      
      <div class="content" v-if="colorF == 'login'">
        <input type="text"  placeholder="请输入手机号码" v-model="username">
        <input type="password" placeholder="请输入密码" v-model="password">
      </div>
      <div class="content" v-if="colorF == 'regist'">
        <input type="text"  placeholder="请输入手机号码" v-model="username">
        
        <div class="authCode">
          <input type="text" placeholder="请输入验证码">
          <span v-show="show" @click="getAuthCode">获取验证码</span>
          <span v-show="!show" class="right-btn">{{count}} 秒后重新发送</span>

        </div>
        <input type="password" placeholder="请输入密码" v-model="password">
      </div>

      <div class="login-targer">
        <input id="btnSubmit" name="btnSubmit" @click="login" type="button" value="登录" class="login-btn">
      </div>
    </form>

    <div class="login-else-targer" v-if="colorF == 'login'">
      <router-link to="/forget">
        <span class="forget-password">忘记密码</span>
      </router-link>
    </div>
  </div>
</template>

<script>
// import { getItem, setItem } from "../../kits/localstorage.js";

import { Base64 } from "js-base64";
// let Base64 = require("js-base64").Base64;

export default {
  data() {
    return {
      username: "13427453059",
      password: "1111qqqq",
      colorF: "login",
      count: "",
      show: true
    };
  },
  mounted() {},

  methods: {
    changeBtn(i) {
      this.colorF = i;
    },
    login() {
      var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
      // 加密密码
      // let password =
      // ("token=11526538-0059-4199-b35b-4e77263cdda9&pageId=31&unionId=165");
      let password = Base64.encode(this.password);
      if (this.username == "") {
        // layer.open({
        //   content: "请输入手机号！",
        //   btn: "确定"
        // });
        console.log("请输入手机号！");
        return false;
      }
      if (this.password == "") {
        // layer.open({
        //   content: "请输入登录密码！",
        //   btn: "确定"
        // });
        console.log("请输入登录密码！");

        return false;
      }
      if (!reg.test(this.username)) {
        // layer.open({
        //   content: "请输入正确的手机号！",
        //   btn: "确定"
        // });
        console.log("请输入正确的手机号！");

        return false;
      }
      let data = { phone: this.username, password: password };
      // 登录接口请求
      let url = "/agentuser/check-login";

      this.$axios.post(url, data).then(res => {
        var _this = this;
        console.log(res);
        if (res.data.code == "1") {
          console.log(this.$router.currentRoute);
          localStorage.token = res.data.params;
          // this.$router.push({
          //   path:
          //     decodeURIComponent(this.$router.currentRoute.query.redirect) ||
          //     "/"
          // });
          this.$router.push({
            path: "/"
          });

          console.log(localStorage.token);
          return false;
        } else if (res.data.code == "0") {
          console.log(res.data.msg);
          alert(res.data.msg);
          this.password = "";
          return false;
        } else {
        }
      });
    },
    getAuthCode() {
      var obj = this;

      var TIME_COUNT = 60;
      if (!obj.timer) {
        obj.count = TIME_COUNT;
        obj.show = false;
        obj.timer = setInterval(function() {
          if (obj.count > 1 && obj.count <= TIME_COUNT) {
            obj.count--;
            // $.cookie("total", obj.count);
          } else {
            obj.show = true;
            clearInterval(obj.timer);
            obj.timer = null;
          }
        }, 1000);
      }
    }
  }
};
</script>

<style lang="less" scoped>
#login {
  min-height: 100%;
  background: #fff url("./images/login-bg.png") 0 0 no-repeat;
  background-size: 100% auto;
  position: absolute;
  width: 100%;
  height: 100%;
  .login-header {
    text-align: center;
    margin-top: 1.16rem;
    color: #e7e7e7;
    img {
      width: 1.38rem;
    }
    .login-content {
      font-size: 0.32rem;
      margin: 0.27rem 0 0.08rem;
      letter-spacing: 0.15rem;
      text-indent: 0.15rem;
    }
    .login-content-en {
      font-size: 0.22rem;
      opacity: 0.43;
    }
    .btn {
      display: flex;
      text-align: center;
      margin-top: 1.35rem;
      .login-btn {
        width: 50%;
        display: inline-block;
      }
      p {
        margin-bottom: 0.4rem;
      }
      .active {
        color: #c9c9c9;
      }
      img {
        width: 0.4rem;
      }
      .regist-btn {
        width: 50%;
      }
    }
  }
  .login-box {
    padding: 0.4rem 0.4rem 0.7rem;
    position: relative;
    .login-img {
      position: absolute;
      top: 0;
      left: 25%;
      transform: translate(-50%,-50%);
    }
    .regist-img {
      position: absolute;
      top: 0;
      left: 75%;
      transform: translate(-50%,-50%);
    }
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
          padding: 0.32rem 0 0.32rem 0.3rem;
        }
        span {
          display: inline-block;
          color: #da4242;
          font-size: 0.28rem;
          margin-right: 0.2rem;
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
  .login-else-targer {
    text-align: center;
    font-size: 0.3rem;
    color: #da4040;
  }
}
</style>
