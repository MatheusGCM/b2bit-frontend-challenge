import { useState } from 'react'

export function useInput() {
  const [showPassword, setShowPassword] = useState(false)

  function toggleShowPassword() {
    setShowPassword((state) => !state)
  }

  return {
    showPassword,
    toggleShowPassword,
  }
}
