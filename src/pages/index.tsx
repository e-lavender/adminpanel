import React, { useEffect, useState } from 'react'

import { Loader } from '@flyingtornado06/ui-kit'
import { useRouter } from 'next/router'

const Home = () => {
  const [loading, setLoading] = useState(true)
  const { push } = useRouter()

  useEffect(() => {
    const token = sessionStorage.getItem('isLoggedIn')

    if (!token) {
      void push('/auth/sign-in')
    } else {
      setLoading(false)
    }
  }, [push])

  if (loading) {
    return (
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          marginTop: '25%',
        }}
      >
        <Loader isLoading={loading} />
      </div>
    )
  }

  return (
    <>main page</>
    // me && (
    //   <>
    //     {posts?.items?.map((item, index) => {
    //       const filteredImages = item.images.filter(image => image.imageSize === IMAGE_SIZE.MEDIUM)
    //
    //       return (
    //         <div key={item.id}>
    //           <PostCard
    //             avatarOwner={item.avatarOwner}
    //             createdAt={item.createdAt}
    //             description={item.description}
    //             id={item.id}
    //             images={filteredImages}
    //             //comments={POST_COMMENTS?.comments}
    //             ownerId={item.ownerId}
    //             userName={item.userName}
    //           />
    //         </div>
    //       )
    //     })}
  )
}

export default Home
