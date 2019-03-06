<template>
  <div class="home">
    <div class="navber">
      <div class="navber-left">首页</div>
      <div class="navber-center"></div>
      <div class="navber-right">
        <img src="./images/qr.png">
      </div>
    </div>
    <div class="search">
      <img class="search-icon" src="./images/search.png">
      <input class="search-input" type="text" name="search" placeholder="搜索" disabled>
    </div>
    
    

    

    <div class="tabMenu">
      <router-link to="/search" class="tabMenu-item">
        <span class="item-img">
          <img src="./images/add_client.png">
        </span>
        <span class="item-text">添加客户</span>
      </router-link>
      <a href="#" class="tabMenu-item">
        <span class="item-img">
          <img src="./images/call.png">
        </span>
        <span class="item-text">Call客户</span>
      </a>
      <a href="#" class="tabMenu-item">
        <span class="item-img">
          <img src="./images/news.png">
        </span>
        <span class="item-text">拜访计划</span>
      </a>
      <a href="/news" class="tabMenu-item">
        <span class="item-img">
          <img src="./images/plan.png">
        </span>
        <span class="item-text">新闻公告</span>
      </a>
    </div>

    <div class="tabMenu">
      <router-link to="/search" class="tabMenu-item">
        <span class="item-img">
          <img src="./images/add_client.png">
        </span>
        <span class="item-text">添加客户</span>
      </router-link>
      <a href="#" class="tabMenu-item">
        <span class="item-img">
          <img src="./images/call.png">
        </span>
        <span class="item-text">Call客户</span>
      </a>
      <a href="#" class="tabMenu-item">
        <span class="item-img">
          <img src="./images/news.png">
        </span>
        <span class="item-text">拜访计划</span>
      </a>
      <a href="/news" class="tabMenu-item">
        <span class="item-img">
          <img src="./images/plan.png">
        </span>
        <span class="item-text">新闻公告</span>
      </a>
    </div>
    

    <div class="setBDB"></div>

    

    <div class="news">
      <div class="news-img">
        <img src="./images/text.png">
      </div>
      <div class="news-text scroll-box">
        <ul>
          <li>
            <a href="javascript:void(0);">顺丰.商标</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="hr"></div>

    <div class="client">
      <div class="client-content" v-for="(clientListD, clientListI) in clientList">
        <listSlide :list="clientListD"></listSlide>
      </div>
    </div>

  </div>
</template>

<script>
import listSlide from '@/components/list_slide/list_slide.vue';
export default {
  name: 'home',
  data() {
    return {
      clientList: [
        {
          name: '北京有明云软件股份有限公司',
          day: '4',
          tag: '跟进中,已交费,已置顶'
        },
        {
          name: '郑州有明云软件股份有限公司',
          day: '10',
          tag: '跟进中,催收款'
        },
        {
          name: '广州有明云软件股份有限公司',
          day: '50',
          tag: '跟进中'
        },
        {
          name: '广州有明云软件股份有限公司',
          day: '4',
          tag: '跟进中,已交费'
        }
      ]
    }
  },
  created() {
    
  },
  methods: {
    
  },
  components: {
    listSlide
  }
}
</script>
<style lang="less" scoped>
@import '../../styles/mixin.less';
.setBDB{
  .setPLR();
  &:after{
    content: '';
    display: block;
    height: 1px;
    background: #ededee;
  }
}
.home{
  .navber{
    border: none;
    .navber-left{
      width: auto;
      font-size: 0.38rem;
    }
    .navber-right{
      img{
        width: 0.44rem;
      }
    }
  }
  .search{
    .setPLR();
    position: relative;
    margin-top: 0.27rem;
    .search-icon{
      position: absolute;
      top: 50%;
      left: 0.65rem;
      transform: translateY(-50%);
      width: 0.33rem;
    }
    .search-input{
      .cleanDefStyle();
      width: 100%;
      height: 0.72rem;
      padding-left: 0.8rem;
      font-size: 0.3rem;
      background: #efefef;
      border-radius: 0.1rem;
    }
  }
  .tabMenu {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      padding-top: 0.6rem;
      .tabMenu-item {
          display: inline-block;
          width: 25%;
          margin-bottom: 0.6rem;
          text-align: center;
          .item-img {
              display: inline-block;
              width: 1.03rem;
              height: 1.03rem;
              margin-bottom: 0.2rem;
              font-size: 0;
              .autoImg();
          }
          .item-text {
              display: block;
              font-size: 0.26rem;
              color: #333;
          }
      }
  }
  .news {
    display: flex;
    align-items: center;
    height: 1.06rem;
    padding: 0 0.32rem;
    width: 100%;
    .news-img {
      box-sizing: content-box;
      height: 0.33rem;
      padding-right: 0.48rem;
      border-right: 1px solid #eeeeee;
      font-size: 0;
      display: flex;
      align-items: center;
      p{
        font-size: 0.3rem;
      }
      img{
        width: auto;
        height: 100%;
      }
    }
    .news-text {
      flex: auto;
      padding-left: 0.48rem;
      font-size: 0.3rem;
    }
    .scroll-box {
      height: 0.8rem;
      overflow: hidden;
      width: 100%;
      ul {
        list-style: none;
        width: 5rem;
        height: 100%;
        li {
          width: 100%;
          height: 0.8rem;
          line-height: 0.4rem;
          display: flex;
          align-items: center;
          padding-right: 0.05rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          a {
            height: 0.8rem;
            width: 95%;
            display: flex;
            align-items: center;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
          }
        }
      }
    }
    .news-icon {
      width: 0.13rem;
      font-size: 0;
      height: 100%;
      display: flex;
      align-items: center;
      .autoImg();
    }
  }
  .client{
    .client-content{
      position: relative;
        &:after{
        content: '';
        position: absolute;
        z-index: 2;
        bottom: 0;
        left: 0.32rem;
        right: 0.32rem;
        display: block;
        height: 1px;
        background: #ededee;
      }
      &:last-child:after{
          display: none;
        };
    }
  }
}
</style>

