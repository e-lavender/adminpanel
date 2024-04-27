import { LocalType, flagIcons } from '@/app/constants/enum/enums'
import { useTranslation } from '@/shared/hooks/useTranslation'

import { FlagComponentStyles } from './flag-component.styled'
import { FlagComponentProps } from './language-select-types'

export const FlagComponent = ({ locale = LocalType.EN }: FlagComponentProps) => {
  const { t } = useTranslation()

  const { [locale]: language } = t.header.language
  const { Container, LanguageSelect, Text } = FlagComponentStyles

  return (
    <Container>
      <LanguageSelect>{flagIcons[locale]}</LanguageSelect>
      <Text variant={'regular-16'}>{language}</Text>
    </Container>
  )
}
