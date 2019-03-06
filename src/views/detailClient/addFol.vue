<template>
  <div id="addFol">
    <!-- <v-navber title="客户详情"></v-navber> -->
    <div class="navber">
      <div class="navber-left" @click="goback">
        <img src="./images/goBack.png">
      </div>
      <div class="navber-center">添加跟进</div>
      <router-link to="/clientFol">
        <div class="navber-right">保存</div>
      </router-link>
    </div>
    <div class="fol-cont">
      <!-- 联系事项 -->
      <div class="matter">
        <p class="title">联系事项</p>
        <div class="titleG input">
          <div class="titleG-left">客户</div>
          <div class="titleG-right">
            <input type="text" placeholder="请填写客户" value="中国邮政速递物流">
          </div>
        </div>
        <div class="titleG">
          <div class="titleG-left">联系时间</div>
          <div class="titleG-right select-p">
            <select name id>
              <option value>2018.01.18 14:00</option>
            </select>
            <!-- <input type="text" placeholder="请选择联系时间" value="2018.01.18 14:00"> -->
          </div>
        </div>
        <div class="titleG input">
          <div class="titleG-left">联系电话</div>
          <div class="titleG-right">
            <input type="text" placeholder="请填写联系电话">
          </div>
        </div>
        <div class="titleG">
          <div class="titleG-left">联系人</div>
          <div class="titleG-right select-p">
            <select name id>
              <option value="隆冬强">隆冬强</option>
              <option value="黑旋风">黑旋风</option>
            </select>
            <!-- <input type="text" placeholder="请选择联系人" value="王东平"> -->
          </div>
        </div>
        <div class="titleG input">
          <div class="titleG-left">邮箱</div>
          <div class="titleG-right">
            <input type="text" placeholder="请填写邮箱" value="y663uu2@foxmail.com">
          </div>
        </div>
      </div>
      <!-- 跟进情况 -->
      <div class="matter fol-up">
        <p class="title">跟进情况</p>

        <div class="titleG">
          <div class="titleG-left">跟进方式</div>
          <div class="titleG-right select-p">
            <select name id>
              <!-- <option value="打电话">打电话</option> -->
              <!-- <option value="上门拜访">上门拜访</option> -->
            </select>
          </div>
        </div>
        <div class="titleG input">
          <div class="titleG-left">跟进内容</div>
          <div class="titleG-right">
            <input type="text">
          </div>
        </div>
        <div class="titleG input">
          <div class="titleG-left">跟进进度</div>
          <div class="titleG-right">
            <input type="text" placeholder="请填写邮箱" value="已保护待开发">
          </div>
        </div>
        <div class="titleG-d">
          <div class="titl">跟进结果</div>
          <div class="titl-status">
            <span
              v-for="(target,index) in tagList"
              :key="index"
              :class="{active : flag == index}"
              @click="chose(target.name,index)"
            >{{target.name}}</span>
          </div>
        </div>
      </div>
      <!-- 下次跟进 -->
      <div class="matter next-fol">
        <p class="title">下次跟进</p>
        <div class="titleG">
          <div class="titleG-left  title-width">下次跟进时间</div>
          <div class="titleG-right select-p">
            <select name id>
              <option value></option>
            </select>
          </div>
        </div>
        <div class="titleG">
          <div class="titleG-left title-width">下次跟进内容</div>
          <div class="titleG-right select-p">
            <input type="text">
          </div>
        </div>
      </div>
      <!-- 下次跟进 E-->
    </div>
  </div>
</template>
<script>
export default {
  name: "addFol",
  components: {},
  data() {
    return {
      tagList: [
        { name: "已电话联系" },
        { name: "已上门拜访" },
        { name: "已到款" },
        { name: "跟进中" },
        { name: "无合作意向" },
        { name: "签单未收款" },
        { name: "已发资料" },
        { name: "已签单" }
      ],
      flag: 0
    };
  },
  created() {
    this.menu();
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    menu() {
      window.scrollTo(0, 0);
    },
    chose(t, i) {
      this.flag = i;
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
.fol-cont {
  padding: 0.88rem 0.4rem 0.6rem;
  .title {
    padding: 0.4rem 0 0.1rem;
    color: #bdbdbd;
    font-size: 0.26rem;
  }
  .matter {
    // margin-bottom: 0.2rem;
    .titleG {
      padding: 0;
      height: 1.1rem;
      border-bottom: 1px solid #e8e9eb;
      .titleG-left {
        width: 24%;
        font-size: 0.32rem;
        font-weight: normal;
        color: #666;
      }
      .titleG-right {
        text-align: left;
        input {
          border: none;
          font-size: 0.32rem;
          color: #333;
        }
        ::-webkit-input-placeholder {
          color: #999;
        }
        &.select-p {
          padding-right: 0rem;
        }
        select {
          font-size: 0.32rem;
          width: 100%;
          border: none;
          background: rgba(0, 0, 0, 0);
        }
      }
      .title-width{
        width: 32%;
      }
    }
    .titleG-d {
      .titl {
        font-size: 0.32rem;
        color: #666;
        padding: 0.4rem 0;
      }
      .titl-status {
        span {
          padding: 0.18rem 0.32rem;
          border-radius: 0.5rem;
          background: #f3f3f5;
          display: inline-block;
          font-size: 0.26rem;
          color: #9c9eaa;
          margin: 0 0.33rem 0.26rem 0;
        }
        .active {
          background: #dd5959;
          color: #fff;
        }
      }
    }
  }
}
</style>
