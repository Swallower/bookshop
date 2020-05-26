<template>
    <div>
        <div style="text-align:center;margin-top:50%" v-if="!token">

            <img src="../assets/Notloggedin.png" alt=""  style=' transform:scale(1.3);'>
            <h3  style="text-align:center;color:#1296db;margin-top:15%">主子您还没登录呐</h3>
        </div>
        <div id="order" v-if="token">
        <van-swipe-cell v-for="(item,index) in cartList.data.list" :key=index>
            <van-card
                :num=item.amount
                :price=returnFloat(item.bp.price*item.amount)
                :desc=item.book.bc.name
                :title=item.book.name
                class="goods-card"
                thumb="https://img.yzcdn.cn/vant/cat.jpeg"
            >
            <div slot="tags">
                <van-tag plain type="danger"  @click="show=true">普通版</van-tag>
                <p>{{item.id}}</p>
            </div>
             
            </van-card>
            <van-button
                slot="right"
                square
                text='删除'
                type="danger"
                class="delete-button"
                @click=delorder1(item.id)
            />
        </van-swipe-cell>
        </div>
        <van-sku
            v-model="show"
            :sku="sku"   
        />
    </div>
</template>
<script>
import Vue from 'vue';
import 'vant/lib/index.css';
import { Checkbox, CheckboxGroup } from 'vant';
import { SwipeCell } from 'vant';
import { Button } from 'vant';
import { Card } from 'vant';
import { Stepper } from 'vant';
import { Sku } from 'vant';
import 	{mapActions,mapState} from 'vuex';

Vue.use(Sku);
Vue.use(Stepper);
Vue.use(Card);
Vue.use(Button);
Vue.use(SwipeCell);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
export default {
    data(){
        return {
            value:1,
            show: false,
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
            // goods: {
            //     // 数据结构见下方文档
            //     picture: 'http://d7.yihaodianimg.com/N05/M0B/3D/A0/CgQI01PzDA-APgTNAAKyzxXE2ZE45100.jpg'
            // },
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
            }
        }
    },
    created(){   
        this.selOrder({
            token:this.token
        });
    },
    computed: {
         ...mapState(['bookDetails','token','cartList'])
    },
    methods:{
        
        returnFloat: function (value){
            var value=Math.round(parseFloat(value)*100)/100;
            var xsd=value.toString().split(".");
            if(xsd.length==1){
            value=value.toString()+".00";
            return value;
            }
            if(xsd.length>1){
            if(xsd[1].length<2){
            value=value.toString()+"0";
            }
            return value;
            }
        },
        delorder1: function(id){
            setTimeout(() => {
                this.selOrder({
                    token:this.token
                });
            }, 200);
            this.delOrder({
                id:id,
                token:this.token
            })
        },
        ...mapActions(['selOrder','delOrder','selCartList']),
    }
}
</script>
<style scoped>
.goods-card {
  margin: 0;
  background-color: white;
}

.delete-button {
  height: 100%;
}
</style>