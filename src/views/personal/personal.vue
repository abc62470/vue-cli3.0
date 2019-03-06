<template>
  <div id="about">
    <div class="navber" :class="{ active: isScroll }">
        <div class="navber-left">我的</div>
        <div class="navber-center"></div>
        <div class="navber-right" @click="setting">设置</div>
    </div>
		<div class="mine">
			<div class="head">
				<img src="./images/headPortrait.png" alt="">
				<div class="headMsg">
					<p>HY13711323974</p>
					<i>苏亦菲</i>
					<span>业务员</span>
				</div>
			</div>
			<div class="clientNum">
				<p class="myClientNum">我的客户数量</p>
				<div class="num">
					<div class="numLeft">
						<p class="gross">178</p>
						<span>总客户量</span>
					</div>
					<div class="numRight">
						<p class="gross">38</p>
						<span>待跟进的</span>
					</div>
				</div>
				<div class="numMsg">
					<div class="numMsgBox">
						<p>正在审核</p>
						<p>39</p>
					</div>
					<div class="numMsgBox">
						<p>续费</p>
						<p>3</p>
					</div>
					<div class="numMsgBox">
						<p>补充资料</p>
						<p>1</p>
					</div>
					<div class="numMsgBox">
						<p>审核拒绝</p>
						<p>56</p>
					</div>
					<!-- <div class="numMsgBox">
						<p>回收</p>
						<p>20</p>
					</div> -->
				</div>
			</div>
			<div class="clientNum">
				<p class="myClientNum">我的钱包</p>
				<div class="num">
					<div class="numLeft">
						<p class="account">1789</p>
						<span>今日到账</span>
					</div>
					<div class="numRight">
						<p class="account">5690</p>
						<span>本月到账</span>
					</div>
				</div>
				<div class="numMsg">
					<div class="numMsgBox wallet">
						<p>单量</p>
						<p>139</p>
					</div>
					<div class="numMsgBox wallet">
						<p>词数</p>
						<p>34</p>
					</div>
					<div class="numMsgBox wallet">
						<p>本年到账</p>
						<p>12458</p>
					</div>
					<div class="numMsgBox wallet">
						<p>累计到账</p>
						<p>346589</p>
					</div>
				</div>
			</div>
		</div>
  </div>
</template>
<script>
export default {
  name: 'about',
  data() {
  	return {
  		isScroll: false
  	}
  },
  created() {
  	window.addEventListener('scroll', this.handleScroll);
  	this.getData();
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
  	getData() {
  		// console.log(getData);
  		// this.$axios.post('/my/my-home', {}).then(res => {
  		// 	console.log(res);
  		// 	this.info = {
  		// 		...res.data.params
  		// 	}
  		// });
		},
	setting() {
		this.$router.push({
			path:'/setting'
		})
	},
	handleScroll() {
		console.log('aa');
		var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
		scrollTop > 0 ? this.isScroll = true : this.isScroll = false;
	}
  }
}
</script>
<style lang="less" scoped>
#about{
	/*min-height: 100%;*/
	background:#f4f4f4 url('./images/bgImg.png') 0 0 no-repeat;
	background-size: 100% auto;
	padding-left: 0.3rem;
	padding-right: 0.3rem;
	padding: 0.88rem 0.3rem 0.4rem;
}
.navber{
	background: none;
	border: none;
	color: #fff;
	transition: all 0.1s linear;
}

.navber .navber-left{
	width: 0.84rem;
	font-size: 0.38rem;
	padding-left: 0.35rem;
}
.navber .navber-right{
	font-size: 0.28rem;
	padding-right: 0.28rem;
}
.navber.active{
	background: rgba(255, 255, 255, 0.95);
	color: #333;
}
.mine{
}
/* 头部 */
.mine .head{
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	padding: 0.4rem 0 0.58rem;
}
.mine .head img{
	width: 1.14rem;
	border-radius: 5rem;
	background: #f5f5f5;
	border: 2px solid #f5f5f5;
	margin-right: 0.28rem;
}
.headMsg{
	color: #fff;
}
.headMsg p{
	font-size: 0.4rem;
	margin-bottom: 0.13rem;
}
.headMsg i{
	font-size: 0.3rem;
	margin-right: 0.13rem;
	vertical-align: middle;
}
.headMsg span{
	font-size: 0.2rem;
	background: #efbc5c;
	border-radius: 0.5rem;
	padding: 0.06rem 0.12rem;
  display: inline-block;
}
/* 我的客户数量 */
.clientNum{
	border-radius: 0.1rem;
	background: #fff;
	margin-bottom: 0.2rem;
}
.clientNum:nth-last-of-type(n){
	margin-bottom: 0;
}
.myClientNum{
	padding: 0.25rem 0;
	text-align: center;
	font-weight: 600;
}
.num{
	text-align: center;
	border-top: 1px solid #eee;
	border-bottom: 1px solid #eee;
	padding: 0.5rem 0;
}
.num .gross{
	color: #dd5959;
	font-size: 0.57rem;
	margin-bottom: 0.17rem;
}
.num span{
	font-size: 0.28rem;
	color: #666;
}
.num .numLeft{
	width: 50%;
	display: inline-block;
}
.num .numRight{
	width: 50%;
	display: inline-block;
}
.numMsg {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
}
.numMsg .numMsgBox{
	display: inline-block;
	width: 25%;
	text-align: center;
	margin: 0.28rem 0;
	border-right: 1px solid #eee;
}
.numMsgBox:last-child{
	border-right: none;
}
.numMsgBox p:first-child{
	font-size: 0.22rem;
	color: #999;
	margin-bottom: 0.12rem;
}
.numMsgBox p:last-child{
	font-weight: 600;
}

.num .account{
	color: #f5ae48;
	font-size: 0.57rem;
	margin-bottom: 0.17rem;
}
.numMsg .wallet{
	width: 25%;
}
</style>
