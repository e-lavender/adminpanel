import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export const useSignInForm = () => {
  const loginFormSchema = z.object({
    email: z
      .string({
        invalid_type_error: `Wrong email type`,
        required_error: `Email`,
      })
      .trim()
      .email(`Wrong email type`),
    password: z.string({ required_error: `Password required` }).trim(),
  })

  type LoginFormType = z.infer<typeof loginFormSchema>

  return useForm<LoginFormType>({
    defaultValues: {
      email: 'admin@gmail.com',
      password: 'admin',
    },
    mode: 'onBlur',
    resolver: zodResolver(loginFormSchema),
  })
}
