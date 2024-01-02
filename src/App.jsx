import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-screen grid place-items-center'>
        <div class=" max-w-4xl columns-1 md:columns-2">
          <img class="mb-4" src="https://source.unsplash.com/random/1" />
          <img class="mb-4" src="https://source.unsplash.com/random/2" />
          <img class="mb-4" src="https://source.unsplash.com/random/3" />
          <img class="mb-4" src="https://source.unsplash.com/random/4" />
          <img class="mb-4" src="https://source.unsplash.com/random/5" />
          <img class="mb-4" src="https://source.unsplash.com/random/6" />
          <img class="mb-4" src="https://source.unsplash.com/random/7" />

        </div>
      </div>
    </>
  )
}

export default App
