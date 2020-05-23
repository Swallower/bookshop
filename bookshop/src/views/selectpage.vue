<template>
    <div id="selectpage">
        <img src="../assets/book.png" alt="" class="_titleimg">
        <div style="margin: 5%;background:#fff;padding-left:5%">
            <!-- <div style="display:flex;justify-content: space-between;"> -->
                <van-row>
                    <van-col span="16">
                        <div>
                            <div style="font-weight:bold;margin-top:5%">尝尽人生百味,方知道人间冷暖</div>
                            <div class="_fontstyle"><p class="_overflow">《命运厚待认证生活的人》</p></div>
                            <div class="_fontstyle"><p class="_overflow">《格调:社会等级与生活品味》</p></div>
                            <div class="_fontstyle"><p class="_overflow">《认真生活的人指的被认真对待》</p></div>
                        </div>
                    </van-col>
                    <van-col span="8"  style="display: flex;justify-content: flex-end;" >
                        <img src="../assets/_bbadao.png" alt="" class="_trapezoid"> 
                    </van-col>
                </van-row>
            <!-- </div> -->
        </div>
        <div style="margin: 5%;background:#fff;padding-left:5%">
            <!-- <div style="display:flex;justify-content: space-between;"> -->
                <van-row>
                    <van-col span="16">
                        <div>
                            <div style="font-weight:bold;margin-top:5%">你的情绪为何总被他人左右</div>
                            <div class="_fontstyle"><p class="_overflow">《中国人,你为什么爱生气》</p></div>
                            <div class="_fontstyle"><p class="_overflow">《不完美,才完美》</p></div>
                            <div class="_fontstyle"><p class="_overflow">《认知升级》</p></div>
                        </div>
                    </van-col>
                    <van-col span="8"  style="display: flex;justify-content: flex-end;" >
                        <img src="../assets/_bbadao.png" alt="" class="_trapezoid"> 
                    </van-col>
                </van-row>
            <!-- </div> -->
        </div>
        <div style="margin: 5%;background:#fff;padding-left:5%">
            <!-- <div style="display:flex;justify-content: space-between;"> -->
                <van-row>
                    <van-col span="16">
                        <div>
                            <div style="font-weight:bold;margin-top:5%">开心点朋友们,人间贼值的</div>
                            <div class="_fontstyle"><p class="_overflow">《吃货的生物学修养》</p></div>
                            <div class="_fontstyle"><p class="_overflow">《风味人间》</p></div>
                            <div class="_fontstyle"><p class="_overflow">《10分钟极简健身》</p></div>
                        </div>
                    </van-col>
                    <van-col span="8"  style="display: flex;justify-content: flex-end;" >
                        <img src="../assets/_bbadao.png" alt="" class="_trapezoid"> 
                    </van-col>
                </van-row>
            <!-- </div> -->
        </div>
        <div style="margin: 5%;background:#fff;padding-left:5%">
            <!-- <div style="display:flex;justify-content: space-between;"> -->
                <van-row>
                    <van-col span="16">
                        <div>
                            <div style="font-weight:bold;margin-top:5%">遇险如何自救?</div>
                            <div class="_fontstyle"><p class="_overflow">《遇险自救全攻略》</p></div>
                            <div class="_fontstyle"><p class="_overflow">《擒拿格斗》</p></div>
                            <div class="_fontstyle"><p class="_overflow">《王大伟自救手册》</p></div>
                        </div>
                    </van-col>
                    <van-col span="8"  style="display: flex;justify-content: flex-end;" >
                        <img src="../assets/_bbadao.png" alt="" class="_trapezoid"> 
                    </van-col>
                </van-row>
            <!-- </div> -->
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
}
</script>
<style scoped>
#selectpage{
    background:#f0f0f0;
}
._titleimg{
    width:100%;
    height: 100%;
    margin-top:-10%;
}
._trapezoid{
    width:90%;
    height: 100%;
}
._fontstyle{
    font-size:14px;
    color:#515151;
    margin-top:5%
}
._overflow{
    width:75%;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    word-break:keep-all;
}
</style>