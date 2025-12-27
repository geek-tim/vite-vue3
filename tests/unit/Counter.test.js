import { mount } from '@vue/test-utils'
import Counter from '../../src/components/counter/index.vue'

describe('Counter 组件', () => {
    test('初始显示计数为 0', () => {
        const counter = mount(Counter)

        // 断言：页面包含 "计数: 0"
        expect(counter.text()).toContain('计数: 0')
    })

    test('点击 +1 按钮，计数加 1', async () => {
        const counter = mount(Counter)
        const button = counter.find('[data-btn="add"]')
        const value = counter.find('[data-value="value"]')
        await button.trigger('click')
        expect(value.text()).toContain('计数: 1')
    })

    test('点击 -1 按钮，计数减 1', async () => {
        const counter = mount(Counter)
        const button = counter.find('[data-btn="sub"]')
        const value = counter.find('[data-value="value"]')
        await button.trigger('click')
        expect(value.text()).toContain('计数: -1')
    })
})
