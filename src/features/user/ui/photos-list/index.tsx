import React from 'react'

import { useGetAllPostsByUserQuery } from '@/features/user/api/user-page.api.types'
import { UserInfoStyled } from '@/features/user/ui/user-info.styled'
import PhotoItem from '@/ui/components/photo-item'
import { useRouter } from 'next/router'

const PhotosList = () => {
  const router = useRouter()
  const userId = Number(router.query.id && router.query.id[0])
  const { data } = useGetAllPostsByUserQuery({ skip: !userId, variables: { userId } })

  console.log('Photosdata', data)

  return (
    <div>
      {data?.getPostsByUser.items?.map(item => {
        return (
          <PhotoItem
            alt={`${item.id}`}
            height={150}
            key={item.id}
            src={item.url || ''}
            width={150}
          />
        )
      })}
    </div>
  )
}

export default PhotosList
