<template>
  <div class="bg">
    <div class="container">
      <div class="indexLeft">
        <a v-for="(t,index) in titleList" :href="'/content?step='+t.media_type" :style="{'color':titilListColor[index]}">{{t.media_type}}</a>
      </div>
      <div class="indexRight">
        <a v-for="(s,index) in subnavList" :href='"/detail?step="+s'  :style="{'color':titilListColor[index]}">{{s}}</a>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "index",
    data(){
      return{
        subnavList:['MAKING OF','CONTACT','PROFILE','AGENT'],
        titleList:[],
        titilListColor:['#884048', '#966876','#D7C1A5','#8B937F','#8E9BAA','#7882A0','#DEC0CE','#555054','#884048', '#966876','#D7C1A5','#8B937F',
    ],
      }
    },
    created(){
      this.$axios.get('/api/media/getMediaType').then((res)=>{
        if(res.data.code==200) {
          this.titleList =res.data.data;

        }
      }).catch(function(err) {
        console.log(err);
      })
    }
  }
</script>

<style lang="less">
  .container {
    margin: 0px auto;
    width: 980px;
    .indexLeft{font-size: 56px;margin-top: 20px;
       a {
        width: 699px;
        height: 56px;
        display: block;
      }
       a:hover {color: #ffffff ;
      }

    }

    .indexRight{font-size: 36px;float: right;}
    .indexRight a {
      width: 210px;
      height: 40px;
      display: block;
    }
    .indexRight a:hover {
      color: #BA5E5C;
    }
  }

</style>
