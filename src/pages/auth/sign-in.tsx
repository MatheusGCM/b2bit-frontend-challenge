import { Helmet } from 'react-helmet-async'

import logo from '@/assets/b2bit-logo.png'
import { Form } from '@/components/form'
import { useAuth } from '@/hooks/use-auth'

export function SignIn() {
  const { handleSignIn } = useAuth()

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-white-1">
      <Helmet title="Login" />

      <div className="w-[28rem] rounded-[1.125rem] px-[1.618rem] pb-[2.508rem] pt-[3.438rem] shadow-[0_0_64px_0_#00000040]">
        <div className="mb-[2.18rem] flex justify-center">
          <img src={logo} alt="" width={295} height={116} />
        </div>
        <Form onSubmit={handleSignIn} />
      </div>
    </div>
  )
}
