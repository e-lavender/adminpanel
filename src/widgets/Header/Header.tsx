import React from 'react'

import { HeaderStyled } from '@/widgets/Header/Header.styled'
import { Select, Typography } from '@flyingtornado06/ui-kit'

export const Header = () => {
  const { Container, Wrapper } = HeaderStyled

  return (
    <Wrapper>
      <Container>
        <Typography as={'span'} variant={'large'}>
          Админ на последнем издыхании
        </Typography>
        <Typography as={'span'} variant={'large'}>
          Админ на последнем издыхании
        </Typography>
      </Container>
    </Wrapper>
  )
}
