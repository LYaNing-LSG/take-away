import { createStore } from 'vuex'
import mutations from './mutations'
export default createStore({
  state: {
   cartList:[],
   isDelete:true,
   edit:true,
   orderList:[],
   userAddress:[ {
    id: 1001,
    name: 'jason',
    tel: '15874859686',
    province: '广东省',
    city: '深圳市',
    county: '南山区',
    addressDetail: '深圳湾',
    isDefault: true,
    areaCode: '110101',
  },
  {
    id: 1002,
    name: 'allen',
    tel: '15874859685',
    province: '湖北省',
    city: '武汉市',
    county: '武昌区',
    addressDetail: '黄鹤楼',
    isDefault: false,
    areaCode: '110101',
  },],
  orderListEnd:[],

  },
  getters: {
    
  },
  mutations,
  actions: {
    
    
  },
  modules: {
  }
})
