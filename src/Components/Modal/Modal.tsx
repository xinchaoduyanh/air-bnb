'use client'

import React, { useCallback, useEffect, useState } from 'react'
interface Props {
  isOpen?: boolean
  onClose: () => void
  onSubmit: () => void
  title?: string
  body?: React.ReactElement
  footer?: React.ReactElement
  actionLabel?: string
  disable?: boolean
  secondaryAction?: () => void
  secondaryLabel?: string
}
export default function Modal({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disable,
  secondaryAction,
  secondaryLabel
}: Props) {
  const [showModal, setShowModal] = useState(isOpen)
  useEffect(() => {
    setShowModal(isOpen)
  }, [isOpen])

  const handleClose = useCallback(() => {
    if (disable) {
      return
    }
    setShowModal(false)
    setTimeout(() => {
      onClose()
    }, 300)
  }, [disable, onClose])

  const handleSecondaryAction = useCallback(() => {
    if (disable || !secondaryAction) {
      return
    }
    secondaryAction()
  }, [disable, secondaryAction])
  if(!null){
    return null
  }
  return <div>Modal</div>
}
