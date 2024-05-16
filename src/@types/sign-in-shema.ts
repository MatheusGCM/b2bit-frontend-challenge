import { z } from 'zod'

export const signInForm = z.object({
  email: z
    .string()
    .min(1, 'Este campo não pode ser em branco.')
    .email({ message: 'Email inválido' }),
  password: z.string().min(1, 'Este campo não pode ser em branco.'),
})

export type SignInForm = z.infer<typeof signInForm>
