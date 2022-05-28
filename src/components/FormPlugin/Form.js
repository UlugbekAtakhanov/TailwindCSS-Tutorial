import React from 'react'

const Form = () => {
    return (
        <div className='h-screen flex items-center justify-center'>

            {/* without form plugin select, checkbox, radios do not styles properly */}
            <form className='bg-white p-4 rounded w-[350px]'>
                <h1 className='text-xl text-indigo-500 text-center font-semibold mb-6'>Form Plugin</h1>
                <label className='text-slate-700' htmlFor="">Email</label>
                <input type="text" name="" id="" className='w-full mb-6 rounded text-slate-500 text-sm focus:ring-indigo-500 focus:border-indigo-500' placeholder='Email' />

                <label className='text-slate-700' htmlFor="">Select</label>
                <select name="" id="" className='w-full mb-6 rounded text-slate-500 text-sm focus:ring-indigo-500 focus:border-indigo-500'>
                    <option value="">Please select</option>
                    <option value="select 1">select 1</option>
                    <option value="select 2">select 2</option>
                    <option value="select 3">select 3</option>
                </select>

                <div className='mb-8 flex gap-2 items-center'>
                    <input className='rounded border-gray-400 text-pink-500 focus:ring-pink-500' type="checkbox" name="" id="" />
                    <label className='text-sm text-slate-700 ' htmlFor="">I agree to the <span className='text-indigo-500'>Terms</span> and <span className='text-indigo-500'>Privacy Policy</span></label>
                </div>

                <button type='submit' className='bg-indigo-500 w-full mb-6 py-2 rounded-md ring-2 ring-indigo-500 ring-offset-2 text-sm'>Sign up</button>

            </form>


            {/* node-modules/@tailwindcss/src/index.js */}



        </div>
    )
}

export default Form