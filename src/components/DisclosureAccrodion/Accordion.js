import { Disclosure, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import React, { useState } from 'react'

const Accordion = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='py-40 flex items-center justify-center flex-col gap-2'>


            {/* Disclosure, Disclosure.Button, Disclosure.Panel */}
            {/* <Disclosure>
                    <Disclosure.Button>Disclosure Button1</Disclosure.Button>
                    <Disclosure.Panel>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eveniet alias, molestias quos ducimus sunt quo provident repudiandae reiciendis enim architecto at ab non nulla nam? Expedita quibusdam voluptatum soluta inventore omnis iste voluptas neque odit sequi dolor atque praesentium veritatis impedit aut, porro recusandae! Architecto minus consequuntur, veritatis, incidunt ipsam tempore doloribus exercitationem velit eaque est perferendis laboriosam, assumenda sunt cum magni fuga odit. Totam cumque, esse similique est odit dolorem soluta ipsam autem sequi aliquid porro eum! Natus omnis unde laborum sunt inventore, facilis consectetur repellat quae ad optio nesciunt aliquam iure. Esse, distinctio! Suscipit aspernatur doloribus consequuntur!</p>
                    </Disclosure.Panel>
                </Disclosure> */}


            {/* CSS styling and using "open" prop */}
            {/* <Disclosure as="div" className="bg-white w-[400px] p-2 rounded-md">
                {({ open }) => (
                    <>
                        <Disclosure.Button className="bg-orange-400 text-orange-50 w-full rounded-md text-left p-1 flex items-center justify-between">
                            Disclosure Button1
                            <ChevronDownIcon className={`w-6 ${open ? "transform -rotate-180" : ""} transition-all`} />
                        </Disclosure.Button>

                        {open && (
                            <Disclosure.Panel static className={`text-slate-400`}>
                                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eveniet alias, molestias quos ducimus sunt quo provident repudiandae reiciendis enim architecto at ab non nulla nam? Expedita quibusdam voluptatum soluta inventore omnis iste voluptas neque odit sequi dolor atque praesentium veritatis impedit aut, porro recusandae! Architecto minus consequuntur, veritatis, incidunt ipsam tempore doloribus exercitationem velit eaque est perferendis laboriosam, assumenda sunt cum magni fuga odit. Totam cumque, esse similique est odit dolorem soluta ipsam autem sequi aliquid porro eum! Natus omnis unde laborum sunt inventore, facilis consectetur repellat quae ad optio nesciunt aliquam iure. Esse, distinctio! Suscipit aspernatur doloribus consequuntur!</p>
                            </Disclosure.Panel>
                        )}
                    </>
                )}
            </Disclosure> */}


            {/* Closing disclosure clicking to its child */}
            {/* <Disclosure as="div" className="bg-white w-[400px] p-2 rounded-md">
                {({ open }) => (
                    <>
                        <Disclosure.Button className="bg-orange-400 text-orange-50 w-full rounded-md text-left p-1 flex items-center justify-between">
                            Disclosure Button1
                            <ChevronDownIcon className={`w-6 ${open ? "transform -rotate-180" : ""} transition-all`} />
                        </Disclosure.Button>

                        {open && (
                            <Disclosure.Panel static className={`text-slate-400`}>
                                <Disclosure.Button as="a" href= "https://www.google.com/">
                                    <p className='text-sm text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eveniet alias, molestias quos ducimus sunt quo provident repudiandae reiciendis enim architecto at ab non nulla nam? Expedita quibusdam voluptatum soluta inventore omnis iste voluptas neque odit sequi dolor atque praesentium veritatis impedit aut, porro recusandae! Architecto minus consequuntur, veritatis, incidunt ipsam tempore doloribus exercitationem velit eaque est perferendis laboriosam, assumenda sunt cum magni fuga odit. Totam cumque, esse similique est odit dolorem soluta ipsam autem sequi aliquid porro eum! Natus omnis unde laborum sunt inventore, facilis consectetur repellat quae ad optio nesciunt aliquam iure. Esse, distinctio! Suscipit aspernatur doloribus consequuntur!</p>
                                </Disclosure.Button>
                            </Disclosure.Panel>
                        )}
                    </>
                )}
            </Disclosure> */}
            {/* This is especially useful when using disclosures for things like mobile menus that contain links where you want the disclosure to close when navigating to the next page. */}



            {/* Transition component */}
            {/* <Disclosure as="div" className="bg-white w-[400px] p-2 rounded-md">
                {({ open }) => (
                    <>
                        <Disclosure.Button className="bg-orange-400 text-orange-50 w-full rounded-md text-left p-1 flex items-center justify-between">
                            Disclosure Button1
                            <ChevronDownIcon className={`w-6 ${open ? "transform -rotate-180" : ""} transition-all`} />
                        </Disclosure.Button>

                        <Transition
                            show={open}
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                        >
                            <Disclosure.Panel static className={`text-slate-400`}>
                                <Disclosure.Button as="a" href="https://www.google.com/">
                                    <p className='text-sm text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eveniet alias, molestias quos ducimus sunt quo provident repudiandae reiciendis enim architecto at ab non nulla nam? Expedita quibusdam voluptatum soluta inventore omnis iste voluptas neque odit sequi dolor atque praesentium veritatis impedit aut, porro recusandae! Architecto minus consequuntur, veritatis, incidunt ipsam tempore doloribus exercitationem velit eaque est perferendis laboriosam, assumenda sunt cum magni fuga odit. Totam cumque, esse similique est odit dolorem soluta ipsam autem sequi aliquid porro eum! Natus omnis unde laborum sunt inventore, facilis consectetur repellat quae ad optio nesciunt aliquam iure. Esse, distinctio! Suscipit aspernatur doloribus consequuntur!</p>
                                </Disclosure.Button>
                            </Disclosure.Panel>
                        </Transition>
                    </>
                )}
            </Disclosure> */}


            {/* multiple disclosure */}
            <div className='space-y-2'>
                <Disclosure as="div" className="bg-white w-[400px] p-2 rounded-md">
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="bg-orange-400 text-orange-50 w-full rounded-md text-left p-1 flex items-center justify-between">
                                Disclosure Button1
                                <ChevronDownIcon className={`w-6 ${open ? "transform -rotate-180" : ""} transition-all`} />
                            </Disclosure.Button>

                            <Transition
                                show={open}
                                enter="transition duration-100 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                <Disclosure.Panel static className={`text-slate-400`}>
                                    <Disclosure.Button as="a" href="https://www.google.com/">
                                        <p className='text-sm text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eveniet alias, molestias quos ducimus sunt quo provident repudiandae reiciendis enim architecto at ab non nulla nam? Expedita quibusdam voluptatum soluta inventore omnis iste voluptas neque odit sequi dolor atque praesentium veritatis impedit aut, porro recusandae! Architecto minus consequuntur, veritatis, incidunt ipsam tempore doloribus exercitationem velit eaque est perferendis laboriosam, assumenda sunt cum magni fuga odit. Totam cumque, esse similique est odit dolorem soluta ipsam autem sequi aliquid porro eum! Natus omnis unde laborum sunt inventore, facilis consectetur repellat quae ad optio nesciunt aliquam iure. Esse, distinctio! Suscipit aspernatur doloribus consequuntur!</p>
                                    </Disclosure.Button>
                                </Disclosure.Panel>
                            </Transition>
                        </>
                    )}
                </Disclosure>
                <Disclosure as="div" className="bg-white w-[400px] p-2 rounded-md">
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="bg-orange-400 text-orange-50 w-full rounded-md text-left p-1 flex items-center justify-between">
                                Disclosure Button1
                                <ChevronDownIcon className={`w-6 ${open ? "transform -rotate-180" : ""} transition-all`} />
                            </Disclosure.Button>

                            <Transition
                                show={open}
                                enter="transition duration-100 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                <Disclosure.Panel static className={`text-slate-400`}>
                                    <Disclosure.Button as="a" href="https://www.google.com/">
                                        <p className='text-sm text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eveniet alias, molestias quos ducimus sunt quo provident repudiandae reiciendis enim architecto at ab non nulla nam? Expedita quibusdam voluptatum soluta inventore omnis iste voluptas neque odit sequi dolor atque praesentium veritatis impedit aut, porro recusandae! Architecto minus consequuntur, veritatis, incidunt ipsam tempore doloribus exercitationem velit eaque est perferendis laboriosam, assumenda sunt cum magni fuga odit. Totam cumque, esse similique est odit dolorem soluta ipsam autem sequi aliquid porro eum! Natus omnis unde laborum sunt inventore, facilis consectetur repellat quae ad optio nesciunt aliquam iure. Esse, distinctio! Suscipit aspernatur doloribus consequuntur!</p>
                                    </Disclosure.Button>
                                </Disclosure.Panel>
                            </Transition>
                        </>
                    )}
                </Disclosure>

            </div>


            
            {/* manually creating accordion, but there are some bugs */}
            <div className='mt-20 w-[400px] bg-white p-1 rounded'>

                <div>
                    <div onClick={() => setIsOpen(!isOpen)} className="bg-orange-400 text-orange-50 w-full rounded-md text-left p-1 flex items-center justify-between">
                        Disclosure Button1
                        <ChevronDownIcon className={`w-6 transition-all`} />
                    </div>
                    <div className={`text-slate-500 text-sm ${isOpen ? "h-[150px]" : "h-0"} overflow-hidden transition-all`}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos repellendus minus praesentium itaque veniam similique suscipit explicabo. Officiis dolor sit accusantium illo ab, temporibus quisquam eaque ex itaque labore modi, numquam, ipsa porro reprehenderit. Assumenda blanditiis deleniti nihil nulla ipsa alias, consequatur, inventore maiores molestias provident eos quaerat aliquam amet?
                    </div>
                </div>

            </div>






        </div >
    )
}

export default Accordion