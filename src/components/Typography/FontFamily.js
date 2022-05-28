import React from 'react'

const FontFamily = () => {
    return (
        <div className='p-12 text-white'>

            <h1 className='text-4xl text-center'>Font Family</h1>

            <br />

            {/* default holatda uzida bor */}
                <h1 className='font-sans'>Default quick brown fox jumps over the lazy dog.</h1>
                <h1 className='font-serif'>Default quick brown fox jumps over the lazy dog.</h1>
                <h1 className='font-mono'>Default quick brown fox jumps over the lazy dog.</h1>

            <br />

          

            {/* Google Fonts */}
            <h1 className='font-lora'>Google Fonts quick brown fox jumps over the lazy dog.</h1>
            <h1 className='font-dm'>Google Fonts quick brown fox jumps over the lazy dog.</h1>

            <br />

            {/* Font hosting */}
            <h1 className='font-raleway'>The quick brown fox jumps over the lazy dog.</h1>
            <h1 className='font-barlow'>The quick brown fox jumps over the lazy dog.</h1>

            <br />


            {/* umumiy ozgartirish uchun index.css "html" selectorga font-family beriladi, index.css ga qara */}
            <h1>The quick brown fox jumps over the lazy dog.</h1>


        </div>
    )
}

export default FontFamily