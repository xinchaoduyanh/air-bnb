'use client'
import { AiOutlineMenu, AiOutlineGlobal } from 'react-icons/ai'
import Avatar from '../Avatar'
import { useCallback, useState } from 'react'
import MenuItem from './MenuItem'
import useRegisterModal from '@/app/hooks/useRegisterModal'
export default function UserMenu() {
  const registerModal = useRegisterModal()
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = useCallback(() => {setIsOpen((value) => !value)}, [])
  return (
    <div className='relative'>
      <div className='flex flex-row items-center gap-3'>
        <div
          onClick={() => {}}
          className='hidden md:block text-xl font-semibold py-3 px-2 rounded-full hover:bg-neutral-100 transition cursor-pointer'
        >
          Welcome to AirBnb
        </div>
        <div
          onClick={() => {}}
          className='hidden  md:block text-xl font-semibold py-4 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer'
        >
          <AiOutlineGlobal  />
        </div>
        <div
          onClick={toggleOpen}
          className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full transition cursor-pointer'
        >
          <AiOutlineMenu />
          <div className='hidden md:block'>
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='absolute px-2 rounded-xl shadow-sm w-[40vw] md:w-3/4 overflow-hidden right-0 top-12 text-sm'>
          <div className='flex flex-col bg-white cursor-pointer'>
            <>
              <MenuItem onClick={registerModal.onClose} label='Login' />
              <MenuItem onClick={registerModal.onOpen} label='Sign up' />
            </>
          </div>
        </div>
      )}
    </div>
  )
}
