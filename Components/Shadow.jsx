import React from 'react'

const Shadow = () => {
  return (
    <div>
        <h1 className="font-bold">Shadow</h1>
        <h3 className=" border-2 border-yellow-600 p-3 m-2 text-center w-64 shadow-none"></h3>shadow-none<br />
        <h3 className=" border-2 border-yellow-600 p-3 m-2 text-center w-64 shadow-inner">shadow-inner</h3><br />
        <h3 className=" border-2 border-yellow-600 p-3 m-2 text-center w-64 shadow-sm">shadow sm</h3><br />
        <h3 className=" border-2 border-yellow-600 p-3 m-2 text-center w-64 shadow-md">shadow md</h3><br />
        <h3 className=" border-2 border-yellow-600 p-3 m-2 text-center w-64 shadow-lg">shadow lg</h3><br />
        <h3 className=" border-2 border-yellow-600 p-3 m-2 text-center w-64 shadow-xl">shadow xl</h3><br />
        <h3 className=" border-2 border-yellow-600 p-3 m-2 text-center w-64 shadow-2xl">shadow 2xl</h3><br />
        <h3 className=" border-2 border-yellow-600 p-3 m-2 text-center w-64 shadow">shadow</h3><br />
        <h1 className="font-bold">Shadow color</h1>
        <h3 className=" border-2 border-black-600 p-3 m-2 text-center w-64 shadow-none shadow-red-600"></h3>shadow color red<br />
        <h3 className=" border-2 border-black-600 p-3 m-2 text-center w-64 shadow-inner shadow-blue-700">shadow color blue</h3><br />
        <h3 className=" border-2 border-black-600 p-3 m-2 text-center w-64 shadow-sm shadow-black"> shadow color black</h3><br />
        <h3 className=" border-2 border-black-600 p-3 m-2 text-center w-64 shadow-lg shadow-pink-600">shadow color pink</h3><br />
        <h3 className=" border-2 border-black-600 p-3 m-2 text-center w-64 shadow-xl shadow-rose-700">shadow color rose</h3><br />
        <h3 className=" border-2 border-black-600 p-3 m-2 text-center w-64 shadow-2xl shadow-gray-800">shadow color gray</h3><br />
        <h3 className=" border-2 border-black-600 p-3 m-2 text-center w-64 shadow shadow-yellow-600">shadow color yellow</h3><br /> 
      
    </div>
  )
}

export default Shadow
