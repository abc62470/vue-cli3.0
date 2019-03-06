<template>
  <div class="feedback">
    <v-navber title="投诉与反馈"></v-navber>
    <div class="msg">
      <div class="opinion">
        <textarea class="textA" placeholder="您的意见/建议"></textarea>
        <p class="tips">请输入您的意见和建议，工作人员将会第一时间评估处理。感谢您的热心反馈哦！</p>
      </div>
      <div class="phoneNumBtn">
        <p>确认修改</p>
      </div>
    </div>
  </div>
</template>

<script>
import vNavber from "@/components/navber/navber.vue";
export default {
  name: "aboutUs",
  components: {
    vNavber
  },
  methods: {
    goback() {
      this.$router.push({
        path: "/setting"
      });
    }
  }
};
</script>
<style lang="less" scoped>
@import '../../styles/mixin.less';

.feedback {
  background: #f4f4f4;
  height: 100%;
  width: 100%;
  position: absolute;
  .msg {
    padding: 0.88rem 0;
    ::-webkit-input-placeholder {
      color: #b8b8b8;
    }
    .opinion {
      padding: 0.5rem 0 0.4rem;
      .setPLR();

      background: #fff;
      .textA {
        width: 100%;
        height: 4rem;
        border-radius: 0.1rem;
        border: 2px solid #e8e9eb;
        padding: 0.4rem 0.3rem;
        font-size: 0.28rem;
        color: #333;
        resize: none;
      }
      .tips {
        font-size: 0.26rem;
        color: #666;
        padding-top: 0.4rem;
        line-height: 0.4rem;
      }
    }
    .phoneNumBtn {
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




