import React from 'react'
import Button from './Button'

const Navbar = () => {

  return (
    <div className='flex p-3 justify-between bg-slate-600/20 font-semibold'>
      <div>
        DEBUGGING
      </div>
      <div className='flex'>
        <input type="text" className='shadow-lg drop-shadow-2xl outline-none' />
        <Button text={'Search'} className={'px-4 py-1 bg-slate-500 rounded-xl rounded-l-none'}/>
      </div>
      <div>
        <ul className='flex gap-5'>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
