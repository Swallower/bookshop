<template>
    <div id="shop">
        <van-nav-bar
        
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
            style="background:linen"
        />

        <div class="head">
            <div class="_hleft">
                <div style="font-size:20px;margin-top:10%">{{this.bookDetails.name}}</div>
                <div style="font-size:14px;color:#bfbfbf;margin-top:3%">{{this.bookDetails.author}}</div>
                <div style="font-size:14px;color:#bfbfbf;margin-top:3%">{{this.bookDetails.bc.name}}</div>
            </div>
            <div class="_hright">
                <img src="../assets/fuer.jpg" alt="" class="_bookcover">
            </div>
        </div>
        <div class="body">
            <van-tabs v-model="active">
                <van-tab title="商品">内容 1</van-tab>
                <van-tab title="详情">内容 2</van-tab>
                <van-tab title="评论">内容 3</van-tab>
            </van-tabs>
            <p>
                这部小说是有20世纪出注明小说家柯南道尔所撰写的系列侦探小说中的一部。第一次出版于1894年。现在已是公版图书。柯南道尔的小说总是以悬疑取胜,当代很多西方小说家也深深受其影响。
            </p>
            <div style="font-size:20px;margin-bottom:4%">出版信息</div>
            <div>
                <van-row>
                    <van-col span="12" style="font-size:14px"><span>出版社:</span>  辽宁人民出版社</van-col>
                    <van-col span="12" style="font-size:14px"><span>出版时间:</span> 1970年1月1日</van-col>
                </van-row>
                <van-row>
                    <van-col span="12" style="font-size:14px"><span>ISBN:</span>9787205076863</van-col>
                    <van-col span="12" style="font-size:14px"> <span>分类:</span>{{this.bookDetails.bc.name}}</van-col>
                </van-row>
                 <!-- <button @click="aaa">aaa</button>
                 <p>{{sku.tree[0].v[0].name}}</p>
                 <p>{{this.bookDetails}}}</p> -->
            </div>
        </div>
        <van-goods-action>
            <van-goods-action-icon icon="chat-o" text="客服" />
            <van-goods-action-icon icon="cart-o" text="购物车"  />
          
            <!-- <van-goods-action-button type="warning" text="加入购物车" /> -->
            <van-goods-action-button type="danger" text="立即购买" @click="showsku"/>
        </van-goods-action>
        <van-sku
            v-model="show"
            :sku="sku"
            :goods="goods"
            :goodId='goodId'
            :quota="0"
            :quota-used="0"
            :hide-stock="sku.hide_stock"
            :message-config="messageConfig"
            @buy-clicked="onBuyClicked"
            @add-cart="onAddCartClicked"
            ref="getSku"
        />
    </div>
   
</template>
<script>
import Vue from 'vue';
import { Row, Col } from 'vant';
import {
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton
} from 'vant';
import { Tab, Tabs } from 'vant';
import { Sku } from 'vant';
import 	{mapActions,mapState} from 'vuex';
import { Toast } from 'vant';

Vue.use(Toast);
Vue.use(Sku);
Vue.use(Tab).use(Tabs);
Vue
  .use(GoodsAction)
  .use(GoodsActionIcon)
  .use(GoodsActionButton);
Vue.use(Row).use(Col);
export default {
    data(){
        return{
            active: 0,
            show: false,
            goodId:0,
            sku: {
                // 数据结构见下方文档
                // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
                // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
                tree: [
                    {
                    k: '版本', // skuKeyName：规格类目名称
                    v: [
                        {
                        id: '001', // skuValueId：规格值 id
                        name: '普通版', // skuValueName：规格值名称
                        imgUrl: 'https://img.yzcdn.cn/2.jpg', // 规格类目图片，只有第一个规格类目可以定义图片
                        previewImgUrl: 'https://img.yzcdn.cn/2.jpg', // 用于预览显示的规格类目图片
                        },
                        {
                        id: '002',
                        name: '精装版',
                        imgUrl: 'http://d7.yihaodianimg.com/N05/M0B/3D/A0/CgQI01PzDA-APgTNAAKyzxXE2ZE45100.jpg',
                        previewImgUrl: 'http://d7.yihaodianimg.com/N05/M0B/3D/A0/CgQI01PzDA-APgTNAAKyzxXE2ZE45100.jpg ',
                        },
                        {
                        id: '003',
                        name: '签名版',
                        imgUrl: 'http://d7.yihaodianimg.com/N05/M0B/3D/A0/CgQI01PzDA-APgTNAAKyzxXE2ZE45100.jpg',
                        previewImgUrl: 'http://d7.yihaodianimg.com/N05/M0B/3D/A0/CgQI01PzDA-APgTNAAKyzxXE2ZE45100.jpg ',
                        },
                    ],
                    k_s: 's1' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
                    }
                ],
                // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
                list: [
                    {
                    id: 2259, // skuId，下单时后端需要
                    price: 10000.00, // 价格（单位分）
                    s1: '001', // 规格类目 k_s 为 s1 的对应规格值 id
                    s2: '002', // 规格类目 k_s 为 s2 的对应规格值 id
                    s3: '0', // 最多包含3个规格值，为0表示不存在该规格
                    stock_num: 110 // 当前 sku 组合对应的库存
                    },
                    {
                    id: 2259, // skuId，下单时后端需要
                    price: 13000.00, // 价格（单位分）
                    s1: '002', // 规格类目 k_s 为 s1 的对应规格值 id
                    s2: '0', // 规格类目 k_s 为 s2 的对应规格值 id
                    s3: '0', // 最多包含3个规格值，为0表示不存在该规格
                    stock_num: 110 // 当前 sku 组合对应的库存
                    },
                    {
                    id: 2259, // skuId，下单时后端需要
                    price: 13000.00, // 价格（单位分）
                    s1: '003', // 规格类目 k_s 为 s1 的对应规格值 id
                    s2: '0', // 规格类目 k_s 为 s2 的对应规格值 id
                    s3: '0', // 最多包含3个规格值，为0表示不存在该规格
                    stock_num: 110 // 当前 sku 组合对应的库存
                    }
                ],
                price: '1.00', // 默认价格（单位元）
                stock_num: 227, // 商品总库存
                collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
                none_sku: false, // 是否无规格商品
                messages: [
                    {
                    // 商品留言
                    datetime: '0', // 留言类型为 time 时，是否含日期。'1' 表示包含
                    multiple: '0', // 留言类型为 text 时，是否多行文本。'1' 表示多行
                    name: '留言', // 留言名称
                    type: 'text', // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
                    required: '1', // 是否必填 '1' 表示必填
                    placeholder: '' // 可选值，占位文本
                    }
                ],
                hide_stock: false // 是否隐藏剩余库存
            },
            goods: {
                // 数据结构见下方文档
                picture: 'http://d7.yihaodianimg.com/N05/M0B/3D/A0/CgQI01PzDA-APgTNAAKyzxXE2ZE45100.jpg'
            },
            messageConfig: {
                // 数据结构见下方文档
                 uploadImg: () => {
                return new Promise((resolve) => {
                    setTimeout(() => resolve('https://img.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg!100x100.jpg'), 1000);
                    });
                },
            // 最大上传体积 (MB)
            uploadMaxSize: 3,
            // placeholder 配置
            placeholderMap: {
                text: 'xxx',
                tel: 'xxx',
                
            },
            // 初始留言信息
            // 键：留言 name
            // 值：留言内容
            initialMessages: {
                留言: '留言信息'
            }
            
            },
            
            
        }
    },
    created(){   
        this.selBookDetails(this.$route.query.item);
        // sel().then(updateSku);

    },
    computed: {
         ...mapState(['bookDetails','token'])
    },
    methods: {
        showsku:function(){
            this.show=true;
        },
       
        sel() {
            var p=new Promise(function (resolve,reject) {
                this.selBookDetails(this.$route.query.item);    
            })
            return p;
        },
        onClickLeft() {
            this.$router.go(-1);
        },  
        ...mapActions([
			'selBookDetails','saveOrder','saveCart'
        ]),
        updateSku(){
            var p=new Promise(function (resolve,reject) {
                for(var i=0;i<this.bookDetails.bookPrices.length;i++){
                    sku.tree[0].v[i].name=this.bookDetails.bookPrices[i].norms;
                    sku.list[i].stock_num=this.bookDetails.bookPrices[i].stock;
                }
            })
            return p
        },
        onBuyClicked:function(){
            console.log(this.$refs.getSku.getSkuData());
            console.log('规格已选择');
            this.saveOrder({
                amount:this.$refs.getSku.getSkuData().selectedNum,
                bid:this.$route.query.item,
                bpid:this.$refs.getSku.getSkuData().selectedSkuComb.s1,
                token:this.token,
                msg:this.$refs.getSku.getSkuData().messages.message_0,
                ucid:16,
                price:this.$refs.getSku.getSkuData().selectedNum*this.$refs.getSku.getSkuData().selectedSkuComb.price,
              
            })
            this.show=false;
        },
        onAddCartClicked(){
            console.log(this.$route.query.item);
            this.saveCart({
                bid:this.$route.query.item,
                bpid:this.$refs.getSku.getSkuData().selectedSkuComb.s1,
                amount:this.$refs.getSku.getSkuData().selectedNum,
                token:this.token
            })
            this.show=false;
        }
    }
}
</script>
<style scoped>
p{position: relative; line-height: 20px; max-height: 40px;overflow: hidden;}
p::after{content: "..."; position: absolute; bottom: 0; right: 0; padding-left: 40px;
background: -webkit-linear-gradient(left, transparent, #fff 55%);
background: -o-linear-gradient(right, transparent, #fff 55%);
background: -moz-linear-gradient(right, transparent, #fff 55%);
background: linear-gradient(to right, transparent, #fff 55%);
}
#shop{
    background: #fff;
}
.head{
    width:100%;
    display: flex;
    background: linen;   
}
._hleft{
    width: 60%;
    padding: 5%;
    margin-top: 5%
}
._hright{
    width: 30%;
}
._bookcover{
    margin-top:20%;
    width:80%;
    box-shadow: 0px 0px 8px #707070;
}
.body{
    padding:3% 5% 0 5%;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
}
</style>