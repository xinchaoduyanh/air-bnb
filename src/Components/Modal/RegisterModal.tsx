'use client'

import axios from 'axios'
import { AiFillGithub } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { useCallback, useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'

import useRegisterModal from '@/app/hooks/useRegisterModal'
import Modal from './Modal'
import Heading from '../Heading'
import Input from '../inputs/Input'
import toast from 'react-hot-toast'
import Button from '@/Button'

export default function RegisterModal() {
  const registerModal = useRegisterModal()
  const [isLoading, setIsLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  })

  const onSubmit: SubmitHandler<FieldValues> = useCallback(
    async (data) => {
      setIsLoading(true)
      try {
        const response = await axios.post('/api/auth/register', data)
        console.log(response)
        setIsLoading(false)
        registerModal.onClose()
      } catch (error) {
        console.log(error)
        toast.error('Something went wrong')
        setIsLoading(false)
      }
    },
    [registerModal]
  )
  const bodyContent = (
    <div className='flex flex-col gap-4'>
      <Heading title='Welcome to AirBnb' subtitle='Create an account' center />
      <Input id='Email' label='Email' register={register} errors={errors} required={true} />
      <Input id='Name' label='Name' register={register} errors={errors} required={true} />
      <Input id='Password' label='Password' type='password' register={register} errors={errors} required={true} />
    </div>
  )
  const footerContent = (
    <div className='flex flex-col gap-4 mt-3'>
      <hr />
      <Button outline label='Continue with Google' icon={FcGoogle} onClick={() => {}} />
      <Button outline label='Continue with Github' icon={AiFillGithub} onClick={() => {}} />
      <div className='text-neutral-400 text-center mt-4 font-light '>
        <div className='justify-center flex flex-row items-center gap-2'>
          <div>Aready have a account ?</div>
          <div onClick={registerModal.onClose} className='text-neutral-400 cursor-pointer hover:underline'>
            Log in
          </div>
        </div>
      </div>
    </div>
  )
  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title='Register'
      actionLabel='Continue'
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  )
}
