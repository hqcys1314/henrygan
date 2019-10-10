<template>
  <div class="H-header">
    <ul class="hh-left">
      <li class="line">&nbsp;</li>
      <li><a class="active" href="/">{{titleList[0]}}</a></li>
      <li><a class="active" href="/">{{titleList[1]}}</a></li>
    </ul>
    <ul class="hh-center">
      <li :class="{'active':isActive==titleList[2]}" v-on:click="chooseNav(titleList[2])">{{titleList[2]}}</li>
      <li :class="{'active':isActive==titleList[3]}" v-on:click="chooseNav(titleList[3])">{{titleList[3]}}</li>
      <li :class="{'active':isActive==titleList[4]}" v-on:click="chooseNav(titleList[4])">{{titleList[4]}}</li>

      <li :class="{'active':isActive==titleList[5]}" v-on:click="chooseNav(titleList[5])">{{titleList[5]}}</li>
      <li :class="{'active':isActive==titleList[6]}" v-on:click="chooseNav(titleList[6])">{{titleList[6]}}</li>
      <li :class="{'active':isActive==titleList[7]}" v-on:click="chooseNav(titleList[7])">{{titleList[7]}}</li>

      <li :class="{'active':isActive==titleList[8]}" v-on:click="chooseNav(titleList[8])">{{titleList[8]}}</li>
      <li :class="{'active':isActive==titleList[9]}" v-on:click="chooseNav(titleList[9])">{{titleList[9]}}</li>
    </ul>
    <ul class="hh-right">
      <li :class="{'active':isActive==titleList[10]}" v-on:click="chooseNavR(titleList[10])">{{titleList[10]}}</li>
      <li :class="{'active':isActive==titleList[10]}" v-on:click="chooseNavR(titleList[10])">{{titleList[11]}}</li>
      <li :class="{'active':isActive==titleList[11]}" v-on:click="chooseNavR(titleList[11])">{{titleList[12]}}</li>
      <li :class="{'active':isActive==titleList[12]}" v-on:click="chooseNavR(titleList[12])">{{titleList[13]}}</li>
    </ul>
  </div>
</template>
<script>
  export default {
    name:'headNav',
    props:['pageStep'],
    created(){
      this.isActive=this.pageStep;
    },
    data(){
      return{
        isActive:'',
        titleList:['HENRY GAN','PHOTOGRAPHY','COMMERCIAL','PERSONAL','TRAVEL',
          'FASHION&BEAUTY','LANDSCAPE','EXHIBITION','UNDERWATER','NONCAM','MAKING OF','CONTACT','PROFILE','AGENT']
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
  .H-header ul li:hover, .H-header ul li .active{
    color: #F0F0F0;
  }
  .H-header{
    display:-webkit-flex;font-size: 12px;line-height: 24px;height: 80px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    .hh-left{
      width: 200px;
      .line{    width: 125px;height: 18px;

        border-top: 7px #D9D9D9 solid;}
    }
    .hh-center{width: 500px;margin-top: 15px;
      li{width: 33.33%;float: left;}
    }
    .hh-right{width: 200px;margin-left: 80px;margin-top: 15px;
      li{width: 50%;float: left;}
    }
  }
</style>
