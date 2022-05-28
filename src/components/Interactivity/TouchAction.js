import React from 'react'

const TouchAction = () => {
  return (
    <div className='p-12 pb-[50rem]'>

          {/* to control how an element can be scrolled (panned) and zoomed (pinched) on touchscreens. */}
          {/* touch-auto === pan or pinch in every direction */}
        <p className='text-slate-300 py-2 mt-12 '>touch-auto</p>
        <div className='touch-auto             w-[300px] h-[300px] overflow-scroll border'>
            <img className='w-[200%] max-w-none' src="/images/agriculture1.jpg" alt="" />
        </div>

          {/* touch-none === you can not pan or pinch */}
        <p className='text-slate-300 py-2 mt-12 '>touch-none</p>
        <div className='touch-none             w-[300px] h-[300px] overflow-scroll border'>
            <img className='w-[200%] max-w-none' src="/images/agriculture1.jpg" alt="" />
        </div>

          {/* touch-pan-x === you can  pan or pinch in x-axis */}
        <p className='text-slate-300 py-2 mt-12 '>touch-pan-x</p>
        <div className='touch-pan-x             w-[300px] h-[300px] overflow-scroll border'>
            <img className='w-[200%] max-w-none' src="/images/agriculture1.jpg" alt="" />
        </div>

          {/* touch-pan-y === you can  pan or pinch only y-axis */}
        <p className='text-slate-300 py-2 mt-12 '>touch-pan-y</p>
        <div className='touch-pan-y             w-[300px] h-[300px] overflow-scroll border'>
            <img className='w-[200%] max-w-none' src="/images/agriculture1.jpg" alt="" />
        </div>

    </div>
  )
}

export default TouchAction