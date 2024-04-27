import { Button, Card, TextField, Typography } from '@flyingtornado06/ui-kit'

export const SignInForm = () => {
  return (
    <div>
      <Card>
        <form>
          <div>
            <Typography>SignIn</Typography>

            <TextField />

            <Button fullWidth type={'submit'}>
              SignIn
            </Button>
          </div>
        </form>
      </Card>
    </div>
  )
}
