import React from 'react'

import Image from 'next/image'
type Props = {
  alt: string
  height: number
  src: string
  width: number
}
const PhotoItem = (props: Props) => {
  // eslint-disable-next-line jsx-a11y/alt-text
  return <Image {...props}></Image>
}

export default PhotoItem
