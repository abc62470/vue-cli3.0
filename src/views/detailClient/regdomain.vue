<template>
  <div id="regdomain">
    <v-navber title="注册域名"></v-navber>
    <div class="registe-cont">
        <div class="registe-block">
            <div class="reg-top">
                <span>深圳市世纪天游科技有限公司</span>
                <span class="reg-time">2010-01-23</span>
            </div>
            <div class="reg-bottom">
                <p class="reg-date">注册域名：http://www.3366.com/</p>
                <p class="reg-kind">状态：正常</p>
            </div>
        </div>
        <div class="registe-block">
            <div class="reg-top">
                <span>深圳市世纪天游科技有限公司</span>
                <span class="reg-time">2010-01-23</span>
            </div>
            <div class="reg-bottom">
                <p class="reg-date">注册域名：http://www.3366.com/</p>
                <p class="reg-kind">状态：正常</p>
            </div>
        </div>
        <div class="registe-block">
            <div class="reg-top">
                <span>深圳市世纪天游科技有限公司</span>
                <span class="reg-time">2010-01-23</span>
            </div>
            <div class="reg-bottom">
                <p class="reg-date">注册域名：http://www.3366.com/</p>
                <p class="reg-kind">状态：正常</p>
            </div>
        </div>
        <div class="registe-block">
            <div class="reg-top">
                <span>深圳市世纪天游科技有限公司</span>
                <span class="reg-time">2010-01-23</span>
            </div>
            <div class="reg-bottom">
                <p class="reg-date">注册域名：http://www.3366.com/</p>
                <p class="reg-kind">状态：正常</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import vNavber from "@/components/navber/navber.vue";
export default {
  name: "regdomain",
  components: {
    vNavber
  },
  created() {
    this.menu();
  },
  methods: {
    menu() {
      window.scrollTo(0, 0);
    },
  }
};
</script>
<style lang="less" scoped>
    .registe-cont{
        padding: 0.88rem 0.4rem 0;
        .registe-block{
            padding: 0.36rem 0;
            border-bottom: 1px solid #eee;
            .reg-top{
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 0.28rem;
                .reg-time{
                    font-size: 0.22rem;
                    color: #999;
                }
            }
            .reg-bottom{
                .reg-date,.reg-kind{
                    font-size: 0.26rem;
                    color: #666;
                    margin-bottom: 0.16rem;
                }
                .reg-kind{
                    margin: 0;
                }
            }
        }
    }
</style>




