<template>
  <div class="menu">
    <router-link to="/" class="menu-item menu-home">
      <i class="item-icon"></i>
      <span class="item-text">首页</span>
    </router-link>
    <router-link to="/message" class="menu-item menu-service">
      <i class="item-icon"></i>
      <span class="item-text">消息</span>
    </router-link>
    <a href="/cart/index" class="menu-item menu-shop">
      <i class="item-icon"></i>
      <span class="item-text">搜索</span>
    </a>
    <router-link to="/personal" class="menu-item menu-user">
      <i class="item-icon"></i>
      <span class="item-text">我的</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Tabbar',
  data(){
    return {
    }
  }
}
</script>

<style scoped lang="less">
  .menu {
      position: fixed;
      z-index: 100;
      left: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      width: 100%;
      height: 1rem;
      font-size: 0;
      background: #fff;
      border-top: 1px solid #e5e5e5;
      .menu-item {
          flex: 1;
          height: 100%;
          text-align: center;
          &.menu-home {
              .item-icon {
                  background-image: url('./img/icon_home.png');
              }
          }
          &.menu-service {
              .item-icon {
                  background-image: url('./img/icon_service.png');
              }
          }
          &.menu-shop {
              .item-icon {
                  background-image: url('./img/icon_search.png');
              }
          }
          &.menu-user {
              .item-icon {
                  background-image: url('./img/icon_user.png');
              }
          }
          &.active {
              &.menu-home {
                  .item-icon {
                      background-image: url('./img/icon_home_active.png');
                  }
              }
              &.menu-service {
                  .item-icon {
                      background-image: url('./img/icon_service_active.png');
                  }
              }
              &.menu-shop {
                  .item-icon {
                      background-image: url('./img/icon_search_active.png');
                  }
              }
              &.menu-user {
                  .item-icon {
                      background-image: url('./img/icon_user_active.png');
                  }
              }
              .item-text {
                  color: #cc1625;
              }
          }
          .item-icon {
              display: inline-block;
              width: 0.45rem;
              height: 0.68rem;
              background-size: 100%;
              background-position: 0 center;
              background-repeat: no-repeat;
          }
          .numb,.numb_my,.numb_service{
              min-width: 0.3rem;
              background: #ac0e12;
              border-radius: 0.7rem;
              display: inline-block;
              position: absolute;
              top: 0.1rem;
              right: 2.4rem;
              color: #fff;
              font-size: 0.23rem;
              text-align: center;
              line-height: 0.3rem;
              padding: 0;
          }
          .numb_service{
              right: 4.35rem;
              top: 0.1rem;
          }
          .item-text {
              display: block;
              font-size: 0.22rem;
              line-height: 1;
              color: #7f7f7f;
          }
      }
  }
</style>
