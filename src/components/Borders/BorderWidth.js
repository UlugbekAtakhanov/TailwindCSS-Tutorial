import React from 'react'

const BorderWidth = () => {
    return (
        <div className='p-12 pb-[50rem]'>

            {/* border width and color */}
            <div className="border                         w-32 h-32 mb-4"></div>
            <div className="border     border-sky-500                           w-32 h-32 mb-4"></div>
            <div className="border-0                                 border-sky-500 w-32 h-32 mb-4"></div>
            <div className="border-2                                 border-sky-500 w-32 h-32 mb-4"></div>
            <div className="border-4                                 border-sky-500 w-32 h-32 mb-4"></div>
            <div className="border-8                                 border-sky-500 w-32 h-32 mb-4"></div>

            {/* spec side */}
            <div className="border-r                                 border-sky-500 w-32 h-32 mb-4 bg-[#222]"></div>
            <div className="border-r-8                                 border-sky-500 w-32 h-32 mb-4 bg-[#222]"></div>

            <div className="border-l                                 border-sky-500 w-32 h-32 mb-4 bg-[#222]"></div>
            <div className="border-l-8                                 border-sky-500 w-32 h-32 mb-4 bg-[#222]"></div>

            <div className="border-t                                 border-sky-500 w-32 h-32 mb-4 bg-[#222]"></div>
            <div className="border-t-8                                 border-sky-500 w-32 h-32 mb-4 bg-[#222]"></div>

            <div className="border-b                                 border-sky-500 w-32 h-32 mb-4 bg-[#222]"></div>
            <div className="border-b-8                                 border-sky-500 w-32 h-32 mb-4 bg-[#222]"></div>

            <div className="border-x                                 border-sky-500 w-32 h-32 mb-4 bg-[#222]"></div>
            <div className="border-x-8                                 border-sky-500 w-32 h-32 mb-4 bg-[#222]"></div>

            <div className="border-y                                 border-sky-500 w-32 h-32 mb-4 bg-[#222]"></div>
            <div className="border-y-8                                 border-sky-500 w-32 h-32 mb-4 bg-[#222]"></div>

            {/* border-style */}
            <div className="border-solid border-4                                 border-sky-500 w-32 h-32 mb-4 bg-[#222]"></div>
            <div className="border-dashed border-4                                 border-sky-500 w-32 h-32 mb-4 bg-[#222]"></div>
            <div className="border-dotted border-4                                 border-sky-500 w-32 h-32 mb-4 bg-[#222]"></div>
            <div className="border-double border-4                                 border-sky-500 w-32 h-32 mb-4 bg-[#222]"></div>
            <div className="border-none border-4                                 border-sky-500 w-32 h-32 mb-4 bg-[#222]"></div>

            <button className='border border-slate-600 hover:border-slate-400 bg-gray-800 text-white px-4 rounded-full'>button</button>

        </div>
    )
}

export default BorderWidth