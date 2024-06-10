import { ArrowBack } from '@/app/assets/svg/arrow-back-icon'
import { BackToPreviousStyled } from '@/features/user/ui/BackToPrevious/back-to-previous.styled'
import { Typography } from '@flyingtornado06/ui-kit'
import { useRouter } from 'next/router'

export const BackToPrevious = () => {
  const router = useRouter()
  const { Container } = BackToPreviousStyled
  const handleBack = () => {
    void router.back()
  }

  return (
    <Container onClick={handleBack}>
      <ArrowBack />
      <Typography variant={'medium-14'}>Back to users list</Typography>
    </Container>
  )
}
