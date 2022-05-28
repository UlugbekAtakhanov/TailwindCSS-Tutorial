import React from 'react'

const SpaceBetween = () => {
    return (
        <div className=' p-12 pb-[50rem]'>

            {/* LEKIN GAP PROPERTY ISHLATILGAN YAHSHI FLEX B/N */}

            {/* space-x */}
            <div class="flex mb-20">
                <div className='bg-slate-600 p-4 text-slate-300 rounded'>01</div>
                <div className='bg-slate-600 p-4 text-slate-300 rounded'>02</div>
                <div className='bg-slate-600 p-4 text-slate-300 rounded'>03</div>
            </div>

            <div class="flex gap-4 mb-20">
                <div className='bg-slate-600 p-4 text-slate-300 rounded'>01</div>
                <div className='bg-slate-600 p-4 text-slate-300 rounded'>02</div>
                <div className='bg-slate-600 p-4 text-slate-300 rounded'>03</div>
            </div>

            <div class="flex space-x-4 mb-20">
                <div className='bg-slate-600 p-4 text-slate-300 rounded'>01</div>
                <div className='bg-slate-600 p-4 text-slate-300 rounded'>02</div>
                <div className='bg-slate-600 p-4 text-slate-300 rounded'>03</div>
            </div>

            <div class="flex space-x-12 mb-20">
                <div className='bg-slate-600 p-4 text-slate-300 rounded'>01</div>
                <div className='bg-slate-600 p-4 text-slate-300 rounded'>02</div>
                <div className='bg-slate-600 p-4 text-slate-300 rounded'>03</div>
            </div>

            <div class="flex -space-x-2 mb-20">
                <div className='bg-slate-600 p-4 text-slate-300 rounded-full border'>01</div>
                <div className='bg-slate-600 p-4 text-slate-300 rounded-full border'>02</div>
                <div className='bg-slate-600 p-4 text-slate-300 rounded-full border'>03</div>
            </div>
            
            {/* gap negative holatda ishlamaydi */}
            <div class="flex -gap-4 mb-20">
                <div className='bg-slate-600 p-4 text-slate-300 rounded-full border'>01</div>
                <div className='bg-slate-600 p-4 text-slate-300 rounded-full border'>02</div>
                <div className='bg-slate-600 p-4 text-slate-300 rounded-full border'>03</div>
            </div>



            {/* space-y */}
            <div class="space-y-4 mb-20">
                <div className='bg-slate-600 p-4 text-slate-300 rounded'>01</div>
                <div className='bg-slate-600 p-4 text-slate-300 rounded'>02</div>
                <div className='bg-slate-600 p-4 text-slate-300 rounded'>03</div>
            </div>

            <div class="space-y-12 mb-20">
                <div className='bg-slate-600 p-4 text-slate-300 rounded'>01</div>
                <div className='bg-slate-600 p-4 text-slate-300 rounded'>02</div>
                <div className='bg-slate-600 p-4 text-slate-300 rounded'>03</div>
            </div>

        </div>
    )
}

export default SpaceBetween