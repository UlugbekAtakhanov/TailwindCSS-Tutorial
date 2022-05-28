import React from 'react'

const Width = () => {
    return (
        <div className='p-12 pb-[50rem]'>

            {/* w-24 === width: 6rem */}
            <div className='w-24                          bg-sky-500 text-white rounded-md mb-6 p-1'>w-24</div>
            <div className='w-32                          bg-sky-500 text-white rounded-md mb-6 p-1'>w-32</div>
            <div className='w-40                          bg-sky-500 text-white rounded-md mb-6 p-1'>w-40</div>
            <div className='w-48                          bg-sky-500 text-white rounded-md mb-6 p-1'>w-48</div>
            <div className='w-64                          bg-sky-500 text-white rounded-md mb-6 p-1'>w-64</div>
            <div className='w-80                          bg-sky-500 text-white rounded-md mb-6 p-1'>w-80</div>
            <div className='w-96                          bg-sky-500 text-white rounded-md mb-6 p-1'>w-96</div>

            {/* width: 100% */}
            <div className='w-full                          bg-sky-500 text-white rounded-md mb-6 p-1 mt-40'>w-full</div>

            {/* using fracitons */}
            <div className='w-1/2                          bg-sky-500 text-white rounded-md mb-6 p-1 mt-40'>w-1/2</div>
            <div className='w-1/3                          bg-sky-500 text-white rounded-md mb-6 p-1'>w-1/3</div>
            <div className='w-2/5                          bg-sky-500 text-white rounded-md mb-6 p-1'>w-2/5</div>

            {/* viewport width */}
            {/* <div className='w-screen bg-sky-500 text-white rounded-md mb-6 p-1'>w-screen</div> */}


            {/* min width */}

            <div className='min-w-[700px]                               bg-sky-500 text-white rounded-md mb-6 p-1 mt-40'>min-w-[700px]</div>
            <div className='w-[700px] min-w-full                               bg-sky-500 text-white rounded-md mb-6 p-1'>w-[700px] min-w-full</div>

            <br /><br /><br />

            <div className='min-w-min                               bg-sky-500 text-white rounded-md mb-6 p-1'>Lorem ipsum dolor sit amet.</div>
            <div className='w-min                               bg-sky-500 text-white rounded-md mb-6 p-1'>Lorem ipsumdddd dolor sit amet.</div>
            
            <br /><br /><br />

            <div className='min-w-max                               bg-sky-500 text-white rounded-md mb-6 p-1'>Lorem ipsum dolor sit amet.</div>
            <div className='w-max                               bg-sky-500 text-white rounded-md mb-6 p-1'>Lorem ipsumdddd dolor sit amet.</div>
            
            <br /><br /><br />

            <div className='min-w-fit                               bg-sky-500 text-white rounded-md mb-6 p-1'>Lorem ipsum dolor sit amet.</div>
            <div className='w-fit                               bg-sky-500 text-white rounded-md mb-6 p-1'>Lorem ipsumdddd dolor sit amet.</div>


            {/* max width */}

            <div className='max-w-[700px]                               bg-sky-500 text-white rounded-md mb-6 p-1 mt-40'>max-w-[700px]</div>
            <div className='max-w-xl                               bg-sky-500 text-white rounded-md mb-6 p-1'>max-w-xl</div>

            {/* prose === 65 character */}
            <div className='text-sm max-w-prose                               bg-sky-500 text-white rounded-md mb-6 p-1 mt-40'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam labore itaque minus ad, aut nam eius iure nesciunt omnis facilis neque ratione ipsam amet tempora beatae suscipit doloribus voluptas eveniet sit provident, natus aspernatur rerum qui. Alias mollitia nobis necessitatibus, impedit dicta neque optio nam tenetur tempore porro. Provident incidunt magnam quasi culpa soluta nam accusantium voluptates mollitia officia iusto deserunt impedit laborum minus, voluptate commodi quos doloremque magni tenetur, libero et, a veniam maxime eligendi atque. Magnam eius blanditiis natus perspiciatis maxime aliquid, ipsum eaque fuga illo vitae expedita facere explicabo maiores itaque aperiam veniam esse officiis eligendi fugit.</div>
            <div className='text-base max-w-prose                               bg-sky-500 text-white rounded-md mb-6 p-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam labore itaque minus ad, aut nam eius iure nesciunt omnis facilis neque ratione ipsam amet tempora beatae suscipit doloribus voluptas eveniet sit provident, natus aspernatur rerum qui. Alias mollitia nobis necessitatibus, impedit dicta neque optio nam tenetur tempore porro. Provident incidunt magnam quasi culpa soluta nam accusantium voluptates mollitia officia iusto deserunt impedit laborum minus, voluptate commodi quos doloremque magni tenetur, libero et, a veniam maxime eligendi atque. Magnam eius blanditiis natus perspiciatis maxime aliquid, ipsum eaque fuga illo vitae expedita facere explicabo maiores itaque aperiam veniam esse officiis eligendi fugit.</div>
            <div className='text-xl max-w-prose                               bg-sky-500 text-white rounded-md mb-6 p-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam labore itaque minus ad, aut nam eius iure nesciunt omnis facilis neque ratione ipsam amet tempora beatae suscipit doloribus voluptas eveniet sit provident, natus aspernatur rerum qui. Alias mollitia nobis necessitatibus, impedit dicta neque optio nam tenetur tempore porro. Provident incidunt magnam quasi culpa soluta nam accusantium voluptates mollitia officia iusto deserunt impedit laborum minus, voluptate commodi quos doloremque magni tenetur, libero et, a veniam maxime eligendi atque. Magnam eius blanditiis natus perspiciatis maxime aliquid, ipsum eaque fuga illo vitae expedita facere explicabo maiores itaque aperiam veniam esse officiis eligendi fugit.</div>

            {/* according breakpoints */}
            <div className='max-w-screen-lg                               bg-sky-500 text-white rounded-md mb-6 p-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam labore itaque minus ad, aut nam eius iure nesciunt omnis facilis neque ratione ipsam amet tempora beatae suscipit doloribus voluptas eveniet sit provident, natus aspernatur rerum qui. Alias mollitia nobis necessitatibus, impedit dicta neque optio nam tenetur tempore porro. Provident incidunt magnam quasi culpa soluta nam accusantium voluptates mollitia officia iusto deserunt impedit laborum minus, voluptate commodi quos doloremque magni tenetur, libero et, a veniam maxime eligendi atque. Magnam eius blanditiis natus perspiciatis maxime aliquid, ipsum eaque fuga illo vitae expedita facere explicabo maiores itaque aperiam veniam esse officiis eligendi fugit.</div>

        </div>
    )
}

export default Width