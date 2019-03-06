<template>
  <div class="search">
    <div class="navber">
        <div class="navber-left" @click="goback">
            <img src="./images/close.png">
        </div>
        <div class="navber-center"></div>
        <div class="navber-right"></div>
    </div>
    <div class="searchMsg">
      <div class="seInput">
        <input type="text" value="顺丰">
        <img src="./images/closeInput.png" alt="">
      </div>

      <div class="seInclude">
        <div class="titleG input">
          <div class="titleG-left">
            顺丰汽贸
          </div>
          <div class="titleG-right">
            已被收录
          </div>
          <!-- <div class="titleG-right includeRed">
            <div class="include">
              <img src="./images/addInclude.png" alt="" >
              <span>收录</span>
            </div>
          </div> -->
        </div>
        <div class="titleG input">
          <div class="titleG-left">
            顺丰员工
          </div>
          <!-- <div class="titleG-right">
            已被收录
          </div> -->
          <div class="titleG-right includeRed">
            <div class="include">
              <img src="./images/addInclude.png" alt="" >
              <span>收录</span>
            </div>
          </div>
        </div>
        <div class="titleG input">
          <div class="titleG-left">
            南海顺丰啦
          </div>
          <!-- <div class="titleG-right">
            已被收录
          </div> -->
          <div class="titleG-right includeRed">
            <div class="include">
              <img src="./images/addInclude.png" alt="" >
              <span>收录</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 添加按钮 -->
    <div class="addBtn" @click="addBtn">
      <div class="addBtnImg">
        
      </div>
      <span>添加</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
  },
  methods: {
    addBtn() {
      this.$router.push({
        path: '/addClient'
      });
    },
    goback() {
      this.$router.push({
        path: '/'
      });
    }
  }
}
</script>
<style lang="less" scoped>
  @import "./search.less";
</style>




