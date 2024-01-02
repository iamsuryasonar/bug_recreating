import { useState } from 'react'
import './App.css'

function App() {

  const gallery = [
    {
      id: "1",
      quote: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
      location: "India",
      image: 'https://source.unsplash.com/random/6',
    },
    {
      id: "2",
      quote: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
      location: "India",
      image: 'https://source.unsplash.com/random/1',
    },


    {
      id: "3",
      quote: "Witness the dance of trees as seen through the lens of a passing car.",
      location: "India",
      image: 'https://source.unsplash.com/random/2',
    },

    {
      id: "4",
      quote: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
      location: "India",
      image: 'https://source.unsplash.com/random/3',
    },
    {
      id: "5",
      quote: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
      location: "India",
      image: 'https://source.unsplash.com/random/4',
    },
    {
      id: "6",
      quote: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
      location: "India",
      image: 'https://source.unsplash.com/random/5',
    },
  ]

  const [value, setValue] = useState(false);

  return (
    <>
      <button onClick={() => setValue(!value)} className='p-6 bg-black text-white'>TAP TAP</button>
      {value && <div className='bg-green-200 w-full h-10 p-6'>I'm visible!</div>}
      <div className='w-screen my-20 grid place-items-center'>
        <div className=" columns-1 md:columns-2 px-6 gap-4">
          {gallery.map((item, index) => {
            return (
              <div key={item.id} className='relative w-full h-full grid mb-4 rounded-lg'>
                <img className='' src={item.image} loading='lazy'></img>
                {/* replace below 'flex justify-center items-center' to -> 'grid place-content-center' that will fix the desktop mode browser tab hang issue */}
                <div className='grid place-content-center absolute top-0 left-0 right-0 bottom-0  bg-black opacity-0 hover:opacity-65 transition-opacity duration-300'>
                  {/* this div needs to be centered */}
                  <div className='grid p-6 '>
                    <p className='place-self-end text-white font-normal font-base' >{item.quote}</p>
                    <p className='place-self-end text-white font-light text-sm'> {item.location}</p>
                  </div>
                </div>
              </div>)
          })}
        </div>
      </div >
    </>
  )
}

export default App
