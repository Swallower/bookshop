<template>
    <div class="register">
        <img src="../assets/loginbg.png" alt="" class="_bbg">
		<p class="_top" @click="jumplogin">返回</p>
        <table></table>
        <div class="body"> 
		  <div class="_bmbottom">
			<input type="text" class="_buname _binp " :class="flag1==1?'_binpborderc':''" placeholder="请输入用户名" @blur="uname" v-model="username">  
		  	<div></div>
			<span :class="flag1==1?'spanno':'spanoff' ">{{flag1==1?'用户名错误':''}}</span>
		  </div>
		  <div class="_bmbottom">
			<input type="password" class="_bupwd _binp" placeholder="请输入密码" v-model="password" @blur="upwd" :class="flag2==1?'_binpborderc':''">
			<div></div>
		  	<span :class="flag2==1?'spanno':'spanoff' ">{{flag2==1?'密码错误':'1'}}</span>
		  </div>
           <div class="_bmbottom">
			<input type="password" class="_bupwd _binp" placeholder="请确认密码" v-model="upwdtwo" @blur="userpwdtwo" :class="flag3==1?'_binpborderc':''">
			<div></div>
		  	<span :class="flag3==1?'spanno':'spanoff' ">{{flag3==1?'两次密码不一致':'1'}}</span>
		  </div>
		  <div class="_bmbottom">
			<input type="text" class="_bupwd _binp" placeholder="请输入手机号" v-model="tel" @blur="userphone" :class="flag4==1?'_binpborderc':''">
			<div></div>
		  	<span :class="flag4==1?'spanno':'spanoff' ">{{flag4==1?'手机号格式错误':'1'}}</span>
		  </div>
		  <div style="width:100%;margin-top:5%">
			  <button class="_bbtn1" style="background:none" @click="myRegister">提交</button>
			  <!-- <router-link to="#" class="_bbtn1" @click="myRegister">提交</router-link> -->
			  <router-link to="./login" class="_bbtn2" >退出</router-link>
		  </div>
	  </div>	
 
    </div>
</template>
<script>
import 	{mapActions} from 'vuex';
   export default {
	data(){
		return{
			checked: true,
			flag1:false,
			flag2:false,
			flag3:false,
			flag4:false,
			username:"",
			password:"",
			upwdtwo:"",
			tel:"",
		}
	},
	methods: {
		uname:function () {
			//用户名正则，6到16位（字母，数字）
			let str=this.username;
			if(str.match(/^[a-zA-Z0-9]{6,16}$/,"")){
				console.log(str.match(/^[a-zA-Z0-9_-]{6,16}$/,""));
				this.flag1=false;
				console.log(this.username+' '+this.flag1);
			}else{
				console.log(this.username+' '+this.flag1);
				this.flag1=true;
			}
		},
		upwd:function () {
			//密码正则，6到16位（字母，数字，下划线，减号）
			if(this.password.match(/^[a-zA-Z0-9_-]{6,16}$/,"")){
				this.flag2=false;
				console.log(this.password+' '+this.flag2 );
			}else{
				this.flag2=true;
				console.log(this.password+' '+this.flag2);
			}
        },
        userpwdtwo:function () {
            if(this.password===this.upwdtwo&&this.password!=''){
                this.flag3=false;
            }else{
                this.flag3=true;
            }
        },
        userphone:function(){
            if(this.tel.match(/^[1]([3-9])[0-9]{9}$/,'')){
				this.flag4=false;
				console.log(typeof this.tel);
				
            }else{
                this.flag4=true;
            }
		},
		myRegister(){
			console.log(this.username+' '+this.password)
			this.register({
				username:this.username,
				password:this.password,
				tel:this.tel
			}).then(()=>{
				this.$router.go(-1)
			})
		},
		...mapActions([
			'register'
		]),
		jumplogin:function(){
			this.$router.go(-1);
		}
	}
}
	
	
</script>
<style scoped>
._top{
	color:#1989fa;;
	margin:0;
	position: fixed;
	left:8%;
	top:5%

}
.register{
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
	margin-top: 30%;	
}
._bmbottom{
	margin-bottom: 5%;
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
    color: #020202;
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
    color: #020202;
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