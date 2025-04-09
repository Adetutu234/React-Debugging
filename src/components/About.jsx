import React, { useState } from 'react'
import Button from './Button'

const About = () => {
    const [name ,setName] =useState("ADETUTU")
    const handleName = () => {
        setName('SULIAT')
    }
  return (
    <div className='p-4'>
      <div className='p-3 flex justify-between '>
          <div>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sunt hic, expedita doloremque veritatis vitae eveniet cumque saepe et minima alias aliquam! Aliquid aspernatur ut blanditiis nihil sunt ipsum dolor soluta fugit obcaecati nisi? Numquam harum quae magni ipsa illo.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas obcaecati esse quo corrupti sed perspiciatis omnis ullam harum cumque magni?
            </h2>
          </div>
          <div>
            <img className='h-60 w-550 object-contain' src='https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111870_iphone13-pro-max-colors-480.png' alt="" />
          </div>
      </div>
      <div className='space-y-3'>
        <p className='font-bold'>Welcome {name} </p>
        <Button text={'Sign in'} className={'px-6 py-2 bg-blue-500 w-fit rounded-xl'} onclick={handleName} />
      </div>
    </div>
  )
}

export default About
