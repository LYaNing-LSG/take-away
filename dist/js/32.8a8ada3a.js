"use strict";(self["webpackChunkvue_waimai"]=self["webpackChunkvue_waimai"]||[]).push([[32],{776:function(t,e,a){a.d(e,{A:function(){return m}});var n=a(641),r=a(33);const i={class:"header"};function l(t,e,a,l,c,s){const d=(0,n.g2)("van-icon");return(0,n.uX)(),(0,n.CE)("div",i,[(0,n.bF)(d,{name:"arrow-left",class:"icon",onClick:l.toBack},null,8,["onClick"]),(0,n.Lk)("div",null,(0,r.v_)(a.title),1),a.edit?((0,n.uX)(),(0,n.CE)("div",{key:0,class:"edit",onClick:e[0]||(e[0]=(...t)=>l.handleEdit&&l.handleEdit(...t))},(0,r.v_)(l.store.state.edit?"编辑":"完成"),1)):(0,n.Q3)("",!0)])}var c=a(4249),s=a(5220),d=a(6278),o={props:["title","edit"],setup(){const t=(0,d.Pj)(),e=(0,s.rd)(),a=()=>{e.back()},n=()=>{t.state.cartList.length?(t.commit("edit"),t.commit("ChangeDelete")):c.y.fail("商品空空如也")};return{toBack:a,store:t,handleEdit:n}}},u=a(6262);const p=(0,u.A)(o,[["render",l],["__scopeId","data-v-276e82aa"]]);var m=p},9032:function(t,e,a){a.r(e),a.d(e,{default:function(){return L}});var n=a(641),r=a(33);const i=t=>((0,n.Qi)("data-v-e743f88c"),t=t(),(0,n.jt)(),t),l={class:"create-order"},c={class:"content"},s={class:"pay-wrap"},d={class:"price"},o=i((()=>(0,n.Lk)("span",null,"商品金额",-1)));function u(t,e,a,i,u,p){const m=(0,n.g2)("Header"),v=(0,n.g2)("van-contact-card"),k=(0,n.g2)("van-card"),f=(0,n.g2)("van-button");return(0,n.uX)(),(0,n.CE)("div",l,[(0,n.bF)(m,{title:"生成订单"}),(0,n.bF)(v,{type:"edit",tel:t.tel,name:t.name,onClick:i.onEdit},null,8,["tel","name","onClick"]),(0,n.Lk)("div",c,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(i.store.state.orderList,((t,e)=>((0,n.uX)(),(0,n.CE)("div",null,[(0,n.bF)(k,{num:t.num,price:t.price,title:t.title,thumb:t.pic},null,8,["num","price","title","thumb"])])))),256))]),(0,n.Lk)("div",s,[(0,n.Lk)("div",d,[o,(0,n.Lk)("span",null,"￥"+(0,r.v_)(t.totalPrice),1)]),(0,n.bF)(f,{type:"primary",class:"pay-btn",color:"#ffc400",onClick:i.handleCreateOrder},{default:(0,n.k6)((()=>[(0,n.eW)("生成订单")])),_:1},8,["onClick"])])])}a(4114);var p=a(776),m=a(953),v=a(6278),k=a(5825),f=a(5220),h={components:{Header:p.A},setup(){const t=(0,v.Pj)(),e=(0,f.rd)(),a=(0,f.lq)(),r=(0,m.Kh)({tel:"13043012841",name:"LYN",totalPrice:0}),i=()=>{e.push("/address")},l=()=>{let e=0;t.state.orderList.length&&t.state.orderList.forEach((t=>{e+=t.num*t.price})),r.totalPrice=e},c=()=>{t.state.userAddress.forEach((t=>{t.isDefault&&(r.name=t.name,r.tel=t.tel)}))},s=()=>{(0,k.l)({title:"提示",message:"恭喜，您的订单已完成。"}).then((()=>{let n=t.state.cartList.filter((t=>!a.query.list.includes(t.id+"")));t.commit("delete",n),t.commit("orderListEd"),e.push("/order")}))};return(0,n.sV)((()=>{l(),c()})),{...(0,m.QW)(r),onEdit:i,store:t,handleCreateOrder:s}}},C=a(6262);const E=(0,C.A)(h,[["render",u],["__scopeId","data-v-e743f88c"]]);var L=E}}]);
//# sourceMappingURL=32.8a8ada3a.js.map