import { mount } from '@vue/test-utils'
import DepartmentSelect from '../department-select.vue'
import { expect, describe, it } from 'vitest'

describe('Department Select', () => {
  const createComponent = async () => {
    const component = mount(DepartmentSelect, {
      props: {
        modelValue: ''
      }
    })
    return component
  }

  it('should render', async () => {
    const component = await createComponent()
    const subTitle = component.find('.sub-title')
    const select = component.find('.select')
    expect(subTitle).toBeDefined()
    expect(select).toBeDefined()
    expect(subTitle.text()).toBe("New team member's department")
  })

  it('should update the value', async () => {
    const component = await createComponent()
    const select = component.find('.select')
    const options = select.findAll('option')
    await options.at(1).setSelected()
    expect(component.find('option:checked').element.value).toBe('Farming Function')
    expect(component.emitted()['update:model-value']).toEqual([['Farming Function']])
  })
})
