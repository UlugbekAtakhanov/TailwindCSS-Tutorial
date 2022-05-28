import React, { useState } from 'react'
import { Switch } from '@headlessui/react'

const SwitchToggle = () => {

    const [enabled, setEnabled] = useState(false)

    return (
        <div className='h-screen flex flex-col gap-12 items-center justify-center'>


            <span>Enabled: {JSON.stringify(enabled)}</span>
            {/* Switch component, notice we clicking to Switch component, and it toggles executes setEnabled function */}
            {/* by default it is "button" element, inspect it!!!! */}
            {/* <Switch checked = {enabled} onChange = {setEnabled}
                className = "w-12 h-6 bg-gray-200  rounded-full "
            >

                <span className={`
                    ${enabled ? "translate-x-6 bg-sky-500" : "translate-x-0 bg-pink-500"}
                    w-5 h-5 block rounded-full  m-[1px] transition-all
                `}></span>

            </Switch> */}



            {/* Switch.Group and Switch.Label components */}
            {/* <Switch.Group as = "div" className="flex items-center gap-2"> */}

                {/* label is clickable, and it toggles Switch */}
                {/* <Switch.Label className="cursor-pointer">Label also is clickable: </Switch.Label> */}
                {/* in passive state label is not clickable */}
                {/* <Switch.Label className="cursor-pointer" passive>Label also is clickable: </Switch.Label> */}

                {/* <Switch checked={enabled} onChange={setEnabled}
                    className="w-12 h-6 bg-gray-200  rounded-full "
                >

                    <span className={`
                        ${enabled ? "translate-x-6 bg-sky-500" : "translate-x-0 bg-pink-500"}
                        w-5 h-5 block rounded-full  m-[1px] transition-all 
                    `}></span>

                </Switch>
            </Switch.Group> */}


            <Switch checked = {enabled} onChange = {setEnabled} value = "accept" name = "terms"
                className = "w-12 h-6 bg-gray-200  rounded-full "
            >

                <span className={`
                    ${enabled ? "translate-x-6 bg-sky-500" : "translate-x-0 bg-pink-500"}
                    w-5 h-5 block rounded-full  m-[1px] transition-all
                `}></span>

            </Switch>


        </div>
    )
}

export default SwitchToggle