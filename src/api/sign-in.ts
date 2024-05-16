import { SignInResponse } from '@/@types/sign-in'
import { api } from '@/lib/axios'

interface SignInProps {
  email: string
  password: string
}

export async function signIn({ email, password }: SignInProps) {
  const { data } = await api.post<SignInResponse>('/login/', {
    email,
    password,
  })

  return {
    data,
  }
}
