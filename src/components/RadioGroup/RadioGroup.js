import React, { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/solid'

const radioList = [
    {
        title: "startup", value: "startup"
    },
    {
        title: "business", value: "business"
    },
    {
        title: "enterprise", value: "enterprise"
    },
]

const RadioGroupComponent = () => {
    const [radioValue, setRadioValue] = useState("startup")

    return (
        <div className='h-screen flex flex-col gap-12 justify-center items-center'>

            <h1 className='text-lg text-gray-500 font-bold'>Radio Value: <span className='text-white font-bold'>{radioValue}</span></h1>

            {/* RadioGroup components */}
            {/* <RadioGroup value = {radioValue} onChange = {setRadioValue} >

                <RadioGroup.Label>Plan</RadioGroup.Label>

                {radioList.map((item, index) => (
                    <RadioGroup.Option value = {item.value}>
                        {({checked}) => (
                            <span className={`
                                ${checked ? "bg-sky-400 text-white" : ""}
                            `}>{item.title}</span>
                        )}
                    </RadioGroup.Option>
                ))}

            </RadioGroup> */}


            {/* CSS styling checked item */}
            {/* <RadioGroup value={radioValue} onChange={setRadioValue} >

                <RadioGroup.Label>Plan</RadioGroup.Label>

                {radioList.map((item, index) => (
                    <RadioGroup.Option value={item.value} key = {index}>
                        {({ checked }) => (
                            <div className={`
                                ${checked ? "bg-sky-400 text-white ring-[3px] ring-sky-500/50 " : "bg-gray-100 text-sky-500"}
                                w-[300px] p-4 rounded-md flex justify-between items-center capitalize mb-2 outline-none
                            `}>
                                {item.title}
                                <CheckCircleIcon className='w-6' />
                            </div>
                        )}
                    </RadioGroup.Option>
                ))}

            </RadioGroup> */}


            {/* CSS styling active item */}
            {/* <RadioGroup value={radioValue} onChange={setRadioValue} >

                <RadioGroup.Label>Plan</RadioGroup.Label>

                {radioList.map((item, index) => (
                    <RadioGroup.Option value={item.value} key={index}>
                        {({ checked, active }) => (
                            <div className={`
                                ${checked ? "bg-sky-400 text-white ring-[3px] ring-sky-500/50 " : "bg-gray-100 text-sky-500"}
                                ${active ? 'ring-2 ring-pink-500' : ''}
                                w-[300px] p-4 rounded-md flex justify-between items-center capitalize mb-2 outline-none
                            `}>
                                {item.title}
                                <CheckCircleIcon className='w-6' />
                            </div>
                        )}
                    </RadioGroup.Option>
                ))}

            </RadioGroup> */}



            {/* Classnames - Applying conditional classes to options  ====  BUG !!!*/}
            {/* <RadioGroup value={radioValue} onChange={setRadioValue} >

                <RadioGroup.Label>Plan</RadioGroup.Label>

                {radioList.map((item, index) => (
                    // use backticks !!!
                    <RadioGroup.Option value={item.value} key={index}
                    
                     classNames = {({checked, active}) => `
                        ${checked ? "bg-sky-400 text-white ring-[3px] ring-sky-500/50 " : "bg-gray-100 text-sky-500"}
                        ${active ? 'ring-2 ring-pink-500' : ''}
                        `}
                        className= "w-[300px] p-4 rounded-md flex justify-between items-center capitalize mb-2 outline-none"
                        >
                            {item.title}
                            <CheckCircleIcon className='w-6' />
                    </RadioGroup.Option>
                ))}

            </RadioGroup> */}





        </div>
    )
}

export default RadioGroupComponent