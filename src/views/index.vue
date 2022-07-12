<template>
  <div>
    <!-- 导航栏 -->
    <Header></Header>
    <Gotop></Gotop>

    <!-- 轮播图及下方图文说明部分 -->
    <div class="banner">
      <div class="banner-slider">
        <img src="../assets/banner2.png" alt="" />
      </div>
      <div class="nav-list">
        <li class="nav-main" v-for="(item, index) in typeOneArr" :key="index">
          <p>
            <router-link
              to="/category"
              v-for="i in item"
              :key="i"
              @click="goType(i)"
              >{{ i }}</router-link
            >
          </p>
        </li>
      </div>
    </div>
    <!-- 平台保证 -->
    <div class="platfor">
      <dl>
        <dt></dt>
        <dd>大牌品质</dd>
      </dl>
      <dl>
        <dt></dt>
        <dd>工厂价格</dd>
      </dl>
      <dl>
        <dt></dt>
        <dd>分期支付</dd>
      </dl>
      <dl>
        <dt></dt>
        <dd>顺丰包邮</dd>
      </dl>
      <dl>
        <dt></dt>
        <dd>无忧退款</dd>
      </dl>
    </div>
    <!-- 热销排行 -->
    <div class="hotsale">
      <div class="title">
        <h3>热销排行</h3>
      </div>
      <div class="rankings">
        <div class="commodity" v-for="item in goodsArr" :key="item">
          <div @click="goDetail(item.Id)">
            <dl>
              <dt>
                <img :src="item.imageUrl" alt="" />
              </dt>
              <dd>
                <div class="priceBox">
                  <div class="price">
                    <span
                      style="color: #f7a701; font-size: 10px; padding-left: 2px"
                    >
                      ￥<span style="font-size: 16px">{{ item.priceStr }}</span>
                    </span>
                  </div>
                  <div class="mack">
                    <span
                      style="
                        color: #ffffff;
                        background: #ab7fd1;
                        border-color: #ab7fd1;
                      "
                      v-for="tips in JSON.parse(item.labels)"
                      :key="tips"
                    >
                      {{ tips.content }}
                    </span>
                  </div>
                </div>
                <div class="supplier">{{ item.salePoint }}</div>
                <div class="content">{{ item.title }}</div>
              </dd>
            </dl>
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
      typeOneArr: [],
      goodsArr: [],
      count: 1,
    };
  },
  methods: {
    getTypeone() {
      fetch("/api/getTypeone")
        .then((data) => data.json())
        .then((res) => {
          // console.log(res);
          for (let i = 0; i < res.length; i += 3) {
            this.typeOneArr.push(res.slice(i, i + 3));
          }
          // console.log(this.typeOneArr);
        });
    },
    getGoods() {
      fetch(`/api/hotList?page=${this.count}`)
        .then((data) => data.json())
        .then((res) => {
          this.goodsArr = res;
          // console.log(this.goodsArr);
          res.forEach((item, i) => {
            // console.log(JSON.parse(item.labels));
          });
          // console.log(this.goodsArr);
        });
    },
    goType(i) {
      this.$router.push({
        path: "/category",
        query: {
          type: i,
        },
      });
    },
    goDetail(index){
      this.$router.push({
        path:"/detail",
        query:{
          goodId:index
        }
      })
    }
  },
  created() {
    this.getTypeone();
    this.getGoods();
  },
  mounted() {
    window.onscroll = () => {
      if (
        document.documentElement.clientHeight +
          document.documentElement.scrollTop >
        document.documentElement.scrollHeight - 3
      ) {
        // console.log("触底了");

        this.count = this.count + 1;
        // console.log(this.count);

        fetch(`/api/hotList?page=${this.count}`)
          .then((data) => data.json())
          .then((res) => {
            // concat:合并
            this.goodsArr = this.goodsArr.concat(res);
              // console.log(this.goodsArr);
          });
        // this.getGoods()
      }
    };
  },
};
</script>

<style>
@import url("../assets/index.css");
</style>