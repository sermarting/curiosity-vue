/* eslint-disable */
import { Commit } from 'vuex'
import { SET_IMAGES, SET_APOD } from './mutation-types'
import { getImages } from '@/services/image-service'
import { getApod } from '@/services/apod-service'

export async function FETCH_IMAGES({ commit }: { commit: Commit }, date: string) {
  const images = await getImages(date)
  commit(SET_IMAGES, { images })
}

export async function FETCH_APOD({ commit }: { commit: Commit }, date: string) {
  const apod = await getApod(date)
  commit(SET_APOD, { apod })
}

export const actions = {
  FETCH_IMAGES,
  FETCH_APOD
}

// Clean Code

/*export const actions: ActionTree<State, State> = {
  FETCH_IMAGES,
  FETCH_APOD
}*/
