import React, { useState } from 'react'

import { ProfileTabs } from '@/features/user/ui/ProfileTabs/profile-tabs'
import { UserInfo } from '@/features/user/ui/user-info'
import Followers from '@/pages/user/followers'
import Following from '@/pages/user/following'
import Payments from '@/pages/user/payments'
import UploadedPhotos from '@/pages/user/uploaded-photos'
import { useRouter } from 'next/router'

const renderItem: Record<string, any> = {
  followers: Followers,
  following: Following,
  payments: Payments,
  uploadedPhotos: UploadedPhotos,
}

const UserPage = () => {
  const router = useRouter()
  const tab = router.query.id && router.query.id[1]

  return (
    <div>
      <UserInfo />
      <ProfileTabs />
      <div>{renderItem[tab || 'uploadedPhotos']()}</div>
    </div>
  )
}

export default UserPage
