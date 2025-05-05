import Intro from '@/components/Pages/Meny/Intro'
import List from '@/components/Pages/Meny/List'
import React from 'react'

export default function page() {
  return (
    <div className='flex-global'>
        <Intro/>
        <List/>
    </div>
  )
}
