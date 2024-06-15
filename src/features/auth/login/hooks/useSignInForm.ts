import { useForm } from 'react-hook-form'

import { saveAuthToken } from '@/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/router'
import { z } from 'zod'

export const useSignInForm = () => {
  const loginFormSchema = z.object({
    email: z.string().email(),
    password: z.string(),
  })

  type LoginFormType = z.infer<typeof loginFormSchema>

  const { push } = useRouter()
  const onSignIn = async (data: LoginFormType) => {
    const response = await fetch('/api/sign-in', {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const {
      data: { loginAdmin },
    } = await response.json()

    if (loginAdmin.logged) {
      saveAuthToken(data)
      await push('/')
    }
  }
  const { control, handleSubmit } = useForm<LoginFormType>({
    defaultValues: {
      email: 'admin@gmail.com',
      password: 'admin',
    },
    mode: 'onBlur',
    resolver: zodResolver(loginFormSchema),
  })

  return { control, handleSubmit, onSignIn }
}
