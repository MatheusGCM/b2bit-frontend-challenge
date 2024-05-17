import { Helmet } from 'react-helmet-async'

import logo from '@/assets/b2bit-logo.png'
import { Form } from '@/components/form'
import { useAuth } from '@/hooks/use-auth'

export function SignIn() {
  const { handleSignIn } = useAuth()

  return (
    <div className="flex h-screen flex-col justify-center bg-white-1 min-[460px]:items-center">
      <Helmet title="Login" />

      <div className="rounded-[1.125rem] px-[1.618rem] pb-[2.508rem] min-[460px]:w-[28rem] min-[460px]:pt-[3.438rem] min-[460px]:shadow-[0_0_64px_0_#00000040]">
        <div className="mb-[2.18rem] flex justify-center">
          <img
            src={logo}
            alt=""
            className="w-52 min-[460px]:h-[7.25rem] min-[460px]:w-[18.438rem]"
          />
        </div>
        <Form onSubmit={handleSignIn} />
      </div>
    </div>
  )
}
