<template>
  <div class="feedback">
    <div class="navber">
        <div class="navber-left" @click="goback">
            <img src="./images/goBack.png">
        </div>
        <div class="navber-center">投诉与反馈</div>
        <div class="navber-right"></div>
    </div>
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
.feedback{
  background: #f4f4f4;
  height: 100%;
  width: 100%;
  position: absolute;
}
.msg {
  padding: 0.88rem 0;
}
.opinion{
  padding: 0.5rem 0.4rem 0.4rem;
  background: #fff;
}
::-webkit-input-placeholder {
    color:#b8b8b8;
}
.textA{
  width: 100%;
  height: 4rem;
  border-radius: 0.1rem;
  border: 1px solid #e8e9eb;
  padding: 0.4rem 0.3rem;
  font-size: 0.28rem;
  color: #333;
  resize: none;
}
.opinion .tips{
  font-size: 0.26rem; 
  color: #666;
  padding-top: 0.4rem;
  line-height: 0.4rem;
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
</style>




