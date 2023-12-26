import React from 'react'

export default function KnowYourGems() {
  return (
    <>
        <div className="isolate bg-white px-2 py-8 sm:py-16 lg:px-8">
            <div className="mx-auto max-w-5xl text-center">
                <h2 className="font-bold tracking-tight text_color text-2xl md:text-4xl">Discover Your Rashi, Gemstones, Rudraksha and Bracelet
                Recommendation</h2>
                
            </div>

            <div className='grid md:grid-cols-3 mx-auto sm:max-w-5xl max-w-6xl '>
                <GemsMantraForm/>
                <GemsTable/>
            </div>
        </div>
    </>
  )
}
