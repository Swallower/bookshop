import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username:"",
    password:'' ,
    arrList:[],
    token:'',
    flag:0,
    MySite:[],
    bookDetails:[],
    cartList:[],
    searchBook:[]
  },
  mutations: {
    saveRes(state,res){
      state.arrList=res;
    },
    saveToken(state,token){
      state.token=token;
      console.log(state.token)
    },
    saveFlag(state,flag){
      state.flag=flag;
        
    },
    saveMySite(state,MySite){
      state.MySite=MySite
    },
    saveBookDetails(state,bookDetails){
      state.bookDetails=bookDetails
    },
    saveList(state,list){
      state.cartList=list
    },
    saveSearchBook(state,searchBook){
      state.searchBook=searchBook
    },
    
  },
  actions: {
    login(context,user){
      (async function(){
        var result=await axios.post('/user/login',{
          username:user.username,
          password:user.password,
        }
      ).then((res)=>{
        console.log(res);
        context.commit('saveToken',res.data.data);
        if(res.data.status==200){
          context.commit('saveFlag',1)
          
        }else{
          context.commit('saveFlag',0)
        }
        
        
      }).catch((err)=>{
        console.log(err);   
      })     
    })();
    },
    register(context,user){
      (async function(){
        var result=await axios.post('/user/regiest',{
          username:user.username,
          password:user.password,
          tel:user.tel
        })  
        .then((res) => {
          console.log(res);
          console.log('success');
          console.log(JSON.stringify(user));
          
        })
        .catch((err)=> {
          console.error(err); 
        })
      })()
    },
    sellist(context,bcid){

      (async function(){
        var url='/book/queryByBCid/'+bcid.bcid+'/'+bcid.page+'/'+1+'/'+1;
          var result=await axios.post(url)
          .then(res => {
            console.log(res)
            context.commit('saveRes',res.data.data.list)
          })
          .catch(err => {   
            console.error(err); 
          })
      })()
    },
    addSite(context,site){
      console.log(site.ticket);
      (async function(){
        var result=await axios.post('/userc/createUserC'+'/'+site.ticket,{
          addressDetail:site.addressDetail,
          areaCode:site.areaCode,
          city:site.city,
          country:site.country,
          county:site.county,
          isDefault:site.isDefault,
          name:site.name,
          postalCode:site.postalCode,
          province:site.province,
          tel:site.tel,
        }).then((res)=>{
          console.log('success');
          console.log(res);           
        }).catch((err)=>{
          console.log(err);          
        }) 
      })()
    },
    updateSite(context,site){
      console.log(site.id);
      
      (async function(){   
        var result=await axios.post('/userc/updateUserC'+'/'+site.ticket,{
          addressDetail:site.addressDetail,
          areaCode:site.areaCode,
          city:site.city,
          country:site.country,
          county:site.county,
          isDefault:site.isDefault,
          name:site.name,
          postalCode:site.postalCode,
          province:site.province,
          tel:site.tel,
          id:site.id
        })
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.error(err); 
        })
      })()
    },
    selMySite(context, token){
      (async function(){
        var url='/userc/queryUserC/'+token
        var  result=await axios.post(url)
        .then(res => {
          console.log(res);
          context.commit('saveMySite',res.data.data)
        })
        .catch(err => {
          console.error(err); 
        })
      })()
    },
    delUserSite(context,id){
      (async function(){
        var url='/userc/deleteUserC/'+id.id+'/'+id.token;
        var result=await axios.post(url)
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.error(err); 
        })
      }())
    },
    selBookDetails(context,bid){
      (async function(){
        var result=await axios.post('/book/queryById/'+bid)
        .then(res => {
          console.log(res);
          context.commit('saveBookDetails',res.data.data)
          
        })
        .catch(err => {
          console.error(err); 
        })
      }())
    },
    selName(context,name){
      (async function(){
        var result=await axios.post('/book/queryByString/1/1/1',
          name
        )
        .then(res => { 
          console.log(res);
          context.commit('saveBookDetails',res.data.data)
          context.commit('saveSearchBook',res.data.data)
        })
        .catch(err => {
          console.error(err); 
        })
      }())
    },
    saveOrder(context,order){
      (async function(){
        var result=await axios.post('/order/createOrder/'+order.token,{
          bid:order.bid,
          bpid:order.bpid,
          ucid:order.ucid,
          amount:order.amount,
          price:order.price,
          msg:order.msg
        }).then(res=>{
          console.log(res);
          
        }).catch(err=>{
          console.log(err);   
        })
      }())
    },
    updateOrder(context,order){
      (async function(){
        var result=await axios.post('/order/updateOrder/'+order.token,{
          bid:order.bid,
          bpid:order.bpid,
          ucid:order.ucid,
          amount:order.amount,
          price:order.price,
          msg:order.msg
        }).then(res=>{
          console.log(res);
          
        }).catch(err=>{
          console.log(err);
        })
      }()) 
    },
    selOrder(context,order){
      (async function(){
        var  url='/order/queryOrder/'+0+'/'+1+'/'+order.token
        var result=await axios.post(url)
        .then(res=>{
          context.commit('saveList',res.data)
          console.log(res);
          
        })
        .catch(err=>{
          console.log(err);
          
        })
           
      }())
    },
    delOrder(context,order){
      (async function(){
        var url='/order/deleteOrder/'+order.id+'/'+order.token
        var result=await axios.post(url)
        .then(res => {
          console.log(res)         
        })
        .catch(err => {
          console.error(err); 
        })
      }())
    },
    
    saveCart(context,order){
      (async function(){
        var url='/cart/createCart/'+order.token;
        var result=await axios.post(url,{
          bid:order.bid,
          bpid:order.bpid,
          amount:order.amount
        })
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.error(err); 
        })
      }())
    },
    updateCart(context,order){
      (async function(){
        var url='/cart/updateCart/'+order.token;
        var result=await axios.post(url,{
          bid:order.bid,
          bpid:order.bpid,
          amount:order.amount
        })
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.error(err); 
        })
      })
    },
    selCartList(context,req){
      (async function(){
        var url='/cart/queryCartList/'+1+'/'+req.token
        var result=await axios.post(url)
        .then(res => {
          context.commit('saveList',res.data)
          console.log(res)
        })
        .catch(err => {
          // context.commit('saveList','');
          console.error(err); 
        })
      }())
    },
    delCartList(context,req){
      (async function(){
        var url='/cart/deleteCart/'+req.id+"/"+req.token
        var result=await axios.post(url)
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.error(err); 
        })
      }())
    }

  },
  getters: {
    arrList:  state => state.arrList,
    flag: state=>state.flag,
    token: state=>state.token,
    bookDetails:state=>state.bookDetails,
    searchBook:state=>state.searchBook,
    }
  })


