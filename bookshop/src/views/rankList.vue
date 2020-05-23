<template>
    <div>
        <van-nav-bar
            title="排行榜"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
            @click-right="onClickRight"
        >
            <van-icon name="search" slot="right"/>
        </van-nav-bar>
        <div>
            <div style="margin-top:5%"> 
                <van-swipe :autoplay="3000" indicator-color="white">
                    <van-swipe-item><img src="../assets/banner01.png" alt="" class="_himg"></van-swipe-item>
                    <van-swipe-item><img src="../assets/banner01.png" alt="" class="_himg"></van-swipe-item>
                    <van-swipe-item><img src="../assets/banner01.png" alt="" class="_himg"></van-swipe-item>
                    <van-swipe-item><img src="../assets/banner01.png" alt="" class="_himg"></van-swipe-item>
                </van-swipe>
            </div>
            <div>
                <van-dropdown-menu>
                    <van-dropdown-item v-model="value1" :options="option1" style="outline:none"/>
                </van-dropdown-menu>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
import { NavBar } from 'vant';
import { Toast } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { DropdownMenu, DropdownItem } from 'vant';

Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(NavBar);
export default {
    data(){
        return{
            active:0,
            value1: 0,
            option1: [
                { text: '默认排序', value: 0 },
                { text: '新书排序', value: 1 },
                { text: '销量排序', value: 2 },
            ]
        }
    },
    created:{

    },
    methods:{
        onClickLeft() {
            this.$router.go(-1);
        },
        onClickRight() {
            Toast('按钮');
        }
    }
}
</script>
<style scoped>
._himg{
    height:32%;
    width: 100%;
}    
</style>