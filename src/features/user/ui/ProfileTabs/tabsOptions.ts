type IdType = string | string[] | undefined
export const TABS_OPTIONS = [
  {
    description: 'Uploaded photos',
    disabled: false,
    id: 1,
    name: 'uploadedPhotos',
    url: (id: IdType) => `/user/${id}/uploadedPhotos`,
  },
  {
    description: 'Payments',
    disabled: false,
    id: 2,
    name: 'payments',
    url: (id: IdType) => `/user/${id}/payments`,
  },
  {
    description: 'Followers',
    disabled: false,
    id: 3,
    name: 'followers',
    url: (id: IdType) => `/user/${id}/followers`,
  },
  {
    description: 'Following',
    disabled: false,
    id: 4,
    name: 'following',
    url: (id: IdType) => `/user/${id}/following`,
  },
]
