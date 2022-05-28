import React from 'react'

const BoxSizing = () => {
    return (
        <div className='p-12 pb-[50rem]'>

            {/* default holatda box-sizing: border-box;    berip bulingan */}

            <div className="border-4 w-96 h-12 p-4 bg-sky-500"></div>
            <div className="box-border border-4 w-96 h-12 p-4 bg-sky-500"></div>

            <div className="w-96 h-12 bg-pink-500"></div>

            <div className="box-content border-4 w-96 h-12 p-4 bg-sky-500"></div>


        </div>
    )
}

export default BoxSizing