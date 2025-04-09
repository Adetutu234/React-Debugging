import React from 'react'

// BUTTON SECTION
const Button = ({text,className,onclick}) => {
  return (
    <div className={`px-6 py2 ${className}`}onClick={onclick} >
      {text}
    </div>
  )
}

export default Button
