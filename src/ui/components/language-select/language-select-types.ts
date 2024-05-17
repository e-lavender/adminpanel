import { ReactElement } from 'react'

import { LocalType } from '@/app/constants/enum/enums'

export type FlagComponentProps = {
  locale?: LocalType
}

export type FlagSelectOption = { label: ReactElement | string; value: string }
