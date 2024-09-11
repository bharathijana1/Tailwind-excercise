import React from 'react'

const Flex = () => {
  return (
    <div>
        <h1 className="font-bold">Flex</h1>
        <div className="container flex">
            <div className='border-2 border-red-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, quia.</div>
            <div className='border-2 border-red-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, quia.</div>
            <div className='border-2 border-red-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, quia.</div>
            <div className='border-2 border-red-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, quia.</div>
            <div className='border-2 border-red-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, quia.</div>

        </div>
        <h1 className="font-bold">Flex row</h1>
        <div className="container flex flex-row">
            <div className='border-2 border-red-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, quia.</div>
            <div className='border-2 border-red-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, quia.</div>
            <div className='border-2 border-red-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, quia.</div>
            <div className='border-2 border-red-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, quia.</div>
            <div className='border-2 border-red-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, quia.</div>

        </div>
        <h1 className="font-bold">Flex colx</h1>
        <div className="container flex flex-col">
            <div className='border-2 border-red-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, quia.</div>
            <div className='border-2 border-red-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, quia.</div>
            <div className='border-2 border-red-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, quia.</div>
            <div className='border-2 border-red-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, quia.</div>
            <div className='border-2 border-red-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, quia.</div>
        </div>
        <h1 className="font-bold">gap</h1>
        <div className="container flex gap-2">
            <div className='border-2 border-red-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, quia.</div>
            <div className='border-2 border-red-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, quia.</div>
            <div className='border-2 border-red-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, quia.</div>
            <div className='border-2 border-red-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, quia.</div>
            <div className='border-2 border-red-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, quia.</div>
        </div>
        <h1 className="font-bold">mobile - flex-col desktop- flex-row</h1>
        <div className="container flex flex-col md:flex-row gap-2">
            <div className='border-2 border-red-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, quia.</div>
            <div className='border-2 border-red-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, quia.</div>
            <div className='border-2 border-red-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, quia.</div>
            <div className='border-2 border-red-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, quia.</div>
            <div className='border-2 border-red-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, quia.</div>
        </div>
        <h1 className="font-bold">justify content</h1>
        <div className="container flex flex-col md:flex-row justify-center gap-2">
            <div className='border-2 border-red-400 justify-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, quia.</div>
            <div className='border-2 border-red-400 justify-start'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, quia.</div>
            <div className='border-2 border-red-400 justify-end'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, quia.</div>
            <div className='border-2 border-red-400 justify-between'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, quia.</div>
            <div className='border-2 border-red-400 justify-around'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, quia.</div>
        </div>
        <h1 className="font-bold">align-item </h1>
        <div className="container flex flex-col gap-2 item-center">
            <div className='border-2 border-red-400 item-center '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, quia.</div>
            <div className='border-2 border-red-400 item-start '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, quia.</div>
            <div className='border-2 border-red-400 item-end '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, quia.</div>
            <div className='border-2 border-red-400 item-stretch '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, quia.</div>
            <div className='border-2 border-red-400 item-baseline '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, quia.</div>
        </div>
      
    </div>
  )
}

export default Flex
