import { ProfileResponse } from '@/@types/profile'
import { api } from '@/lib/axios'

export async function getProfile() {
  const { data } = await api.get<ProfileResponse>('/profile/')

  return {
    data,
  }
}
