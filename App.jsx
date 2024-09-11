import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FontFamily from './Components/FontFamily'
import TextSize from './Components/TextSize'
import FontStyle from './Components/FontStyle'
import Leading from './Components/Leading'
import TextAlign from './Components/TextAlign'
import TextColorAndBgColor from './Components/TextColorAndBgColor'
import TextDecoration from './Components/TextDecoration'
import TextTransform from './Components/TextTransform'
import Padding from './Components/Padding'
import Margin from './Components/Margin'
import Border from './Components/Border'
import Outline from './Components/Outline'
import Hover from './Components/Hover'
import Shadow from './Components/Shadow'
import Opacity from './Components/Opacity'
import LetterSpacing from './Components/LetterSpacing'
import TextIndent from './Components/TextIndent'
import ListStyle from './Components/ListStyle'
import CenterDiv from './Components/CenterDiv'
import Flex from './Components/Flex'
import Width from './Components/Width'
import Height from './Components/Height'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <FontFamily />
    <hr />
    <TextSize />
    <hr />
    <FontStyle />
    <hr />
    <Leading /><hr />
    <TextAlign /><hr />
    <TextColorAndBgColor /><hr />
    <TextDecoration /><hr />
    <Padding /><br />
    <Margin /><br />
    <Border /><br />
    <Outline /><br />
    <Hover /> <br />
    <Shadow /> <br />
    <Opacity /> <br />
    <LetterSpacing /> <br />
    <TextIndent /> <br />
    <ListStyle /><br />
    <CenterDiv /><br />
    <Flex /><br />
    <Width />
    <Height />
    </>
  )
}

export default App
