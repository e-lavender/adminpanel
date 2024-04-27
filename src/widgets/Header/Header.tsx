import React from 'react'

import { LanguageSelect } from '@/ui/components/language-select'
import { HeaderStyled } from '@/widgets/Header/Header.styled'
import { Typography } from '@flyingtornado06/ui-kit'

export const Header = () => {
  const { Container, Wrapper } = HeaderStyled

  return (
    <Wrapper>
      <Container>
        <Typography as={'span'} variant={'large'}>
          Админ на последнем издыхании
        </Typography>
        <LanguageSelect />
      </Container>
    </Wrapper>
  )
}
