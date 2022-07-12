<template>
    <Header></Header>
    <Gotop></Gotop>
    <div class="search-result" style="margin-top:165px">
        <!-- 面包屑 -->
        <div class="bread">
            <span @click="goIndex">首页</span>
            <span>
                <b>></b>
                全部分类
            </span>
            <span>
                <b>></b>
                {{this.$route.query.name}}
            </span>
        </div>
        <!-- 分类栏 -->
        <div class="cateBread">
            根据您搜索的“{{this.$route.query.name}}”，为您匹配到以下商品：
        </div>

    </div>

    <!-- 类目商品列表 -->
    <div class="category-container">
        <div>
            <ul class="supplier-recommen category-list clearfix">
                <li v-for="item in goodsArr" :key="item" @click="goDetail(item.Id)">
                    <div>
                        <i>
                            <img :src="item.imageUrl" alt="">
                        </i>
                        <div class="supplier">{{item.supplier}}</div>
                        <div class="title">{{item.title}}</div>
                        <div class="priceBox">
                            <div class="price">
                                <span>
                                    ￥
                                    <span>{{item.priceStr}}</span>
                                </span>
                            </div>
                            <div class="mack">
                                
                            </div>
                        </div>
                        <div class="evaluate">{{item.evaluate}}条好评</div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  
</template>

<script>
import Header from "../components/header.vue"
import Gotop from "../components/goTop.vue";

export default {
    components: {
        Header,
        Gotop
    },
    data () {
        return {
            goodsArr:[],
            
        }
    },
    methods: {
        getSearch(){
            fetch(`/api/search?word=${this.$route.query.name}`)
            .then(data=>data.json())
            .then(res=>{
                // console.log(res);
                this.goodsArr = res
                res.forEach((item,i)=>{
                    // console.log(JSON.parse(item.labels));
                    
                })
            })
        },
        goDetail(id){
            this.$router.push({
                path:"/detail",
                query:{
                  goodId:id
                }
            })
        },
        goIndex(){
            this.$router.push({
                path:"/index"
            })
        }
        
    },
    created () {
        // console.log(this.$route.query);
        this.getSearch()
    },
    watch: {
        "$route"(){
            this.getSearch()
        }
    }

}
</script>

<style>
    @import url("../assets/css/searchResult.css");

</style>