export interface SignInResponse {
  user: {
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
  tokens: {
    refresh: string
    access: string
  }
}
