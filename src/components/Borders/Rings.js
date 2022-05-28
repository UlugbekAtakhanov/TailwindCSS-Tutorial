import React from 'react'

const Rings = () => {
    return (
        <div className='p-12 flex flex-col items-start gap-8 pb-[50rem]'>

            {/* ring width */}
            <button className='ring-2                    px-5 py-1 rounded'>Button</button>
            <button className='ring                    px-5 py-1 rounded'>Button</button>
            <button className='ring-4                    px-5 py-1 rounded'>Button</button>

            <br /><br /><br />

            {/* focus,  ring occurs outside */}
            <button className='ring focus:ring-4 px-5 py-1 rounded'>Button</button>
           
            <br /><br /><br />

            {/* ring-inset  rign occurs inside */}
            <button className='ring-inset ring focus:ring-4 px-5 py-1 rounded'>Button</button>
            
            <br /><br /><br />

            {/* ring-color */}
            <button className='ring-rose-500 ring focus:ring-4 px-5 py-1 rounded'>Button</button>
            <button className='ring-cyan-500 ring focus:ring-4 px-5 py-1 rounded'>Button</button>
            
            <br /><br /><br />

            {/* ring-offset */}
            <button className='ring-offset-2 ring focus:ring-4 px-5 py-1 rounded bg-slate-600'>Button</button>
            <button className='ring-offset-8 ring focus:ring-4 px-5 py-1 rounded bg-slate-600'>Button</button>
            <button className='ring-offset-8 ring-offset-pink-500 ring focus:ring-4 px-5 py-1 rounded bg-slate-600'>Button</button>


        </div>
    )
}

export default Rings