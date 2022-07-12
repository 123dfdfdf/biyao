<template>
  <div class="category-container">
    <div>
      <ul class="supplier-recommen category-list clearfix">
        <li v-for="item in goodslist" :key="item" >
          <a href="javascript:void(0);" @click="goDetail(item.Id)">
            <i>
              <img :src="item.imageUrl" alt="" />
            </i>
            <div class="supplier">{{ item.salePoint }}</div>
            <div class="title">{{ item.title }}</div>
            <div class="priceBox">
              <div class="price">
                <span
                  style="color: #f7a701; font-size: 12px; padding-left: 2px"
                >
                  ￥<span style="font-size: 18px">{{ item.priceStr }}</span>
                </span>
              </div>
              <div class="mack"></div>
            </div>
            <div class="evaluate">{{ item.evaluate }}条评论</div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["goodslist"],
  methods: {
    goDetail(id) {
      this.$router.push({
        path: "/detail",
        query: {
          goodId: id,
        },
      });
    },
  },
};
</script>

<style>
.category-container {
  width: 1080px;
  margin: 0 auto;
}
.category-list {
  width: 1100px;
}
.category-list li {
  float: left;
  margin: 0 20px 20px 0;
}
.category-list a {
  position: relative;
  display: block;
  width: 255px;
  text-align: center;
  height: 383px;
  background: #fff;
  transition: box-shadow 0.5s ease-in-out 0s;
}
.category-list i {
  display: inline-block;
  width: 255px;
  height: 255px;
  overflow: hidden;
}
.category-list img {
  width: 255px;
  height: 255px;
  transition: transform 0.5s ease-in-out 0s;
}
.supplier-recommen .supplier {
  font-size: 12px;
  line-height: 17px;
  color: #bf9e6b;
  margin-top: 10px;
}
.supplier-recommen .supplier,
.supplier-recommen .title,
.supplier-recommen .priceBox,
.supplier-recommen .evaluate {
  text-align: left;
  padding-left: 20px;
}
.supplier-recommen .title {
  font-size: 14px;
  line-height: 19px;
  color: #4a4a4a;
  margin-top: 5px;
}
.supplier-recommen .priceBox {
  font-size: 14px;
  line-height: 25px;
  height: 25px;
  color: #4a4a4a;
  margin-top: 10px;
  display: flex;
}
.supplier-recommen .priceBox .price {
  margin-right: 5px;
}
.supplier-recommen .mack {
  line-height: 20px;
}
.supplier-recommen .evaluate {
  font-size: 12px;
  line-height: 17px;
  color: #bbb;
  margin-top: 10px;
}
</style>