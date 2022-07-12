<template>
    <div>
        <Header></Header>
        <Gotop></Gotop>
        <div class="section">
            <div class="section-bread">
                <router-link to="/index">首页></router-link>
                <span>{{title}}</span>
            </div>
            <div class="section-editor clearfix">
                <div class="editor-main">
                    <div class="editor-picture clearfix">
                        <p>
                            <img :src="imageUrl" alt="" ref="cover">
                        </p>
                        <ul>
                            <li v-for="item in imgs" :key="item" @click="this.$refs.cover.src = item">
                                <img :src="item" alt="">
                            </li>
                        </ul>
                    </div>
                    <ul class="editor-policy clearfix">
                        <li>
                            <span>7天无忧退货</span>
                            <div>
                                <i></i>
                                根据国家七天无理由退货规范，为您办理退货退款，具体退货政策见商品详情页。
                            </div>
                        </li>
                        <li>
                            <span>先行赔付</span>
                            <div>
                                <i></i>
                                争议可申诉，申诉成功，立即退款。
                            </div>
                        </li>
                        <li>
                            <span>超时赔偿</span>
                            <div>
                                <i></i>
                                未按承诺时间发货，系统自动赔付（赔款金额为订单商品金额的30%，上限500元）。
                            </div>
                        </li>
                        <li>
                            <span>顺丰包邮</span>
                            <div>
                                <i></i>
                                运费由商家承担
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="editor-panel sku">
                    <div class="panel-top">
                        <h1>{{title}}</h1>
                        <p>{{salePoint}}</p>
                        <span class="manufacturer">{{supplier}}</span>
                    </div>
                    <ul class="panel-main">
                        <li class="panel-press">
                            <span>售价</span>
                            <div>
                                <span class="panel-maney">
                                    ￥<span>{{priceStr}}</span>
                                </span>
                                <span class="panel-duration">
                                    生产周期：
                                    <span>{{leadTime}}</span>天
                                </span>
                            </div>
                        </li>
                        <li class="panel-specs">
                            <ul>
                                <li class="specs-dimension clearfix ">
                                    <span>颜色</span>
                                    <div>
                                        <ul>
                                            <li></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <span>尺寸</span>
                                    <div>
                                        <ul>
                                            <li v-for="item in sizeList" :key="item">{{item}}</li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div class="panel-bottom-box">
                    <div class="panel-bottom" @click="add(id)">
					    加入购物车
				    </div>
                    </div>
                </div>
            </div>
            <!-- 下面的介绍 -->
            <div class="section-view">
                <div class="view-title clearfix">
                    <a @click="goShop">
                        <span></span>
                        <b>{{supplier}}</b>
                    </a>
                    <ul class="clearfix">
                        <li id="detail" @click="goMessage" :class="{'view-active':flag}">
                            商品信息
                            <i></i>
                        </li>
                        <li id="evaluate" @click="goComment" :class="[flag==false?'view-active':'']">
                            评价详情
                            <i></i>
                        </li>
                    </ul>
                </div>
                <div class="view-section clearfix">
                    <div class="view-supplier">
                        <div class="supplier-info clearfix" style="width:200px">
                            <div class="supplier-logo">
                                <a href="">
                                    <img :src="addressLogo" alt="">
                                </a>
                                <div></div>
                            </div>
                            <ul class="supplier-other">
                                <li>
                                    商品质量：<span>5.0</span>
                                </li>
                                <li>
                                    服务态度：<span>5.0</span>
                                </li>
                            </ul>
                        </div>
                        <a  class="supplier-into" @click="goShop">进店看看</a>
                        <Leftgood :leftarr="leftarr"></Leftgood>
                    </div>
                    <div class="view-main clearfix">
                      <Message :description="description" :descriptionImage = "descriptionImage" v-show="flag"></Message>
                      <Comment :comment="comment"></Comment>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
</template>

<script>
import Header from "../components/header.vue";
import Gotop from "../components/goTop.vue";
import Message from "../components/Detail/message.vue";
import Comment from "../components/Detail/comment.vue";
import Leftgood from "../components/Detail/leftgood.vue";


export default {
    components: {
        Header,
        Gotop,
        Message,
        Comment,
        Leftgood,
    },
    data () {
        return {
            flag:true,
            goodDetail:[],
            title:"",
            imageUrl:"",
            imgs:[],
            salePoint:"",
            supplier:"",
            priceStr:"",
            leadTime:"",
            sizeList:"",
            supplier:"",
            addressLogo:"",
            description:[],
            descriptionImage:"",
            comment:[],

            leftarr:[],
            id:""
        }
    },
    methods: {
        getGoods(){
            fetch(`/api/detail?goodId=${this.$route.query.goodId}`)
            .then(data=>data.json())
            .then(res=>{
                console.log(res);
                this.goodDetail=res
                this.title = this.goodDetail[0].title
                this.imageUrl = this.goodDetail[0].imageUrl
                this.imgs = JSON.parse(this.goodDetail[0].imgs)
                this.salePoint = this.goodDetail[0].salePoint
                this.supplier = this.goodDetail[0].supplier
                this.priceStr = this.goodDetail[0].priceStr
                this.leadTime = this.goodDetail[0].leadTime
                this.sizeList = JSON.parse(this.goodDetail[0].sizeList)
                this.supplier = this.goodDetail[0].supplier
                this.addressLogo = this.goodDetail[0].addressLogo
                this.description = JSON.parse(this.goodDetail[0].description)
                this.descriptionImage = JSON.parse(this.goodDetail[0].descriptionImage)
                // 处理商品信息
                this.description.forEach(item=>{
                    item.title = item.title.split("\n")[1].trim()
                    item.text=item.text.split("\n")[1].trim()
                })
                // 处理评论
                this.comment = JSON.parse(this.goodDetail[0].comment)
                // console.log(this.comment);
                
                this.id = this.goodDetail[0].Id
                
                


            })
        },
       
        // 同类商品
        getSameType(){
            fetch(`/api/sameList?supplier=${this.supplier}`)
            .then(d=>d.json())
            .then(res=>{
                // console.log(res);
                this.leftarr = res
                
            })
        },

        goMessage(){
            this.flag=true
        },
        goComment(){
            this.flag=false
        },
        goShop(){
            this.$router.push({
                path:"/supplier",
                query:{
                    logo:this.addressLogo,
                    name:this.supplier
                }
            })
        },
        add(id){
            fetch(`/api/add?goodId=${id}&token=${sessionStorage.getItem("token")}&userId=${sessionStorage.getItem("userid")}`)
            .then(data=>data.json())
            .then(res=>{
                console.log(res);
                if (res.code == 1) {
                    alert("加入购物车成功")
                } else {
                    alert("加入购物车失败")
                }
            })
        },
    },
    created () {
        this.getGoods()
    },
    beforeUpdate(){
        this.getSameType()
    }
   

}
</script>

<style>
@import url("../assets/css/detail.css");
</style>