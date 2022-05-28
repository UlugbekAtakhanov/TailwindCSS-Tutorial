import React from 'react'

const Appearance = () => {
    return (
        <div className='p-12 pb-[50rem] text-slate-500 flex flex-col gap-4 items-start'>

            <select>
                <option>Yes</option>
                <option>No</option>
                <option>Maybe</option>
            </select>

            <select className="appearance-none">
                <option>Yes</option>
                <option>No</option>
                <option>Maybe</option>
            </select>

            <select className='ring-[3px] ring-sky-500 rounded w-32 focus:ring-pink-500 outline-none'>
                <option>Yes</option>
                <option>No</option>
                <option>Maybe</option>
            </select>

            <select className='appearance-none ring-[3px] ring-sky-500 rounded w-32 focus:ring-pink-500 outline-none'>
                <option>Yes</option>
                <option>No</option>
                <option>Maybe</option>
            </select>

        </div>
    )
}

export default Appearance