import React, { PropsWithChildren } from 'react'

import { ProfileTabs } from '@/features/user/ui/ProfileTabs/profile-tabs'

const UserProfileLayout = ({ children }: PropsWithChildren) => {
  return (
    <main>
      <ProfileTabs />
      <div>{children}</div>
    </main>
  )
}

export default UserProfileLayout
