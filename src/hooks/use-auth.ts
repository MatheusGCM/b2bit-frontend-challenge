import { isAxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

import { SignInForm } from '@/@types/sign-in-shema'
import { signIn } from '@/api/sign-in'

export function useAuth() {
  const navigate = useNavigate()

  async function handleSignIn({ email, password }: SignInForm) {
    try {
      const { data } = await signIn({ email, password })

      if (data) {
        const accessToken = data?.tokens.access
        localStorage.setItem('@b2bit:access-token', accessToken)

        navigate('/', { replace: true })
      }
    } catch (error) {
      if (isAxiosError(error)) {
        const status = error.response?.status

        if (status === 401) {
          return toast.error('Usuário e/ou senha incorreto(s)')
        }

        return toast.error('Por favor, tente novamente em alguns instantes.')
      }
    }
  }

  return {
    handleSignIn,
  }
}
