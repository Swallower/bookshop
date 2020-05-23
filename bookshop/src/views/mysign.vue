<template>
    <div class="mysign">
        <img src="../assets/mysigntitle.png" alt="" class="_hbg">
        <div class="head">
            <van-row>
                <van-col span="8">
                    <div class="" style="margin-left:20%;margin-top:-20%">   
                        <img src="../assets/lulaoban.png" alt="" class="_himg">
                    </div>
                </van-col>
                <van-col span="10">
                
                    <div style="margin-top:5%" v-if="!this.token">
                        <div style="font-weight:bold" >游客</div>
                        <div style="opacity: 0.5;font-size:14px">登录后畅想更多功能</div>
                    </div>
                    <div style="margin-top:5%" v-else >
                        <div style="font-weight:bold" v-show="this.MySite">{{this.MySite==''?'您还没有填写个人信息 请移步到收件地址填写':this.MySite[0].name}}</div>
                        <div style="opacity: 0.5;font-size:14px" v-show="this.MySite">{{this.MySite==''?'':this.MySite[0].tel}}</div>
                    </div>
                </van-col>
                <van-col span="6" >
                    <div style="margin-top:18%">
                        <div style="border-radius: 20px;border:1px solid #ab5da7;display:inline-block;padding:3% 6%">  
                            <div v-if="this.MySite==undefined ||this.MySite==''">
                                <router-link to="./login"  style="color:#ab5da7">登录</router-link><span  style="color:#ab5da7">/</span>
                                <router-link to="./register" style="color:#ab5da7">注册</router-link>
                            </div> 
                            <div v-else>
                                <button  @click="loginout" style="color:#ab5da7;background:none;border:none">注销</button>
                            </div>
                        </div>
                    </div>
                </van-col>
            </van-row>
            <div style="width:100%;display:flex;justify-content:space-around;margin-top:3%">
                <div>
                    <div style="text-align: center">--</div>
                    <div style="text-align: center">卡卷</div>
                </div>
                
                <div>
                    <div style="text-align: center">--</div>
                    <div style="text-align: center">积分</div>
                </div>
                <div>
                    <div style="text-align: center">--</div>
                    <div style="text-align: center">足迹</div>
                </div>
                
            </div>   
            <img src="../assets/landdog.png" alt="" class="_himgvip">
            <div style="width:100%;display:flex;justify-content:space-around;margin-top:-5%">
                <div>
                    <div style="text-align: center">
                        <img src="../assets/icon_li.png" alt="" class="_hicon">
                    </div>
                    <div style="text-align: center;">邀请有礼</div>
                </div>
                <div>
                    <div style="text-align: center">
                        <img src="../assets/icon_vip.png" alt="" class="_hicon">
                    </div>
                    <div style="text-align: center;position:fiexd;bottom:0;margin-top:8%">会员中心</div>
                </div>
                <div>
                    <div style="text-align: center">
                        <img src="../assets/icon_shop.png" alt="" class="_hicon">
                    </div>
                    <div style="text-align: center">积分商城</div>
                </div>
                <div>
                    <div style="text-align: center">
                        <img src="../assets/icon_qian.png" alt="" class="_hicon">
                    </div>
                    <div style="text-align: center; margin-top:13%">我的账户</div>
                </div>
                
            </div>  
        </div>
        <div style="border:4px solid #e6e6e6;"></div>
        <img src="../assets/banner02.png" alt="" class="_banner">
        <div style="border:4px solid #e6e6e6;"></div>
        <div class="body">
            <router-link to="./mysite">
                <van-cell title="收件地址" icon="logistics" is-link size="24" style="font-size:18px;" />
            </router-link>
            <van-cell title="意见反馈" icon="edit" is-link size="24" style="font-size:18px;"/>
            <van-cell title="卡卷领取" icon="gift-card-o" is-link size="24" style="font-size:18px;"/>
            <van-cell title="帮助中心" icon="service-o" is-link size="24" style="font-size:18px;"/>
            <van-cell title="用户设置" icon="setting-o" is-link size="24px" style="font-size:18px;"/>
        </div>
        
    </div>
</template>
<script>
import Vue from 'vue';
import 'vant/lib/index.css';
import { Cell, CellGroup } from 'vant';
import 	{ mapActions,mapState } from 'vuex';
Vue.use(Cell).use(CellGroup);
export default {
    data() {
        return {
          
        }
    },
    created(){
        this.selMySite(this.token);
        console.log(this.MySite);
        console.log(this.token);
        
    
    },
    computed: {
		...mapState(['token','MySite']),
    },
    methods: {
        loginout(){
            this.$router.go(0)
        },
        jumpmysite:function() {
            
        },
        ...mapActions([
			'selMySite'
		]),
    }
}
</script>
<style scoped>
.mysign{
    width: 100%;
}
._hbg{
    position: fixed;
    top:0%;
    z-index: -10;
    /* width:70%; */
}
.head{
    border-radius: 1rem ;
    width: 100%;
    height: 40%;
    margin-top: 20%;
    background: #fff;
    padding:0 0 5% 0;
}
._himg{
    width:80%;
    height: 80%;
    border-radius: 50%;
    border: 2px solid lavender;
}
._himgvip{
    width: 88%;
    height: 20%;
    /* margin-left:8%; */
    margin:3% 0 5% 7% ;
}
._hicon{
    width:60%;
    height:60%;
    
}
._banner{
    width:100%;
    height:100%;
}
</style>