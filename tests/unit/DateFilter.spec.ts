import DateFilter from '@/components/DateFilter.vue'
import { shallowMount } from '@vue/test-utils'

describe('DateFilter', () => {
  it('check if event is emitted', () => {
    const wrapper = shallowMount(DateFilter)
    wrapper.vm.$data.value = '2016-09-11'
    wrapper.find('button').trigger('click')
    expect(wrapper.emitted('on-filter')).toBeTruthy()
    expect(wrapper.emitted('on-filter')[1]).toEqual(['2016-09-11'])
  })
})
