import Image from 'next/image'

export function SelectedSelectionImage({ src, alt }) {
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