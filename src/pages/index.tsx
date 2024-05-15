import React, { useEffect } from 'react'

import { useRouter } from 'next/router'

const Home = (/*{ posts }: InferGetStaticPropsType<typeof getStaticProps>*/) => {
  // if (isLoading) {
  //   return <LoadingSpinner isLoading={isLoading} />
  // }
  //
  const me = false
  const { push } = useRouter()

  useEffect(() => {
    if (!me) {
      void push('/auth/sign-in')
    }
  }, [me, push])

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
