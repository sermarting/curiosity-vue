/* eslint-disable */
import { SET_IMAGES } from './../mutation-types'
import { Commit } from 'vuex'

/*export const actions = {
  FETCH_IMAGES({ commit }: { commit: Commit }, date: string) {
    commit(SET_IMAGES, {
      images: ['foo', 'bar', 'baz']
    })
  }
}*/


export async function FETCH_IMAGES({ commit }: { commit: Commit }, date: string) {
  commit(SET_IMAGES, { images: ['foo', 'bar', 'baz']})
}

export const actions = {
  FETCH_IMAGES
}
