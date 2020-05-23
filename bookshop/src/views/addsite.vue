<template>
    <div class="addsite">
        <div >
            <van-nav-bar
            title="新增地址"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
            />

            <van-address-edit
                :area-list="areaList"
                show-postal
                show-delete
                show-set-default
                show-search-result
                :search-result="searchResult"
                :area-columns-placeholder="['请选择', '请选择', '请选择']"
                @save="onSave"
                @delete="onDelete"
                @change-detail="onChangeDetail"
            />
            <p>{{token}}</p>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
import { AddressEdit } from 'vant';
import area from "../assets/area"
import { Toast } from 'vant'
import { NavBar } from 'vant';
import 	{mapActions,mapState} from 'vuex';
Vue.use(NavBar);
Vue.use(AddressEdit);
export default {
    data(){
        return{
            areaList:area,
            searchResult: [],
           
        }
    },
    computed: {
        ...mapState(['token']),
    },
    // watch:{
	// 	token
	// },
    methods: {
        onSave(content) {
            
            console.log(this.token)
            Toast('save');
            console.log(content.city);
            this.addSite({
            addressDetail:content.addressDetail,
            areaCode:content.areaCode,
            county:content.county,
            city:content.city,
            isDefault:content.isDefault,
            postalCode:content.postalCode,
            name:content.name,
            province:content.province,
            tel:content.tel,
            country:content.country,
            ticket:this.token
            })
        },
        onDelete() {
            Toast('delete');
        },
        onChangeDetail(val) {
            if (val) {
                // this.searchResult = [{
                // name: '黄龙万科中心',
                // address: '杭州市西湖区'
                // }];
            } else {
                this.searchResult = [];
            }
        },
        onClickLeft() {
            this.$router.go(-1);
        },
       ...mapActions([
			'addSite'
        ]),
    }
}
</script>
<style scoped>
    
</style>