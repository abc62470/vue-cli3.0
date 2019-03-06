<template>
  <div id="news">
    <div class="navber">
        <div class="navber-left" @click="goback">
            <img src="./images/goBack.png">
        </div>
        <div class="navber-center">
            <span class="new" :class="{borderB : showBb == '0' }" @click="getC('0')">新闻</span>
            <span class="notic" :class="{borderB : showBb  == '1'}" @click="getC('1')">公告</span>
        </div>
        <div class="navber-right"></div>
    </div>
    <div class="newCont" v-if="showBb == '0'">
        <div class="newContB">
            <div class="news-left">
                <p>2018中国国际商标品牌节点商标之夜招待会获圆满成功</p>
                <span>管理机构</span>
                <span>2018-09-03</span>
            </div>
            <div class="news-right">
                <img src="./images/newsImg.png" alt="">
            </div>
        </div>
        <div class="newContB">
            <div class="news-left">
                <p>2018中国国际商标品牌节点商标之夜招待会获圆满成功</p>
                <span>管理机构</span>
                <span>2018-09-03</span>
            </div>
            <div class="news-right">
                <img src="./images/newsImg.png" alt="">
            </div>
        </div>
    </div>
    <div class="newCont" v-if="showBb == '1'">
        <router-link to="/detail">
            <div class="newContB">
                <div class="notic-left">
                    <p>关于“立品牌，用点商标”推广活动的通知</p>
                    <span>管理机构</span>
                    <span>2018-09-03</span>
                </div>
                
            </div>
        </router-link>
        <router-link to="/detail">
            <div class="newContB">
                <div class="notic-left">
                    <p>互联网品牌，商标，域名管理与应用实务培训班（上海站）</p>
                    <span>管理机构</span>
                    <span>2018-09-03</span>
                </div>
            </div>
        </router-link>
    </div>
  </div>
</template>

<script>
import { Navbar, TabItem } from "mint-ui";

export default {
  name: "news",
  components: {
    Navbar,
    TabItem
  },
  data() {
    return {
      selected: "1",
      showBb: "0"
    };
  },
  mounted() {},

  methods: {
    goback() {
      this.$router.go(-1);
    },
    getC(i) {
      this.showBb = i;
    }
  }
};
</script>

<style lang="less" scoped>
#news {
  .navber {
    .navber-left {
      width: auto;
    }
    .navber-center {
      line-height: 0.88rem;

      .new,
      .notic {
        display: inline-block;
        height: 0.88rem;
        color: #999;
        font-size: 0.36rem;
      }
      .borderB {
        border-bottom: 2.5px solid #dc5050;
        color: #dc5050;
      }
      :first-child {
        margin-right: 0.36rem;
      }
    }
  }
  .newCont {
    padding: 0.88rem 0.4rem 0;
    .newContB {
      display: flex;
      align-items: center;
      padding: 0.3rem 0;
      border-bottom: 1px solid #e8e8e8;
      .news-left {
        padding-right: 0.56rem;
        p {
          text-overflow: -o-ellipsis-lastline;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          line-clamp: 2;
          -webkit-box-orient: vertical;
          line-height: 0.4rem;
          font-size: 0.3rem;
          color: #333;
        }
        span {
          color: #999;
          font-size: 0.24rem;
          margin-right: 0.26rem;
          margin-top: 0.2rem;
          display: inline-block;
        }
      }
      .news-right {
        height: 1.6rem;
        img {
          width: auto;
          height: 1.6rem;
        }
      }
      .notic-left {
        p {
          line-height: 0.4rem;
          font-size: 0.3rem;
          color: #333;
        }
        span {
          color: #999;
          font-size: 0.24rem;
          margin-right: 0.26rem;
          margin-top: 0.2rem;
          display: inline-block;
        }
      }
    }
  }
}
</style>
