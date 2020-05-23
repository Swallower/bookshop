<template>
    <div class="updatesite">
        <div >
            <van-nav-bar
            title="更新地址"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
            />

            <van-address-edit
                :area-list="areaList"
                address-info=this.$route.query.item
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
            <p>{{this.$route.query.item}}</p>
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
            console.log(content);
            
            // console.log(this.token)
            Toast('save');
            // console.log(content.city);
            this.updateSite({
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
            ticket:this.token,
            id:this.$route.query.item.id
            })
        },
        onDelete() {
            Toast('delete');
            console.log(this.token);
            
            this.delUserSite(
                {

                    id:this.$route.query.item.id,
                    token:this.token
                }
            )
        },

        onClickLeft() {
            this.$router.go(-1);
        },
       ...mapActions([
			'addSite','delUserSite','updateSite'
        ]),
    }
}
</script>
<style scoped>
    
</style>