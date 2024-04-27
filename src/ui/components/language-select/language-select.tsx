import { LocalType } from '@/app/constants/enum/enums'
// eslint-disable-next-line no-duplicate-imports
import { SelectVariant } from '@/app/constants/enum/enums'
import { Select } from '@flyingtornado06/ui-kit'
import { useRouter } from 'next/router'

import { FlagComponent } from './flag-component'
import { languageSelectOptions } from './language-select-data'

export const LanguageSelect = () => {
  const { asPath, locale, pathname, push, query } = useRouter()
  const typedLocale = locale as LocalType

  const currentSelectedLocale = FlagComponent({ locale: typedLocale })

  const changeLangHandler = (value: string) => {
    void push({ pathname, query }, asPath, { locale: value })
    debugger
  }

  return (
    <div>
      <Select
        onChange={changeLangHandler}
        options={languageSelectOptions}
        placeholder={currentSelectedLocale}
        value={currentSelectedLocale}
        variant={SelectVariant.Language}
      />
    </div>
  )
}
