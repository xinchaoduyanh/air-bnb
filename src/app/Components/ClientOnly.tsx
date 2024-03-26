"use client"

import React, { useEffect } from 'react'

export default function ClientOnly({children}: {children: React.ReactNode}) {
  const [hasmounted, setHasMounted] = React.useState(false)
  useEffect(() => {
    setHasMounted(true)
  }, [])
  if (!hasmounted) {
    return null
  }
  return (
    <>
      {children }
    </>
  )
}
