import { EnFlag, RuFlag } from '@/app/assets/svg'
// eslint-disable-next-line no-duplicate-imports
export enum LocalType {
  EN = 'en',
  RU = 'ru',
}

export const flagIcons = {
  [LocalType.EN]: EnFlag,
  [LocalType.RU]: RuFlag,
} as const

export const IMAGE_SIZE = {
  MEDIUM: 'MEDIUM',
  THUMBNAIL: 'THUMBNAIL',
} as const

export const COMMON_MODE_STATE = {
  EDIT: 'edit',
  VIEW: 'view',
} as const

export enum SelectVariant {
  Language = 'language',
  Pagination = 'pagination',
  Primary = 'primary',
}
export const ACTION_TYPES = {
  ban: 'ban',
  copy: 'copy',
  delete: 'delete',
  edit: 'edit',
  follow: 'follow',
  info: 'info',
  report: 'report',
  unfollow: 'unfollow',
} as const
