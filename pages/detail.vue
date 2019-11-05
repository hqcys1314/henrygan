<template>
  <div class="bg">
  <div class="container">
    <headNav :pageStep="pageStep" :titleList="titleList" @jumpStep="jumpStep" @jumpStepR="jumpStepR"></headNav>
    <div class="h-contentText">
        <div class="mo" v-if="pageStep=='MAKING OF'">
          <contentLayout :imgList="imgList" type="vedio" @bigV="bigV"></contentLayout>
        </div>
        <div class="ct" v-if="pageStep=='CONTACT'">
          <p>MOBILE</p>
          <p>86-13681206226( BEIJING )</p>
          <p>&nbsp;</p>
          <p>E-MAIL</p>
          <p>hg325@mac.com</p>
          <p>hg@twoquarters.com</p>
        </div>
        <div class="pe" v-if="pageStep=='PROFILE'">
          <h1>HENRY GAN
          </h1>
          <div class="profile-icon">
            <img src="@/assets/common/img/profile-1.jpg" alt=""><br>
          </div>
          <p class="p1">&nbsp;</p>
          <p>Nationality:</p>
          <p>AMERICAN CHINESE</p>
          <p class="p1">&nbsp;</p>
          <p>Language:</p>
          <p>ENGLISH, CANTONESE AND MANDARIN</p>
          <p class="p1">&nbsp;</p>
          <p>Presently:</p>
          <p>K-KING PHOTOGRAPHY MEDIA Co.Ltd.--DIRECTOR OF PHOTOGRAPHY , PHOTOGRAPHER</p>
          <p>TWO QUARTERS Ltd.--CREATIVE DIRECTOR</p>
          <p class="p1">&nbsp;</p>
          <p>Biography:</p>
          <p>Graduated at The University of Southern California, started as a freelance photographer Los Angeles. Giving for the deep enthusiasm for photography, came back to Hong Kong after spending 8 years in the States, founded “Two Quarters Ltd.” in 1998 now bringing one of the upcoming photography & production service in Hong Kong. Pursuing the passion and professionalism in photography, started to explore the Main Land China market in the year of 2000. Through out the past years, had grown with the China commercial photography market. Especially this year , due to the Beijing Olympic, had served many mega Foreign and Chinse companies on their major campaigns.</p>
          <p>
            <span class="span1">TELECOM AND INFRASTRUCTURE:</span>
            <span class="span2"> PCCW, Heli Express Ltd. – Helicopters Hong Kong Ltd., Cathay Pacific Airways Ltd., Emperor Group, China Telecom, Tencent China</span>
          </p>
          <p>
            <span class="span1">PROPERTY:</span>
            <span class="span2">CITIC Pacific Ltd. Sun Hung Kai Properties Ltd.</span>
          </p>
          <p>
            <span class="span1">FOOD AND BEVERAGE:</span>
            <span class="span2">The Hong Kong Parkview, The Peninsula Hotels, Hardee’s (HK) Ltd., RBT, A.S. Watson Group, McDonald’s，Coca-Cola, Qing Dao Beer, Harbin Beer, YiLi, Kun Lun Shan</span>
          </p>
          <p>
            <span class="span1">FASHION AND ELECTRONIC:</span>
            <span class="span2">Lane Crawford, Giorgio Armani, Bvgari (HK) Ltd. Ports, Puma, Levis, Sony, Samsung, Motorola, Blackberry, Fuji Film, Omron, Kodak, LG, Haier, Founder PC, Anta, Adidas, Under Armour, Lotto, PRGR, Li Ning, 361, Jordan, Gore-Tex, Toread</span>
          </p>
          <p>
            <span class="span1">EWELLERY:</span>
            <span class="span2">JSotheby’s, DTC Diamond</span>
          </p>
          <p>
            <span class="span1">COSMETIC:</span>
            <span class="span2">VO5, Shiseido, Neiva</span>
          </p>
          <p>
            <span class="span1">OTHERS:</span>
            <span class="span2">Visa, Standard Chartered Bank, Mercedes Benz, Smart, Audi, VW, Nissan, Honda, Acura, Toyota, Mazda, Yokohama, Hong Qi Auto, Lamborghini Design, Top Degraaf MotoGP Team, Getty Images, etc.</span>
          </p>
        </div>
        <div class="ag" v-if="pageStep=='AGENT'">
          <p>
          CHINA:</p>
          <p>Twoquarters Production Ltd.</p>
          <p>403, Building 22, No.4 Workers Stadium</p>
          <p>Phone:+86-10-65006833</p>
          <p>www.twoquarters.com.cn</p>
          <p>&nbsp;</p>

          <p>TAIWAN:</p>
          <p>FX Films Co.,Ltd.</p>
          <p>2F.,No.34-1,Ln.280 Guangfu S.Rd., Da an Dist.,</p>
          <p>Taipei City 106,Taiwan(R.O.C)</p>
          <p>Phone:＋（886） 2 2821-8793</p>
          <p>&nbsp;</p>

          <p>GERMANY:</p>
          <p>MARLENE OHLSSON PHOTOGRAPHERS</p>
          <p>Sierichstrasse 20</p>
          <p>D-22301 Hamburg</p>
          <p>&nbsp;</p>

          <p>Germany</p>
          <p>Phone: +49 (0)40 – 401 40 50</p>
          <p>Fax: +49 (0)40 – 490 54 42</p>
          <p>Email: m@ohlsson.de</p>
          <p>www.ohlsson.de</p>
        </div>
    </div>
    <div class="bigVedioMc" v-if="bigVedioShow"></div>
    <div class="bigVedio" v-if="bigVedioShow">
      <p class="close"><img src="@/assets/common/img/close.png" alt="" v-on:click="close"></p>
      <div class="conImg" ref="topInfoDt">

          <div
            v-video-player:myVideoPlayer="playerOptions"
            :playsinline="playsinline"
            class="video-player-box vjs-big-play-centered"
            @play="onPlayerPlay($event)"
            @pause="onPlayerPause($event)"
            @ended="onPlayerEnded($event)"
            @loadeddata="onPlayerLoadeddata($event)"
            @waiting="onPlayerWaiting($event)"
            @playing="onPlayerPlaying($event)"
            @timeupdate="onPlayerTimeupdate($event)"
            @canplay="onPlayerCanplay($event)"
            @canplaythrough="onPlayerCanplaythrough($event)"
            @ready="playerReadied"
            @statechanged="playerStateChanged($event)"/>

      </div>

    </div>
  </div>
  </div>
</template>
<style src="@/assets/common/css/video-js.css"></style>
<script>
  import headNav from '~/components/headNav.vue'
  import contentLayout from '~/components/contentLayout.vue'

  export default {
    data(){
      return{
        pageStep:'CONTACT',
        imgList:[],
        bigVedioShow:false,
        nowVedio:'',
        topv:'',
        titleList:[],
        isImgShow:true,
        playsinline: true,
        playerOptions: {
          muted: true,
          controls: true,
          language: 'lang',
          playbackRates: [0.7, 1.0, 1.5, 2.0],  //播放速率
          sources: [
            {
              type: 'video/mp4',
              src: ''  //视频流地址
            }
          ],
          hls: true,  //启用hls？
          fluid: true,  //设置播放器为流体  宽度为外层盒子大小  ps：想设置width：100%找不到方法？这个就对了
          poster: ""
        }
      }
    },
    created(){
      this.pageStep=this.$route.query.step;
      this.$axios.get('/api/media/getMediaType').then((res)=>{
        if(res.data.code==200) {
          this.titleList =res.data.data;
        }
      }).catch(function(err) {
        console.log(err);
      })
      if(this.pageStep=='MAKING OF') {
        this.getImgList('9');

      };
    },
    components: {
      headNav,contentLayout
    },
    methods:{
      getImgList(id){
        this.isImgShow=false;
        var params = {"mediaTypeId":id,"page":this.pageNum};
        this.$axios.post('/api/media/getVideo',  params).then((res)=>{
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
      bigV(bigVedio){
        this.nowVedio=bigVedio;
        this.playerOptions.sources[0].src=bigVedio.url;
        this.playerOptions.poster=bigVedio.titlePageUrl;

        //this.calTopV();
        this.bigVedioShow=true;
      },
      calTopV(){
        let me = this;
        this.$nextTick(function () {
          me.topv =-me.$refs.topInfoDt.clientHeight/2+'px';
        })
      },
      close(){
        this.bigVedioShow=false;
      },
      // listen event
      onPlayerPlay(player) {
        // console.log('player play!', player)
      },
      onPlayerPause(player) {
        // console.log('player pause!', player)
      },
      onPlayerEnded(player) {
        // console.log('player ended!', player)
      },
      onPlayerLoadeddata(player) {
        // console.log('player Loadeddata!', player)
      },
      onPlayerWaiting(player) {
        // console.log('player Waiting!', player)
      },
      onPlayerPlaying(player) {
        // console.log('player Playing!', player)
      },
      onPlayerTimeupdate(player) {
        // console.log('player Timeupdate!', player.currentTime())
      },
      onPlayerCanplay(player) {
        // console.log('player Canplay!', player)
      },
      onPlayerCanplaythrough(player) {
        // console.log('player Canplaythrough!', player)
      },
      // or listen state event
      playerStateChanged(playerCurrentState) {
        // console.log(playerCurrentState)
      },
      // player is ready
      playerReadied(player) {
        // console.log('example 01: the player is readied', player)
      }
    },
    watch:{
      '$route' (to,from) {
        this.pageStep = to.query.step
      },
      pageStep(){

      }
    }
  }
</script>

<style lang="less">
  .container {
    margin: 0px auto;
    width: 980px;
    .h-contentText{
      margin-left: 203px;margin-top: 50px;
      .ct{
        line-height: 24px;
      }
      .pe{line-height: 18px;position: relative;margin-bottom: 50px;overflow: hidden;
        .profile-icon {
          position: absolute;
          width: 138px;
          height: 93px;
          top: 0;
          right: 0;}
        h1{color: #C1C1C1;font-size: 14px;}
        .p1{height: 6px;}
        .span1{
          float: left;width: 205px;display: inline-block;margin-right: 50px;
        }
        .span2{float: left;display: inline-block;width:520px;}
      }
      .ag{line-height: 18px;}
    }

    .bigVedioMc{
      position: fixed;z-index: 2;
      top: 0;left: 0;
      opacity: 0.8;
      width: 100%;
      height: 100%;
      background-color: #000000;
    }
    .bigVedio{
      position: fixed;z-index: 3;
      top: 0;left: 0; width: 100%;
      height: 100%;
      .close{text-align: right;margin-top: 10px;margin-right: 10px;img{width: 26px;}}
      .conImg {
        width: 1000px;
        text-align: center;
        top: 50%;
        position: fixed;
        left: 50%;
        margin-left: -500px;
        transform: translateY(-50%);
        -ms-transform: translateY(-50%); /* IE 9 */
        -moz-transform: translateY(-50%); /* Firefox */
        -webkit-transform: translateY(-50%); /* Safari 和 Chrome */
        -o-transform: translateY(-50%); /* Opera */
        img {
          width: 100%;
        }
      }
    }
  }
</style>
