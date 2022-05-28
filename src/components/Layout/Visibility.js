import React from 'react'

const Visibility = () => {
  return (
    <div className='p-12 pb-[50rem]'>

          <div class="grid grid-cols-3 gap-4 mb-20">
              <div className='                                  bg-pink-500 rounded-lg text-white p-2'>01</div>
              <div className="invisible                                  bg-pink-500 rounded-lg text-white p-2">02</div>
              <div className='                                  bg-pink-500 rounded-lg text-white p-2'>03</div>
          </div>

          <div class="grid grid-cols-3 gap-4 mt-4">
              <div className='                                  bg-pink-500 rounded-lg text-white p-2'>01</div>
              <div className="visible                                  bg-pink-500 rounded-lg text-white p-2">02</div>
              <div className='                                  bg-pink-500 rounded-lg text-white p-2'>03</div>
          </div>

    </div>
  )
}

export default Visibility