<template>
  <div class="bg">
    <div class="container">
       <headNav :pageStep="pageStep" :titleList="titleList" @jumpStep="jumpStep" @jumpStepR="jumpStepR"></headNav>
      <div class="pbl"  ref="contentLayout">
        <contentLayout :imgList="imgList" type="img" @big="big"></contentLayout>
      </div>
       <div class="bigImgMc" v-show="bigImgShow"></div>
       <div class="bigImg" v-show="bigImgShow">
          <p class="close"><img src="@/assets/common/img/close.png" alt="" v-on:click="close"></p>
          <div class="jt jtLeft" @click="prev"></div>
          <div class="conImg" ref="topInfo">
            <img :src="bigImgUrl" alt="" >
          </div>
         <div class="jt jtRight" @click="next"></div>

       </div>
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
      titleList:[],
      pageNum:'1',
      id:'',
      isImgShow:true,

    }
  },
  created(){
    this.pageStep=this.$route.query.step;
    this.$axios.get('/api/media/getMediaType').then((res)=>{
      if(res.data.code==200) {
        this.titleList =res.data.data;
        this.id= this.titleList.filter(item => {return item.media_type==this.pageStep;})[0].id;
        this.getImgList(this.id);
      }
    }).catch(function(err) {
      console.log(err);
    })


  },
  mounted(){
    this.$refs.contentLayout.addEventListener('scroll', ()=>{
      var domHeight=this.$refs.contentLayout.getElementsByTagName('ul')[0].clientHeight;
      var scrollTop=this.$refs.contentLayout.scrollTop;
      var seeHeight=this.$refs.contentLayout.clientHeight;
      if(domHeight-scrollTop<seeHeight*1+0){
        if(!this.isImgShow) return;
        this.getImgList(this.id);
      }
    })
  },
  components: {
    headNav,contentLayout
  },
  methods:{
    getImgList(id){
      this.isImgShow=false;
      var params = {"mediaTypeId":id,"page":this.pageNum};
      this.$axios.post('/api/media/getPicture',  params).then((res)=>{
        if(res.data.code==200) {
          if(res.data.data&&res.data.data.length>0){
            this.isImgShow=true;
            this.pageNum++;
            this.imgList =this.imgList.concat(res.data.data);
          }else {
            this.isImgShow=false;
          }
        }else{
          this.isImgShow=false;
        }
      }).catch(function(err) {
        console.log(err);
      })
    },
    prev(){
      this.bigImgUrl=this.imgList[(this.nowIndex-1)>=0?(this.nowIndex-1):0].url;
      //this.calTopV();
      if(this.nowIndex-1>=0) this.nowIndex--;

},
    next(){
      this.bigImgUrl=this.imgList[(this.nowIndex*1+1<this.imgList.length)?(this.nowIndex*1+1):(this.imgList.length-1)].url;
      //this.calTopV();
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
      //this.calTopV();
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
    },
    pageStep(){
      if(!this.pageStep) this.pageStep="COMMERCIAL";
      this.imgList=[];
      this.pageNum=1;
      var item= this.titleList.filter(item => {return item.media_type==this.pageStep;});
      if(item[0]&&item[0]!='') this.id=item[0].id;
      this.getImgList(this.id);
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
      opacity: 0.3;
      width: 100%;
      height: 100%;
      background-color: #946f6f;

    }
    .bigImg{
      position: fixed;z-index: 2;
      top: 0;left: 0; width: 100%;
      height: 100%;      background-color: #000000;

      .close{text-align: right;margin-top: 10px;margin-right: 10px;
        img{width: 26px;}
      }
      .conImg{
        width: 1000px;text-align: center;
        top: 50%;position: fixed;    left: 50%;
        margin-left: -500px;
        transform:translateY(-50%);
        -ms-transform:translateY(-50%); /* IE 9 */
        -moz-transform:translateY(-50%); /* Firefox */
        -webkit-transform:translateY(-50%); /* Safari 和 Chrome */
        -o-transform:translateY(-50%); /* Opera */
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
