<template>
    <div class="mysite" >   
        <div></div>
         <van-nav-bar
            title="我的地址"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
            />
       
        <van-address-list
            v-model="chosenAddressId"
            :list="list1"
            :disabled-list="disabledList"
            default-tag-text="默认"
            @add="onAdd"
            @edit="onEdit"
        />
    </div>
</template>
<script>
import Vue from 'vue';
import { AddressList } from 'vant';
import { Toast } from 'vant';
import { NavBar } from 'vant';
import 	{mapActions,mapState} from 'vuex';
Vue.use(NavBar);
Vue.use(Toast);
Vue.use(AddressList);
export default {
   data() {
    return {
      chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号'
        },
        {
          id: '3',
          name: '王五',
          tel: '1320000000',
          address: '浙江省杭州市滨江区江南大道 15 号'
        }
      ],
      list1:[]
    }
  },
  created(){   

        this.selMySite(this.token);  
        setTimeout(() => {
          
          this.list1=this.MySite;
          for(var i=0;i<this.list1.length;i++){
            this.list1[i].address=this.list1[i].city+this.list1[i].county+this.list1[i].addressDetail
          }
          console.log(this.list1);
          
        }, 500);
  },
     
  computed: {
		 ...mapState(['token','MySite']),
	},
  methods: {
    onAdd() {
      Toast.success('新增地址');
      
       this.$router.push({path:"/addsite"});
    },

    onEdit(item, index) {
      Toast(item.name);
      console.log(item);
     
      this.$router.push({
      path: "/updateSite",
      query: {
        item: item
      }
});
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    ...mapActions([
			'selMySite'
		]),
  }
}
</script>
<style scoped>
.mysite{
    position:fixed;
    background: #dbdbdb;
    width:100%;
    height: 100%;
    
}
.van-address-list__bottom{
    background: #dbdbdb;
}
</style>
    
