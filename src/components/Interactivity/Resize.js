import React from 'react'

const Resize = () => {
  return (
    <div className='p-12 flex flex-col gap-12'>

        <div>
            <p className='text-white text-xs py-2'>resize to any direction</p>
              <textarea className=' resize                  caret-pink-500   focus:outline-none focus:ring-[1px] focus:ring-pink-500 focus:border-none focus:bg-slate-900 bg-slate-600 text-xs p-2 rounded-lg border' name="" id="" placeholder='Write your text..'></textarea>
        </div>

        <div>
            <p className='text-white text-xs py-2'>resize to y-axis </p>
              <textarea className=' resize-y                  caret-pink-500   focus:outline-none focus:ring-[1px] focus:ring-pink-500 focus:border-none focus:bg-slate-900 bg-slate-600 text-xs p-2 rounded-lg border' name="" id="" placeholder='Write your text..'></textarea>
        </div>

        <div>
            <p className='text-white text-xs py-2'>resize to x-axis </p>
              <textarea className=' resize-x                  caret-pink-500   focus:outline-none focus:ring-[1px] focus:ring-pink-500 focus:border-none focus:bg-slate-900 bg-slate-600 text-xs p-2 rounded-lg border' name="" id="" placeholder='Write your text..'></textarea>
        </div>

        <div>
            <p className='text-white text-xs py-2'>resize to none </p>
              <textarea className=' resize-none                  caret-pink-500   focus:outline-none focus:ring-[1px] focus:ring-pink-500 focus:border-none focus:bg-slate-900 bg-slate-600 text-xs p-2 rounded-lg border' name="" id="" placeholder='Write your text..'></textarea>
        </div>

    </div>
  )
}

export default Resize