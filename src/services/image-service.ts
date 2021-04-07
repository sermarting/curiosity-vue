import { http } from '@/http/http'
import { getFormattedDate } from '@/utils/date-formatter'
import { Image } from '@/models/Image'

export async function getImages(date: string): Promise<Image[]> {
  return (await http.get('mars-photos/api/v1/rovers/curiosity/photos', {
    params: {
      page: 1,
      camera: 'MAST',
      earth_date: getFormattedDate(new Date(date))
    }
  })).data.photos
}
