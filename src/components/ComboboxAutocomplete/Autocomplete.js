import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import React, { useState } from 'react'

const people = [
    'Durward Reynolds',
    'Kenton Towne',
    'Therese Wunsch',
    'Benedict Kessler',
    'Katelyn Rohan',
]

const people1 = [
    { id: 1, name: 'Durward Reynolds', unavailable: false },
    { id: 2, name: 'Kenton Towne', unavailable: false },
    { id: 3, name: 'Therese Wunsch', unavailable: false },
    { id: 4, name: 'Benedict Kessler', unavailable: true },
    { id: 5, name: 'Katelyn Rohan', unavailable: false },
]

const Autocomplete = () => {

    // need to display in input field ==============================================================
    const [selectedPerson, setSelectedPerson] = useState(people[0])
    // need for filtering people list
    const [query, setQuery] = useState("")
    // it is filtered list, and it will be displayed in autocomplete list
    const filteredPeople = query === "" ? people : people.filter(person => person.toLowerCase().includes(query.toLowerCase()))


    // this usestate for array of objects ============================================================
    const [selectedObject, setSelectedObject] = useState(people1[0])
    //  it is filtered list for array of objects
    const filteredPeople1 = query === "" ? people1 : people1.filter(person => person.name.toLowerCase().includes(query.toLowerCase()))


    // this useState for selecting multiple values
    const [selectedPeople, setSelectedPeople] = useState([])


    console.log({ query })
    console.log({ filteredPeople1 })

    return (
        <div className='h-screen flex justify-center items-center text-slate-500'>

            {/* Combobox components using array of strings */}
            {/* <Combobox value={selectedPerson} onChange={setSelectedPerson}>

                <Combobox.Input
                    onChange={e => setQuery(e.target.value)}
                />

                <Combobox.Options>
                    {filteredPeople.map((person, index) => (
                        <Combobox.Option key={index} value={person}>
                            {person}
                        </Combobox.Option>
                    ))}
                </Combobox.Options>

            </Combobox> */}



            {/* Combobox components using array of objects */}
            {/* <Combobox value={selectedObject} onChange={setSelectedObject}>

                    <Combobox.Input
                        onChange={e => setQuery(e.target.value)}
                        // console.log(person) ==> it returns selectedObject
                        displayValue={(person) => person.name}
                    />

                <Combobox.Options>
                    {filteredPeople1.map((person) => (
                        <Combobox.Option key={person.id} value={person}>
                            {person.name}
                        </Combobox.Option>
                    ))}
                </Combobox.Options>

            </Combobox> */}



            {/* CSS styling of active and selected item and adding Button component */}
            {/* <Combobox as="div" value={selectedObject} onChange={setSelectedObject} className = "relative">

                <div className="py-1 px-3 w-[400px] rounded  bg-white flex items-center">
                    <Combobox.Input
                        onChange={e => setQuery(e.target.value)}
                        displayValue={(person) => person.name}
                        className= "bg-transparent focus:outline-none grow"
                    />
                    <Combobox.Button>
                        <SelectorIcon className='w-4 hover:text-emerald-500' />
                    </Combobox.Button>
                </div>

                <Combobox.Options className="absolute bg-white mt-2 rounded overflow-hidden w-full">
                    {filteredPeople1.map((person) => (
                        <Combobox.Option key={person.id} value={person}>
                            {({ active, selected }) => (
                                <li
                                    className={`
                                        ${active ? "bg-emerald-500 text-white" : "bg-white text-slate-500"}
                                        w-full flex items-center py-1 px-4 pl-8 relative
                                        
                                    `}
                                >
                                    {selected && <CheckIcon className='w-4 absolute left-2' />}
                                    {person.name}
                                </li>
                            )}
                        </Combobox.Option>
                    ))}
                </Combobox.Options>

            </Combobox> */}


            {/* Selecting multiple values */}
            {/* <Combobox as="div" value={selectedPeople} onChange={setSelectedPeople} className="relative" multiple>

                {selectedPeople.length > 0 && (
                    <ul>
                        {selectedPeople.map((person) => (
                            <li key={person.id} className = "text-slate-400">{person.name}</li>
                        ))}
                    </ul>
                )}
                <div className="py-1 px-3 w-[400px] rounded  bg-white flex items-center">
                    <Combobox.Input
                        onChange={e => setQuery(e.target.value)}
                        displayValue={(person) => person.length ? person[person.length - 1]?.name : "No choosen one.."}
                        className="bg-transparent focus:outline-none grow"
                    /> */}

            {/* OR */}

            {/* <Combobox.Input
                        onChange={e => setQuery(e.target.value)}
                        displayValue={(person) => {
                            // console.log(person)
                            const personNames = person.map(item => item.name)
                            return person.length ? personNames.join(", ") : "No choosen one.."
                        }}
                        className="bg-transparent focus:outline-none grow"
                    /> */}

            {/* <Combobox.Button>
                        <SelectorIcon className='w-4 hover:text-emerald-500' />
                    </Combobox.Button>
                </div>

                <Combobox.Options className="absolute bg-white mt-2 rounded overflow-hidden w-full">
                    {filteredPeople1.map((person) => (
                        <Combobox.Option key={person.id} value={person}>
                            {({ active, selected }) => (
                                <span
                                    className={`
                                        ${active ? "bg-emerald-500 text-white" : "bg-white text-slate-500"}
                                        w-full flex items-center py-1 px-4 pl-8 relative
                                        
                                    `}
                                >
                                    {selected && <CheckIcon className='w-4 absolute left-2' />}
                                    {person.name}
                                </span>
                            )}
                        </Combobox.Option>
                    ))}
                </Combobox.Options>

            </Combobox> */}



            {/* Label component */}
            {/* <Combobox as="div" value={selectedObject} onChange={setSelectedObject} className = "relative">

                <Combobox.Label className="text-white text-lg">Choosen: </Combobox.Label>
                <div className="py-1 px-3 w-[400px] rounded  bg-white flex items-center">
                    <Combobox.Input
                        onChange={e => setQuery(e.target.value)}
                        displayValue={(person) => person.name}
                        className= "bg-transparent focus:outline-none grow"
                    />
                    <Combobox.Button>
                        <SelectorIcon className='w-4 hover:text-emerald-500' />
                    </Combobox.Button>
                </div>

                <Combobox.Options className="absolute bg-white mt-2 rounded overflow-hidden w-full">
                    {filteredPeople1.map((person) => (
                        <Combobox.Option key={person.id} value={person}>
                            {({ active, selected }) => (
                                <li
                                    className={`
                                        ${active ? "bg-emerald-500 text-white" : "bg-white text-slate-500"}
                                        w-full flex items-center py-1 px-4 pl-8 relative
                                        
                                    `}
                                >
                                    {selected && <CheckIcon className='w-4 absolute left-2' />}
                                    {person.name}
                                </li>
                            )}
                        </Combobox.Option>
                    ))}
                </Combobox.Options>

            </Combobox> */}


            {/* custom values */}
            {/* <Combobox as="div" value={selectedObject} onChange={setSelectedObject} className="relative">

                <Combobox.Label className="text-white text-lg">Choosen: </Combobox.Label>
                <div className="py-1 px-3 w-[400px] rounded  bg-white flex items-center">
                    <Combobox.Input
                        onChange={e => setQuery(e.target.value)}
                        displayValue={(person) => person.name}
                        className="bg-transparent focus:outline-none grow"
                    />
                    <Combobox.Button>
                        <SelectorIcon className='w-4 hover:text-emerald-500' />
                    </Combobox.Button>
                </div>

                <Combobox.Options className="absolute bg-white mt-2 rounded overflow-hidden w-full">
                    {query.length > 0 && (
                        <Combobox.Option value={{ id: null, name: query }} className = "pl-8">
                            Create "{query}"
                        </Combobox.Option>
                    )}
                    {filteredPeople1.map((person) => (
                        <Combobox.Option key={person.id} value={person}>
                            {({ active, selected }) => (
                                <span
                                    className={`
                                        ${active ? "bg-emerald-500 text-white" : "bg-white text-slate-500"}
                                        w-full flex items-center py-1 px-4 pl-8 relative
                                        
                                    `}
                                >
                                    {selected && <CheckIcon className='w-4 absolute left-2' />}
                                    {person.name}
                                </span>
                            )}
                        </Combobox.Option>
                    ))}
                </Combobox.Options>

            </Combobox> */}


            {/* current activeOption */}
            {/* <Combobox as="div" value={selectedObject} onChange={setSelectedObject} className="relative">

                {({ activeOption }) => (
                    <>

                        {activeOption && (
                            <div className='text-white'>The current active user is: {activeOption.name}</div>
                        )}

                        <div className="py-1 px-3 w-[400px] rounded  bg-white flex items-center">
                            <Combobox.Input
                                onChange={e => setQuery(e.target.value)}
                                displayValue={(person) => person.name}
                                className="bg-transparent focus:outline-none grow"
                            />
                            <Combobox.Button>
                                <SelectorIcon className='w-4 hover:text-emerald-500' />
                            </Combobox.Button>
                        </div>

                        

                        <Combobox.Options className="absolute bg-white mt-2 rounded overflow-hidden w-full">
                            {query.length > 0 && (
                                <Combobox.Option value={{ id: null, name: query }} className="pl-8">
                                    Create "{query}"
                                </Combobox.Option>
                            )}
                            {filteredPeople1.map((person) => (
                                <Combobox.Option key={person.id} value={person}>
                                    {({ active, selected }) => (
                                        <span
                                            className={`
                                        ${active ? "bg-emerald-500 text-white" : "bg-white text-slate-500"}
                                        w-full flex items-center py-1 px-4 pl-8 relative
                                        
                                    `}
                                        >
                                            {selected && <CheckIcon className='w-4 absolute left-2' />}
                                            {person.name}
                                        </span>
                                    )}
                                </Combobox.Option>
                            ))}
                        </Combobox.Options>

                        
                    </>
                )}

            </Combobox> */}


            {/* using "open"  prop */}
            {/* <Combobox as="div" value={selectedObject} onChange={setSelectedObject} className="relative">

                {({ activeOption, open }) => (
                    <>

                        {activeOption && (
                            <div className='text-white absolute bottom-[110%]'>The current active user is: {activeOption.name}</div>
                        )}

                        <div className="py-1 px-3 w-[400px] rounded  bg-white flex items-center">
                            <Combobox.Input
                                onChange={e => setQuery(e.target.value)}
                                displayValue={(person) => person.name}
                                className="bg-transparent focus:outline-none grow"
                            />
                            <Combobox.Button>
                                <SelectorIcon className='w-4 hover:text-emerald-500' />
                            </Combobox.Button>
                        </div>


                        {open && (

                            <Combobox.Options static className="absolute bg-white mt-2 rounded overflow-hidden w-full">
                                {query.length > 0 && (
                                    <Combobox.Option value={{ id: null, name: query }} className={`pl-8 ${open ? "text-green-500" : "text-slate-500"}`}>
                                        Create "{query}"
                                    </Combobox.Option>
                                )}
                                {filteredPeople1.map((person) => (
                                    <Combobox.Option key={person.id} value={person}>
                                        {({ active, selected }) => (
                                            <span
                                                className={`
                                        ${active ? "bg-emerald-500 text-white" : "bg-white text-slate-500"}
                                        w-full flex items-center py-1 px-4 pl-8 relative
                                        
                                    `}
                                            >
                                                {selected && <CheckIcon className='w-4 absolute left-2' />}
                                                {person.name}
                                            </span>
                                        )}
                                    </Combobox.Option>
                                ))}
                            </Combobox.Options>
                        )}


                    </>
                )}

            </Combobox> */}


            {/* disabling an option */}
            {/* <Combobox as="div" value={selectedObject} onChange={setSelectedObject} className="relative">

                {({ activeOption, open }) => (
                    <>

                        {activeOption && (
                            <div className='text-white absolute bottom-[110%]'>The current active user is: {activeOption.name}</div>
                        )}

                        <div className="py-1 px-3 w-[400px] rounded  bg-white flex items-center">
                            <Combobox.Input
                                onChange={e => setQuery(e.target.value)}
                                displayValue={(person) => person.name}
                                className="bg-transparent focus:outline-none grow"
                            />
                            <Combobox.Button>
                                <SelectorIcon className='w-4 hover:text-emerald-500' />
                            </Combobox.Button>
                        </div>


                        {open && (

                            <Combobox.Options static className="absolute bg-white mt-2 rounded overflow-hidden w-full">
                                {query.length > 0 && (
                                    <Combobox.Option value={{ id: null, name: query }} className={`pl-8 ${open ? "text-green-500" : "text-slate-500"}`}>
                                        Create "{query}"
                                    </Combobox.Option>
                                )}
                                {filteredPeople1.map((person) => (
                                    <Combobox.Option key={person.id} value={person} disabled = {person.unavailable}>
                                        {({ active, selected, disabled }) => (
                                            <span
                                                className={`
                                        ${active ? "bg-emerald-500 text-white" : "bg-white text-slate-500"}
                                        ${disabled ? "text-gray-300" : "text-slate-500"}
                                        w-full flex items-center py-1 px-4 pl-8 relative
                                        
                                    `}
                                            >
                                                {selected && <CheckIcon className='w-4 absolute left-2' />}
                                                {person.name}
                                            </span>
                                        )}
                                    </Combobox.Option>
                                ))}
                            </Combobox.Options>
                        )}


                    </>
                )}

            </Combobox> */}


            {/* Allowing nullable value and Transiton component */}
            <Combobox as="div" value={selectedObject} onChange={setSelectedObject} className="relative" nullable>

                {({ activeOption, open }) => (
                    <>

                        {activeOption && (
                            <div className='text-white absolute bottom-[110%]'>The current active user is: {activeOption.name}</div>
                        )}

                        <div className="py-1 px-3 w-[400px] rounded  bg-white flex items-center">
                            <Combobox.Input
                                onChange={e => setQuery(e.target.value)}
                                displayValue={(person) => person?.name}
                                className="bg-transparent focus:outline-none grow"
                            />
                            <Combobox.Button>
                                <SelectorIcon className='w-4 hover:text-emerald-500' />
                            </Combobox.Button>
                        </div>

                        <Transition
                            show={open}
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                        >


                            <Combobox.Options static className="absolute bg-white mt-2 rounded overflow-hidden w-full">
                                {query.length > 0 && (
                                    <Combobox.Option value={{ id: null, name: query }} className={`pl-8 ${open ? "text-green-500" : "text-slate-500"}`}>
                                        Create "{query}"
                                    </Combobox.Option>
                                )}
                                {filteredPeople1.map((person) => (
                                    <Combobox.Option key={person.id} value={person} disabled={person.unavailable}>
                                        {({ active, selected, disabled }) => (
                                            <span
                                                className={`
                                        ${active ? "bg-emerald-500 text-white" : "bg-white text-slate-500"}
                                        ${disabled ? "text-gray-300" : ""}
                                        w-full flex items-center py-1 px-4 pl-8 relative
                                        
                                    `}
                                            >
                                                {selected && <CheckIcon className='w-4 absolute left-2' />}
                                                {person.name}
                                            </span>
                                        )}
                                    </Combobox.Option>
                                ))}
                            </Combobox.Options>
                        </Transition>
                    </>
                )}

            </Combobox>



        </div>
    )
}

export default Autocomplete