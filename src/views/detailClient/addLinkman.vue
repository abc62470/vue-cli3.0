<template>
  <div id="addLinkman">
    <div class="navber">
        <div class="navber-left" @click="goback">
            <img src="./images/goBack.png">
        </div>
        <div class="navber-center">新增联系人</div>
        <div class="navber-right">保存</div>
    </div>
    <div class="msg">
      <div class="titleG input">
          <div class="title-left">联系人</div>
          <div class="title-right">
              <input type="text" placeholder="请填写客户名称">
          </div>
      </div>
      <div class="titleG input">
          <div class="title-left">电话</div>
          <div class="title-right">
              <input type="text" placeholder="请填写电话">
          </div>
      </div>
      <div class="titleG input">
          <div class="title-left">微信</div>
          <div class="title-right">
              <input type="text" placeholder="请填写微信">
          </div>
      </div>
      <div class="titleG input">
          <div class="title-left">邮箱</div>
          <div class="title-right">
              <input type="text" placeholder="请填写邮箱">
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "addLinkman",
  components: {},
  methods: {
      goback() {
          this.$router.go(-1)
      }
  }
};
</script>
<style lang="less" scoped>
.navber {
  border-bottom: none;
  .navber-right {
    color: #db4646;
  }
}
.msg {
  padding: 0.88rem 0.4rem;
  .titleG {
    height: 1rem;
    padding: 0;
    border-bottom: 1px solid #e8e9eb;
    .title-left {
      width: 25%;
      color: #666;
    }
    .title-right {
      input {
        border: none;
        font-size: 0.32rem;
        color: #333;
      }
      ::-webkit-input-placeholder {
        color: #999;
      }
    }
  }
}
</style>




