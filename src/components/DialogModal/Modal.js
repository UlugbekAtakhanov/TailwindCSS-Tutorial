import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useRef, useState } from 'react'

const Modal = () => {
    const deactivateButtonRef = useRef()
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='flex justify-center pt-40 '>

            <button onClick={() => setIsOpen(true)} className='bg-white py-2 px-4 rounded-md text-sky-500 font-bold'>Open dialog</button>

            {/* Dialog components */}
            {/* inspect it in browser while isOpen === true !!!! */}
            {/* <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
                <Dialog.Panel>
                    <Dialog.Title>Deactivate Account</Dialog.Title>
                    <Dialog.Description>This will permanently deactivate your account</Dialog.Description>
                    <p>
                        Are you sure you want to deactivate your account? All of your data
                        will be permanently removed. This action cannot be undone.
                    </p>
                    <button onClick={() => setIsOpen(false)}>Deactivate</button>
                    <button onClick={() => setIsOpen(false)}>Cancel</button>
                </Dialog.Panel>
            </Dialog> */}



            {/* CSS styling */}
            {/* <Dialog open={isOpen} onClose={() => setIsOpen(false)} className=" fixed inset-0 flex items-center justify-center">
                <Dialog.Panel className=" bg-white w-[400px] rounded-lg text-gray-400 p-4">
                    <Dialog.Title className="text-sky-500 text-base font-bold">Deactivate Account</Dialog.Title>
                    <Dialog.Description className="text-sm">This will permanently deactivate your account</Dialog.Description>
                    <p className='text-sm my-2'>
                        Are you sure you want to deactivate your account? All of your data
                        will be permanently removed. This action cannot be undone.
                    </p>
                    <button className='bg-green-500 py-1 px-3 rounded-md text-white shadow hover:shadow-lg  hover:shadow-green-500 transition-all text-sm mr-2'>Deactivate</button>
                    <button className='bg-red-500 py-1 px-3 rounded-md text-white shadow hover:shadow-lg  hover:shadow-red-500 transition-all text-sm' onClick={() => setIsOpen(false)}>Cancel</button>
                </Dialog.Panel>
            </Dialog> */}

            {/* Backdrop or Overlay */}
            {/* <Dialog open={isOpen} onClose={() => setIsOpen(false)} className=" fixed inset-0 flex items-center justify-center"> */}

            {/* backdrop is dedicated because it is now independent for transition */}
            {/* <div className='fixed inset-0 bg-black/30' />

                <Dialog.Panel className=" bg-white w-[400px] rounded-lg text-gray-400 p-4 relative">
                    <Dialog.Title className="text-sky-500 text-base font-bold">Deactivate Account</Dialog.Title>
                    <Dialog.Description className="text-sm">This will permanently deactivate your account</Dialog.Description>
                    <p className='text-sm my-2'>
                        Are you sure you want to deactivate your account? All of your data
                        will be permanently removed. This action cannot be undone.
                    </p>
                    <button className='bg-green-500 py-1 px-3 rounded-md text-white shadow hover:shadow-lg  hover:shadow-green-500 transition-all text-sm mr-2'>Deactivate</button>
                    <button className='bg-red-500 py-1 px-3 rounded-md text-white shadow hover:shadow-lg  hover:shadow-red-500 transition-all text-sm' onClick={() => setIsOpen(false)}>Cancel</button>
                </Dialog.Panel>
            </Dialog> */}



            {/* scrollable dialog */}
            {/* <Dialog open={isOpen} onClose={() => setIsOpen(false)} className=" fixed inset-0 flex items-center justify-center">

                <div className='fixed inset-0 bg-black/30' />

                <Dialog.Panel className=" bg-white w-[400px] h-[400px] rounded-lg text-gray-400 p-4 relative overflow-y-scroll ">
                    <Dialog.Title className="text-sky-500 text-base font-bold">Deactivate Account</Dialog.Title>
                    <Dialog.Description className="text-sm">This will permanently deactivate your account</Dialog.Description>
                    <p className='text-sm my-2'>
                        Are you sure you want to deactivate your account? All of your data
                        will be permanently removed. This action cannot be undone.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur id iusto reprehenderit sit nobis quaerat ullam aliquid officia rerum possimus earum suscipit porro laborum, dignissimos eaque sunt quis nihil similique reiciendis omnis molestias? Alias iusto voluptatibus quod obcaecati facere architecto ea laborum illum repellendus placeat impedit quas, fuga dolore a, tenetur doloribus accusamus quos! Incidunt dignissimos impedit, molestias inventore numquam optio quia ea cum. Praesentium impedit reprehenderit quo, ipsam ducimus non alias suscipit molestiae numquam. Eligendi nihil minus aperiam maiores eos officiis vitae consequatur, aliquam fugit magnam blanditiis maxime quod incidunt quibusdam fugiat eius assumenda in quas velit eaque? Quod.
                    </p>
                    <button className='bg-green-500 py-1 px-3 rounded-md text-white shadow hover:shadow-lg  hover:shadow-green-500 transition-all text-sm mr-2'>Deactivate</button>
                    <button className='bg-red-500 py-1 px-3 rounded-md text-white shadow hover:shadow-lg  hover:shadow-red-500 transition-all text-sm' onClick={() => setIsOpen(false)}>Cancel</button>
                </Dialog.Panel>
            </Dialog> */}


            {/* Initial focus */}
            {/* <Dialog initialFocus={deactivateButtonRef} open={isOpen} onClose={() => setIsOpen(false)} className=" fixed inset-0 flex items-center justify-center">

                <div className='fixed inset-0 bg-black/30' />

                <Dialog.Panel className=" bg-white w-[400px] rounded-lg text-gray-400 p-4 relative overflow-y-scroll ">
                    <Dialog.Title className="text-sky-500 text-base font-bold">Deactivate Account</Dialog.Title>
                    <Dialog.Description className="text-sm">This will permanently deactivate your account</Dialog.Description>
                    <p className='text-sm my-2'>
                        Are you sure you want to deactivate your account? All of your data
                        will be permanently removed. This action cannot be undone.
                    </p>
                    <button ref = {deactivateButtonRef} className=' focus:ring-sky-500 focus:ring-2 focus:ring-offset-1 outline-none      bg-green-500 py-1 px-3 rounded-md text-white shadow hover:shadow-lg  hover:shadow-green-500 transition-all text-sm mr-2'>Deactivate</button>
                    <button className='bg-red-500 py-1 px-3 rounded-md text-white shadow hover:shadow-lg  hover:shadow-red-500 transition-all text-sm' onClick={() => setIsOpen(false)}>Cancel</button>
                </Dialog.Panel>
            </Dialog> */}




            {/* Transition */}
            <Transition
                as = {Fragment}
                show={isOpen}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
            >
            {/* do not forget delete open prop in dialog */}
            <Dialog initialFocus={deactivateButtonRef}  onClose={() => setIsOpen(false)} className=" fixed inset-0 flex items-center justify-center">

                    <div className='fixed inset-0 bg-black/30' />

                    <Dialog.Panel className=" bg-white w-[400px] rounded-lg text-gray-400 p-4 relative ">
                        <Dialog.Title className="text-sky-500 text-base font-bold">Deactivate Account</Dialog.Title>
                        <Dialog.Description className="text-sm">This will permanently deactivate your account</Dialog.Description>
                        <p className='text-sm my-2'>
                            Are you sure you want to deactivate your account? All of your data
                            will be permanently removed. This action cannot be undone.
                        </p>
                        <button ref={deactivateButtonRef} className=' focus:ring-sky-500 focus:ring-2 focus:ring-offset-1 outline-none      bg-green-500 py-1 px-3 rounded-md text-white shadow hover:shadow-lg  hover:shadow-green-500 transition-all text-sm mr-2'>Deactivate</button>
                        <button className='bg-red-500 py-1 px-3 rounded-md text-white shadow hover:shadow-lg  hover:shadow-red-500 transition-all text-sm' onClick={() => setIsOpen(false)}>Cancel</button>
                    </Dialog.Panel>
                </Dialog>
            </Transition>


        




        </div>
    )
}

export default Modal