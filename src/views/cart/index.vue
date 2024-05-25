<template>
  <div class="cart">
  <Header title="购物车" :edit="true"/>
  <div class="content">
  <cart-details v-if="isShow" :changeShow="changeShow"/>
  <Empty v-else />
  </div>
  <Footer />
 </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Empty from '@/components/Empty.vue'
import Header from '@/components/Header.vue'
import cartDetails from './components/cartDetails.vue'
import { useStore } from 'vuex'
import { onMounted, ref } from 'vue'
export default {
  components:{
    Footer,
    Empty,
    Header,
    cartDetails
  },
  setup(){
    const isShow  =ref(true)
    const store = useStore()
    const init = ()=>{
      if(store.state.cartList.length === 0 ){
        isShow.value = false
      }
    }
    const changeShow = ()=>{
      isShow.value = false
    }
    onMounted(()=>{
      init()
    })
     return{
      isShow,
      changeShow
    
  }
  }
 
}
</script>

<style lang="less" scoped>
.cart{
  display: flex;
  flex-flow: column;
  height: 100%;
  .content{
    flex:1;
    overflow-y:auto;
  }
}

</style>