/* eslint-disable */
import { SET_IMAGES, SET_APOD } from './mutation-types'
import { State } from './state'
import { Image } from '@/models/Image'
import { Apod } from '@/models/Apod'
import { MutationTree } from 'vuex'

export const mutations: MutationTree<State> = {
  [SET_IMAGES](state: State, { images }: { images: Image[] }) {
    state.images = images
  },
  [SET_APOD](state: State, { apod }: { apod: Apod }) {
    state.apod.title = apod.title
    state.apod.image = apod.url
  }
}
