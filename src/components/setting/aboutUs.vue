<template>
  <div class="aboutUs">
    <div class="navber">
        <div class="navber-left" @click="goback">
            <img src="./images/goBack.png">
        </div>
        <div class="navber-center">关于我们</div>
        <div class="navber-right"></div>
    </div>
    <div class="msg">
      <div class="introduce">
        <img src="./images/logo.png">
        <p class="aboutWord">网聚品牌管理有限公司是icann（国际互联网名称与数字地址分配机构）认证的域名注册服务商。同时也是点商标域名管理机构（点商标注册局）授权在中国大陆地区唯一的点商标域名注册服务机构</p>
      </div>
      <div class="about">
        <p>客服电话</p>
        <p class="aboutC">400-620-5100</p>
        <p>官方网站</p>
        <p class="aboutC">www.trademarkdomain.com</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "aboutUs",
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
.aboutUsMsg {
  padding: 0 0.4rem;
  background: #fff;
  margin-bottom: 0.2rem;
}
.msg {
  padding: 0.88rem 0.4rem 0;
}
.introduce {
  text-align: center;
  padding-bottom: 0.62rem;
  border-bottom: 1px solid #e8e9eb;
  margin-bottom: 0.5rem;
}
.introduce img {
  width: 1.12rem;
  margin: 0.75rem 0 0.6rem;
}
.aboutWord{
  color: #666;
  font-size: 0.28rem;
  text-align: left;
  line-height: 0.4rem;
}

.about p{
  color: #666;
  font-size: 0.28rem;
  
}
.about .aboutC{
  color: #da4545;
  font-size: 0.32rem;
  margin: 0.22rem 0 0.5rem;
}
</style>




