import React from 'react'

const ReusingStyles = () => {
  return (
    <div className='p-12 pb-[50rem] flex flex-col gap-4'>

        <div>
            <button className='bg-pink-500 text-white font-semibold py-2 px-6 rounded-lg'>button</button>
        </div>
        <div>
            <button className='bg-pink-500 text-white font-semibold py-2 px-6 rounded-lg'>button</button>
        </div>
        <div>
            <button className='bg-pink-500 text-white font-semibold py-2 px-6 rounded-lg'>button</button>
        </div>

        {/* it is better to create css component in index.css */}
        <div>
            <button className='btn-primary'>button</button>
        </div>
        <div>
            <button className='btn-primary'>button</button>
        </div>
        <div>
            <button className='btn-primary'>button</button>
        </div>

    </div>
  )
}

export default ReusingStyles