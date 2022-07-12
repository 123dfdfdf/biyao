<template>
  <div>
    <Header></Header>
    <Gotop></Gotop>
    <Nav :title="supplier"></Nav>

    <!-- 商家信息 -->
    <div class="supplier-info clearfix">
      <div class="info-normal">
        <p>
          <img :src="logo" alt="" />
        </p>
        <dl>
          <dt>{{supplier}}</dt>
          <dd></dd>
          <dd class="certificate clearfix">
            <span>证书信息</span>
            <span>
              <img src="http://static2.biyao.com/pc/www/img/icon_more_gray.png?v=biyao_47c311d" alt="" />
            </span>
          </dd>
        </dl>
      </div>
      <ul class="info-eval">
        <li>
          <b>商品质量：</b>
          <p>
            <span style="width: 100%"></span>
          </p>
          <i>5.0分</i>
        </li>
        <li>
          <b>服务态度：</b>
          <p>
            <span style="width: 100%"></span>
          </p>
          <i>5.0分</i>
        </li>
      </ul>
    </div>

    <!-- 列表 -->
    <Good :goodslist="goodslist"></Good>
  </div>
</template>

<script>
import Gotop from "../components/goTop.vue";
import Header from "../components/header.vue";
import Nav from "../components/nav.vue";
import Leftgood from "../components/Detail/leftgood.vue";
import Good from "../components/good.vue"
export default {
  components: {
    Gotop,
    Header,
    Nav,
    Leftgood,
    Good
  },
  data() {
    return {
      goodslist: [],
      supplier: "",
      logo:""
    };
  },
  methods: {
    // 进店看看
    getSupplier() {
      fetch(`/api/supplierList?supplier=${this.$route.query.name}`)
        .then((d) => d.json())
        .then((res) => {
          console.log(res);
          this.goodslist = res;
          this.supplier = this.$route.query.name;

          // this.goodslist.forEach(item=>{
          //   item.mack = item.mack.split("</span>")
            
          // })
          // console.log(this.goodslist);
        });
    },
  },
  created() {
    this.getSupplier();
    this.logo=this.$route.query.logo
    // console.log(this.$route.query);
  },
};
</script>

<style>
@import url("../assets/css/supplier.css");
</style>