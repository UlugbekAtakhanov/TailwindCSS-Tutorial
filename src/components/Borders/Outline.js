import React from 'react'

const Outline = () => {
    return (
        <div className='p-12 pb-[50rem] flex flex-col gap-8 items-start'>

            {/* outline inherits text color */}
            <button className='outline                        bg-gray-600 text-sky-300 px-5 py-1 rounded'>Button</button>

            {/* outline color */}
            <button className='outline-blue-500 outline outline-2                         bg-gray-600 text-sky-300 px-5 py-1 rounded'>Button</button>
            <button className='outline-cyan-500 outline outline-2                         bg-gray-600 text-sky-300 px-5 py-1 rounded'>Button</button>
            <button className='outline-pink-500 outline outline-2                         bg-gray-600 text-sky-300 px-5 py-1 rounded'>Button</button>


            <br /><br /><br />

            {/* outline offset */}
            <button className='outline outline-offset-0                       border border-red-500 bg-gray-600 text-sky-300 px-5 py-1 rounded'>Button</button>
            <button className='outline outline-offset-1                       border border-red-500 bg-gray-600 text-sky-300 px-5 py-1 rounded'>Button</button>
            <button className='outline outline-offset-2                       border border-red-500 bg-gray-600 text-sky-300 px-5 py-1 rounded'>Button</button>
            <button className='outline outline-offset-4                       border border-red-500 bg-gray-600 text-sky-300 px-5 py-1 rounded'>Button</button>
            <button className='outline outline-offset-8                       border border-red-500 bg-gray-600 text-sky-300 px-5 py-1 rounded'>Button</button>
            
            <br /><br /><br />

            {/* outline width */}
            <button className='outline outline-1 bg-gray-600 text-sky-300 px-5 py-1 rounded'>Button</button>
            <button className='outline outline-2 bg-gray-600 text-sky-300 px-5 py-1 rounded'>Button</button>
            <button className='outline outline-4 bg-gray-600 text-sky-300 px-5 py-1 rounded'>Button</button>

            <br /><br /><br />

            {/* outline style */}
            <button className='outline outline-pink-500 outline-2 bg-gray-600 text-sky-300 px-5 py-1 rounded'>Button</button>
            <button className='outline-dashed outline-2 bg-gray-600 text-sky-300 px-5 py-1 rounded'>Button</button>
            <button className='outline-dotted outline-2 bg-gray-600 text-sky-300 px-5 py-1 rounded'>Button</button>
            <button className='outline-double outline-2 bg-gray-600 text-sky-300 px-5 py-1 rounded'>Button</button>
            
            <br /><br /><br />

            {/* outline none */}
            <input className='bg-slate-600' type="text" />
            <input className='outline-none bg-slate-600' type="text" />
            <input className='focus:outline outline-2 focus:outline-sky-500 bg-slate-600 rounded-full' type="text" />

        </div>
    )
}

export default Outline