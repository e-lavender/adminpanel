import React, { useEffect } from 'react'

import { useRouter } from 'next/router'

const Home = (/*{ posts }: InferGetStaticPropsType<typeof getStaticProps>*/) => {
  const { push } = useRouter()

  useEffect(() => {
    const token = sessionStorage.getItem('isLoggedIn')

    if (!token) {
      void push('/auth/sign-in')
    }
  }, [push])

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
