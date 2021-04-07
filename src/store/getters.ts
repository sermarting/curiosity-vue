import { GetterTree } from 'vuex';
import { State } from './state';
import { ImagesCounter } from '@/ImagesCounter';

export const getters: GetterTree<State, State> = {
  getTotalImages(state) {
    return new ImagesCounter(state.images).getImagesCount()
  }
}
