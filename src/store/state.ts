import { Image } from '@/models/Image';
import { ApodFormModel } from '@/models/ApodFormModel';

export class State {
  images: Image[] = []
  apod: ApodFormModel = {
    title: '',
    image: ''
  }
}
