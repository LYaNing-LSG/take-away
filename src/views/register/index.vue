<template>
 <div class="register">
    <Header title="注册"/>
    <div class="img">买团</div>
    <van-form @submit="onSubmit">
        <van-field v-model="username" name="user" label="用户名" placeholder="用户名" :rules="[{required:true,message:'i请填写用户名'}]" />
        <van-field v-model="password" name="pass" label="密码" placeholder="密码" :rules="[{required:true,message:'i请填写用户名'}]" />
        <div style="margin:16px">
            <van-button round block type="info" native-type="submit" color="#ffc400">
                注册
            </van-button>
             <van-button round block type="info" color="#ffc400" class="register" @click="toLogin">
              登陆
            </van-button>
        </div>
    </van-form>
 </div>
</template>

<script>
import Header from '@/components/Header.vue'
import { useRouter } from 'vue-router'
import { reactive, toRefs } from 'vue'
import { Toast } from 'vant'
export default {
components:{
Header,
},
setup(){
    const router = useRouter()
    const data=reactive({
        username:'',
        password:''
    })
    const onSubmit=(value)=>{
      if(localStorage.userInfo){
        let userInfo = JSON.parse(localStorage.getItem('userInfo'))
        if(userInfo['user'] === value['user']){
          Toast('用户已存在')
          return
        }else{
          register(value)
        }
      }
    }
    const register=(value)=>{
      localStorage.setItem('userInfo',JSON.stringify(value))
      Toast('注册成功')
      router.push('/login')
    }
    const toLogin=()=>{
      router.push('/login')
    }
    return{
        onSubmit,
        toLogin,
        ...toRefs(data),
    }
}
}
</script>

<style lang="less" scoped>
.register {
  .img {
    width: 200px;
    height: 200px;
    background-color: #ffc400;
    font-size: 80px;
    line-height: 200px;
    text-align: center;
    border-radius: 40px;
    margin: 20px auto;
  }
  .register {
    margin-top: 20px;
  }
}
</style>