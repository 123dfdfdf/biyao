<template>
  <div>
      <div class="rightBar-top">
          <img src="../assets/img/箭头-向上.png" alt="" class="jiantou" @click="gotop">
      </div>
  </div>
</template>

<script>
export default {
    methods: {
        gotop(){
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0
        }
    }

}
</script>

<style>
    .rightBar-top{
        position: fixed;
        border-radius: 7px;
        top: 500px;
        right: 150px;
        width: 48px;
        height: 48px;
        cursor: pointer;
        line-height: 48px;
        text-align: center;
    }
    .jiantou{
        width: 40px;
        height: 40px;
    }
    .rightBar-top:hover{
        background: #52225E;
    }
    .rightBar-top:hover .jiantou{
        color: #fff;
    }

</style>