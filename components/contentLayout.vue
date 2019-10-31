<template>
  <div class="H-content">
      <ul v-if="type=='img'" style="margin-left: 203px;">
        <li v-for="(t,index) in imgList" v-on:click="big(t.url,index)">
          <img :src="t.titlePageUrl" alt="">
        </li>
      </ul>
      <ul v-if="type=='vedio'">{{imgList.length}}
        <li v-for="t in imgList" v-on:click="bigV(t)">
          <img :src="t.titlePageUrl" alt="">
        </li>
      </ul>
  </div>
</template>

<script>
    export default {
        name: "contentLayout",
        props:['imgList','type'],
        created(){
        },
        methods:{
          big(bigImgUrl,index){
             this.$emit('big',bigImgUrl,index);
          },
          bigV(bigVedio){
            this.$emit('bigV',bigVedio);
          }
        }

    }
</script>

<style lang="less">
   .H-content{
      margin-top: 50px;overflow: hidden;height: 520px;
      ul li{
        float: left;margin-right: 10px;margin-bottom: 5px;
        img{width: 182px;
          height: 121px;}
        :hover{
          border: 5px #6C6C6C solid;
        }
        :active{
          border: 5px #6C6C6C solid;
        }
      }
   }

</style>
