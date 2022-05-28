import React from 'react'

const FontStyle = () => {
    return (
        <div className='p-12'>

            {/* italic */}
            <h1 className='text-2xl italic'>The quick brown fox jumps over the lazy dog.</h1>

            <br />

            {/* weight */}
            <h1 className='text-2xl    font-thin'>The quick brown fox jumps over the lazy dog.</h1>
            <h1 className='text-2xl    font-extralight'>The quick brown fox jumps over the lazy dog.</h1>
            <h1 className='text-2xl    font-light'>The quick brown fox jumps over the lazy dog.</h1>
            <h1 className='text-2xl    font-normal'>The quick brown fox jumps over the lazy dog.</h1>
            <h1 className='text-2xl    font-medium'>The quick brown fox jumps over the lazy dog.</h1>
            <h1 className='text-2xl    font-semibold'>The quick brown fox jumps over the lazy dog.</h1>
            <h1 className='text-2xl    font-bold'>The quick brown fox jumps over the lazy dog.</h1>
            <h1 className='text-2xl    font-extrabold'>The quick brown fox jumps over the lazy dog.</h1>
            <h1 className='text-2xl    font-black'>The quick brown fox jumps over the lazy dog.</h1>

        </div>
    )
}

export default FontStyle