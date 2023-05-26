import { useState } from 'react'
import './App.css'
import { Button } from './components/button/Button'
import { HeadLine } from './components/headline/Headline'

function App() {
  const [count, setCount] = useState(0)

  const increase = () => setCount(count + 1)
  const decrease = () => setCount(count - 1)

  return (
    <>
      <Button label="Imcrementar" primary={true} onClick={increase} />
      <HeadLine text={count} size="small" />
      <Button label="Decrementar" primary={true} onClick={decrease} />
    </>
  )
}

export default App
