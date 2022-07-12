<template>
    <div>
        <Header></Header>

        <div class="box">
            <ul>
                <li v-for="item in goodlist" :key="item">
                    <img :src="item.imageUrl" alt="">

                    <div>
                        <span>{{item.title}}</span>
                    </div>

                    <div>
                        <span>{{item.priceStr}}</span>
                    </div>

                    <div>
                        <el-button type="danger" @click="del(item.Id)">删除</el-button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  
</template>

<script>
import Header from "../components/header.vue";
export default {
    components: {
        Header
    },
    data () {
        return {
            goodlist:[],
        }
    },
    methods: {
        look(){
            fetch(`/api/shopList?token=${sessionStorage.getItem("token")}&userId=${sessionStorage.getItem("userid")}`)
            .then(data=>data.json())
            .then(res=>{
                console.log(res);
                this.goodlist=res
            })
        },
        del(id){
            this.flag=true
             fetch(`/api/del?userId=${sessionStorage.getItem("userid")}&goodId=${id}&token=${sessionStorage.getItem("token")}`)
            .then(data=>data.json())
            .then(res=>{
                console.log(res);
                this.look()
            })

        },

    },
    created () {
        this.look()
    },
    
    

}
</script>

<style>
@import url("../assets/css/shopcar.css");

</style>