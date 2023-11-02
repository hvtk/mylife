import 'server-only'

import Image from 'next/image'

export function SelectionImage({ src, alt }) {
  return (
    <Image
      src={src} 
      alt={alt} 
      width={550} 
      height={375}
      style={{borderRadius: "7px"}}
    />
  )
}