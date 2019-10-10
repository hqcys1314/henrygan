<template>
  <div class="H-content">
      <ul v-if="type=='img'" style="margin-left: 203px;">
        <li v-for="(t,index) in imgList" v-on:click="big(t.image_url,index)">
          <img :src="t.image_url" alt="">
        </li>
      </ul>
      <ul v-if="type=='vedio'">
        <li v-for="(t) in imgList" v-on:click="bigV(t)">
          <img :src="t.imgUrl" alt="">
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
          bigV(t){
            this.$emit('bigV',t);
          }
        }

    }
</script>

<style lang="less">
   .H-content{
      margin-top: 50px;
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
