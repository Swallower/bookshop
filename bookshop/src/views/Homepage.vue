<template>
    <div class="index">
         <div class="head">
            <div class="_hnavigation" style="display:flex;justify-content: space-between">
                <span class="_htitle">书城</span>
                <img src="../assets/icon_tongzhi.png" alt="通知"  class="_hicon">
            </div>
            <div class="_hsel">
                <input type="text" class="_hinp" id='flag' placeholder="浮生六记" @change=search>
                <van-popup v-model="show" position="bottom" :style="{ height: '60%' }" >
                   <van-row style="margin-top:4%" @click="jumpshop(item)" v-for="(item,index) in searchBook.list" :key=index>
                        <van-col span="4">
                            <img src="../assets/bookfeng.png" alt="" class="_fbookf">
                        </van-col>
                        <van-col span="14" offset="4">
                            <div class="_fbookt">{{item.name}}</div>
                            <div class="_fauthor"><span>{{item.author}}</span> <span>{{item.utime.slice(0,10)}}</span></div>
                            <div class="_fsign"><span>14k收藏</span> <span>89部</span></div>
                            <div style="display:flex;justify-content: space-between;"> <span style="background:#00b7ee;" class="_fbtn">校园</span> <span style="background:#ec6941;" class="_fbtn">奇幻</span> </div>
                        </van-col>
                    </van-row>
                    
                </van-popup>
            </div>
         </div>
         <div style="margin-top:5%"> 
            <van-swipe :autoplay="3000" indicator-color="white">
                <van-swipe-item><img src="../assets/banner01.png" alt="" class="_himg"></van-swipe-item>
                <van-swipe-item><img src="../assets/banner01.png" alt="" class="_himg"></van-swipe-item>
                <van-swipe-item><img src="../assets/banner01.png" alt="" class="_himg"></van-swipe-item>
                <van-swipe-item><img src="../assets/banner01.png" alt="" class="_himg"></van-swipe-item>
            </van-swipe>
         </div>
         <div style="margin:5% 0" >
            <van-row id="row1">
                <van-col span="4" >
                    <div>
                        <img src="../assets/icon_hot.png"  class="small1">
                    </div>
                        <span class="_bt">热门</span>  
                </van-col>
                <van-col span="4" offset="1">
                    <img src="../assets/icon_free.png"  class="small1">
                    <span class="_bt" >免费</span>  
                </van-col>
                <van-col span="4" offset="1" @click="jumpRanklist">
                    <img src="../assets/icon_bang.png"  class="small1">
                    <span class="_bt" >排行榜</span>  
                </van-col>
                <van-col span="4" offset="1">
                    <img src="../assets/icon_book.png"  class="small1">
                    <span class="_bt">新书</span>  
                </van-col>
                <van-col span="4" offset="1">
                    <div  style="background:#b662f6;width:40px;margin-left:20% ;border-radius:0.4rem">
                    <img src="../assets/icon_tui.png"  class="small1">
                    </div>
                    <span class="_bt">推荐</span>  
                </van-col>
            </van-row>
        </div>
        <div class="_body">
            <div class="_bspaceb">
                <span class="_btitle">畅销精选</span>
                <span class="_bmore">更多<van-icon name="arrow" /></span>
            </div>
            <div style="margin-top:4%">
                <van-row>
                    <van-col span="6"  >
                        <img src="../assets/_bbadao.png" alt="" class="_bimg">
                        <div class="_bcenter">霸道总裁</div>
                    </van-col>
                    <van-col span="6" offset="2">
                        <img src="../assets/_bchuanyue.png" alt=""  class="_bimg">
                        <div class="_bcenter">穿越异世重生</div>
                    </van-col>
                    <van-col span="6" offset="2" >
                        <img src="../assets/_bxiyouji.png" alt="" class="_bimg" style="width:126%">
                        <div class="_bcenter">西游记</div>
                    </van-col>
                </van-row>
            </div>
            <div class="_bspaceb" style="margin:3% 0">
                <span class="_btitle">作家风云</span>
                <span class="_bmore">更多<van-icon name="arrow" /></span>
            </div>
            <div>   
                <van-swipe :loop="false" :width="300" :show-indicators="false" >
                    <van-swipe-item >
                       <div class="_bzuozhe">
                            <van-row>
                                <van-col span="6" offset="1" >
                                    <img src="../assets/lulaoban.png" alt="" class="_bzuozheimg">
                                </van-col>
                                <van-col span="14" offset="2">
                                    <div style="padding-top:10%;font-size:15px;font-weight: bold">陆干成</div>
                                    <div class="van-multi-ellipsis--l2"  style="padding-top:8%;font-size:12px;opacity: 0.5 ;font-weight: bold">
                                        起点中文钻石签约大神,代表作《考场默示录》、《钢之炼金术师》
                                    </div>
                                </van-col>
                            </van-row>
                        </div>
                    </van-swipe-item>
                    <van-swipe-item>
                        <div class="_bzuozhe">
                            <van-row>
                                <van-col span="6" offset="1" >
                                    <img src="../assets/lulaoban.png" alt="" class="_bzuozheimg">
                                </van-col>
                                <van-col span="14" offset="2">
                                    <div style="padding-top:10%;font-size:15px;font-weight: bold">陆干成</div>
                                    <div class="van-multi-ellipsis--l2"  style="padding-top:8%;font-size:12px;opacity: 0.5 ;font-weight: bold">
                                        起点中文钻石签约大神,代表作《考场默示录》、《钢之炼金术师》
                                    </div>
                                </van-col>
                            </van-row>
                        </div>
                    </van-swipe-item>
                    <van-swipe-item> 
                        <div class="_bzuozhe">
                        <van-row>
                                <van-col span="6" offset="1" >
                                    <img src="../assets/lulaoban.png" alt="" class="_bzuozheimg">
                                </van-col>
                                <van-col span="14" offset="2">
                                    <div style="padding-top:10%;font-size:15px;font-weight: bold">陆干成</div>
                                    <div class="van-multi-ellipsis--l2"  style="padding-top:8%;font-size:12px;opacity: 0.5 ;font-weight: bold">
                                        起点中文钻石签约大神,代表作《考场默示录》、《钢之炼金术师》
                                    </div>
                                </van-col>
                            </van-row>
                        </div>
                    </van-swipe-item>
                    <van-swipe-item> 
                        <div class="_bzuozhe">
                       <van-row>
                                <van-col span="6" offset="1" >
                                    <img src="../assets/lulaoban.png" alt="" class="_bzuozheimg">
                                </van-col>
                                <van-col span="14" offset="2">
                                    <div style="padding-top:10%;font-size:15px;font-weight: bold">陆干成</div>
                                    <div class="van-multi-ellipsis--l2"  style="padding-top:8%;font-size:12px;opacity: 0.5 ;font-weight: bold">
                                        起点中文钻石签约大神,代表作《考场默示录》、《钢之炼金术师》
                                    </div>
                                </van-col>
                            </van-row>
                        </div>
                    </van-swipe-item>
                </van-swipe>
            </div>
        </div>
        <div class="_foot" >
            <div class="_bspaceb">
                <span class="_btitle">热门书单</span>
                <span class="_bmore">更多<van-icon name="arrow" /></span>
            </div>
            <div>
                <van-tabs v-model="active" animated swipeable @click="selList">
                 <van-tab title="玄幻" >
                    <van-row style="margin-top:4%" @click="jumpshop(item)" v-for="(item,index) in arrList" :key=index>
                        <van-col span="4">
                            <img src="../assets/bookfeng.png" alt="" class="_fbookf">
                        </van-col>
                        <van-col span="14" offset="4">
                            <div class="_fbookt">{{item.name}}</div>
                            <div class="_fauthor"><span>{{item.author}}</span> <span>{{item.ctime.slice(0,10)}}</span></div>
                            <div class="_fsign"><span>14k收藏</span> <span>89部</span></div>
                            <div style="display:flex;justify-content: space-between;"> <span style="background:#00b7ee;" class="_fbtn">校园</span> <span style="background:#ec6941;" class="_fbtn">奇幻</span> </div>
                        </van-col>
                    </van-row>
                </van-tab>
                <van-tab title="架空" >
                    <van-row style="margin-top:4%" @click="jumpshop(item)" v-for="(item,index) in arrList" :key=index>
                        <van-col span="4">
                            <img src="../assets/bookfeng.png" alt="" class="_fbookf">
                        </van-col>
                        <van-col span="14" offset="4">
                            <div class="_fbookt">{{item.name}}</div>
                            <div class="_fauthor"><span>{{item.author}}</span> <span>{{item.ctime.slice(0,10)}}</span></div>
                            <div class="_fsign"><span>14k收藏</span> <span>89部</span></div>
                            <div style="display:flex;justify-content: space-between;"> <span style="background:#00b7ee;" class="_fbtn">校园</span> <span style="background:#ec6941;" class="_fbtn">奇幻</span> </div>
                        </van-col>
                    </van-row>
                </van-tab>
                <van-tab title="穿越" >
                    <van-row style="margin-top:4%" @click="jumpshop(item)" v-for="(item,index) in arrList" :key=index>
                        <van-col span="4">
                            <img src="../assets/bookfeng.png" alt="" class="_fbookf">
                        </van-col>
                        <van-col span="14" offset="4">
                            <div class="_fbookt">{{item.name}}</div>
                            <div class="_fauthor"><span>{{item.author}}</span> <span>{{item.ctime.slice(0,10)}}</span></div>
                            <div class="_fsign"><span>14k收藏</span> <span>89部</span></div>
                            <div style="display:flex;justify-content: space-between;"> <span style="background:#00b7ee;" class="_fbtn">校园</span> <span style="background:#ec6941;" class="_fbtn">奇幻</span> </div>
                        </van-col>
                    </van-row>
                </van-tab>
                <van-tab title="武侠" >
                    <van-row style="margin-top:4%" @click="jumpshop(item)" v-for="(item,index) in arrList" :key=index>
                        <van-col span="4">
                            <img src="../assets/bookfeng.png" alt="" class="_fbookf">
                        </van-col>
                        <van-col span="14" offset="4">
                            <div class="_fbookt">{{item.name}}</div>
                            <div class="_fauthor"><span>{{item.author}}</span> <span>{{item.ctime.slice(0,10)}}</span></div>
                            <div class="_fsign"><span>14k收藏</span> <span>89部</span></div>
                            <div style="display:flex;justify-content: space-between;"> <span style="background:#00b7ee;" class="_fbtn">校园</span> <span style="background:#ec6941;" class="_fbtn">奇幻</span> </div>
                        </van-col>
                    </van-row>
                </van-tab>
                <van-tab title="轻小说">
                    <van-row style="margin-top:4%" @click="jumpshop(item)" v-for="(item,index) in arrList" :key=index>
                        <van-col span="4">
                            <img src="../assets/bookfeng.png" alt="" class="_fbookf">
                        </van-col>
                        <van-col span="14" offset="4">
                            <div class="_fbookt">{{item.name}}</div>
                            <div class="_fauthor"><span>{{item.author}}</span> <span>{{item.ctime.slice(0,10)}}</span></div>
                            <div class="_fsign"><span>14k收藏</span> <span>89部</span></div>
                            <div style="display:flex;justify-content: space-between;"> <span style="background:#00b7ee;" class="_fbtn">校园</span> <span style="background:#ec6941;" class="_fbtn">奇幻</span> </div>
                        </van-col>
                    </van-row>
                </van-tab>
                <van-tab title="言情" >
                    <van-row style="margin-top:4%" @click="jumpshop(item)" v-for="(item,index) in arrList" :key=index>
                        <van-col span="4">
                            <img src="../assets/bookfeng.png" alt="" class="_fbookf">
                        </van-col>
                        <van-col span="14" offset="4">
                            <div class="_fbookt">{{item.name}}</div>
                            <div class="_fauthor"><span>{{item.author}}</span> <span>{{item.ctime.slice(0,10)}}</span></div>
                            <div class="_fsign"><span>14k收藏</span> <span>89部</span></div>
                            <div style="display:flex;justify-content: space-between;"> <span style="background:#00b7ee;" class="_fbtn">校园</span> <span style="background:#ec6941;" class="_fbtn">奇幻</span> </div>
                        </van-col>
                    </van-row>
                </van-tab>
                <van-tab title="儿童" >
                    <van-row style="margin-top:4%" @click="jumpshop(item)" v-for="(item,index) in arrList" :key=index>
                        <van-col span="4">
                            <img src="../assets/bookfeng.png" alt="" class="_fbookf">
                        </van-col>
                        <van-col span="14" offset="4">
                            <div class="_fbookt">{{item.name}}</div>
                            <div class="_fauthor"><span>{{item.author}}</span> <span>{{item.ctime.slice(0,10)}}</span></div>
                            <div class="_fsign"><span>14k收藏</span> <span>89部</span></div>
                            <div style="display:flex;justify-content: space-between;"> <span style="background:#00b7ee;" class="_fbtn">校园</span> <span style="background:#ec6941;" class="_fbtn">奇幻</span> </div>
                        </van-col>
                    </van-row>
                </van-tab>
                </van-tabs>
            </div>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue';
    import 'vant/lib/index.css';
    import { Popup } from 'vant';

    Vue.use(Popup);
    import 	{mapActions,mapState} from 'vuex';
export default  {
    data() {
        return {
            activetab:0,
            active:0,
            bcid:1,
            page:1,
            arr :[],
            show: false,
        };
    },
    created(){   
        this.selList();  
        console.log(this.$store.state.arrList);
    },
     
    computed: {
         ...mapState(['arrList','searchBook'])
    },
    methods: {
        jumpshop:function (item) {
            console.log(item);
            
            this.$router.push({
                path: "/shop",
                query: {
                item: item.id
                }
            })
        }, 
         showPopup() {
            this.show = true;
        }, 
        jumpRanklist:function(){
            window.location.href='http://localhost:8080/#/rankList'
        },
        selList(){
            this.sellist({
                bcid:this.active+1,
                page:this.page,
            })
            
            
        },
        search:function(){
            console.log(document.getElementById("flag").value);
            var name=document.getElementById("flag").value;
            console.log(this.searchBook);
            this.show=true;
            this.selName({
                name:document.getElementById("flag").value
            })  
        },
        ...mapActions([
			'sellist','selName'
        ]),
      
        
    }
}
</script>
<style scoped>
.index{
    width: 90%;
    margin: auto   ;
    /* background: #000 */
}
.head{
    margin-top: 6%
}
._hicon{
    height: 1.3rem;    
    width: 1rem;
    display: inline;
      
}
._htitle{
    font-weight: bold;
}
._hnavigation{
    margin-bottom:3%; 
 
}
._hinp{
    box-shadow:none; /*去除阴影*/
    outline: none;/*聚焦input的蓝色边框*/
    /* -webkit-appearance: none;常用于IOS下移除原生样式 */
    width: 77%;
    height: 1.6rem;
    padding:1% 10% 1% 12%;
    border-radius: 1rem;
    border: 1px solid #eee;
    background: url('../assets/search.png');
    background-repeat:no-repeat;
    background-size: 1rem;
    background-position: left 1rem center;
    background-color: #f5f5f5;
    color: #707070;
}

.small1{
  height: 40px;
  width: 40px;
  /* margin-left: 2rem;  */
  margin-top:5px;
  display: flex;
  justify-content: center;
  margin:0 auto 20%;
}
._bt{
  /* margin-left:20px; */
  display: flex;
  justify-content: center;
  font-size: 12px;
  color:#000  ;
  opacity: 0.6;
  font-weight: 600;
   
}
._himg{
    height:32%;
    width: 100%;
}
._bimg{
    width: 126%;

   
}
._bzuozhe{
    width: 80%;
    margin:  0 0 2% 2% ;
    display: flex;
    /* border:1px solid red; */
    margin-top:3%;
    box-shadow:  0px 0px 8px #888888;
}
._bzuozheimg{
    border-radius: 50%;
    width: 110%;
    height: 100%;
    margin:  20%  0 20% 0;
}
._bcard{
    box-shadow:  5px 5px 8px #888888;
}
._fbookf{
    width: 180%
}
._foot{
    margin:3% 0 3% 0;
}
._bspaceb{
    display:flex ;
    justify-content:space-between;
}
._btitle{
    font-size:1.3rem;font-weight: bold;
}
._bmore{
    opacity: 0.5;
    display:flex;
    align-items:flex-end;
}
._fbookt{
    font-weight: bold;
    font-size:1.3rem;
    margin:6% 0 8% 0;
}
._fauthor{
    display:flex;
    justify-content: space-between;
    opacity: 0.5;
    margin-bottom:4%
}
._fsign{
    display:flex;
    justify-content: space-between;
    opacity: 0.5;
    margin-bottom:4%
}
._fbtn{
    padding:1% 5%;
    color:white;
    display:bolck;
    border-radius:10px;
    width:2rem;
}
._bcenter{
    text-align: center;
    font-size: 15px;
    color:#515151;
}
</style>