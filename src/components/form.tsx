import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Button, Input } from './'

import { SignInForm, signInForm } from '@/@types/sign-in-shema'
import { useInput } from '@/hooks/use-input'

interface FormProps {
  onSubmit({ email, password }: SignInForm): void
}

export function Form({ onSubmit }: FormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInForm>({
    resolver: zodResolver(signInForm),
  })
  const { showPassword, toggleShowPassword } = useInput()

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="E-mail"
        type="text"
        placeholder="@gmail.com"
        error={errors.email?.message}
        {...register('email')}
      />
      <Input
        label="Password"
        secureTextEntry
        type={showPassword ? 'text' : 'password'}
        placeholder="****************"
        error={errors.password?.message}
        showPassword={showPassword}
        toggleShowPassword={toggleShowPassword}
        {...register('password')}
      />
      <Button
        label="Sign In"
        type="submit"
        disabled={isSubmitting}
        isLoading={isSubmitting}
      />
    </form>
  )
}
