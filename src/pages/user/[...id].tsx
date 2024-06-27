import React from 'react'

import { ProfileTabs } from '@/features/user/ui/ProfileTabs/profile-tabs'
import { UserInfo } from '@/features/user/ui/user-info'
import Payments from '@/pages/user/payments'
import UploadedPhotos from '@/pages/user/uploaded-photos'
import { useRouter } from 'next/router'
import Followers from '@/pages/user/Followers'
import Following from '@/pages/user/Following'

const renderItem: Record<string, () => React.JSX.Element> = {
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
      {/*<UploadedPhotos />*/}
      <div>{renderItem[tab || 'uploadedPhotos']()}</div>
    </div>
  )
}

export default UserPage
