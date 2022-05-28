import React from 'react'

const BgColor = () => {
    return (
        <div className='p-12 pb-[50rem]'>

            {/* bg-color */}
            <div className='bg-red-500                             h-24 mb-12 '></div>
            <div className='bg-slate-500                             h-24 mb-12 '></div>
            <div className='bg-green-500                             h-24 mb-12 '></div>

            {/* arbitrary value */}
            <div className='bg-[yellow] h-24 mb-12 '></div>

            {/* bg-gradient */}
            <div className="bg-gradient-to-r from-red-500                                mb-12 p-6">a</div>
            <div className="bg-gradient-to-r from-red-500 to-yellow-500                                mb-12 p-6">a</div>
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500                                mb-12 p-6">a</div>

            {/* bg-clip */}
            <div className="bg-clip-border p-6 bg-violet-600 border-4 border-violet-300 border-dashed mb-12"></div>
            <div className="bg-clip-padding p-6 bg-violet-600 border-4 border-violet-300 border-dashed mb-12"></div>
            <div className="bg-clip-content p-6 bg-violet-600 border-4 border-violet-300 border-dashed mb-12">a</div>

            {/* bg-clip-text */}
            <div className='bg-custom-blue p-4 text-center'>
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-red-500 text-5xl font-extrabold'>hello world</span>
            </div>


            {/* bg-image / bg-origin / bg-position   CSS da BERILGAN YAHSHI, bu yerda berish murakkab */}

            {/* bg-size */}
            <div className=' bg-auto             w-[500px] h-[300px] border my-12' style={{ backgroundImage: "url(/images/img1.jpeg)" }}></div>
            <div className=' bg-cover             w-[500px] h-[300px] border my-12' style={{ backgroundImage: "url(/images/img1.jpeg)" }}></div>
            <div className=' bg-contain             w-[500px] h-[300px] border my-12' style={{ backgroundImage: "url(/images/img1.jpeg)" }}></div>

            {/* bg-repeat */}
            <div className=' bg-contain bg-no-repeat            w-[500px] h-[300px] border my-12' style={{backgroundImage: "url(/images/img1.jpeg)"}}></div>

            {/* bg-position */}
            <div className=' bg-cover  bg-center            w-[500px] h-[300px] border my-12' style={{ backgroundImage: "url(/images/img1.jpeg)" }}></div>

            {/* 
                bg-left-top
                bg-top 
                bg-right-top
                bg-left 
                bg-center 
                bg-right 
                bg-left-bottom
                bg-bottom 
                bg-right-bottom
             */}





        </div>
    )
}

export default BgColor