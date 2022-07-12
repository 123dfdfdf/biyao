<template>

  <div class="nav">
      <div class="clearfix">
          <div class="nav-logo">
              <img src="../assets/logo.png" alt="" style="width: 129px;height: 51px;">
          </div>
          
          <div class="nav-search">
              <p>
                  <input type="text" id="searchInput" placeholder="请输入要搜索的商品" v-model="msg">
                  <span id="searchBtn" @click="goSearch"></span>
              </p>
              <ul>
                  <li v-for="item in hotwords" :key="item" @click="goSe(item)">{{item}}</li>
              </ul>
          </div>
          <div class="nav-tab">
              <ul>
                <router-link to="index">首页</router-link>
                <router-link to="dailynew">每日上新</router-link>
                <li class="border-l"></li>
                <li class="ljby">
                    <span class="more">了解必要</span>
                    <div class="hover_code gzh">
                        <span>
                            关注必要微信公众号
                            <br>
                            了解你想了解的一切
                            <br>
                            小必姐在此发福利哦
                        </span>
                    </div>
                </li>
                <li @click="goShopcar">购物车</li>
                <li class="border-l"></li>
                <li @click="goLogin" v-show="flag">登录页</li>
                <li>{{uname}}</li>

                
              </ul>
          </div>
      </div>
  </div>
</template>

<script>

export default {
    data () {
        return {
            hotwords: ["内衣", "耳机", "精华", "香水", "眼镜", "眼霜", "女士内裤", "洗发水", "防晒霜", "电动牙刷"],
            msg:"",
            uname:"",
            flag:true
        }
    },
    methods: {
        goSearch(){
            this.$router.push({
                path:"/searchresult",
                query:{
                    name:this.msg
                }
            })
            console.log(this.msg);
        },
        goSe(name){
            this.$router.push({
                path:"/searchresult",
                query:{
                    name:name
                }
            })
        },
        goLogin(){
            this.$router.push({
                path:"/login",
                
            })
        },
        goShopcar(){
            this.$router.push({
                path:"/shopcar"
            })
        }
    },
    created () {
        this.uname = sessionStorage.getItem("uname")
        // console.log(this.uname);
        if (this.uname) {
            this.flag=false
        }
    }
   
}
</script>

<style>
    @import url("../assets/header.css");

</style>