<template>
  <div class="search">
    <div class="navber">
        <div class="navber-left" @click="goback">
            <img src="./images/goBack.png">
        </div>
        <div class="navber-center">添加客户</div>
        <div class="navber-right" @click="goback">保存</div>
    </div>
    <div class="addClient">
      <div class="titleG input">
          <div class="titleG-left">
            客户名称
          </div>
          <div class="titleG-right">
            <input type="text" placeholder="请填写客户名称">
          </div>
      </div>
      <div class="titleG input">
          <div class="titleG-left">
            客户类型
          </div>
          <div class="titleG-right">
            <input type="text" placeholder="请填写客户类型" value="企业">
          </div>
      </div>
      <div class="titleG input">
          <div class="titleG-left">
            联系人
          </div>
          <div class="titleG-right">
            <input type="text" placeholder="请填写联系人">
          </div>
      </div>
      <div class="titleG input">
          <div class="titleG-left">
            电话
          </div>
          <div class="titleG-right">
            <input type="text" placeholder="请填写电话" value="13711325898">
          </div>
      </div>
      <div class="titleG">
          <div class="titleG-left">
            地区
          </div>
          <div class="titleG-right">
            <input disabled type="text" placeholder="请填写地区" value="广东省广州市海珠区">
          </div>
      </div>
      <div class="titleG input">
          <div class="titleG-left">
            详细地址
          </div>
          <div class="titleG-right">
            <input type="text" placeholder="请填写详细地址" value="怡乐路4巷">
          </div>
      </div>
      <div class="titleG">
          <div class="titleG-left">
            行业类别
          </div>
          <div class="titleG-right">
            <select>
              <option value="1">炼金/锻造</option>
            </select>
            <!-- <input disabled type="text" placeholder="请填写行业类别" value="炼金/锻造"> -->
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
  },
  methods: {
    goback() {
      this.$router.push({
        path:'/search'
      })
    }
  }
}
</script>
<style lang="less" scoped>
  @import "./addClient.less";
</style>



