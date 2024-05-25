import { createApp } from 'vue'
import App from './App.vue'
import { Button } from 'vant';
import './assets/base.css'
import 'vant/lib/index.css';
import 'amfe-flexible';
import router from './router/index';
// import Vuex from 'vuex'
import store from './store';
import './api/mock'
import {Icon,Tab, Tabs,TreeSelect,Stepper,ActionBar, ActionBarIcon, ActionBarButton,Toast,Checkbox, CheckboxGroup,SubmitBar,ContactCard,Card,Dialog,AddressList,AddressEdit,Form, Field } from 'vant'
createApp(App).use(router).use(Button).use(Icon).use(Tab).use(Tabs).use(TreeSelect).use(Stepper).use(ActionBar).use(ActionBarIcon).use(ActionBarButton).use(store).use(Toast).use(Checkbox).use(CheckboxGroup).use(SubmitBar).use(ContactCard).use(Card).use(Dialog).use(AddressList).use(AddressEdit).use(Form).use(Field).mount('#app')
