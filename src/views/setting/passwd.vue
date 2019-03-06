<template>
  <div class="password">
    <v-navber title="修改密码"></v-navber>
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
import vNavber from "@/components/navber/navber.vue";
export default {
  name: "password",
  components: {
    vNavber
  },
  methods: {
   
  }
};
</script>
<style lang="less" scoped>
@import '../../styles/mixin.less';

.password {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #f4f4f4;
  .msg {
    padding-top: 0.88rem;
    ::-webkit-input-placeholder {
      color: #b8b8b8;
    }
    .passwdMsg {
      .setPLR();
      background: #fff;
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
    }
    .passwdBtn {
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




