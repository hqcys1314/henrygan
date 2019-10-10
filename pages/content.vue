<template>
  <div class="container">
     <headNav :pageStep="pageStep" @jumpStep="jumpStep" @jumpStepR="jumpStepR"></headNav>
     <contentLayout :imgList="imgList" type="img" @big="big"></contentLayout>
     <div class="bigImgMc" v-show="bigImgShow"></div>
     <div class="bigImg" v-show="bigImgShow">
        <p class="close"><img src="@/assets/common/img/close.png" alt="" v-on:click="close"></p>
        <div class="jt jtLeft" @click="prev"></div>
        <div class="conImg"  :style="{'margin-top':topv}" ref="topInfo">
          <img :src="bigImgUrl" alt="" >
        </div>
       <div class="jt jtRight" @click="next"></div>

     </div>
  </div>
</template>

<script>
import headNav from '~/components/headNav.vue'
import contentLayout from '~/components/contentLayout.vue'

export default {
  data(){
    return{
      pageStep:'COMMERCIAL',
      imgList:[],
      bigImgShow:false,
      bigImgUrl:'',
      topv:'50%',
      nowIndex:'0',
    }
  },
  created(){
    this.pageStep=this.$route.query.step;
    this.imgList=[{"start_time":"2019-05-23 00:00:00","image_link":"https://facebank-static.oss-cn-hangzhou.aliyuncs.com/facebank/mic/test/1565338566094partnerInvitation.html","goal":"","shareicon":"","image_url":"https://static.facebank.cn/static/webFront/index2018/img/banner.jpg","bannertitle":"合伙人邀请攻略","end_time":"","weight":"1","sharetitle":"合伙人邀请攻略","operationtype":"wap","shareurl":"","sharecontent":""},{"image_link":"https://cms.facebank.cn/timeDepositAsk.html","goal":"","shareicon":"","image_url":"https://facebank-static.oss-cn-hangzhou.aliyuncs.com/facebank/mic/test/15619517759183f3b1078d9461b8355402f4b497eeb1.jpg","bannertitle":"月月笑常见问题","weight":"3","sharetitle":"","operationtype":"wap","shareurl":"","sharecontent":""},{"image_link":"https://cms.facebank.cn/notify201905301310.html","goal":"","shareicon":"","image_url":"https://facebank-static.oss-cn-hangzhou.aliyuncs.com/facebank/mic/test/1559540647509回款.jpg","bannertitle":"回款为什么第二个工作日才到账","weight":"5","sharetitle":"","operationtype":"wap","shareurl":"","sharecontent":""},{"image_link":"https://cms.facebank.cn/daliangshangongyi.html","goal":"","shareicon":"","image_url":"https://facebank-static.oss-cn-hangzhou.aliyuncs.com/facebank/mic/test/1557997698757公益轮播图.jpg","bannertitle":"关注大凉山背后的孩子们","weight":"5","sharetitle":"","operationtype":"wap","shareurl":"","sharecontent":""},{"image_link":"https://cms.facebank.cn/oneMinute.html","goal":"","shareicon":"","image_url":"https://facebank-static.oss-cn-hangzhou.aliyuncs.com/facebank/mic/test/1559791057524一分钟了解笑脸轮播图.jpg ","bannertitle":"一分钟了解笑脸金融","weight":"6","sharetitle":"","operationtype":"wap","shareurl":"","sharecontent":""}];
  },
  components: {
    headNav,contentLayout
  },
  methods:{
    prev(){
      this.bigImgUrl=this.imgList[(this.nowIndex-1)>=0?(this.nowIndex-1):0].image_url;
      this.calTopV();
      if(this.nowIndex-1>=0) this.nowIndex--;

},
    next(){
      this.bigImgUrl=this.imgList[(this.nowIndex*1+1<this.imgList.length)?(this.nowIndex*1+1):(this.imgList.length-1)].image_url;
      this.calTopV();
      if(this.nowIndex*1+1<this.imgList.length)  this.nowIndex++;
    },
    jumpStep(step) { // 路由
      this.$router.push({
        path: '/content',
        query: {
          step: step
        }
      })
      this.pageStep = step
    },
    jumpStepR(step) { // 路由
      this.$router.push({
        path: '/detail',
        query: {
          step: step
        }
      })
      this.pageStep = step
    },
    big(url,index){
      this.bigImgUrl=url;
      this.nowIndex=index;
      this.calTopV();
      this.bigImgShow=true;
    },
    calTopV(){
      let me = this;
      this.$nextTick(function () {
        me.topv =-me.$refs.topInfo.clientHeight/2+'px';
      })
    },
    close(){
      this.bigImgShow=false;
    }
  },
  watch:{
    '$route' (to,from) {
      this.pageStep = to.query.step
    }
  }
}
</script>

<style lang="less">
  .container {
    margin: 0px auto;
    width: 980px;
    .bigImgMc{
      position: fixed;z-index: 1;
      top: 0;left: 0;
      opacity: 0.9;
      width: 100%;
      height: 100%;
      background-color: #111;
    }
    .bigImg{
      position: fixed;z-index: 2;
      top: 0;left: 0; width: 100%;
      height: 100%;
      .close{text-align: right;margin-top: 10px;margin-right: 10px;}
      .conImg{
        width: 1000px;text-align: center;
        top: 50%;position: fixed;    left: 50%;
        margin-left: -500px;
        img{width: 100%;}
      }
      .jt{background: url(../assets/common/img/arrow.png);
        position: fixed;z-index: 3;
        width: 28px;
        height: 10px;
        top: 50%;
        z-index: 9999;}
      .jtLeft{left: 10px;}
      .jtRight{right: 10px;background-position: 0 -11px;}
    }
  }
</style>
