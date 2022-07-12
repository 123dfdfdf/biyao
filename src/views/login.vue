<template>
    <Header></Header>
    <div class="main">
        <h4 class="title">
            <div class="normal-title">
                <a href="javascript:void(0);" :class="{active:flag}" @click="change">登录</a>
                <b>·</b>
                <a href="javascript:void(0);" id="js-sign-up-btn" :class="[flag==false?'active':'']" @click="change">注册</a>
            </div>
        </h4>
        <div class="js-sign-up-container">
            <form action="" id="new_user">
                <div class="input-prepend restyle">
                    <input type="text" placeholder="你的昵称" v-model="name">
                    <i class="iconfont ic-user"></i>
                </div>
                <div class="input-prepend">
                    <input type="text" id="user_password" placeholder="密码" v-model="psw">
                    <i class="iconfont ic-password"></i>
                </div>

                <input type="submit" value="注册" class="sign-up-button" @click="goregister" v-show="!flag">
 
                <input type="submit" value="登录" class="sign-up-button" @click="gologin" v-show="flag">
 
            </form>
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
            name:"",
            psw:"",
            flag:false,
        }
    },
    methods: {
        goregister(){
            fetch(`/api/register?userName=${this.name}&password=${this.psw}`)
            .then(data=>data.json())
            .then(res=>{
                console.log(res);
                if (res.code==1) {
                    alert("注册成功")
                   this.name="",
                   this.psw="",
                   this.flag = true
                } else {
                    alert("注册失败")
                }
            })
        },
        gologin(){
            fetch(`/api/login?userName=${this.name}&password=${this.psw}`)
            .then(data=>data.json())
            .then(res=>{
                console.log(res);
                if (res.code == 1) {
                    this.$router.push({
                        path:"/index",
                        uname:this.name
                    })
                    sessionStorage.setItem("uname",res.userName)
                    sessionStorage.setItem("token",res.token)
                    sessionStorage.setItem("userid",res.userId)
                    sessionStorage.setItem("isLogin",true)
                } else {
                    alert("登陆失败")
                }
               
            })
        },
        change(){
            this.flag = !this.flag
        }
    },
    mounted () {
    }

}
</script>

<style>
@import url("../assets/css/login.css");


</style>