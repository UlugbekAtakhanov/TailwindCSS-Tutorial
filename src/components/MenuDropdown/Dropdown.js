import { Menu, Transition } from '@headlessui/react'
import React from 'react'
import { ArchiveIcon, ChevronDownIcon, DuplicateIcon, FolderRemoveIcon, PencilIcon, TrashIcon } from "@heroicons/react/solid"


const dropdownList = [
    { title: "Edit", icon: <PencilIcon /> },
    { title: "Duplicate", icon: <DuplicateIcon /> },
    { title: "Archive", icon: <ArchiveIcon /> },
    { title: "Move", icon: <FolderRemoveIcon /> },
    { title: "Delete", icon: <TrashIcon /> },
]

const Dropdown = () => {
    return (
        <div className='h-screen flex justify-center items-center'>


            {/* ====== Menu  components ====== */}
            {/* <Menu>

                <Menu.Button>Dropdown</Menu.Button>

                <Menu.Items>

                    {dropdownList.map((item, index) => (
                        <Menu.Item key = {index}>
                            <a href="">
                                {item.title}
                            </a>
                        </Menu.Item>
                    ))}

                </Menu.Items>

            </Menu> */}



            {/* ====== CSS ====== */}
            {/* we can not pass props to a "Fragment", "Menu" - component by default is Fragment, thats why we have to convert it to a "div" tag */}
            {/* <Menu as="div" className="relative">

                <Menu.Button className="bg-white/20 px-4 py-1 rounded-md flex items-center  gap-2">
                    Dropdown
                    <ChevronDownIcon className='w-5' />
                </Menu.Button>

                <Menu.Items className="absolute top-[130%] right-0 bg-gray-50 text-slate-700 w-[150%] p-1 rounded-md outline-none ">

                    {dropdownList.map((item, index) => (
                        <Menu.Item key={index}>
                            <a href="" className="flex items-center gap-2 hover:bg-indigo-500 hover:text-white m-[1px] rounded-md py-1 px-2 ">
                                <span className='w-4'>
                                    {item.icon}
                                </span>
                                {item.title}
                            </a>
                        </Menu.Item>
                    ))}

                </Menu.Items>

            </Menu> */}


            {/* ====== "active" prop and using it ====== */}
            {/* <Menu as="div" className="relative">

                <Menu.Button className="bg-white/20 px-4 py-1 rounded-md flex items-center  gap-2">
                    Dropdown
                    <ChevronDownIcon className='w-5' />
                </Menu.Button>

                <Menu.Items className="absolute top-[130%] right-0 bg-gray-50 text-slate-700 w-[150%] p-1 rounded-md outline-none ">

                    {dropdownList.map((item, index) => (
                        <Menu.Item key={index} >
                            {({ active }) => (
                                <a href="" className={`${active ? "bg-indigo-500 text-white" : null} flex items-center gap-2  m-[1px] rounded-md py-1 px-2`}>
                                    <span className='w-4'>
                                        {item.icon}
                                    </span>
                                    {item.title}
                                </a>
                            )}
                        </Menu.Item>
                    ))}

                </Menu.Items>

            </Menu> */}


            {/* ====== "open" prop ====== */}
            {/* <Menu as="div" className="relative">

                {({ open }) => (
                    <>
                        <Menu.Button className="bg-white/20 px-4 py-1 rounded-md flex items-center  gap-2">
                            Dropdown
                            <ChevronDownIcon className='w-5' />
                        </Menu.Button>

                        {open && (
                            // do not forget static prop
                            <Menu.Items static className="absolute top-[130%] right-0 bg-gray-50 text-slate-700 w-[150%] p-1 rounded-md outline-none ">

                                {dropdownList.map((item, index) => (
                                    <Menu.Item key={index}>
                                        {({ active }) => (
                                            <a href="" className={`${active ? "bg-indigo-500 text-white" : null} flex items-center gap-2  m-[1px] rounded-md py-1 px-2`}>
                                                <span className='w-4'>
                                                    {item.icon}
                                                </span>
                                                {item.title}
                                            </a>
                                        )}
                                    </Menu.Item>
                                ))}

                            </Menu.Items>
                        )}
                    </>
                )}

            </Menu> */}


            {/* ====== Using "open" prop ====== */}
            {/* <Menu as="div" className="relative">

                {({ open }) => (
                    <>
                        <Menu.Button className="bg-white/20 px-4 py-1 rounded-md flex items-center  gap-2">
                            Dropdown
                            <ChevronDownIcon className={` ${open ? "-rotate-180" : "rotate-0"}  w-5 transition-all`} />
                        </Menu.Button>

                        {open && (
                            // do not forget static prop
                            <Menu.Items static className="absolute top-[130%] right-0 bg-gray-50 text-slate-700 w-[150%] p-1 rounded-md outline-none ">

                                {dropdownList.map((item, index) => (
                                    <Menu.Item key={index}>
                                        {({ active }) => (
                                            <a href="" className={`
                                            ${active ? "bg-indigo-500 text-white" : null}
                                             flex items-center gap-2  m-[1px] rounded-md py-1 px-2
                                             disabled:bg-red-500
                                             `}>
                                                <span className='w-4'>
                                                    {item.icon}
                                                </span>
                                                {item.title}
                                            </a>
                                        )}
                                    </Menu.Item>
                                ))}

                            </Menu.Items>
                        )}
                    </>
                )}

            </Menu> */}



            {/* ====== "disabled" item ====== */}
            {/* <Menu as="div" className="relative">

                {({ open }) => (
                    <>
                        <Menu.Button className="bg-white/20 px-4 py-1 rounded-md flex items-center  gap-2">
                            Dropdown
                            <ChevronDownIcon className={` ${open ? "-rotate-180" : "rotate-0"}  w-5 transition-all`} />
                        </Menu.Button>

                        {open && (
                            // do not forget static prop
                            <Menu.Items static className="absolute top-[130%] right-0 bg-gray-50 text-slate-700 w-[150%] p-1 rounded-md outline-none ">

                                {dropdownList.map((item, index) => (
                                    // disabling button
                                    <Menu.Item key={index} disabled={index === 1 ? true : false}>
                                        {({ active }) => (
                                            <a href="" className={`
                                            ${active ? "bg-indigo-500 text-white" : null}
                                             flex items-center gap-2  m-[1px] rounded-md py-1 px-2
                                             disabled:bg-red-500
                                             `}>
                                                <span className='w-4'>
                                                    {item.icon}
                                                </span>
                                                {item.title}
                                            </a>
                                        )}
                                    </Menu.Item>
                                ))}

                            </Menu.Items>
                        )}
                    </>
                )}

            </Menu> */}

            {/* ====== "disabled" item and using disabled prop ====== */}
            {/* <Menu as="div" className="relative">

                {({ open }) => (
                    <>
                        <Menu.Button className="bg-white/20 px-4 py-1 rounded-md flex items-center  gap-2">
                            Dropdown
                            <ChevronDownIcon className={` ${open ? "-rotate-180" : "rotate-0"}  w-5 transition-all`} />
                        </Menu.Button>

                        {open && (
                            <Menu.Items static className="absolute top-[130%] right-0 bg-gray-50 text-slate-700 w-[150%] p-1 rounded-md outline-none ">

                                {dropdownList.map((item, index) => (
                                    // disabling button
                                    <Menu.Item key={index} disabled={index === 1 ? true : false}>
                                        {({ active, disabled }) => (
                                            <a href="" className={`
                                            ${disabled ? "text-gray-400"
                                                : 
                                                active ? "bg-indigo-500 text-white"  : null
                                            }
                                             flex items-center gap-2  m-[1px] rounded-md py-1 px-2
                                             disabled:bg-red-500
                                             `}>
                                                <span className='w-4'>
                                                    {item.icon}
                                                </span>
                                                {item.title}
                                            </a>
                                        )}
                                    </Menu.Item>
                                ))}

                            </Menu.Items>
                        )}
                    </>
                )}

            </Menu> */}



            {/* Transition component */}
            {/* !!! NOTICE == after wrapping to Transition component. top-0 works inappropriate, instead we used mt-2 */}
            {/* <Menu as="div" className="relative ">

                {({ open }) => (
                    <>
                        <Menu.Button className="bg-white/20 px-4 py-1 rounded-md flex items-center  gap-2">
                            Dropdown
                            <ChevronDownIcon className={` ${open ? "-rotate-180" : "rotate-0"}  w-5 transition-all`} />
                        </Menu.Button>

                        <Transition
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                        >
                            {open && (
                                <Menu.Items static className="absolute right-0 top-0 mt-2 bg-gray-50 text-slate-700 w-[150%] p-1 rounded-md outline-none ">

                                    {dropdownList.map((item, index) => (
                                        // disabling button
                                        <Menu.Item key={index} disabled={index === 1 ? true : false}>
                                            {({ active, disabled }) => (
                                                <a href="" className={`
                                            ${disabled ? "text-gray-400"
                                                        :
                                                        active ? "bg-indigo-500 text-white" : null
                                                    }
                                             flex items-center gap-2  m-[1px] rounded-md py-1 px-2
                                             disabled:bg-red-500
                                             `}>
                                                    <span className='w-4'>
                                                        {item.icon}
                                                    </span>
                                                    {item.title}
                                                </a>
                                            )}
                                        </Menu.Item>
                                    ))}

                                </Menu.Items>
                            )}
                        </Transition>
                    </>
                )}

            </Menu> */}


            {/* OR you can write as below using "show" prop */}
            <Menu as="div" className="relative ">

                {({ open }) => (
                    <>
                        <Menu.Button className="bg-white/20 px-4 py-1 rounded-md flex items-center  gap-2">
                            Dropdown
                            <ChevronDownIcon className={` ${open ? "-rotate-180" : "rotate-0"}  w-5 transition-all`} />
                        </Menu.Button>

                        <Transition
                            show = {open}
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                        >
                                <Menu.Items static className="absolute right-0 top-0 mt-2 bg-gray-50 text-slate-700 w-[150%] p-1 rounded-md outline-none ">

                                    {dropdownList.map((item, index) => (
                                        // disabling button
                                        <Menu.Item key={index} disabled={index === 1 ? true : false}>
                                            {({ active, disabled }) => (
                                                <a href="" className={`
                                            ${disabled ? "text-gray-400"
                                                        :
                                                        active ? "bg-indigo-500 text-white" : null
                                                    }
                                             flex items-center gap-2  m-[1px] rounded-md py-1 px-2
                                             disabled:bg-red-500
                                             `}>
                                                    <span className='w-4'>
                                                        {item.icon}
                                                    </span>
                                                    {item.title}
                                                </a>
                                            )}
                                        </Menu.Item>
                                    ))}

                                </Menu.Items>
                        </Transition>
                    </>
                )}

            </Menu>





        </div >
    )
}

export default Dropdown