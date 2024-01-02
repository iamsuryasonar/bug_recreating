import { useState } from 'react'
import './App.css'

function App() {

  const gallery = [

    {
      id: "caterpillar",
      quote: "A tiny warrior with Spider-Man eyes",
      location: "Assam, India",
      image: 'https://source.unsplash.com/random/6',
    },
    {
      id: "humanEvolution",
      quote: "Four figures stepping out of the water, a symbolic depiction of human evolution and the eternal cycle of rebirth",
      location: "Assam, India",
      image: 'https://source.unsplash.com/random/1',
    },


    {
      id: "roadside_rythm",
      quote: "Witness the dance of trees as seen through the lens of a passing car.",
      location: "Assam, India",
      image: 'https://source.unsplash.com/random/2',
    },

    {
      id: "forever",
      quote: "Lost in thought, a couple peers into the distance, where the unseen horizon becomes a canvas for their shared aspirations.",
      location: "Assam, India",
      image: 'https://source.unsplash.com/random/3',
    },
    {
      id: "beautifulEyes",
      quote: "Through a charming pose, a child reveals a world of innocence.",
      location: "Assam, India",
      image: 'https://source.unsplash.com/random/4',
    },
    {
      id: "glitteringSand",
      quote: "A silhouette on the sands, where glittering grains meet the silhouette form of a boy, under the watchful gaze of a distant mountain.",
      location: "Assam, India",
      image: 'https://source.unsplash.com/random/5',
    },
  ]

  const [value, setValue] = useState(false);

  return (
    <>
      <button onClick={() => setValue(!value)} className='p-6 bg-black text-white'>click me</button>
      {value && <div className='bg-green-200 w-full h-10 p-6'>button clicked</div>}
      <div className='w-screen my-20 grid place-items-center'>
        <div className=" columns-1 md:columns-2 px-6 gap-4">
          {gallery.map((item, index) => {
            return (
              <div key={item.id} className='relative w-full h-full grid mb-4 rounded-lg'>
                <img className='' src={item.image} loading='lazy'></img>
                {/* replace below 'flex justify-center items-center' to -> 'grid place-content-center' that will fix the desktop mode browser tab hang issue */}
                <div className='flex justify-center items-center absolute top-0 left-0 right-0 bottom-0  bg-black opacity-0 hover:opacity-65 transition-opacity duration-300'>
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
