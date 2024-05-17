import { Helmet } from 'react-helmet-async'

import { Button, ProfilePicture, StaticInput } from '@/components'
import { useProfile } from '@/hooks/use-profile'

export function Profile() {
  const { profile, handleLogout } = useProfile()

  return (
    <div className="relative flex h-screen items-center justify-center min-[460px]:bg-white-2">
      <Helmet title="Profile" />

      <header className="absolute top-0 flex h-[4.375rem] w-full items-center justify-center bg-white px-[2.125rem] min-[460px]:justify-end">
        <Button
          label="Logout"
          className="h-[2.75rem] w-[17rem] rounded-md"
          onClick={handleLogout}
        />
      </header>

      <div className="w-96 rounded-2xl bg-white p-[1.875rem] pb-4 min-[460px]:border min-[460px]:shadow-[0_2px_10px_0_#0000001A]">
        <ProfilePicture src="https://github.com/MatheusGCM.png" />
        <StaticInput label="Name" value={profile?.name} />
        <StaticInput label="E-mail" value={profile?.email} />
      </div>
    </div>
  )
}
