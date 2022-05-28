import React from 'react'

const AspectRatio = () => {
  return (
    <div className='p-12 pb-[50rem]'>

          {/* automatically sets height according to width */}
          <div className='w-1/3 aspect-auto border-4 border-sky-500 text-white mb-12'>auto</div>

          {/* width === height ,   always square  */}
          <div className='w-1/3 aspect-square border-4 border-sky-500 text-white mb-12'>square</div>

          {/* width is longer then height,    16 / 9 */}
          <div className='w-1/3 aspect-video border-4 border-sky-500 text-white mb-12'>video</div>

          {/* arbitrary value,   2 / 1 == means width is twice longer then height */}
          <div className='w-1/3 aspect-[2/1] border-4 border-sky-500 text-white mb-12'>arbitrary</div>

    </div>
  )
}

export default AspectRatio