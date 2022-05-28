import React from 'react'

const FlexBasis = () => {
  return (
    <div className='p-12 pb-[50rem]'>

        <h1 className='text-white text-2xl py-2'>Default state</h1>
        <div className='bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
              <div className='bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
              <div className='bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
              <div className='bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
        </div>

        {/* flex */}
        <h1 className='text-white text-2xl py-2'>display: flex</h1>
        <div className='flex gap-2         bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
              <div className='bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
              <div className='bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
              <div className='bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
        </div>


        {/* flex-basis  is equal to width property */}
        <h1 className='text-white text-2xl py-2'>flex-basis</h1>
        <div className='flex gap-2         bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
              <div className='basis-1/4                 bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
              <div className='basis-1/4                 bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
              <div className='basis-2/4                 bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
        </div>

        <div className='flex gap-2         bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
              <div className='basis-[25%]                 bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
              <div className='basis-[25%]                 bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
              <div className='basis-[50%]                 bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
        </div>

        <div className='flex gap-2         bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
              <div className='basis-[20%]                 bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
              <div className='basis-[40%]                 bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
              <div className='basis-[10%]                 bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
        </div>

        {/* it is max width is given, but it also shrinks */}
        <div className='flex gap-2         bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
              <div className='basis-[200px]                 bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
              <div className='basis-[200px]                 bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
              <div className='basis-[400px]                 bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
        </div>


        {/* flex-direction */}
        <h1 className='text-white text-2xl py-2'>flex-direction: row </h1>
        <div className='flex flex-row gap-2        bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
              <div className='                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
              <div className='                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
              <div className='                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
        </div>


        <h1 className='text-white text-2xl py-2'>flex-direction: row-reverse </h1>
        <div className='flex flex-row-reverse gap-2        bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
              <div className='                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
              <div className='                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
              <div className='                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
        </div>

        <h1 className='text-white text-2xl py-2'>flex-direction: column </h1>
        <div className='flex flex-col gap-2        bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
              <div className='                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
              <div className='                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
              <div className='                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
        </div>

        <h1 className='text-white text-2xl py-2'>flex-direction: column-reverse </h1>
        <div className='flex flex-col-reverse gap-2        bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
              <div className='                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
              <div className='                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
              <div className='                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
        </div>


        {/* flex-wrap,    49% berilganligini sababi "wrap"  berilgan "width" ni qattiq ushaydi, "gap" qushilganda  "50% + 50% + gap"  bulip qoladi, */}
        <h1 className='text-white text-2xl py-2'>flex-wrap</h1>
        <div className='flex flex-wrap     gap-2       bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
            <div className=' w-[49%]                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
            <div className=' w-[49%]                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
            <div className=' w-[49%]                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
        </div>

        <div className='flex flex-wrap-reverse    gap-2       bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
            <div className=' w-[49%]                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
            <div className=' w-[49%]                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
            <div className=' w-[49%]                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
        </div>

        <div className='flex flex-nowrap    gap-2       bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
            <div className=' w-[49%]                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
            <div className=' w-[49%]                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
            <div className=' w-[49%]                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
        </div>


          {/* flex-1 */}
          <h1 className='text-white text-2xl py-2'>flex-1</h1>
          <div className='flex gap-2       bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
              <div className='flex-1                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
              <div className='                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
              <div className='                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
          </div>

          <div className='flex gap-2       bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
              <div className='flex-1                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
              <div className='flex-1                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
              <div className='flex-1                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
          </div>

          <div className='flex gap-2       bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
              <div className='flex-1                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
              <div className='flex-[2]                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
              <div className='flex-1                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
          </div>

          {/* flex-none,    do not let to shrink to flex item */}
          <div className='flex gap-2       bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
              <div className='                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
              <div className='flex-none w-[500px]               bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
              <div className='               bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
          </div>


          {/* flex-grow, to allow a flex item to grow to fill any available space */}
          <h1 className='text-white text-2xl py-2'>flex-grow</h1>
          <div className='flex gap-2       bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
              <div className='                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
              <div className='   grow             bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
              <div className='                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
          </div>

          <div className='flex  gap-2      bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
              <div className='   grow             bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
              <div className='   grow-0             bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
              <div className='   grow             bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
          </div>

          {/* flex-shrink */}
          <h1 className='text-white text-2xl py-2'>flex-shrink</h1>
          {/* default holatda uzi qisqaraveradi */}
          <div className='flex gap-2       bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
              <div className='                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
              <div className='  shrink  w-[700px]             bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
              <div className='                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
          </div>

          {/* shrink-0 da umuman qisqarmaydi huddi absolute width olganday */}
          <div className='flex  gap-2      bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
              <div className='                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
              <div className='  shrink-0  w-[700px]             bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
              <div className='                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
          </div>



          {/* order */}
          <h1 className='text-white text-2xl py-2'>order</h1>
          {/* agar yakka berilsa har doim ohiriga utip qoladi */}
          <div className='flex  gap-2      bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
              <div className='                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
              <div className='order-1          bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
              <div className='                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
          </div>

          <div className='flex  gap-2      bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
              <div className='order-3                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
              <div className='order-1          bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
              <div className='order-2                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
          </div>


          {/* justify-content */}
          <h1 className='text-white text-2xl py-2'>justify</h1>
          <div className='flex justify-start  gap-2      bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
              <div className='                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
              <div className='                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
              <div className='                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
          </div>

          <div className='flex justify-end  gap-2      bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
              <div className='                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
              <div className='                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
              <div className='                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
          </div>

          <div className='flex justify-center  gap-2      bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
              <div className='                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
              <div className='                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
              <div className='                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
          </div>

          <div className='flex justify-between gap-2       bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
              <div className='                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
              <div className='                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
              <div className='                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
          </div>

          <div className='flex justify-around gap-2       bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
              <div className='                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
              <div className='                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
              <div className='                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
          </div>

          <div className='flex justify-evenly  gap-2      bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
              <div className='                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
              <div className='                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
              <div className='                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
          </div>


          {/* align-items */}
          <h1 className='text-white text-2xl py-2'>align</h1>
          <div className='flex  h-60  gap-2      bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
              <div className='                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
              <div className='                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
              <div className='                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
          </div>

          <div className='flex items-stretch   h-60  gap-2      bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
              <div className='                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
              <div className='                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
              <div className='                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
          </div>

          <div className='flex items-start   h-60  gap-2      bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
              <div className='                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
              <div className='                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
              <div className='                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
          </div>

          <div className='flex items-end   h-60  gap-2      bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
              <div className='                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
              <div className='                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
              <div className='                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
          </div>

          <div className='flex items-center   h-60  gap-2      bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
              <div className='                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
              <div className='                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
              <div className='                bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
          </div>
          
          {/* center container ni bir chiziqga tortip beradi */}
          <div className='flex items-center   h-60  gap-2      bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
              <div className='    pt-12             bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
              <div className='    pb-12            bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
              <div className='                          bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
          </div>

            {/* baseline content ni bir chiziqga tortip beradi */}
          <div className='flex items-baseline   h-60  gap-2      bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
              <div className='    pt-12             bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
              <div className='    pb-12            bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
              <div className='                          bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
          </div>




          {/* align-self */}
          <h1 className='text-white text-2xl py-2'>align-self</h1>
          {/* default */}
          <div className='flex  h-60  gap-2      bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
              <div className='                     flex-1      bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
              <div className='self-auto       flex-1      bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
              <div className='                     flex-1      bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
          </div>

          <div className='flex  h-60   gap-2     bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
              <div className='                     flex-1      bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
              <div className='self-stretch       flex-1      bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
              <div className='                     flex-1      bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
          </div>

          <div className='flex  h-60   gap-2     bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
              <div className='                     flex-1      bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
              <div className='self-start       flex-1      bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
              <div className='                     flex-1      bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
          </div>

          <div className='flex  h-60    gap-2    bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
              <div className='                     flex-1      bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
              <div className='self-center       flex-1      bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
              <div className='                     flex-1      bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
          </div>

          <div className='flex  h-60   gap-2     bg-slate-600 border border-gray-400 rounded-lg p-4 mb-20'>
              <div className='                     flex-1      bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>1</div>
              <div className='self-end        flex-1      bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>2</div>
              <div className='                     flex-1      bg-pink-500 border border-white p-4 rounded-lg text-lg font-bold text-center text-white'>3</div>
          </div>



    </div>
  )
}

export default FlexBasis