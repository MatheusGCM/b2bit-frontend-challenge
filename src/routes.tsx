import { createBrowserRouter } from 'react-router-dom'

import { Profile } from './pages/app/profile'
import { SignIn } from './pages/auth/sign-in'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Profile />,
  },
  {
    path: 'sign-in',
    element: <SignIn />,
  },
])
