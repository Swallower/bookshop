<template>
    <div class="index">    
        <div is='homepage' v-if="activetab==0"></div>
        <div is='selectpage' v-if="activetab==1"></div>
        <div is='shoppingcart' v-if="activetab==2"></div>
        <div is='order' v-if="activetab==3"></div>
        <div is='mysign' v-if="activetab==4"></div>
        <!-- 底部导航栏 -->
        <van-tabbar v-model="activetab" class="_bottom">
            <van-tabbar-item icon="home-o">主页</van-tabbar-item>
            <van-tabbar-item icon="search">发现</van-tabbar-item>
            <van-tabbar-item icon="shopping-cart-o">购物车</van-tabbar-item>
            <van-tabbar-item icon="orders-o">订单</van-tabbar-item>
            <van-tabbar-item icon="contact">我的</van-tabbar-item>
        </van-tabbar>
        <div style="margin-bottom:14%"></div>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { Tabbar, TabbarItem } from 'vant';
    Vue.use(Tabbar).use(TabbarItem);
    import { Swipe, SwipeItem,Lazyload } from 'vant';
    Vue.use(Swipe).use(SwipeItem).use(Lazyload);
    import { Tab, Tabs } from 'vant';
    Vue.use(Tab).use(Tabs);
    import { Row, Col } from 'vant';
    Vue.use(Row).use(Col);
    import { Icon } from 'vant';
    Vue.use(Icon);
    import homepage from "./Homepage"
    import selectpage from "./selectpage"
    import mysign from "./mysign"
    import mysite from "./mysite"
    import shoppingcart from './shoppingcart' 
    import order from './order'
    // import { Lazyload } from 'vant';
    // options 为可选参数，无则不传
    // Vue.use(Lazyload);
    import 'vant/lib/index.css';
export default  {
    components: {
            homepage,   
            selectpage,
            mysign,
            mysite,
            shoppingcart,
            order,
    },

    data() {
        return {
            images: [
                '~@/assets/banner01.png',
                '~@/assets/banner01.png',
                '~@/assets/banner01.png'
            ],
            activetab:0,
            active:0,
            
        };
    }
}
</script>
<style scoped>
._bottom{
    position: fixed;
    bottom: 0;
}
</style>
    
