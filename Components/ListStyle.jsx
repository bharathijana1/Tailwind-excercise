import React from 'react'

const ListStyle = () => {
  return (
    <div>
        <h1 className="font-bold">List style </h1>
        <ul className='list-disc p-6'>
            <li> list-disc - abcdefghi</li>
            <li>list-disc - abcdefghi</li>
            <li>list-disc - bcdefghi</li>
        </ul>
        <br />
        <ol className='list-decimal p-6'>
            <li>list-decimal - abcdefghi</li>
            <li>list-decimal - abcdefghi</li>
            <li>list-decimal - abcdefghi</li>
        </ol>
        <h1 className="font-bold">List style position indise</h1>
        <ul className='list-disc list-inside p-6'>
            <li className='border-2 border-red-500 p-2'>list-inside - abcdefghi</li>
            <li className='border-2 border-red-500 p-2'>list-inside - abcdefghi</li>
            <li className='border-2 border-red-500 p-2'>list-inside - abcdefghi</li>
        </ul>
        <br />
        <ol className='list-decimal list-inside p-6'>
            <li className='border-2 border-red-500 p-2'>list-inside - abcdefghi</li>
            <li className='border-2 border-red-500 p-2'>list-inside - abcdefghi</li>
            <li className='border-2 border-red-500 p-2'>list-inside - abcdefghi</li>
        </ol>
        <h1 className="font-bold">List style position outside</h1>
        <ul className='list-disc list-outside p-6'>
            <li className='border-2 border-red-500 p-2'>list-outside - abcdefghi</li>
            <li className='border-2 border-red-500 p-4'>list-outside - abcdefghi</li>
            <li className='border-2 border-red-500 p-6'>list-outside - abcdefghi</li>
        </ul>
        <br />
        <ol className='list-decimal list-outside p-6'>
            <li className='border-2 border-red-500 p-2'>list-outside - abcdefghi</li>
            <li className='border-2 border-red-500 p-3'>list-outside - abcdefghi</li>
            <li className='border-2 border-red-500 p-8'>list-outside - abcdefghi</li>
        </ol>
      
    </div>
  )
}

export default ListStyle
