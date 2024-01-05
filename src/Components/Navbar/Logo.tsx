'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import logo from '/public/images/logo2.png'
export default function Logo() {
  const router = useRouter()
  return (
    <div>
      <div></div>
      <Image alt='logo' className='hidden md:block' height='100' width='100' src={logo}></Image>
    </div>
  )
}
