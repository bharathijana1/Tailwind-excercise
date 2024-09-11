import React from 'react'

const Outline = () => {
  return (
    <div>
        <h1 className="font-bold">Outline width</h1>
        <h3 className="border-2 border-red-500 outline-0 text-center w-64">outline 0</h3><br />
        <h3 className="border-2 border-red-500 outline-1 text-center w-64">outline 1</h3><br />
        <h3 className="border-2 border-red-500 outline-2 text-center w-64">outline 2</h3><br />
        <h3 className="border-2 border-red-500 outline-4 text-center w-64">outline 4</h3><br />
        <h3 className="border-2 border-red-500 outline-8 text-center w-64">outline 8</h3><br />
        <h1 className="font-bold">Outline offset</h1>
        <h3 className="border-2 border-red-500 outline-0 outline-offset-0 outline-dotted text-center w-64">outline 0</h3><br />
        <h3 className="border-2 border-red-500 outline-1 outline-offset-1 outline-dotted text-center w-64">outline 1</h3><br />
        <h3 className="border-2 border-red-500 outline-2 outline-offset-2 outline-dotted text-center w-64">outline 2</h3><br />
        <h3 className="border-2 border-red-500 outline-4 outline-offset-4 outline-dotted text-center w-64">outline 4</h3><br />
        <h3 className="border-2 border-red-500 outline-8 outline-offset-8  outline-dotted text-center w-64">outline 8</h3><br />
        <h1 className="font-bold">Outline color</h1>
        <h3 className="border-2 border-red-500 outline-1 outline-offset-1 outline-dashed outline-green-500 text-center w-64">outline 1</h3><br />
        <h3 className="border-2 border-red-500 outline-2 outline-offset-2 outline-dashed outline-yellow-500 text-center w-64">outline 2</h3><br />
        <h3 className="border-2 border-red-500 outline-4 outline-offset-4 outline-dashed outline-blue-500 text-center w-64">outline 4</h3><br />
        <h3 className="border-2 border-red-500 outline-8 outline-offset-8 outline-dashed outline-pink-500 text-center w-64">outline 8</h3><br />
        <h1 className="font-bold">Outline style</h1>
        <h3 className="border-2 border-red-500 outline-1 outline-offset-1 outline-solid outline-green-500 text-center w-64 m-8">outline 1</h3><br />
        <h3 className="border-2 border-red-500 outline-2 outline-offset-2 outline-dashed outline-yellow-500 text-center w-64 m-8">outline 2</h3><br />
        <h3 className="border-2 border-red-500 outline-4 outline-offset-4 outline-dotted outline-blue-500 text-center w-64 m-8">outline 4</h3><br />
        <h3 className="border-2 border-red-500 outline-8 outline-offset-8 outline-double outline-pink-500 text-center w-64 m-8">outline 8</h3><br />
        <h3 className="border-2 border-red-500 outline-8 outline-offset-8 outline-none outline-pink-500 text-center w-64 m-8">outline 8</h3><br />  
    </div>
  )
}

export default Outline
