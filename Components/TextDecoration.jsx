import React from 'react'

const TextDecoration = () => {
  return (
    <div>
        <h1 className='font-bold'>Text decoration</h1>
        <p className="underline">text-underline</p>
        <p className="overline">text-overline</p>
        <p className="line-through">line-through</p>
        <p className="no-underline">no-underline</p>
        <h1 className='font-bold'>Text decoration color</h1>
        <p className="underline decoration-red-500">decoration color red</p>
        <p className="underline decoration-yellow-500">decoration color yellow</p>
        <p className="underline decoration-green-500">decoration color green</p>
        <p className="underline decoration-violet-500">decoration color voilet</p>
        <p className="underline decoration-pink-500">decoration color pink</p>
        <p className="underline decoration-zinc-500">decoration color zinc</p> etc...........
        <h1 className='font-bold'>Text decoration style</h1>
        <p className='underline decoration-solid'>Text decoration style - solid</p>
        <p className='underline decoration-double'>Text decoration style - double</p>
        <p className='underline decoration-dotted'>Text decoration style - dotted</p>
        <p className='underline decoration-dashed'>Text decoration style - dashed</p>
        <p className='underline decoration-wavy'>Text decoration style - wavy</p>
        <h1 className='font-bold'>Text decoration thickness</h1>
        <p className="underline decoration-0">Text-decoration thickness - 0</p>
        <p className="underline decoration-1">Text-decoration thickness - 1</p>
        <p className="underline decoration-2">Text-decoration thickness - 2</p>
        <p className="underline decoration-4">Text-decoration thickness - 4</p>
        <p className="underline decoration-8">Text-decoration thickness - 8</p>
        <h1 className='font-bold'>Text decoration offset</h1>
        <p className="underline-offset-0">Text-decoration offset - 0</p>
        <p className="underline underline-offset-1">Text-decoration offset - 1</p>
        <p className="underline underline-offset-2">Text-decoration offset - 2</p>
        <p className="underline underline-offset-4">Text-decoration offset - 4</p>
        <p className="underline underline-offset-8">Text-decoration offset - 8</p>
    </div>
  )
}

export default TextDecoration
