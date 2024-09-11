import React from 'react'

const Hover = () => {
  return (
    <div>
        <h1 className="font-bold">Hover</h1>
        <h3 className=' text-2xl hover:text-green-900'>hover text color change</h3>
        <h3 className='hover:bg-red-700'>hover bg color change</h3>
        <h3 className='hover:text-3xl'>hover font size change</h3>
    </div>
  )
}

export default Hover
