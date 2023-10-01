import { mount } from '@vue/test-utils'
import { watchEffect } from 'vue'
import BuddyGenerator from '../buddy-generator.vue'
import { teamJson } from './constants'
import { expect, describe, it, vi, beforeEach, afterAll } from 'vitest'

vi.mock('../../services/team.service', () => {
  return {
    TeamService: {
      getTeams: vi.fn().mockImplementation(() => {
        return new Promise((resolve) =>
          resolve({
            data: {
              value: teamJson
            }
          })
        )
      })
    }
  }
})
describe('Buddy Generator', () => {
  const createComponent = async () => {
    const component = mount(BuddyGenerator)
    await component.vm.$nextTick()
    return component
  }
  beforeEach(() => {
    Math.floor = vi.fn().mockImplementation(() => 3)
  })
  afterAll(() => {
    vi.restoreAllMocks()
  })

  it('should load team data', async () => {
    const component = await createComponent()
    await component.vm.generate()
    expect(component.vm.team).toEqual(teamJson)
  })

  it('should select a random person', async () => {
    const component = await createComponent()
    component.vm.team = teamJson
    const randomPerson = component.vm.selectRandomPerson()
    expect(randomPerson).toBeDefined()
    expect(randomPerson).toEqual(teamJson[3])
  })

  it('should render the selected person name', async () => {
    const component = await createComponent()
    await component.vm.generate()
    expect(component.find('.selected-buddy').text()).toContain(
      'Your randomly selected onboarding buddy is'
    )
    expect(component.find('.selected-buddy').text()).toContain(teamJson[3].name)
  })

  it('should trigger a call to "generate" and render the generated buddy', async () => {
    const component = await createComponent()
    watchEffect(() => {
     if (component.vm.selected) expect(component.find('.selected-buddy').text()).toContain(teamJson[3].name)
    })

    const btn = component.find('button')
    expect(btn).toBeDefined()
    btn.trigger('click')
  })

  it('should trigger a recursive call to "generate" and render the generated buddy', async () => {
    const component = await createComponent()
    component.vm.department = 'Elderly Support'
    component.vm.team = teamJson
    Math.floor = vi.fn().mockImplementation(() => 1)
    try {
      await component.vm.generate()
    } catch (e) {
      expect(e.message).toBe('Maximum call stack size exceeded')
    }
    component.vm.department = 'Core Team Dog'
    await component.vm.generate()
    expect(component.vm.selected).toEqual(teamJson[1])

  })
})
