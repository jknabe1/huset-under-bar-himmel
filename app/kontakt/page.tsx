import Form from '@/components/Pages/Kontakt/Form'
import Intro from '@/components/Pages/Kontakt/Intro'
import React from 'react'

export default function page() {
  return (
    <div className='flex-global'>
      <Intro/>
      <Form/>
    </div>
  )
}
