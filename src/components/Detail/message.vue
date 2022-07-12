<template>
  <div id="vs_content" class="view-detail">
    <div class="txq_container">
      <div class="txq_header">
        <div class="txq_item" v-for="item in description" :key="item">
          <dl>
            <dt>{{ item.title }}</dt>
            <dd>{{ item.text }}</dd>
          </dl>
        </div>
      </div>
      <div class="txq_details">
        <p v-for="item in descriptionImage" :key="item">
          <img :src="item" alt="" />
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["description", "descriptionImage"],
  created() {
    // console.log(this.description);
  },
};
</script>

<style>
#vs_content {
  font-size: 16px;
}
.view-main .view-detail {
  display: block;
  width: 100%;
}
#vs_content .txq_header {
  width: 800px;
  margin: 0 auto 20px;
}
#vs_content .txq_header dl {
  line-height: 32px;
  border-bottom: 2px dotted #cecece;
  font-size: 16px;
  color: #333;
}
#vs_content .txq_header dt {
  display: inline-block;
  width: 160px;
  font-size: 16px;
  color: #666;
  vertical-align: top;
}
#vs_content .txq_header dd {
  display: inline-block;
  width: 630px;
  font-size: 16px;
  color: #333;
}
#vs_content img {
  width: 100%;
}
</style>