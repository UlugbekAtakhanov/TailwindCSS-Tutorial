import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import React from 'react'

const PopoverComponent = () => {
    return (
        <div className='flex justify-center items-center h-screen'>


            {/* Popover components */}
            {/* <Popover>
            <Popover.Button>Button</Popover.Button>
            <Popover.Panel>
                <ul>
                        <li><a href="#">link1</a></li>
                        <li><a href="#">link1</a></li>
                        <li><a href="#">link1</a></li>
                        <li><a href="#">link1</a></li>
                </ul>
            </Popover.Panel>
        </Popover> */}



            {/* CSS styling and using "open" prop */}
            {/* <Popover as="div" className="relative">
                {({ open }) => (
                    <>
                        <Popover.Button className="group bg-white shadow text-slate-500  py-1 px-2 rounded-md font-semibold flex justify-between items-center gap-2" >
                            Button
                            <ChevronDownIcon className={`
                            ${open ? "-rotate-180" : "rotate-0"}
                            w-4 text-slate-400 group-hover:text-green-500 transition-all
                        `} />
                        </Popover.Button>
                        <Popover.Panel className="
                            absolute mt-2 rounded bg-white  text-slate-500 w-[200%] p-[2px]
                        ">
                            <ul>
                                <li><a className='py-1 px-2 hover:text-emerald-100 hover:bg-emerald-500 rounded m-[1px] hover:ring-1 hover:ring-emerald-200 hover:ring-offset-[1px] block' href="#">link1</a></li>
                                <li><a className='py-1 px-2 hover:text-emerald-100 hover:bg-emerald-500 rounded m-[1px] hover:ring-1 hover:ring-emerald-200 hover:ring-offset-[1px] block' href="#">link1</a></li>
                                <li><a className='py-1 px-2 hover:text-emerald-100 hover:bg-emerald-500 rounded m-[1px] hover:ring-1 hover:ring-emerald-200 hover:ring-offset-[1px] block' href="#">link1</a></li>
                                <li><a className='py-1 px-2 hover:text-emerald-100 hover:bg-emerald-500 rounded m-[1px] hover:ring-1 hover:ring-emerald-200 hover:ring-offset-[1px] block' href="#">link1</a></li>
                            </ul>
                        </Popover.Panel>
                    </>
                )}
            </Popover> */}


            {/* showing and hiding popover */}
            {/* <Popover as="div" className="relative">
                {({ open }) => (
                    <>
                        <Popover.Button className="group bg-white shadow text-slate-500  py-1 px-2 rounded-md font-semibold flex justify-between items-center gap-2" >
                            Button
                            <ChevronDownIcon className={`
                                ${open ? "-rotate-180" : "rotate-0"}
                                w-4 text-slate-400 group-hover:text-green-500 transition-all
                            `} />
                        </Popover.Button>

                        {open &&
                            <div>
                                <Popover.Panel static className="
                                    absolute right-0 mt-2 rounded bg-white  text-slate-500 w-[200%] p-[2px]
                                    ">
                                    <ul>
                                        <li><a className='py-1 px-2 hover:text-emerald-100 hover:bg-emerald-500 rounded m-[1px] hover:ring-1 hover:ring-emerald-200 hover:ring-offset-[1px] block' href="#">link1</a></li>
                                        <li><a className='py-1 px-2 hover:text-emerald-100 hover:bg-emerald-500 rounded m-[1px] hover:ring-1 hover:ring-emerald-200 hover:ring-offset-[1px] block' href="#">link1</a></li>
                                        <li><a className='py-1 px-2 hover:text-emerald-100 hover:bg-emerald-500 rounded m-[1px] hover:ring-1 hover:ring-emerald-200 hover:ring-offset-[1px] block' href="#">link1</a></li>
                                        <li><a className='py-1 px-2 hover:text-emerald-100 hover:bg-emerald-500 rounded m-[1px] hover:ring-1 hover:ring-emerald-200 hover:ring-offset-[1px] block' href="#">link1</a></li>
                                    </ul>
                                </Popover.Panel>
                            </div>
                        } 

                    </>
                )}
            </Popover> */}



            {/* closing popovers manually  */}
            {/* <Popover as="div" className="relative">
                {({ open }) => (
                    <>
                        <Popover.Button className="group bg-white shadow text-slate-500  py-1 px-2 rounded-md font-semibold flex justify-between items-center gap-2" >
                            Button
                            <ChevronDownIcon className={`
                                ${open ? "-rotate-180" : "rotate-0"}
                                w-4 text-slate-400 group-hover:text-green-500 transition-all
                            `} />
                        </Popover.Button>

                        {open &&
                            <div>
                                <Popover.Panel static className="
                                    absolute right-0 mt-2 rounded bg-white  text-slate-500 w-[200%] p-[2px]
                                    ">
                                    <ul>
                                        <li><a className='py-1 px-2 hover:text-emerald-100 hover:bg-emerald-500 rounded m-[1px] hover:ring-1 hover:ring-emerald-200 hover:ring-offset-[1px] block' href="#">link1</a></li>
                                        <li><a className='py-1 px-2 hover:text-emerald-100 hover:bg-emerald-500 rounded m-[1px] hover:ring-1 hover:ring-emerald-200 hover:ring-offset-[1px] block' href="#">link1</a></li>
                                        <li><a className='py-1 px-2 hover:text-emerald-100 hover:bg-emerald-500 rounded m-[1px] hover:ring-1 hover:ring-emerald-200 hover:ring-offset-[1px] block' href="#">link1</a></li>
                                        <li><a className='py-1 px-2 hover:text-emerald-100 hover:bg-emerald-500 rounded m-[1px] hover:ring-1 hover:ring-emerald-200 hover:ring-offset-[1px] block' href="#">link1</a></li>
                                    </ul> */}
            {/* closing button */}
            {/* <div className='text-right p-1'>

                                    <Popover.Button 
                                        className='py-1 px-2 bg-red-500 shadow hover:shadow-lg hover:shadow-red-500 text-white text-xs whitespace-nowrap rounded m-[1px]'
                                        >
                                        Closing button
                                    </Popover.Button>
                                        </div>

                                </Popover.Panel>
                            </div>
                        }

                    </>
                )}
            </Popover> */}


            {/* "    close()   " render prop */}
            {/* <Popover as="div" className="relative">
                {({ open }) => (
                    <>
                        <Popover.Button className="group bg-white shadow text-slate-500  py-1 px-2 rounded-md font-semibold flex justify-between items-center gap-2" >
                            Button
                            <ChevronDownIcon className={`
                                ${open ? "-rotate-180" : "rotate-0"}
                                w-4 text-slate-400 group-hover:text-green-500 transition-all
                            `} />
                        </Popover.Button>

                        {open &&
                            <div>
                                <Popover.Panel static className="
                                    absolute right-0 mt-2 rounded bg-white  text-slate-500 w-[200%] p-[2px]
                                    ">
                                    {({ close }) => (
                                        <>
                                            <ul>
                                                <li><a className='py-1 px-2 hover:text-emerald-100 hover:bg-emerald-500 rounded m-[1px] hover:ring-1 hover:ring-emerald-200 hover:ring-offset-[1px] block' href="#">link1</a></li>
                                                <li><a className='py-1 px-2 hover:text-emerald-100 hover:bg-emerald-500 rounded m-[1px] hover:ring-1 hover:ring-emerald-200 hover:ring-offset-[1px] block' href="#">link1</a></li>
                                                <li><a className='py-1 px-2 hover:text-emerald-100 hover:bg-emerald-500 rounded m-[1px] hover:ring-1 hover:ring-emerald-200 hover:ring-offset-[1px] block' href="#">link1</a></li>
                                                <li><a className='py-1 px-2 hover:text-emerald-100 hover:bg-emerald-500 rounded m-[1px] hover:ring-1 hover:ring-emerald-200 hover:ring-offset-[1px] block' href="#">link1</a></li>
                                            </ul> */}

            {/* closing button */}
            {/* <div className='text-right p-1'>
                                                <button
                                                    onClick={async () => {
                                                        await fetch('/accept-terms', { method: 'POST' })
                                                        close()
                                                    }}
                                                    className='py-1 px-2 bg-red-500 shadow hover:shadow-lg hover:shadow-red-500 text-white text-xs whitespace-nowrap rounded m-[1px]'
                                                >
                                                    Read and accept
                                                </button>
                                            </div>
                                        </>
                                    )}



                                </Popover.Panel>
                            </div>
                        }

                    </>
                )}
            </Popover> */}


            {/* Popover.Overlay component */}
            {/* <Popover as="div" className="relative">
                {({ open }) => (
                    <>
                        <Popover.Button className="group bg-white shadow text-slate-500  py-1 px-2 rounded-md font-semibold flex justify-between items-center gap-2" >
                            Button
                            <ChevronDownIcon className={`
                                ${open ? "-rotate-180" : "rotate-0"}
                                w-4 text-slate-400 group-hover:text-green-500 transition-all
                            `} />
                        </Popover.Button> */}

            {/* overlay */}
            {/* <Popover.Overlay className="fixed inset-0 bg-black/30 backdrop-blur-sm" />

                        {open &&
                            <div>
                                <Popover.Panel static className="
                                    absolute right-0 mt-2 rounded bg-white  text-slate-500 w-[200%] p-[2px]
                                    ">
                                    <ul>
                                        <li><a className='py-1 px-2 hover:text-emerald-100 hover:bg-emerald-500 rounded m-[1px] hover:ring-1 hover:ring-emerald-200 hover:ring-offset-[1px] block' href="#">link1</a></li>
                                        <li><a className='py-1 px-2 hover:text-emerald-100 hover:bg-emerald-500 rounded m-[1px] hover:ring-1 hover:ring-emerald-200 hover:ring-offset-[1px] block' href="#">link1</a></li>
                                        <li><a className='py-1 px-2 hover:text-emerald-100 hover:bg-emerald-500 rounded m-[1px] hover:ring-1 hover:ring-emerald-200 hover:ring-offset-[1px] block' href="#">link1</a></li>
                                        <li><a className='py-1 px-2 hover:text-emerald-100 hover:bg-emerald-500 rounded m-[1px] hover:ring-1 hover:ring-emerald-200 hover:ring-offset-[1px] block' href="#">link1</a></li>
                                    </ul>

                                </Popover.Panel>
                            </div>
                        }

                    </>
                )}
            </Popover> */}



            {/* Transition component */}
            {/* <Popover as="div" className="relative">
                {({ open }) => (
                    <>
                        <Popover.Button className="group bg-white shadow text-slate-500  py-1 px-2 rounded-md font-semibold flex justify-between items-center gap-2" >
                            Button
                            <ChevronDownIcon className={`
                                ${open ? "-rotate-180" : "rotate-0"}
                                w-4 text-slate-400 group-hover:text-green-500 transition-all
                            `} />
                        </Popover.Button>

                        <Popover.Overlay className="fixed inset-0 bg-black/30 backdrop-blur-sm" />

                        <Transition
                            show = {open}
                            enter="transition duration-100 delay-200 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                        >
                                <div>
                                    <Popover.Panel static className="
                                    absolute right-0 mt-2 rounded bg-white  text-slate-500 w-[200%] p-[2px]
                                    ">
                                        <ul>
                                            <li><a className='py-1 px-2 hover:text-emerald-100 hover:bg-emerald-500 rounded m-[1px] hover:ring-1 hover:ring-emerald-200 hover:ring-offset-[1px] block' href="#">link1</a></li>
                                            <li><a className='py-1 px-2 hover:text-emerald-100 hover:bg-emerald-500 rounded m-[1px] hover:ring-1 hover:ring-emerald-200 hover:ring-offset-[1px] block' href="#">link1</a></li>
                                            <li><a className='py-1 px-2 hover:text-emerald-100 hover:bg-emerald-500 rounded m-[1px] hover:ring-1 hover:ring-emerald-200 hover:ring-offset-[1px] block' href="#">link1</a></li>
                                            <li><a className='py-1 px-2 hover:text-emerald-100 hover:bg-emerald-500 rounded m-[1px] hover:ring-1 hover:ring-emerald-200 hover:ring-offset-[1px] block' href="#">link1</a></li>
                                        </ul>

                                    </Popover.Panel>
                                </div>
                        </Transition>

                    </>
                )}
            </Popover> */}



            {/* Grouping */}
            {/* there is a bug may be or not */}
            <Popover.Group className="space-y-2">
                <Popover as="div" className="relative ">
                    {({ open }) => (
                        <>
                            <Popover.Button className="group relative z-0 bg-white shadow text-slate-500  py-1 px-2 rounded-md font-semibold flex justify-between items-center gap-2" >
                                Button
                                <ChevronDownIcon className={`
                                ${open ? "-rotate-180" : "rotate-0"}
                                w-4 text-slate-400 group-hover:text-green-500 transition-all
                            `} />
                            </Popover.Button>

                            <Popover.Overlay className="fixed inset-0 bg-black/30 backdrop-blur-sm" />

                            <Transition
                                show={open}
                                enter="transition duration-100 delay-200 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                <div>
                                    <Popover.Panel static className="
                                    absolute z-50 right-0 mt-2 rounded bg-white  text-slate-500 w-[200%] p-[2px]
                                    ">
                                        <ul>
                                            <li><a className='py-1 px-2 hover:text-emerald-100 hover:bg-emerald-500 rounded m-[1px] hover:ring-1 hover:ring-emerald-200 hover:ring-offset-[1px] block' href="#">link1</a></li>
                                            <li><a className='py-1 px-2 hover:text-emerald-100 hover:bg-emerald-500 rounded m-[1px] hover:ring-1 hover:ring-emerald-200 hover:ring-offset-[1px] block' href="#">link1</a></li>
                                            <li><a className='py-1 px-2 hover:text-emerald-100 hover:bg-emerald-500 rounded m-[1px] hover:ring-1 hover:ring-emerald-200 hover:ring-offset-[1px] block' href="#">link1</a></li>
                                            <li><a className='py-1 px-2 hover:text-emerald-100 hover:bg-emerald-500 rounded m-[1px] hover:ring-1 hover:ring-emerald-200 hover:ring-offset-[1px] block' href="#">link1</a></li>
                                        </ul>

                                    </Popover.Panel>
                                </div>
                            </Transition>

                        </>
                    )}
                </Popover>

                <Popover as="div" className="relative">
                    {({ open }) => (
                        <>
                            <Popover.Button className="group relative bg-white shadow text-slate-500  py-1 px-2 rounded-md font-semibold flex justify-between items-center gap-2" >
                                Button
                                <ChevronDownIcon className={`
                                ${open ? "-rotate-180" : "rotate-0"}
                                w-4 text-slate-400 group-hover:text-green-500 transition-all
                            `} />
                            </Popover.Button>

                            <Popover.Overlay className="fixed inset-0 bg-black/30 backdrop-blur-sm" />

                            <Transition
                                show={open}
                                enter="transition duration-100 delay-200 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                <div>
                                    <Popover.Panel static className="
                                    absolute z-50 right-0 mt-2 rounded bg-white  text-slate-500 w-[200%] p-[2px]
                                    ">
                                        <ul>
                                            <li><a className='py-1 px-2 hover:text-emerald-100 hover:bg-emerald-500 rounded m-[1px] hover:ring-1 hover:ring-emerald-200 hover:ring-offset-[1px] block' href="#">link1</a></li>
                                            <li><a className='py-1 px-2 hover:text-emerald-100 hover:bg-emerald-500 rounded m-[1px] hover:ring-1 hover:ring-emerald-200 hover:ring-offset-[1px] block' href="#">link1</a></li>
                                            <li><a className='py-1 px-2 hover:text-emerald-100 hover:bg-emerald-500 rounded m-[1px] hover:ring-1 hover:ring-emerald-200 hover:ring-offset-[1px] block' href="#">link1</a></li>
                                            <li><a className='py-1 px-2 hover:text-emerald-100 hover:bg-emerald-500 rounded m-[1px] hover:ring-1 hover:ring-emerald-200 hover:ring-offset-[1px] block' href="#">link1</a></li>
                                        </ul>

                                    </Popover.Panel>
                                </div>
                            </Transition>

                        </>
                    )}
                </Popover>
            </Popover.Group>




        </div>
    )
}

export default PopoverComponent