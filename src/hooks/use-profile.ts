import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Profile } from '@/@types/profile'
import { getProfile } from '@/api/get-profile'

export function useProfile() {
  const [profile, setProfile] = useState<Profile>()

  const navigate = useNavigate()

  function handleLogout() {
    localStorage.clear()
    navigate('/sign-in', { replace: true })
  }

  async function fetchProfile() {
    try {
      const storedProfileAsJSON = localStorage.getItem('@b2bit:profile')

      if (storedProfileAsJSON) {
        const storedProfile = JSON.parse(storedProfileAsJSON)

        setProfile(storedProfile)
      } else {
        const storedAccessToken = localStorage.getItem('@b2bit:access-token')
        if (storedAccessToken) {
          const { data } = await getProfile()

          const profileJSON = JSON.stringify(data)
          localStorage.setItem('@b2bit:profile', profileJSON)

          setProfile(data)
        } else {
          throw new Error()
        }
      }
    } catch (error) {
      handleLogout()
    }
  }

  useEffect(() => {
    fetchProfile()
  }, [])

  return {
    profile,
    handleLogout,
  }
}
