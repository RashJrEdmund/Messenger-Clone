import React from 'react'

type Props = {children: any}


function Icon({children}: Props) {
  return (
    <div className='hoverEffect bg-neutral-100 rounded-full flex justify-center items-center w-8 h-8 p-2'>
    {children}
    </div>
  )
}

export default Icon