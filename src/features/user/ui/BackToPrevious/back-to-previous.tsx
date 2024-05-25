import { ArrowBack } from '@/app/assets/svg/arrow-back-icon'
import { BackToPreviousStyled } from '@/features/user/ui/BackToPrevious/back-to-previous.styled'
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
      <span>Back to users list</span>
    </Container>
  )
}
