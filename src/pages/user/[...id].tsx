import React from 'react'

import { ProfileTabs } from '@/features/user/ui/ProfileTabs/profile-tabs'
import { UserInfo } from '@/features/user/ui/user-info'
import Followers from '@/pages/user/Followers'
import Following from '@/pages/user/Following'
import Payments from '@/pages/user/payments'
import UploadedPhotos from '@/pages/user/uploaded-photos'
import { DropdownMenu } from '@/ui/common/dropdown-menu'
import { useRouter } from 'next/router'

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
      <DropdownMenu>
        <a href={''}>dasda</a>
        <a href={''}>asdad</a>
        <a href={''}>asdasd</a>
      </DropdownMenu>
      <div>{renderItem[tab || 'uploadedPhotos']()}</div>
    </div>
  )
}

export default UserPage
