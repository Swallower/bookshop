<template>
  <div class="login">
	  <img src="../assets/loginbg.png" alt="" class="_bbg">
	  <table></table>
	  <div class="body"> 
		  <div class="_bmbottom">
			<input type="text" class="_buname _binp " :class="flag1==1?'_binpborderc':''" placeholder="请输入用户名" @blur="uname" v-model="username">  
		  	<div></div>
			<span :class="flag1==1?'spanno':'spanoff' ">{{flag1==1?'用户名错误':''}}</span>
		  </div>
		  <div>
			<input type="password" class="_bupwd _binp" placeholder="请输入密码" v-model="password" @blur="userpwd" :class="flag2==1?'_binpborderc':''">
			<div></div>
		  	<span :class="flag2==1?'spanno':'spanoff' ">{{flag2==1?'密码错误':'1'}}</span>
		  </div>
		 
		  <div style="width:100%;margin-top:5%">
			  
				<button class="_bbtn1 _bcc" @click="myLogin">登录</button>

			 
			  	<router-link to="./register"   class="_bbtn2" >注册</router-link>
		  </div>
	
		  <p>{{token}}</p>
	  </div>	
  </div>
</template>

<script>
	import Vue from 'vue';
	import 'vant/lib/index.css';
	
	import 	{mapActions,mapState} from 'vuex';
	import { Notify } from 'vant';

Vue.use(Notify);
export default {
	data(){
		return{
			checked: true,
			flag1:false,
			flag2:false,
			username:"",
			password:"",
			flag3:false,
		}
	},
	computed: {
		 ...mapState(['flag','token']),
		 getFlag(){
			//  console.log(this.$store.state.flag);
			 
			 return this.$store.state.flag;
		 }
	},
	watch:{
		getFlag:function(a){
			this.flag3=a
			console.log(this.flag3);
			
			// 	
		},

	},
	methods: {
		uname:function () {
			//用户名正则，6到16位（字母，数字）
			// let str=this.username;
			console.log(this.username);
			
			if(this.username.match(/^[a-zA-Z0-9]{6,16}$/,"")){
				this.flag1=false;
				console.log(this.username+' '+this.flag1);
			}else{
				console.log(this.username+' '+this.flag1);
				this.flag1=true;
			}
		},
		userpwd:function () {
			//密码正则，6到16位（字母，数字，下划线，减号）
			if(this.password.match(/^[a-zA-Z0-9_-]{6,16}$/,"")){
				this.flag2=false;
				console.log(this.password+' '+this.flag2 );
			}else{
				this.flag2=true;
				console.log(this.password+' '+this.flag2);
			}
		},
		async myLogin(){
			
			var a=await this.login({
				username:this.username,
				password:this.password
			})	
			// console.log(this.$store.state.flag);		
			setTimeout(()=>{
				if(this.flag3==1){
				Notify({ type: 'success', message: '登陆成功' });
			
				this.$router.push({path: '/'});
				
			} 
			else{
				Notify({ type: 'warning', message: '登录失败,帐号密码错误' });
			}
			
			},300)		
			
		
		},
		...mapActions([
			'login'
		]),

	},
	mounted(){
		var username=localStorage.getItem('username');
	}
}
</script>
<style scoped>
._bcc{
	background: none;
}
.login{
	height: 100%;
	width: 100%;
	position: relative;
	/* background: url(../assets/loginbg.jpg); */
}
._bbg{
	width: 100%;
	height: 100%;
	position: fixed;
	z-index: -10;
}
.body{
	position: relative;
	width: 90%;
	padding:0 5%; 	
	margin-top: 45%;	
}
._bmbottom{
	margin-bottom: 4%;
}
._binp{
	width: 70%;
	background: #ccc;
	border:2px solid  #2ecc71;
	margin:  0 auto 2%;
	border-radius: 16px;
	/* padding-left:5%; */
	padding:2% 0 2% 5%;
	display:flex;
	justify-content: center;
	transition: 0.5s;
}
._binp:focus{
	border:2px solid #3498bd ;
	transition: 1s all ;
}
._bbtn1{
	width:20%;
	padding:1% 0;
	border:2px solid #2ecc71;
	transition:0.25s;
	color:wheat;
	display: inline-block;
	margin:auto;
	text-align: center;
	margin-left:25% ;
	border-radius: 16px;
}
._bbtn1:hover{
	background: #2ecc71;
	transition: 1s all;
}
._bbtn2{
	width:20%;
	padding:1% 0;
	border:2px solid #e5a17a;
	transition:0.25s;
	color:wheat;	
	display: inline-block;
	text-align: center;
	margin-left:10%;
	border-radius: 16px;
	
}
._bbtn2:hover{
	background:#e5a17a;
	transition: 1s all;
}

.spanoff{
	display:block;
	text-align: center;
	height:16px;
	align-content: center;
	margin:auto  ;
	visibility: hidden;
}
.spanno{
	display:block;
	text-align: center;
	height:16px;
	align-content: center;
	margin:auto  ;
	color:red;
}
._binpborderc{
	border:2px solid lightcoral;
}
</style>