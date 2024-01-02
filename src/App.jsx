import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
    // {
    //     id: "bottle",
    //     quote: "UNIURL - a link sharing platform",
    //     location: "Guwahati, Assam",
    //     image: bottle,
    // },
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

  return (
    <>
      <div className='w-screen my-20 grid place-items-center'>
        <div class=" max-w-4xl columns-1 md:columns-2 px-6 gap-4">
          {gallery.map((item, index) => {
            return <span key={item.id} className={` ${index === 0 ? 'self-end' : ''}`}>
              <div className='relative group w-full h-full  grid mb-4 rounded-lg' key={item.id}>
                <img className={`object-cover`} src={item.image} loading='lazy'></img>
                <div className='absolute flex items-center justify-center  w-full h-full top-0 left-0 botton-0 right-0 bg-black opacity-0 group-hover:opacity-65 transition-opacity duration-300'>
                  <div className='grid p-6'>
                    <p className='place-self-end text-white font-normal font-base' >{item.quote}</p>
                    <p className='place-self-end text-white font-light text-sm'> {item.location}</p>
                  </div>
                </div>
              </div>

            </span>
          })}



          {/* </span>
        <img class="mb-4" src="https://source.unsplash.com/random/1" />
          <img class="mb-4" src="https://source.unsplash.com/random/2" />
          <img class="mb-4" src="https://source.unsplash.com/random/3" />
          <img class="mb-4" src="https://source.unsplash.com/random/4" />
          <img class="mb-4" src="https://source.unsplash.com/random/5" />
          <img class="mb-4" src="https://source.unsplash.com/random/6" />
          <img class="mb-4" src="https://source.unsplash.com/random/7" /> */}

        </div>
      </div >
    </>
  )
}

export default App