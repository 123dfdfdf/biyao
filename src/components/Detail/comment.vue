<template>
  <div class="view-evaluate">
    <ul class="eval-list">
      <li v-for="item in comment" :key="item">
        <dl class="eval-user">
          <dt>
            <img :src="item.userPic" alt="" />
          </dt>
          <dd>{{item.userName}}</dd>
        </dl>
        <div class="eval-content">
          <p class="eval-artical">{{item.text}}</p>
          <p class="eval-time">
            <span>{{item.time}}</span>
            <span>{{item.product}}</span>
          </p>
        </div>
        <div class="v-icon" :class="item.vip"></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    props: ["comment"]
};
</script>

<style>
.eval-list{
    width: 800px;
}
.eval-list>li {
    margin-top: 20px;
    border-top: 1px solid #eee;
    position: relative;
    min-height: 100px;
}
.eval-user {
    float: left;
    margin: 20px 0 0 20px;
}
.eval-user img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    overflow: hidden;
}
.eval-user dd {
    text-align: center;
    margin-top: 10px;
    font-size: 12px;
    color: #333;
}
.eval-content {
    margin: 20px 0 0 100px;
}
.eval-content p {
    font-size: 14px;
    color: #4a4a4a;
    line-height: 21px;
}
.eval-artical {
    margin-bottom: 10px;
}
.eval-time span {
    margin-right: 24px;
    color: #bbb;
    font-size: 12px;
    line-height: 16px;
}
.v-icon {
    width: 17px;
    height: 12px;
    background-image: url(http://static2.biyao.com/pc/www/img/new_master/icon_v.png?v=biyao_e66e6d8);
    background-size: 17px 12px;
    background-repeat: no-repeat;
    position: absolute;
    top: 93px;
    left: 32px;
}
.v-icon.v1 {
    background-image: url(http://static3.biyao.com/pc/www/img/new_master/icon_v1.png?v=biyao_be15673);
}
.v-icon.v4 {
    background-image: url(http://static1.biyao.com/pc/www/img/new_master/icon_v4.png?v=biyao_07ffbc8);
}
.v-icon.v2 {
    background-image: url(http://static4.biyao.com/pc/www/img/new_master/icon_v2.png?v=biyao_723f0db);
}
.v-icon.v5 {
    background-image: url(http://static2.biyao.com/pc/www/img/new_master/icon_v5.png?v=biyao_05b1338);
}
.v-icon.v3 {
    background-image: url(http://static.biyao.com/pc/www/img/new_master/icon_v3.png?v=biyao_14b1e9b);
}

</style>