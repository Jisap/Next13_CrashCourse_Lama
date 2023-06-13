import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div>
      <div>©2023 Lamamia. All rights reserved.</div>
      <div>
        <Image src="/1.png" width={15} height={15} alt="Lama Dev Facebook Account" />
        <Image src="/2.png" width={15} height={15} alt="Lama Dev" />
        <Image src="/3.png" width={15} height={15} alt="Lama Dev" />
        <Image src="/4.png" width={15} height={15} alt="Lama Dev" />
      </div>
    </div>
  )
}

export default Footer