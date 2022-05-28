import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import React, { Fragment, useState } from 'react'

const people = [
    { id: 1, name: 'Durward Reynolds', unavailable: false },
    { id: 2, name: 'Kenton Towne', unavailable: false },
    { id: 3, name: 'Therese Wunsch', unavailable: false },
    { id: 4, name: 'Benedict Kessler', unavailable: true },
    { id: 5, name: 'Katelyn Rohan', unavailable: false },
]
const people1 = [
    { id: 1, name: 'Durward Reynolds', unavailable: false },
    { id: 2, name: 'Kenton Towne', unavailable: false },
    { id: 3, name: 'Therese Wunsch', unavailable: false },
    { id: 4, name: 'Benedict Kessler', unavailable: true },
    { id: 5, name: 'Katelyn Rohan', unavailable: false },
]

const Select = () => {

    const [selectedPerson, setSelectedPerson] = useState(people[2])
    const [selectedPerson1, setSelectedPerson1] = useState([])


    console.log("hello")


    return (
        <div className='h-screen flex justify-center items-center'>

            {/* Listbox components */}
            {/* <Listbox value={selectedPerson} onChange = {e => setSelectedPerson(e.target.value)}>

            <Listbox.Button>{selectedPerson.name}</Listbox.Button>

            <Listbox.Options>
                {people.map((person, index) => (
                    <Listbox.Option    value = {person}      key = {index}>
                        {person.name}
                    </Listbox.Option>
                ))}
            </Listbox.Options>

        </Listbox> */}


            {/* CSS styling of "active" and "selected" item */}
            {/* <Listbox as="div" value={selectedPerson} onChange={setSelectedPerson} className="relative">

                <Listbox.Button className="bg-white w-[300px] text-slate-500 text-left rounded p-2 flex justify-between group">
                    {selectedPerson.name}
                    <span>
                        <SelectorIcon className="h-6 w-6 group-hover:text-yellow-500" />
                    </span>
                </Listbox.Button>

                <Listbox.Options className="absolute bg-white w-full left-0 top-[120%] rounded overflow-hidden">
                    {people.map((person) => (
                        <Listbox.Option value={person} key={person.id}>
                            {({ active, selected }) => (
                                <li className={`
                                    ${active ? "bg-amber-100 text-amber-900" : "text-slate-500"} 
                                    ${selected ? "font-semibold text-slate-600" : "font-normal"} 
                                    flex items-center gap-2 pl-8 py-1 px-2 transition-all relative
                                    `}>
                                    {selected && <CheckIcon className='w-4 text-amber-600 absolute left-2' />}
                                    {person.name}
                                </li>
                            )}
                        </Listbox.Option>
                    ))}
                </Listbox.Options>

            </Listbox> */}



            {/* Multiple Values */}
            {/* <Listbox as="div" value={selectedPerson1} onChange={setSelectedPerson1} className="relative" multiple>

                <Listbox.Button className="bg-white w-[400px] text-slate-500 text-left rounded p-2 flex justify-between items-center group">
                    {selectedPerson1.length ? selectedPerson1.map(person => person.name).join(", ") : "No one is choosen"}
                    <span>
                        <SelectorIcon className="h-6 w-6 group-hover:text-yellow-500" />
                    </span>
                </Listbox.Button>

                <Listbox.Options as = "ul" className="absolute bg-white w-full left-0 top-[120%] rounded overflow-hidden">
                    {people1.map((person) => (
                        <Listbox.Option value={person} key={person.id} as = {Fragment}>
                            {({ active, selected }) => (
                                <li className={`
                                    ${active ? "bg-amber-100 text-amber-900" : "text-slate-500"} 
                                    ${selected ? "font-semibold text-slate-600" : "font-normal"} 
                                    flex items-center gap-2 pl-8 py-1 px-2 transition-all relative
                                    `}>
                                    {selected ? <CheckIcon className='w-4 text-amber-600 absolute left-2' /> : null}
                                    {person.name}
                                </li>
                            )}
                        </Listbox.Option>
                    ))}
                </Listbox.Options>

            </Listbox> */}




            {/* Listbox.Label  component */}
            {/* <Listbox as="div" value={selectedPerson1} onChange={setSelectedPerson1} className="relative" multiple>

                <Listbox.Label>People:</Listbox.Label>
                <Listbox.Button className="bg-white w-[400px] text-slate-500 text-left rounded p-2 flex justify-between items-center group">
                    {selectedPerson1.length ? selectedPerson1.map(person => person.name).join(", ") : "No one is choosen"}
                    <span>
                        <SelectorIcon className="h-6 w-6 group-hover:text-yellow-500" />
                    </span>
                </Listbox.Button>

                <Listbox.Options as="ul" className="absolute bg-white w-full left-0 top-[120%] rounded overflow-hidden">
                    {people1.map((person) => (
                        <Listbox.Option value={person} key={person.id} as={Fragment}>
                            {({ active, selected }) => (
                                <li className={`
                                    ${active ? "bg-amber-100 text-amber-900" : "text-slate-500"} 
                                    ${selected ? "font-semibold text-slate-600" : "font-normal"} 
                                    flex items-center gap-2 pl-8 py-1 px-2 transition-all relative
                                    `}>
                                    {selected ? <CheckIcon className='w-4 text-amber-600 absolute left-2' /> : null}
                                    {person.name}
                                </li>
                            )}
                        </Listbox.Option>
                    ))}
                </Listbox.Options>

            </Listbox> */}



            {/* Using with HTML forms, and adding "name" prop to Listbox */}
            {/* <form>
                
                <Listbox  name = "people"           as="div" value={selectedPerson1} onChange={setSelectedPerson1} className="relative" multiple>

                    <Listbox.Label>People:</Listbox.Label>
                    <Listbox.Button className="bg-white w-[400px] text-slate-500 text-left rounded p-2 flex justify-between items-center group">
                        {selectedPerson1.length ? selectedPerson1.map(person => person.name).join(", ") : "No one is choosen"}
                        <span>
                            <SelectorIcon className="h-6 w-6 group-hover:text-yellow-500" />
                        </span>
                    </Listbox.Button>

                    <Listbox.Options as="ul" className="absolute bg-white w-full left-0 top-[120%] rounded overflow-hidden">
                        {people1.map((person) => (
                            <Listbox.Option value={person} key={person.id} as={Fragment}>
                                {({ active, selected }) => (
                                    <li className={`
                                    ${active ? "bg-amber-100 text-amber-900" : "text-slate-500"} 
                                    ${selected ? "font-semibold text-slate-600" : "font-normal"} 
                                    flex items-center gap-2 pl-8 py-1 px-2 transition-all relative
                                    `}>
                                        {selected ? <CheckIcon className='w-4 text-amber-600 absolute left-2' /> : null}
                                        {person.name}
                                    </li>
                                )}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>

                </Listbox>
            </form> */}


            {/* Using "open" prop */}
            {/* <Listbox as="div" value={selectedPerson1} onChange={setSelectedPerson1} className="relative" multiple>


                {({ open }) => (
                    <>
                        <Listbox.Label>People:</Listbox.Label>
                        <Listbox.Button className="bg-white w-[400px] text-slate-500 text-left rounded p-2 flex justify-between items-center group">
                            {selectedPerson1.length ? selectedPerson1.map(person => person.name).join(", ") : "No one is choosen"}
                            <span>
                                <SelectorIcon className="h-6 w-6 group-hover:text-yellow-500" />
                            </span>
                        </Listbox.Button>

                        {open && (
                            <Listbox.Options  as="ul" className="absolute bg-white w-full left-0 top-[120%] rounded overflow-hidden">
                                {people1.map((person) => (
                                    <Listbox.Option value={person} key={person.id} as={Fragment}>
                                        {({ active, selected }) => (
                                            <li className={`
                                    ${active ? "bg-amber-100 text-amber-900" : "text-slate-500"} 
                                    ${selected ? "font-semibold text-slate-600" : "font-normal"} 
                                    flex items-center gap-2 pl-8 py-1 px-2 transition-all relative
                                    `}>
                                                {selected ? <CheckIcon className='w-4 text-amber-600 absolute left-2' /> : null}
                                                {person.name}
                                            </li>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        )}
                    </>
                )}

            </Listbox> */}



            {/* Disabling item */}
            {/* <Listbox as="div" value={selectedPerson1} onChange={setSelectedPerson1} className="relative" multiple>


                {({ open }) => (
                    <>
                        <Listbox.Label>People:</Listbox.Label>
                        <Listbox.Button className="bg-white w-[400px] text-slate-500 text-left rounded p-2 flex justify-between items-center group">
                            {selectedPerson1.length ? selectedPerson1.map(person => person.name).join(", ") : "No one is choosen"}
                            <span>
                                <SelectorIcon className="h-6 w-6 group-hover:text-yellow-500" />
                            </span>
                        </Listbox.Button>

                        {open && (
                            <Listbox.Options as="ul" className="absolute bg-white w-full left-0 top-[120%] rounded overflow-hidden">

                                {people1.map((person) => (
                                    <Listbox.Option  disabled = {person.unavailable}    value={person} key={person.id} as={Fragment}>
                                        {({ active, selected, disabled }) => (
                                            <li className={`
                                    ${active ? "bg-amber-100 text-amber-900" : "text-slate-500"} 
                                    ${selected ? "font-semibold text-slate-600" : "font-normal"} 
                                    ${disabled ? "text-gray-300" : "text-slate-500"}
                                    flex items-center gap-2 pl-8 py-1 px-2 transition-all relative
                                    `}>
                                                {selected ? <CheckIcon className='w-4 text-amber-600 absolute left-2' /> : null}
                                                {person.name}
                                            </li>
                                        )}
                                    </Listbox.Option>
                                ))}

                            </Listbox.Options>
                        )}
                    </>
                )}

            </Listbox> */}



            {/* Transition */}
            {/* <Listbox as="div" value={selectedPerson1} onChange={setSelectedPerson1} className="relative" multiple>


                {({ open }) => (
                    <>
                        <Listbox.Label>People:</Listbox.Label>
                        <Listbox.Button className="bg-white w-[400px] text-slate-500 text-left rounded p-2 flex justify-between items-center group">
                            {selectedPerson1.length ? selectedPerson1.map(person => person.name).join(", ") : "No one is choosen"}
                            <span>
                                <SelectorIcon className="h-6 w-6 group-hover:text-yellow-500" />
                            </span>
                        </Listbox.Button>

                        <Transition
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                        >
                            {open && (
                                <Listbox.Options as="ul" className="absolute bg-white w-full left-0 top-[100] mt-2 rounded overflow-hidden">

                                    {people1.map((person) => (
                                        <Listbox.Option disabled={person.unavailable} value={person} key={person.id} as={Fragment}>
                                            {({ active, selected, disabled }) => (
                                                <li className={`
                                    ${active ? "bg-amber-100 text-amber-900" : "text-slate-500"} 
                                    ${selected ? "font-semibold text-slate-600" : "font-normal"} 
                                    ${disabled ? "text-gray-300" : "text-slate-500"}
                                    flex items-center gap-2 pl-8 py-1 px-2 transition-all relative
                                    `}>
                                                    {selected ? <CheckIcon className='w-4 text-amber-600 absolute left-2' /> : null}
                                                    {person.name}
                                                </li>
                                            )}
                                        </Listbox.Option>
                                    ))}

                                </Listbox.Options>
                            )}
                        </Transition>
                    </>
                )}

            </Listbox> */}


            {/* OR to control the behavior */}
            <Listbox as="div" value={selectedPerson1} onChange={setSelectedPerson1} className="relative" multiple>


                {({ open }) => (
                    <>
                        <Listbox.Label>People:</Listbox.Label>
                        <Listbox.Button className="bg-white w-[400px] text-slate-500 text-left rounded p-2 flex justify-between items-center group">
                            {selectedPerson1.length ? selectedPerson1.map(person => person.name).join(", ") : "No one is choosen"}
                            <span>
                                <SelectorIcon className="h-6 w-6 group-hover:text-yellow-500" />
                            </span>
                        </Listbox.Button>

                        <Transition
                            show={open}
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                        >
                            <Listbox.Options as="ul" className="absolute bg-white w-full left-0 top-[100] mt-2 rounded overflow-hidden">

                                {people1.map((person) => (
                                    <Listbox.Option disabled={person.unavailable} value={person} key={person.id} as={Fragment}>
                                        {({ active, selected, disabled }) => (
                                            <li className={`
                                    ${active ? "bg-amber-100 text-amber-900" : "text-slate-500"} 
                                    ${selected ? "font-semibold text-slate-600" : "font-normal"} 
                                    ${disabled ? "text-gray-300" : "text-slate-500"}
                                    flex items-center gap-2 pl-8 py-1 px-2 transition-all relative
                                    `}>
                                                {selected ? <CheckIcon className='w-4 text-amber-600 absolute left-2' /> : null}
                                                {person.name}
                                            </li>
                                        )}
                                    </Listbox.Option>
                                ))}

                            </Listbox.Options>
                        </Transition>
                    </>
                )}

            </Listbox>




        </div>
    )
}

export default Select