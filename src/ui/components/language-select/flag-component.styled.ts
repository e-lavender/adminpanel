import { Typography } from '@flyingtornado06/ui-kit'
import { styled } from 'styled-components'

export const FlagComponentStyles = {
  Container: styled.div`
    display: flex;
    align-items: center;
  `,
  LanguageSelect: styled.div`
    display: flex;
    align-items: center;
    margin-right: 12px;
  `,
  Text: styled(Typography)`
    display: flex;
  `,
}
