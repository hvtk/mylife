import Image from 'next/image'

export function Selection({ src, alt }) {
  return (
    <Image
      src={src} 
      alt={alt} 
      width={153} 
      height={153}
      style={{borderRadius: "7px"}}
    />
  )
}
