import { getFormattedDate } from '@/utils/date-formatter'

describe('date-formatter', () => {
  it('Check if works getFormattedDate', () => {
    const date = new Date(2018, 11, 9, 22, 0, 0, 0)
    const result = '2018-12-09'
    expect(getFormattedDate(date)).toEqual(result)
  })
})
