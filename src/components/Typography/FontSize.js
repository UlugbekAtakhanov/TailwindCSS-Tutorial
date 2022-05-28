import React from 'react'

const FontSize = () => {
    return (
        <div className='p-12'>

            {/* from "xs" to "9xl" */}
            <h1 className='text-xs'>The quick brown fox jumps over the lazy dog.</h1>
            <h1 className='text-sm'>The quick brown fox jumps over the lazy dog.</h1>
            <h1 className='text-base'>The quick brown fox jumps over the lazy dog.</h1>
            <h1 className='text-lg'>The quick brown fox jumps over the lazy dog.</h1>
            <h1 className='text-xl'>The quick brown fox jumps over the lazy dog.</h1>
            <h1 className='text-2xl'>The quick brown fox jumps over the lazy dog.</h1>
            <h1 className='text-3xl'>The quick brown fox jumps over the lazy dog.</h1>
            <h1 className='text-4xl'>The quick brown fox jumps over the lazy dog.</h1>

            {/* customizing */}
            <h1 className='text-tiny'>The quick brown fox jumps over the lazy dog.</h1>

            {/* arbitrary values */}
            <h1 className='text-[2rem]'>The quick brown fox jumps over the lazy dog.</h1>

            {/* text-base === 16px,   hover:  ,  transition-all */}
            <h1 className='text-base transition-all hover:text-[2rem]'>The quick brown fox jumps over the lazy dog.</h1>



        </div>
    )
}

export default FontSize