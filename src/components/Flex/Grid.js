import React from 'react'

const Grid = () => {
    return (
        <div className='p-12 pb-[50rem]'>

            <h1 className='text-white text-2xl py-2'>Default state</h1>
            <div className='bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
                <div className='bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
                <div className='bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
                <div className='bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
            </div>

            {/* grid-template-comlumns */}
            <h1 className='text-white text-2xl py-2'>grid-template-comlumns</h1>
            <div className=' grid grid-cols-2         gap-2      bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
                <div className='               bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
                <div className='               bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
                <div className='               bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='               bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>4</div>
                <div className='               bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>5</div>
                <div className='               bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>6</div>
            </div>

            <div className=' grid grid-cols-5         gap-2      bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
                <div className='               bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
                <div className='               bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
                <div className='               bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='               bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>4</div>
                <div className='               bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>5</div>
                <div className='               bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>6</div>
            </div>


            {/* grid col-span */}
            <h1 className='text-white text-2xl py-2'>grid col-span</h1>
            <div className=' grid grid-cols-3       gap-2        bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className=' col-span-2               bg-sky-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>4</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>5</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>6</div>
                <div className=' col-span-2                                 bg-sky-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>6</div>
            </div>

            {/* col-start / col-end */}
            <h1 className='text-white text-2xl py-2'>col-start / col-end</h1>
            <div className=' grid grid-cols-6       gap-2        bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
                <div className=' col-start-3 col-end-5                                 bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
                <div className=' col-start-1 col-end-3                                 bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
                <div className=' col-start-5 col-end-7                                 bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className=' col-start-1 col-end-7                                 bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>4</div>
                <div className=' col-start-1 col-end-3                                 bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>5</div>
                <div className=' col-start-3 col-end-5                                 bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>6</div>
                <div className=' col-start-5 col-end-7                                 bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>6</div>
            </div>



            {/* grid-template-rows,         grid-flow-col  === auto column width, but row must be 4 */}
            <h1 className='text-white text-2xl py-2'>grid-template-rows</h1>
            <div className=' grid grid-rows-4 grid-flow-col      gap-2        bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>4</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>5</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>6</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>6</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>6</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>6</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>6</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>6</div>
            </div>

            {/* row-span */}
            <h1 className='text-white text-2xl py-2'>row-span</h1>
            <div className=' grid grid-rows-3 grid-flow-col       gap-2        bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
                <div className='  row-span-3                                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
                <div className=' row-span-2                                 bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
            </div>

            {/* row-start / end */}
            <h1 className='text-white text-2xl py-2'>row-start / end</h1>
            <div className=' grid grid-rows-3 grid-flow-col       gap-2        bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
                <div className='  row-start-2 row-span-2                                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
                <div className='  row-start-1 row-span-2                                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
                <div className=' row-start-1 row-span-3                                 bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
            </div>

            {/* gap */}
            <h1 className='text-white text-2xl py-2'>gap</h1>
            <div className=' grid  gap-4  grid-cols-2                   bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
            </div>

            <h1 className='text-white text-2xl py-2'>gap-x</h1>
            <div className=' grid  gap-x-4  grid-cols-2                   bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
            </div>

            <h1 className='text-white text-2xl py-2'>gap-y</h1>
            <div className=' grid  gap-y-4  grid-cols-2                   bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
            </div>



            {/* justify-items-start === grid b/n ishlatiladi,        justify-start === flex b/n ishlaydi */}
            <h1 className='text-white text-2xl py-2'>justify-start grid b/n ishlamaydi</h1>
            <div className=' grid   justify-start    grid-cols-2 gap-2                   bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
            </div>

            <h1 className='text-white text-2xl py-2'>justify-items-start</h1>
            <div className=' grid   justify-items-start    grid-cols-2 gap-2                   bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
            </div>

            <h1 className='text-white text-2xl py-2'>justify-items-end</h1>
            <div className=' grid   justify-items-end    grid-cols-2 gap-2                   bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
            </div>

            <h1 className='text-white text-2xl py-2'>justify-items-center</h1>
            <div className=' grid   justify-items-center    grid-cols-2 gap-2                   bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
            </div>

            {/* justify self */}
            <h1 className='text-white text-2xl py-2'>justify-self-auto</h1>
            <div className=' grid       grid-cols-2 gap-2                   bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
                <div className='       justify-self-auto                           bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
            </div>

            <h1 className='text-white text-2xl py-2'>justify-self-start</h1>
            <div className=' grid       grid-cols-2 gap-2                   bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
                <div className='      justify-self-start                            bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
            </div>

            <h1 className='text-white text-2xl py-2'>justify-self-center</h1>
            <div className=' grid       grid-cols-2 gap-2                   bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
                <div className='      justify-self-center                            bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
            </div>

            <h1 className='text-white text-2xl py-2'>justify-self-end</h1>
            <div className=' grid       grid-cols-2 gap-2                   bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
                <div className='      justify-self-end                            bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
            </div>

            <h1 className='text-white text-2xl py-2'>justify-self-stretch</h1>
            <div className=' grid justify-items-start       grid-cols-2 gap-2                   bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
                <div className='      justify-self-stretch                            bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
            </div>


            {/* align-content */}
            <h1 className='text-white text-2xl py-2'>content-start</h1>
            <div className=' grid  content-start              h-[500px] grid-cols-2 gap-2                   bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
            </div>

            <h1 className='text-white text-2xl py-2'>content-center</h1>
            <div className=' grid  content-center              h-[500px] grid-cols-2 gap-2                   bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
            </div>

            <h1 className='text-white text-2xl py-2'>content-end</h1>
            <div className=' grid  content-end              h-[500px] grid-cols-2 gap-2                   bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
            </div>

            <h1 className='text-white text-2xl py-2'>content-between</h1>
            <div className=' grid  content-between              h-[500px] grid-cols-2 gap-2                   bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
            </div>

            <h1 className='text-white text-2xl py-2'>content-around</h1>
            <div className=' grid  content-around              h-[500px] grid-cols-2 gap-2                   bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
            </div>

            <h1 className='text-white text-2xl py-2'>content-evenly</h1>
            <div className=' grid  content-evenly              h-[500px] grid-cols-2 gap-2                   bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
            </div>




            {/* place-content */}
            <h1 className='text-white text-2xl py-2'>place-content-center</h1>
            <div className=' grid    place-content-center            h-[500px] grid-cols-2 gap-2                   bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
            </div>

            <h1 className='text-white text-2xl py-2'>place-content-start</h1>
            <div className=' grid    place-content-start            h-[500px] grid-cols-2 gap-2                   bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
            </div>

            <h1 className='text-white text-2xl py-2'>place-content-end</h1>
            <div className=' grid    place-content-end            h-[500px] grid-cols-2 gap-2                   bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
            </div>

            <h1 className='text-white text-2xl py-2'>place-content-between</h1>
            <div className=' grid    place-content-between            h-[500px] grid-cols-2 gap-2                   bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
            </div>

            <h1 className='text-white text-2xl py-2'>place-content-around</h1>
            <div className=' grid    place-content-around            h-[500px] grid-cols-2 gap-2                   bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
            </div>

            <h1 className='text-white text-2xl py-2'>place-content-evenly</h1>
            <div className=' grid    place-content-evenly            h-[500px] grid-cols-2 gap-2                   bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
            </div>

            <h1 className='text-white text-2xl py-2'>place-content-stretch</h1>
            <div className=' grid    place-content-stretch            h-[500px] grid-cols-2 gap-2                   bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
            </div>



            {/* place-items */}
            <h1 className='text-white text-2xl py-2'>place-items-start</h1>
            <div className=' grid    place-items-start            h-[500px] grid-cols-2 gap-2                   bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
            </div>

            <h1 className='text-white text-2xl py-2'>place-items-end</h1>
            <div className=' grid    place-items-end            h-[500px] grid-cols-2 gap-2                   bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
            </div>

            <h1 className='text-white text-2xl py-2'>place-items-center</h1>
            <div className=' grid    place-items-center            h-[500px] grid-cols-2 gap-2                   bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
            </div>

            <h1 className='text-white text-2xl py-2'>place-items-stretch</h1>
            <div className=' grid    place-items-stretch            h-[500px] grid-cols-2 gap-2                   bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
            </div>




            {/* place-self */}
            <h1 className='text-white text-2xl py-2'>place-self-start</h1>
            <div className=' grid               h-[500px] grid-cols-2 gap-2                   bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
                <div className='     place-self-start                              bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
            </div>

            <h1 className='text-white text-2xl py-2'>place-self-center</h1>
            <div className=' grid               h-[500px] grid-cols-2 gap-2                   bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
                <div className='     place-self-center                              bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
            </div>

            <h1 className='text-white text-2xl py-2'>place-self-end</h1>
            <div className=' grid               h-[500px] grid-cols-2 gap-2                   bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
                <div className='     place-self-end                              bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
                <div className='                                  bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
            </div>


        </div>
    )
}

export default Grid