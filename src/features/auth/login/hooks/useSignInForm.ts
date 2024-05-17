import { useForm } from 'react-hook-form'

import { SIGN_IN_ADMIN } from '@/features/auth/login/api/signIn.api'
import { LoginAdmin, MutationLoginAdminArgs } from '@/shared/appolo-client/Schema.types'
import { saveAuthToken } from '@/utils'
import { useMutation } from '@apollo/client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/router'
import { z } from 'zod'

export const useSignInForm = () => {
  const loginFormSchema = z.object({
    email: z.string().email(),
    password: z.string(),
  })

  type LoginFormType = z.infer<typeof loginFormSchema>
  type LoginAdminMutation = {
    __typename?: 'Mutation'
    loginAdmin: LoginAdmin
  }
  const [signIn] = useMutation<LoginAdminMutation, MutationLoginAdminArgs>(SIGN_IN_ADMIN, {})
  const { push } = useRouter()
  const onSignIn = async (data: LoginFormType) => {
    const { data: res } = await signIn({ variables: data })

    if (res?.loginAdmin.logged) {
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
