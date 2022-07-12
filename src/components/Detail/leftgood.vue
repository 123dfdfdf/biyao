<template>
  <ul class="supplier-recommen">
    <li v-for="item in leftarr" :key="item">
      <a href="javascript:void(0);">
        <i>
          <img :src="item.imageUrl" alt="" />
        </i>
        <div class="supplier">{{ item.salePoint }}</div>
        <div class="title">{{ item.title }}</div>
        <div class="priceBox">
          <div class="price">
            <span style="color: #f7a701; font-size: 12px; padding-left: 2px"
              >￥
              <span style="font-size: 18px">{{ item.priceStr }}</span>
            </span>
          </div>
          <div class="mack"></div>
        </div>
        <div class="evaluate">{{ item.evaluate }}条评论</div>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["leftarr"],
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
.supplier-recommen {
  overflow: hidden;
}
.supplier-recommen li {
  margin-top: 40px;
  padding-bottom: 20px;
  border-bottom: 1px solid #ccc;
}
.supplier-recommen a {
  display: block;
}
.supplier-recommen i {
  display: block;
  width: 200px;
  height: 200px;
}
.supplier-recommen img {
  width: 100%;
  height: 100%;
}
.supplier-recommen .supplier {
  font-size: 12px;
  line-height: 17px;
  color: #bf9e6b;
  margin-top: 10px;
  width: 230px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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
.supplier-recommen .evaluate {
  font-size: 12px;
  line-height: 17px;
  color: #bbb;
  margin-top: 10px;
}
</style>