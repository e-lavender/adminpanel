import { appSettings } from '@/app/settings'

export const ROUTES = {
  //PAYMENTS: '/admin/payments',
  //POSTS: '/admin/posts',
  SIGN_IN: `/auth/sign-in`,
  //STATISTICS: '/admin/statistics',
  USER: 'user/',
  //USER_PROFILE: `${appSettings.DOMAIN_URL}profile/user-profile`,
  //USERS: '/admin/users',
} as const
