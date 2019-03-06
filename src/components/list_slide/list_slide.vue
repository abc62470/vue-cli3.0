<template>
    <div class="listSlide">
      <div class="titleG notGo list" 
      :style="{transform: translate}" 
      @touchstart="touchStart" 
      @touchmove="touchMove" 
      @touchend="touchEnd">
        <div class="titleG-left">{{list.name}}</div>
        <div class="titleG-right">
          {{list.day}}天未拜访
        </div>
        <div class="titleG-bottom">
          <div class="tag" v-for="(tagD, tagI) in list.tag.split(',')">{{tagD}}</div>
        </div>
      </div>
      <div class="btn" ref="funBtn">
        <div class="btn-priority">
          置顶
        </div>
        <div class="btn-del">
          删除
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "setting",
  data() {
    return {
      isOpen: false,
      isScroll: true,
      isTouchMove: true,
      htmlRem: 0,
      funBtnW: 0,
      stX: 0,
      stY: 0,
      moveX: 0,
      disX: 0,
      endX: 0,
      translate: 'translateX(0)'
    }
  },
  props:[
      'list'
  ],
  created() {
    console.log(this);
    this.$nextTick(() => {
      this.htmlRem = document.getElementsByTagName('html')[0];
      this.htmlRem = parseFloat(parseFloat(this.htmlRem.style.fontSize).toFixed(4));
      this.funBtnW = this.$refs.funBtn.offsetWidth;
      this.funBtnW = this.toRem(this.funBtnW);
    })
  },
  methods: {
    // 转换rem单位
    toRem(num) {
      typeof num != 'number' ? parseFloat(num) : '';
      return parseFloat((num / this.htmlRem).toFixed(4));
    },
    touchStart(ev) {
      ev = ev || event;
      if (ev.touches.length != 1) {
        return;
      }
      this.stX = ev.touches[0].clientX;
      this.stY = ev.touches[0].clientY;
      console.log(ev);
    },
    touchMove(ev) {
      ev = ev || event;
      if (ev.touches.length != 1) {
        return;
      }
      var isLeftTouch = ev.touches[0].clientX < this.stX;

      // touchMove首次执行事件
      if (this.isTouchMove) {
        this.isTouchMove = false;
        this.isScroll = Math.abs(this.stX - ev.touches[0].clientX) < Math.abs(this.stY - ev.touches[0].clientY);
      }

      //判断是否垂直滚动
      if (this.isScroll) {
        return;
      } else {
        ev.preventDefault();
      }
      if (!this.isOpen) {
        // 左滑动
        if (isLeftTouch) {
          this.moveX = this.stX - ev.touches[0].clientX;
          this.disX = this.toRem(this.moveX);
          this.translate = `translateX(-${this.disX}rem)`;
        } else{
          !this.isOpen ? this.disX = 0 : '';
        }
      } else {
        if (this.isOpen) {
          // 右滑动
          if (!isLeftTouch) {
            this.moveX = ev.touches[0].clientX - this.stX;
            this.disX = this.funBtnW - this.toRem(this.moveX);
            this.translate = `translateX(-${this.disX}rem)`;
          }
        }
      }
    },
    touchEnd(ev) {
      ev = ev || event;
      if (ev.changedTouches.length != 1) {
        return;
      }
      this.endX = ev.changedTouches[0].clientX;
      this.endX = this.toRem(this.endX);
      // 判断侧滑长度是否超过功能按钮/2
      if (this.disX > this.funBtnW / 2) {
        this.isOpen = true;
        this.disX = this.funBtnW;
      } else {
        this.isOpen = false;
        this.disX = 0;
      }
      this.translate = `translateX(-${this.disX}rem)`;
      this.isTouchMove = true;
    }
  },
};
</script>
<style lang="less" scoped>
@import '../../styles/mixin.less';
.listSlide{
  position: relative;
  overflow: hidden;
  &:last-child{
    .titleG{
      border-bottom: none;
    }
  }
  .titleG{
    padding-left: 0;
    padding-right: 0;
    &.title{
      height: 1.16rem;
    }
    &.list{
      transform: translateX(0rem);
      position: relative;
      z-index: 2;
      .setPLR();
      padding-top: 0.36rem;
      padding-bottom: 0.36rem;
      height: auto;
      flex-wrap: wrap;
      transition: transform 0.1s linear;
      /* &:after{
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        display: inline-block;
        height: 100%;
        width: 0.4rem;
        background: #fff;
        transform: translateX(100%);
        border-bottom: 1px solid #fff;
      }; */
      .titleG-left{
        color: #525252;
      }
      .titleG-right{
        font-size: 0.26rem;
        color: #da4040;
      }
      .titleG-bottom{
        width: 100%;
        margin-top: 0.27rem;
        .tag{
          display: inline-block;
          margin-right: 0.2rem;
          padding: 0.08rem 0.15rem;
          color: #d49696;
          font-size: 0.24rem;
          background: #ffeded;
        }
      }
    }
  }
  .btn{
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    display: flex;
    height: 100%;
    .btn-priority, .btn-del{
      display: flex;
      align-items: center;
      padding: 0 0.44rem;
      font-size: 0.34rem;
      color: #fff;
    }
    .btn-priority{
      background: #ffc36d;
    }
    .btn-del{
      background: #dd5959;
    }
  }
}
</style>




