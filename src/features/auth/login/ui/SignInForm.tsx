import { useSignInForm } from '@/features/auth/login/hooks/useSignInForm'
import { SignInFormStyles } from '@/features/auth/login/ui/SignInForm.styled'
import { useTranslation } from '@/shared/hooks/useTranslation'
import { ControlledTextField } from '@/ui/components/text-field-controlled'
import { Button, Typography } from '@flyingtornado06/ui-kit'

export const SignInForm = () => {
  const { t } = useTranslation()

  const text = t.auth.signIn
  const { control, handleSubmit, onSignIn } = useSignInForm()
  const { Card } = SignInFormStyles

  return (
    <div>
      <Card>
        <form onSubmit={handleSubmit(onSignIn)}>
          <div>
            <Typography variant={'h1'}>{text.title}</Typography>

            <ControlledTextField control={control} label={text.emailLabel} name={'email'} />
            <ControlledTextField
              control={control}
              inputType={'password'}
              label={text.passwordLabel}
              name={'password'}
            />

            <Button fullWidth type={'submit'}>
              SignIn
            </Button>
          </div>
        </form>
      </Card>
    </div>
  )
}
