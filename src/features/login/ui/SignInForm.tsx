import { Button, Card, Typography } from '@flyingtornado06/ui-kit'

export const SignInForm = () => {
  return (
    <div>
      <Card>
        <form>
          <div>
            <Typography>SignIn</Typography>

            <ControlledTextField control={control} label={text.email} name={'email'} />
            <ControlledTextField
              control={control}
              inputType={'password'}
              label={text.password}
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
