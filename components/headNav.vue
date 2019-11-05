<template>
  <div class="H-header">
    <ul class="hh-left">
      <li class="line">&nbsp;</li>
      <li><a class="active" href="/">{{leftList[0]}}</a></li>
      <li><a class="active" href="/">{{leftList[1]}}</a></li>
    </ul>
    <ul class="hh-center">

      <li v-for="item in titleList" :class="{'active':isActive==item.media_type}" v-on:click="chooseNav(item.media_type)">{{item.media_type}}</li>
    </ul>
    <ul class="hh-right">
      <li :class="{'active':isActive==rightList[0]}" v-on:click="chooseNavR(rightList[0])">{{rightList[0]}}</li>
      <li :class="{'active':isActive==rightList[1]}" v-on:click="chooseNavR(rightList[1])">{{rightList[1]}}</li>
      <li :class="{'active':isActive==rightList[2]}" v-on:click="chooseNavR(rightList[2])">{{rightList[2]}}</li>
      <li :class="{'active':isActive==rightList[3]}" v-on:click="chooseNavR(rightList[3])">{{rightList[3]}}</li>
    </ul>
  </div>
</template>
<script>
  export default {
    name:'headNav',
    props:['pageStep','titleList'],
    created(){
      this.isActive=this.pageStep;

    },
    data(){
      return{
        isActive:'',
        leftList:['HENRY GAN','PHOTOGRAPHY'],
        rightList:['MAKING OF','CONTACT','PROFILE','AGENT']
      }
    },
    methods:{
      chooseNav(dd){
        this.isActive=dd;
        this.$emit('jumpStep',dd);
      },
      chooseNavR(dd){
        this.isActive=dd;
        this.$emit('jumpStepR',dd);
      }
    },
    watch:{
      pageStep(){
        this.isActive=this.pageStep;
      }
    }
  }
</script>
<style lang="less">
  .H-header ul li:hover, .H-header ul li.active,a.active{
    color: #0f2d10;font-weight: bold;
  }
  .H-header{
    display:-webkit-flex;font-size: 12px;line-height: 24px;height: 80px;
    display:flex;color: #2F323D;
    flex-direction:row;
    justify-content:space-between;
    .hh-left{
      width: 202px;
      .line{    width: 125px;height: 18px;

        border-top: 7px #D9D9D9 solid;}
    }
    .hh-center{width: 498px;margin-top: 15px;
      li{width: 166px;float: left;}
    }
    .hh-right{width: 200px;margin-left: 80px;margin-top: 15px;
      li{width: 50%;float: left;}
    }
  }
</style>
