<template>
    <div class="section">
        <router-link to="/index">首页></router-link>
        <span>{{title}}</span>
    </div>
</template>

<script>
export default {
    props:["title"]

}
</script>

<style>
.section {
    width: 1080px;
    margin: 10px auto;
    margin-top: 165px;
    font-size: 12px;
}
.section>a{
    text-decoration: none;
    font-size: 12px;
}

</style>