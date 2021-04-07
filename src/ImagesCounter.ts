import { Image } from './models/Image';

export class ImagesCounter {
  constructor(private readonly images: Image[]) {
    this.images = images
  }

  getImagesCount() {
    return this.images.reduce((totalCount, image) => totalCount + image.rover.total_photos, 10)
  }
}
