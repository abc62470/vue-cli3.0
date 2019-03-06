<template>
  <div id="detailClient">
    <!-- <v-navber title="客户详情"></v-navber> -->
    <div class="navber">
      <div class="navber-left" @click="goback">
        <img src="./images/back.png">
      </div>
      <div class="navber-center">客户详情</div>
      <div class="navber-right"></div>
    </div>
    <div class="dtl-cont">
      <div class="head-red"></div>
      <div class="dtl-client">
        <div class="dtl-tit">
          <div class="detail-logo">
            <img src="./images/client-logo.png" alt>
          </div>
          <span class="dtl-txt">广东邮政EMS</span>
          <span class="dtl-status">跟进中</span>
        </div>
        <!-- <div class="hr"></div> -->
        <div class="dtl-tabbar">
          <span
            class="tab-bar"
            :class="{'tab-active': tabbarC == 'msg'}"
            @click="tabbar('msg')"
          >基本信息</span>
          <span
            class="tab-bar"
            :class="{'tab-active': tabbarC == 'word'}"
            @click="tabbar('word')"
          >合作的词</span>
          <span
            class="tab-bar"
            :class="{'tab-active': tabbarC == 'status'}"
            @click="tabbar('status')"
          >客户状态</span>
        </div>
        <!-- 基本信息 -->
        <div class="contact" v-if="tabbarC == 'msg'">
          <!-- 联系人资料 -->
          <div class="contact-cont">
            <div class="contact-til">
              <span class="contact-txt">联系人资料</span>
              <router-link to="/addlinkman">
                <div class="addclient">
                  <img src="./images/addInclude.png" alt>
                  <span>新增联系人</span>
                </div>
              </router-link>
            </div>
            <div class="contact-msg">
              <div class="contact-name">
                <div>
                  <span>联系人名称</span>
                  <!-- <div>
                                    <span>展开更多</span>
                                    
                                </div>
                                <div>
                                    <span>收起</span>
                                    
                  </div>-->
                </div>
                <p>黄东平</p>
              </div>
              <div class="contact-way">
                <span>电话</span>
                <p>13722545587</p>
                <span>微信</span>
                <p>371948@inm</p>
                <span>邮箱</span>
                <p>y2edis@foxmail.com</p>
              </div>
              <div class="contact-url">
                <div class="url-left">
                  <span>地址</span>
                  <p>广州市越秀区五羊邨大厦b栋整层</p>
                </div>
                <img src="./images/daohang.png" alt>
              </div>
              <span>网址</span>
              <p>www.hhhiasj.com</p>
            </div>
          </div>
          <!-- 商域/域名信息 -->
          <div class="trademark">
            <div class="trademark-til">商域/域名信息</div>
            <div class="trademark-btn">
              <router-link to="/regtrademark">
                <div class="btn-trademark">
                  <img src="./images/trademark-logo.png" alt>
                  <p>注册商标</p>
                </div>
              </router-link>

              <router-link to="/regdomain">
                <div class="btn-domain">
                  <img src="./images/domain-logo.png" alt>
                  <p>注册域名</p>
                </div>
              </router-link>
            </div>
          </div>
          <!-- 工商信息 -->
          <div class="busy-inform">
            <div class="busy-til">工商信息</div>
            <div class="busy-cont">
              <div class="busy-msg busy-bg">
                <span class="busy-left">工商信息</span>
                <span>中国邮政速递物流股份有限公司</span>
              </div>
              <div class="busy-msg">
                <span class="busy-left">成立时间</span>
                <span>2015-04-08</span>
              </div>
              <div class="busy-msg busy-bg">
                <span class="busy-left">注册资本</span>
                <span>2000万</span>
              </div>
              <div class="busy-msg">
                <span class="busy-left">法人代表</span>
                <span>曾俊建</span>
              </div>
            </div>
          </div>
        </div>
        <!-- 合作时间 -->
        <div class="word" v-if="tabbarC == 'word'">
          <div class="titleG input">
            <div class="title-left">中国邮政EMS</div>
          </div>
          <div class="titleG input">
            <div class="title-left">邮政EMS</div>
          </div>
          <div class="titleG input">
            <div class="title-left">邮政EMS物流</div>
          </div>
        </div>
        <!-- 客户状态 -->
        <div class="client-status" v-if="tabbarC == 'status'">
          <div class="status">
            <span class="time">2018-9-27</span>
            <p class="status-txt">跟进中</p>
          </div>
          <div class="status">
            <span class="time">2018-9-27</span>
            <p class="status-txt">已交款</p>
          </div>
          <div class="status">
            <span class="time">2018-9-27</span>
            <p class="status-txt">已交款</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 跟进状态 -->
    <div class="fol-status" v-if="status == '1'">
      <div class="fol-opiton">
        <div class="fol-change">
          <span
            v-for="(target,index) in tagList"
            :key="index"
            :class="{active : flag == index}"
            @click="chose(target.name,index)"
          >{{target.name}}</span>
        </div>
        <div class="fol-btn">
          <p @click="folStatus('0')">取消</p>
          <p @click="folStatus('0')" class="confirm">确定</p>
        </div>
      </div>
    </div>
    <!-- 发送 -->
    <div class="fol-status" v-if="status == '2'">
      <div class="fol-opiton">
        <div class="fol-change fol-send">
          <div class="message">
            <img src="./images/message.png" alt>
            <p>短信</p>
          </div>
          <div class="email">
            <img src="./images/email.png" alt>
            <p>邮件</p>
          </div>
        </div>
        <div class="fol-btn send">
          <p @click="folStatus('0')">取消</p>
        </div>
      </div>
    </div>

    <!-- 底部按钮 -->
    <div class="bottom-bar">
      <div class="bar-btn" @click="folStatus('1')">
        <img src="./images/status.png" alt>
        <p>选择状态</p>
      </div>
      <div class="bar-btn" @click="folStatus('2')">
        <img src="./images/send.png" alt>
        <p>发送</p>
      </div>
      <!-- <router-link to="/clientFol"> -->
      <div class="bar-btn" @click="clientFol">
        <img src="./images/follow.png" alt>
        <p>客户跟进</p>
      </div>
      <!-- </router-link> -->
    </div>
  </div>
</template>
<script>
import vNavber from "@/components/navber/navber.vue";

export default {
  name: "detailClient",
  components: {
    vNavber
  },
  data() {
    return {
      tabbarC: "msg",
      tagList: [
        { name: "跟进中" },
        { name: "已缴费" },
        { name: "未缴费" },
        { name: "打电话" },
        { name: "已拜访" },
        { name: "有意向" },
        { name: "签单" },
        { name: "未打电话" },
        { name: "未拜访" },
        { name: "已发资料" },
        { name: "无意向" }
      ],
      flag: 0,
      status: "0"
    };
  },
  created() {},
  methods: {
    tabbar(i) {
      console.log(i);
      this.tabbarC = i;
    },
    chose(t, i) {
      this.flag = i;
    },
    folStatus(i) {
      this.status = i;
    },
    clientFol() {
      this.$router.push({
        path: "/clientFol"
      });
    },
    goback() {
      this.$router.push({
        path: '/'
      })
    }
  }
};
</script>
<style lang="less" scoped>
#detailClient {
  position: absolute;
  height: 100%;
  width: 100%;
  background: #f4f4f4;
}
.navber {
  background: linear-gradient(left, #de6868, #da4040);
  color: #fff;
  border-bottom: none;
}
.dtl-cont {
  padding: 0.88rem 0 1.3rem;
  .head-red {
    height: 1.2rem;
    background: linear-gradient(left, #de6868, #da4040);
  }
  .dtl-client {
    // padding: 0.4rem;
    .dtl-tit {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0.2rem;
      padding: 0.95rem 0.4rem 0.4rem;
      background: #fff;
      position: relative;
      .detail-logo {
        width: 1.18rem;
        height: 1.18rem;
        background: #fff;
        border-radius: 0.1rem;
        border: 1px solid #eee;
        position: absolute;
        top: 0%;
        left: 0.4rem;
        transform: translate(0, -50%);
        overflow: hidden;
        img {
          height: 100%;
          width: auto;
        }
      }

      .dtl-txt {
        font-size: 0.44rem;
        color: #333;
      }
      .dtl-status {
        font-size: 0.28rem;
        border-radius: 0.05rem;
        background: #ffeded;
        padding: 0.1rem 0.15rem;
        color: #d49696;
      }
    }
    .dtl-tabbar {
      background: #fff;
      border-bottom: 1px solid #eee;
      .tab-bar {
        width: 33.3%;
        display: inline-block;
        text-align: center;
        position: relative;
        height: 1rem;
        line-height: 1rem;
        color: #3c3c3c;
      }
      .tab-active::after {
        content: "";
        width: 0.36rem;
        height: 0.03rem;
        background: #dd5959;
        display: inline-block;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%);
      }
    }
    // 基本信息
    .contact {
      padding: 0 0.4rem;
      background: #fff;
      .contact-cont {
        .contact-til {
          padding: 0.46rem 0 0.2rem;
          display: flex;
          justify-content: space-between;
          .contact-txt {
            font-weight: 600;
            font-size: 0.36rem;
          }
          .addclient {
            img {
              height: 0.22rem;
              margin-right: 0.1rem;
            }
            span {
              font-size: 0.28rem;
              color: #dd6161;
            }
          }
        }
        .contact-msg {
          
          span {
            font-size: 0.24rem;
            color: #999;
            padding-top: 0.25rem;
            display: inline-block;
          }
          p {
            font-weight: 600;
            color: #333;
            padding: 0.2rem 0 0.27rem;
            border-bottom: 1px solid #e8e9eb;
          }
          .contact-url {
            border-bottom: 1px solid #eee;
            display: flex;
            align-items: center;
            justify-content: space-between;
            p {
              border: none;
            }
            .url-left {
              display: inline-block;
            }
            img {
              display: inline-block;
              width: 0.48rem;
            }
          }
        }
      }
      .trademark {
        .trademark-til {
          font-weight: 600;
          font-size: 0.36rem;
          padding: 0.64rem 0;
          color: #333;
        }
        .trademark-btn {
          border: 1px solid #e8e9eb;
          .btn-trademark,
          .btn-domain {
            width: 50%;
            display: inline-block;
            background: #fafafc;
            border-right: 1px solid #e8e9eb;
            text-align: center;
            padding: 0.5rem 0;
            p {
              font-size: 0.24rem;
              color: #666;
              margin-top: 0.26rem;
            }
            img {
              height: 0.5rem;
            }
          }
          .btn-domain {
            border-right: none;
          }
        }
      }
      .busy-inform {
        margin-bottom: 0.4rem;
        .busy-til {
          padding: 0.68rem 0;
          font-weight: 600;
          font-size: 0.36rem;
          color: #333;
        }
        .busy-cont {
          border: 1px solid #e8e9eb;
          .busy-msg {
            padding: 0.3rem 0.27rem;
            border-bottom: 1px solid #eee;
            span {
              font-size: 0.28rem;
              color: #666;
            }
            .busy-left {
              color: #333;
              margin-right: 0.6rem;
            }
          }
          .busy-bg {
            background: #fafafc;
          }
          .busy-msg:last-child {
            border-bottom: none;
          }
        }
      }
    }
    // 合作时间
    .word {
      padding: 0 0.4rem;
      background: #fff;
      .titleG {
        padding: 0;
        height: 1.1rem;
        color: #3c3c3c;
      }
      .titleG:last-child {
        border-bottom: none;
      }
    }
    // 客户状态
    .client-status {
      padding: 0 0.4rem;
      background: #fff;
      .status {
        padding: 0.35rem 0;
        border-bottom: 1px solid #e8e9eb;
        span {
          color: #999;
          font-size: 0.26rem;
          margin-bottom: 0.28rem;
          display: inline-block;
        }
        p {
          color: #3c3c3c;
        }
       
      }
      .status:last-child {
        border-bottom: none;
      }
    }
  }
}
// 跟进状态选项
.fol-status {
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 160;
  .fol-opiton {
    background: #fff;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    .fol-change {
      padding: 0.64rem 0 0 0.4rem;
      display: inline-block;
      span {
        background: #f4f4f4;
        display: inline-block;
        border-radius: 0.5rem;
        color: #9c9eaa;
        margin-right: 0.3rem;
        margin-bottom: 0.55rem;
        font-size: 0.26rem;
        height: 0.6rem;
        line-height: 0.6rem;
        width: 1.44rem;
        text-align: center;
        border: none;
      }

      .active {
        background: #de6464;
        color: #fff;
      }
      .message {
        display: inline-block;
        margin-right: 0.6rem;
      }

      .email {
        display: inline-block;
      }
    }
    .fol-send {
      padding-bottom: 0.4rem;
      text-align: center;
      img {
        width: 0.97rem;
        margin-bottom: 0.2rem;
      }
      p {
        font-size: 0.26rem;
        color: #666;
      }
    }
    .fol-btn {
      width: 100%;
      border-top: 2px solid #ededed;
      padding: 0.3rem 0;
      p {
        width: 50%;
        display: inline-block;
        text-align: center;
        border-right: 1px solid #ddd;
        color: #c2c2c2;
      }
      .confirm {
        border-right: none;
        color: #de6464;
      }
    }
    .send {
      p {
        width: 100%;
        border-right: none;
        color: #666;
      }
    }
  }
}
.bottom-bar {
  box-shadow: 0rem -0.01rem 0.4rem #eee;
  border-top: 1px solid #eee;
  padding: 0.14rem 0;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #fff;
  .bar-btn {
    width: 33.3%;
    display: inline-block;
    text-align: center;
    height: 100%;
    img {
      height: 0.42rem;
      margin-bottom: 0.1rem;
    }
    p {
      font-size: 0.22rem;
      color: #666;
    }
  }
}
</style>
