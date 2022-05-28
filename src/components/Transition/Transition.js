import { Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'

const TransitionComponent = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='text-center pt-12'>

            <button onClick={() => setOpen(!open)} className='bg-white py-1 px-4 text-slate-500 font-bold rounded'>Toggle button</button>

            {/* simple logic */}
            {/* {
                open && <div className='mt-12 bg-sky-500 text-white p-2 rounded w-[400px] mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab commodi quas perspiciatis minima exercitationem, reprehenderit quia architecto. Molestias, quaerat harum!</div>
            } */}


            {/* without animation */}
            {/* <Transition
                show = {open}
            >
                <div className='mt-12 bg-sky-500 text-white p-2 rounded w-[400px] mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab commodi quas perspiciatis minima exercitationem, reprehenderit quia architecto. Molestias, quaerat harum!</div>
            </Transition> */}


            {/* with animation */}
            {/* <Transition
                show={open}
                enter="transition-opacity duration-75"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className='mt-12 bg-sky-500 text-white p-2 rounded w-[400px] mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab commodi quas perspiciatis minima exercitationem, reprehenderit quia architecto. Molestias, quaerat harum!</div>
            </Transition> */}


            {/* Multiple transitions */}
            <Transition
                show={open}
                as="div"
                className='mt-12 bg-sky-500 text-white py-2 px-4 rounded w-[400px] mx-auto flex items-center gap-4 '
                enter="transition-opacity duration-100"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <Transition.Child
                    as={Fragment}
                    enter="transition ease-in-out duration-500 transform" 
                    enterFrom="rotate-180 opacity-0"
                    enterTo="rotate-0 opacity-100"
                    leave="transition-opacity duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className='w-[200px] aspect-[1/1] grow rounded-full overflow-hidden ring ring-white/75 ring-offset-1 ring-offset-pink-300'>
                        <img className='w-full object-bottom' src="https://images.unsplash.com/photo-1583511655826-05700d52f4d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGRvZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60" alt="" />
                    </div>
                </Transition.Child>

                <Transition.Child
                    as={Fragment}
                    enter="transition ease-in-out duration-500 transform"
                    enterFrom=" translate-x-[50px] opacity-0"
                    enterTo=" translate-x-0 opacity-100"
                    leave="transition-opacity duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <p className='text-sm text-left text-slate-100'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab commodi quas perspiciatis minima exercitationem, reprehenderit quia architecto. Molestias, quaerat harum!</p>
                </Transition.Child>
            </Transition>






        </div>
    )
}

export default TransitionComponent