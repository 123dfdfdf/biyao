<template>
    <div>
        <Header></Header>
        <Gotop></Gotop>
        <!-- 面包屑 -->
        <div class="bread">
            <span>首页</span>
            <span>
                <b>></b>
                {{typeOne}}
            </span>
        </div>
        <!-- 分类栏 -->
        <div class="cateBread">
            <span>{{typeOne}}：</span>
            <ul>
                <li v-for="item in typeTwo" :key="item">{{item}}</li>
            </ul>
        </div>
        <!-- 类目商品列表 -->
        <div class="category-container">
            <div>
                <ul>
                    <li v-for="(item,i) in typeTwo" :key="item">
                        <dl class="category-title">
                            <dt>{{item}}</dt>
                            <dd></dd>
                        </dl>
                        <ul class="supplier-recommen category-list clearfix">
                            <li v-for="good in typeTwoList[i]" :key="good"  @click="goDetail(good.Id)">
                                <div>
                                    <i>
                                        <img :src="good.imageUrl" alt="">
                                    </i>
                                    <div class="supplier">{{good.supplier}}</div>
                                    <div class="title">{{good.title}}</div>
                                    <div class="priceBox">
                                        <div class="price" style="text-align: center;">
                                            <span style="color: #F7A701; font-size: 12px; padding-left: 2px;">
                                                ￥<span style="font-size:18px;">{{good.priceStr}}</span>
                                            </span>
                                        </div>
                                        <div class="mack">
                                            <!-- {{good.mack}} -->
                                        </div>
                                    </div>
                                    <div class="evaluate">{{good.evaluate}}条好评</div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
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
            typeTwo:[],
            typeOne:"",
            typeTwoList:[]
        }
    },
    methods: {
        getList(){
            fetch(`/api/getTypeTwo?type_one=${this.$route.query.type}`)
            .then(data=>data.json())
            .then(res=>{
                // console.log(res);//只有种类
                this.typeTwo = res
                console.log(this.typeTwo);
                this.typeOne = this.$route.query.type
            })
        },
        getGoods(i){
            fetch(`/api/getTypeTwoList?type_one=${this.$route.query.type}&type_two=${this.typeTwo[i]}`)
            .then(data=>data.json())
            .then(res=>{
                // console.log(res);//
                this.typeTwoList.push(res)
                console.log(this.typeTwoList);
            })
        },
        goDetail(id){
            this.$router.push({
                path:"/detail",
                query:{
                    goodId:id
                }
            })
        }
    },
    created () {
        this.getList()
    },
    beforeUpdate(){
        this.typeTwo.forEach((item,i)=>{
            this.getGoods(i)
        })
    }
}
</script>

<style>
    @import url("../assets/css/category.css");

</style>