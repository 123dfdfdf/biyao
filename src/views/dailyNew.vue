<template>
  <div>
    <Header></Header>
    <Gotop></Gotop>
    <!-- 面包屑 -->
    <div class="bread">
      <span @click="goIndex">首页</span>
      <span>
        <b>></b>
        每日上新
      </span>
    </div>
    <!-- 新品商品列表 -->
    <div class="newProduct">
      <p>每日上新</p>
      <div>
        <div>
          <div class="new-title">
            <b>{{ date }}</b>
          </div>
          <div v-for="item in goodsList" :key="item" class="Box" @click="goDetail(item.Id)">
            <div class="words">
              <div class="title">{{ item.title }}</div>
              <div class="price">
                <span
                  style="color: #f7a701; font-size: 18px; padding-left: 2px"
                >
                  ￥
                  <span style="font-size: 24px">{{ item.priceStr }}</span>
                </span>
              </div>
              <div class="salePoint">{{ item.salePoint }}</div>
              <div class="mack">
                <span
                  style="color: #fb4c81; background: ; border-color: #fb4c81"
                  >{{ JSON.parse(item.labels)[0].content }}</span
                >
              </div>
            </div>
            <img :src="item.imageUrl" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/header.vue";
import Gotop from "../components/goTop.vue";

export default {
  components: {
    Header,
    Gotop
  },
  data() {
    return {
      date: "",
      goodsList: [],
    };
  },
  methods: {
    getTime() {
      var date = new Date();
      this.date =
        date.getFullYear() +
        "年" +
        (date.getMonth() + 1) +
        "月" +
        date.getDate() +
        "日";
    },
    getList() {
      fetch("/api/newList")
        .then((data) => data.json())
        .then((res) => {
          console.log(res);
          this.goodsList = res;
        })
    },
    goIndex(){
      this.$router.push({
        path:"/index"
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
  created() {
    this.getList();
    this.getTime();
  },
 
};
</script>

<style>
@import url("../assets/css/dailyNew.css");
</style>