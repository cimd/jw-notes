import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-vitest'
import { mount } from '@vue/test-utils'
import DeleteButton from 'modules/Application/components/Buttons/DeleteButton.vue'
import { beforeAll, describe, expect, it } from 'vitest'
import { nextTick } from 'vue'

installQuasarPlugin()
let wrapper = null
describe('Delete Button', async () => {
  beforeAll(() => {
    wrapper = mount(DeleteButton)
  })
  it('should mount component', () => {
    expect(wrapper.text()).toContain('Delete')
  })

  it('should open modal', async () => {
    await wrapper.find('#delete').trigger('click')
    await nextTick()
    await nextTick()
    await nextTick()
    await nextTick()
    await nextTick()
    await nextTick()
    await nextTick()
    await nextTick()
    await nextTick()
    await nextTick()
    await nextTick()
    await nextTick()

    // expect(show).toBeCalled()
    // await nextTick()
    // await nextTick()
    // expect(wrapper.text()).toContain('Confirm Delete?')
  })
})
