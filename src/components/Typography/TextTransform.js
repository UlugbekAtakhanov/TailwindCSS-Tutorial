import React from 'react'

const TextTransform = () => {
    return (
        <div className='p-12 pb-[50rem]'>

            {/* text-transform */}
            <p className='uppercase                          mb-12 text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quisquam!</p>
            <p className='lowercase                          mb-12 text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quisquam!</p>
            <p className='capitalize                          mb-12 text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quisquam!</p>
            <p className='normal-case                          mb-12 text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quisquam!</p>

            {/* text-overflow */}
            <p className='truncate                        w-[10rem] mb-12 text-2xl '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quisquam!</p>
            <p className='text-ellipsis overflow-hidden                        w-[10rem] border mb-12 text-2xl'>Lorem ipsum dolor sit amet consecteturssssssssssssssssssssssssssssssssssssssssssssssssssssss adipisicing elit. Quaerat, quisquam!</p>
            <p className='text-clip overflow-hidden                        w-[10rem] border mb-12 text-2xl'>Lorem ipsum dolor sit amet consecteturssssssssssssssssssssssssssssssssssssssssssssssssssssss adipisicing elit. Quaerat, quisquam!</p>

            {/* indent */}
            <p className='indent-12                          mb-12 text-2xl '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos debitis unde modi quidem fuga voluptas, sit corporis, cupiditate, ipsum omnis excepturi. Dolorum nemo nihil assumenda molestias alias consequuntur tenetur, sapiente similique laudantium atque! Laborum voluptatibus iure sed nulla quod, voluptas animi magni dicta ab ratione dolorum voluptatum dolor! Rem asperiores praesentium beatae quas. Molestias quisquam dolore sequi ut unde tempora sint minus voluptatem quos consequatur libero nemo modi molestiae aperiam, nam debitis et, eligendi similique dolores porro? Provident aliquam ducimus illo dolorem quod totam sit fugit minima nesciunt voluptatibus, eos praesentium tempora dolorum ratione, assumenda maxime nemo repellat repudiandae in!</p>
            <p className='indent-[50px]                          mb-12 text-2xl '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos debitis unde modi quidem fuga voluptas, sit corporis, cupiditate, ipsum omnis excepturi. Dolorum nemo nihil assumenda molestias alias consequuntur tenetur, sapiente similique laudantium atque! Laborum voluptatibus iure sed nulla quod, voluptas animi magni dicta ab ratione dolorum voluptatum dolor! Rem asperiores praesentium beatae quas. Molestias quisquam dolore sequi ut unde tempora sint minus voluptatem quos consequatur libero nemo modi molestiae aperiam, nam debitis et, eligendi similique dolores porro? Provident aliquam ducimus illo dolorem quod totam sit fugit minima nesciunt voluptatibus, eos praesentium tempora dolorum ratione, assumenda maxime nemo repellat repudiandae in!</p>

            {/* vertical align */}
            <div className='text-2xl border border-sky-500/50 mb-12'>
                Lorem, ipsum dolor.
                <span className='          text-xs                                                   border border-pink-500/50 '>Lorem, ipsum dolor.</span>
            </div>

            <div className='text-2xl border border-sky-500/50 mb-12'>
                Lorem, ipsum dolor. 
                <span className='inline-block align-baseline     text-xs                          border border-pink-500/50 '>Lorem, ipsum dolor.</span>
            </div>
            
            <div className='text-2xl border border-sky-500/50 mb-12'>
                Lorem, ipsum dolor.
                <span className='inline-block align-top         text-xs                      border border-pink-500/50 '>Lorem, ipsum dolor.</span>
            </div>

            <div className='text-2xl border border-sky-500/50 mb-12'>
                Lorem, ipsum dolor.
                <span className='inline-block align-middle        text-xs                       border border-pink-500/50 '>Lorem, ipsum dolor.</span>
            </div>

            <div className='text-2xl border border-sky-500/50 mb-12'>
                Lorem, ipsum dolor.
                <span className='inline-block align-bottom        text-xs                       border border-pink-500/50 '>Lorem, ipsum dolor.</span>
            </div>

            <div className='text-2xl border border-sky-500/50 mb-12'>
                Lorem, ipsum dolor.
                <span className='inline-block align-text-top       text-xs                        border border-pink-500/50 '>Lorem, ipsum dolor.</span>
            </div>

            <div className='text-2xl border border-sky-500/50 mb-12'>
                Lorem, ipsum dolor.
                <span className='inline-block align-text-bottom    text-xs                           border border-pink-500/50 '>Lorem, ipsum dolor.</span>
            </div>



        </div>
    )
}

export default TextTransform