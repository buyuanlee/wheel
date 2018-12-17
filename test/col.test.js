const expect = chai.expect;
import Vue from 'vue'
import Col from '../src/components/col'

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Col', () => {
    it('存在.', () => {
        expect(Col).to.exist
    });
    it('接收span属性', () => {
        const div = document.createElement('div');
        document.body.appendChild(div);
        const Constructor = Vue.extend(Col);
        const vm = new Constructor({
            propsData: {
                span: 1
            }
        }).$mount(div);
        const element = vm.$el;
        expect(vm.$el.classList.contains('col-1')).to.eq(true);
        vm.$el.remove();
        vm.$destroy();
    });
    it('接收offset属性', () => {
        const div = document.createElement('div');
        document.body.appendChild(div);
        const Constructor = Vue.extend(Col);
        const vm = new Constructor({
            propsData: {
                offset: 2
            }
        }).$mount(div);
        const element = vm.$el;
        expect(vm.$el.classList.contains('offset-2')).to.eq(true);
        vm.$el.remove();
        vm.$destroy();
    });
    it('接收pad属性', () => {
        const div = document.createElement('div');
        document.body.appendChild(div);
        const Constructor = Vue.extend(Col);
        const vm = new Constructor({
            propsData: {
                pad: {span: 1, offset: 2}
            }
        }).$mount(div);
        const element = vm.$el;
        expect(vm.$el.classList.contains('col-pad-1')).to.eq(true);
        expect(vm.$el.classList.contains('offset-pad-2')).to.eq(true);
        vm.$el.remove();
        vm.$destroy();
    });
    it('接收narrow-pc属性', () => {
        const div = document.createElement('div');
        document.body.appendChild(div);
        const Constructor = Vue.extend(Col);
        const vm = new Constructor({
            propsData: {
                narrowPc: {span: 1, offset: 2}
            }
        }).$mount(div);
        const element = vm.$el;
        expect(vm.$el.classList.contains('col-narrow-pc-1')).to.eq(true);
        expect(vm.$el.classList.contains('offset-narrow-pc-2')).to.eq(true);
        vm.$el.remove();
        vm.$destroy();
    });
    it('接收pc属性', () => {
        const div = document.createElement('div');
        document.body.appendChild(div);
        const Constructor = Vue.extend(Col);
        const vm = new Constructor({
            propsData: {
                pc: {span: 1, offset: 2}
            }
        }).$mount(div);
        const element = vm.$el;
        expect(vm.$el.classList.contains('col-pc-1')).to.eq(true);
        expect(vm.$el.classList.contains('offset-pc-2')).to.eq(true);
        vm.$el.remove();
        vm.$destroy();
    });
    it('接收wide-pc属性', () => {
        const div = document.createElement('div');
        document.body.appendChild(div);
        const Constructor = Vue.extend(Col);
        const vm = new Constructor({
            propsData: {
                widePc: {span: 1, offset: 2}
            }
        }).$mount(div);
        const element = vm.$el;
        expect(vm.$el.classList.contains('col-wide-pc-1')).to.eq(true);
        expect(vm.$el.classList.contains('offset-wide-pc-2')).to.eq(true);
        vm.$el.remove();
        vm.$destroy();
    });
});
