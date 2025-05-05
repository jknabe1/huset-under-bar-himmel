import Intro from '@/components/Pages/Huset/Intro'
import MeetKexx from '@/components/Pages/Huset/MeetKexx'
import MenuSection from '@/components/Pages/Huset/MenuSection'
import Motto from '@/components/Pages/Huset/Motto'
import TakeOver from '@/components/Pages/Huset/TakeOver'
import React from 'react'

export default function page() {
  return (
    <div className='flex-global'>
        <Intro/>
        <Motto/>
        <MeetKexx/>
        <TakeOver/>
        <MenuSection/>
    </div>
  )
}
