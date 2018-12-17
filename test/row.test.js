const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/components/row'
import Col from '../src/components/col'

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Row', () => {
    it('存在.', () => {
        expect(Row).to.exist
    });
    it('接收gutter属性.', (done) => {
        Vue.component('u-row', Row);
        Vue.component('u-col', Col);
        const div = document.createElement('div');
        document.body.appendChild(div);
        div.innerHTML = `
        <u-row gutter="20">
            <u-col col="12"></u-col>
            <u-col col="12"></u-col>
        </u-row>
        `;
        const vm = new Vue({
            el: div
        });
        setTimeout(() => {
            const row = vm.$el.querySelector('.row');
            expect(getComputedStyle(row).marginRight).to.eq('-10px');
            expect(getComputedStyle(row).marginLeft).to.eq('-10px');
            const cols = vm.$el.querySelectorAll('.col');
            expect(getComputedStyle(cols[0]).paddingRight).to.eq('10px');
            expect(getComputedStyle(cols[1]).paddingLeft).to.eq('10px');
            done();
            vm.$el.remove();
            vm.$destroy()
        })
    });
    it('接收align属性', () => {
        const div = document.createElement('div');
        document.body.appendChild(div);
        const Constructor = Vue.extend(Row);
        const vm = new Constructor({
            propsData: {
                align: 'right'
            }
        }).$mount(div);
        const element = vm.$el;
        expect(getComputedStyle(element).justifyContent).to.eq('flex-end');
        vm.$el.remove();
        vm.$destroy();
    })
});
