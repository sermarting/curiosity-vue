import { http } from '@/http/http'
import { getFormattedDate } from '@/utils/date-formatter'
import { Apod } from '@/models/Apod'

export async function getApod(date: string): Promise<Apod> {
  return (await http.get('planetary/apod', {
    params: {
      date: getFormattedDate(new Date(date))
    }
  })).data
}
