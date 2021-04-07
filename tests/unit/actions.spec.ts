import { actions } from '@/store/actions'

jest.mock('@/store/actions')

describe('actions', () => {
  it('should commit the SET_IMAGES mutation with the images retrieved', async () => {
    /*const serviceMock = {
      getImages: jest.fn().mockResolvedValue(['foo', 'bar', 'baz'])
    }*/
    const mockCommit = jest.fn()
    await actions.FETCH_IMAGES({ commit: mockCommit }, '2016-04-15')
    expect(mockCommit).toHaveBeenCalledWith('SET_IMAGES', { images: ['foo', 'bar', 'baz'] })
  })
})


/*import actions from '@/store/actions'

jest.mock('@/store/actions')

describe('actions', () => {
  it('should commit the SET_IMAGES mutation with the images retrieved', () => {
    const mockCommit = jest.fn()
    actions.FETCH_IMAGES({ commit: mockCommit }, '2016-04-15')
    expect(mockCommit).toHaveBeenCalledWith('SET_IMAGES', { images: ['foo', 'bar', 'baz'] })
  })
})*/
