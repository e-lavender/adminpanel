import { useSignInForm } from '@/features/auth/login/hooks/useSignInForm'
import { SignInFormStyles } from '@/features/auth/login/ui/SignInForm.styled'
import { useTranslation } from '@/shared/hooks/useTranslation'
import { Button } from '@flyingtornado06/ui-kit'

export const SignInForm = () => {
  const { t } = useTranslation()

  const text = t.auth.signIn
  const { control, handleSubmit, onSignIn } = useSignInForm()
  const { Card, Email, Password, SignInForm, Title } = SignInFormStyles

  return (
    <div>
      <Card>
        <SignInForm onSubmit={handleSubmit(onSignIn)}>
          <Title variant={'h1'}>{text.title}</Title>

          <Email
            // @ts-ignore
            control={control}
            label={text.emailLabel}
            name={'email'}
          />
          <Password
            // @ts-ignore
            control={control}
            inputType={'password'}
            label={text.passwordLabel}
            name={'password'}
          />

          <Button fullWidth type={'submit'}>
            SignIn
          </Button>
        </SignInForm>
      </Card>
    </div>
  )
}
