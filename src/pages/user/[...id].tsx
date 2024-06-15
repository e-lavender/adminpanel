import React, { ReactElement, useState } from 'react'

import { ProfileTabs } from '@/features/user/ui/ProfileTabs/profile-tabs'
import { UserPage } from '@/features/user/ui/user-page'
import Followers from '@/pages/user/followers'
import Following from '@/pages/user/following'
import Payments from '@/pages/user/payments'
import UploadedPhotos from '@/pages/user/uploaded-photos'
import UserProfileLayout from '@/ui/templates/layouts/user-profile-layout/user-profile-layout'
import { useRouter } from 'next/router'

const renderItem: Record<string, any> = {
  followers: Followers,
  following: Following,
  payments: Payments,
  uploadedPhotos: UploadedPhotos,
}

const User = () => {
  const router = useRouter()
  const tab = router.query.id && router.query.id[1]

  return (
    <div>
      <UserPage />
      <ProfileTabs />
      <div>{tab && renderItem[tab]()}</div>
    </div>
  )
}

export default User
