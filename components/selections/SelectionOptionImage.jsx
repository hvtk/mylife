import 'server-only'

import Image from 'next/image'

export function SelectionOptionImage({ src, alt }) {
  return (
    <Image
      src={src} 
      alt={alt} 
      width={275} 
      height={185}
      style={{borderRadius: "7px"}}
    />
  )
}