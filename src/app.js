import Vue from 'vue'
import chai from 'chai'
import plugin from './plugin'
import spies from 'chai-spies'
import Button from './components/button'
import Icon from './components/icon'
import ButtonGroup from './components/button-group'
import Input from './components/input'
import Row from './components/row'
import Col from './components/col'
import Layout from './components/layout'
import Header from './components/header'
import Footer from './components/footer'
import Sider from './components/sider'
import Content from './components/content'
import Toast from './components/toast'
import Tab from './components/tab'
import TabHeader from './components/tab-header'
import TabItem from './components/tab-item'
import TabContent from './components/tab-content'
import TabPane from './components/tab-pane'


import './style/reset.css'
import './js/svg'

chai.use(spies);
Vue.use(plugin);
Vue.component('u-button', Button);
Vue.component('u-icon', Icon);
Vue.component('button-group', ButtonGroup);
Vue.component('u-input', Input);
Vue.component('u-row', Row);
Vue.component('u-col', Col);
Vue.component('u-layout', Layout);
Vue.component('u-header', Header);
Vue.component('u-content', Content);
Vue.component('u-sider', Sider);
Vue.component('u-footer', Footer);
Vue.component('u-toast', Toast);
Vue.component('u-tab', Tab);
Vue.component('u-tab-header', TabHeader);
Vue.component('u-tab-item', TabItem);
Vue.component('u-tab-pane', TabPane);
Vue.component('u-tab-content', TabContent);


/** @namespace chai.expect */
const expect = chai.expect;

new Vue({
    el: '#app',
    data: {
        loading1: false,
        message: '',
        selectedTap: 'game'
    },
    created() {
        // this.$toast('我是弹窗msg', {})
    },
    methods: {
        showToast() {
            this.$toast(['<a href="http://www.qq.com">ssss</a>'], {
                position: 'bottom',
                enableHtml: true,
                closeButton: {
                    text: '已确认',
                    callback() {
                        console.log('好的');
                    }
                },
                autoClose: 3,
            })
            // this.$toast('当前网络不稳定')
        }
        /*inputChange(event) {
           console.log(event.target.value);
         }*/
    }
});

