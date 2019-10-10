<template>
  <div class="container">
    <div class="indexLeft">
      <a :href='"/content?step="+titleListIndex[0]' class="nav-1" ></a>
      <a :href='"/content?step="+titleListIndex[7]' class="nav-8" ></a>
      <a :href='"/content?step="+titleListIndex[1]' class="nav-2" ></a>
      <a :href='"/content?step="+titleListIndex[2]' class="nav-3" ></a>
      <a :href='"/content?step="+titleListIndex[3]' class="nav-4" ></a>
      <a :href='"/content?step="+titleListIndex[4]' class="nav-5" ></a>
      <a :href='"/content?step="+titleListIndex[5]' class="nav-6" ></a>
      <a :href='"/content?step="+titleListIndex[6]' class="nav-7" ></a>

    </div>
    <div class="indexRight">
      <a :href='"/detail?step="+titleListIndex[8]' class="subnav-1" ></a>
      <a :href='"/detail?step="+titleListIndex[9]' class="subnav-2" ></a>
      <a :href='"/detail?step="+titleListIndex[10]' class="subnav-3" ></a>
      <a :href='"/detail?step="+titleListIndex[11]' class="subnav-4" ></a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data(){
      return{
        titleListIndex:['COMMERCIAL','UNDERWATER','PERSONAL','LANDSCAPE','NONCAM',
          'TRAVEL','EXHIBITION','FASHION&BEAUTY','MAKING OF','CONTACT','PROFILE','AGENT']
      }
    }
  }
</script>

<style lang="less">
  .container {
    margin: 0px auto;
    width: 980px;
    .indexLeft{font-size: 56px;margin-top: 20px;
       a {
        background: url(../assets/common/img/nav_bg.png) no-repeat;
        margin-top: 10px;
        width: 699px;
        height: 41px;
        display: block;
      }
       a:hover {
        background-image: url(../assets/common/img/nav_hover_bg.png);
      }
       a.nav-1 {
        background-position: 0 0;
      }
       a.nav-2 {
        background-position: 0 -52px;
      }
       a.nav-3 {
        background-position: 0 -105px;
      }
       a.nav-4 {
        background-position: 0 -157px;
      }
       a.nav-5 {
        background-position: 0 -209px;
      }
       a.nav-6 {
        background-position: 0 -261px;
      }
       a.nav-7 {
        background-position: 0 -314px;
      }
       a.nav-8 {
        background-position: 0 -367px;
      }
    }

    .indexRight{font-size: 36px;float: right;}
    .indexRight a {
      background: url(../assets/common/img/subnav_bg.png) no-repeat;
      width: 164px;
      height: 21px;
      margin-bottom: 8px;
      display: block;
    }
    .indexRight a.subnav-1 {
      background-position: 0 0;
    }
    .indexRight a.subnav-2 {
      background-position: 0 -29px;
    }
    .indexRight a.subnav-3 {
      background-position: 0 -58px;
    }
    .indexRight a.subnav-4 {
      background-position: 0 -87px;
    }
    .indexRight a:hover {
      background-image: url(../assets/common/img/subnav_hover_bg.png);
    }
  }

</style>
