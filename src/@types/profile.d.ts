export interface ProfileResponse {
  id: number
  name: string
  email: string
  is_active: boolean
  avatar: null
  type: string
  created: string
  modified: string
  role: string
}

export interface Profile extends ProfileResponse {}
