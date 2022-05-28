import React from 'react'

const AccentColor = () => {
    return (
        <div className='p-12 pb-[50rem]'>

            {/* accent color works especially with checkboxes and radio buttons */}

            <div>
                <label className='' htmlFor="name">
                    <input className=' rounded-lg' type="checkbox" id="name" checked /> name
                </label>
            </div>

            <div>
                <label>
                    <input type="checkbox" className="accent-pink-500" checked /> Customized
                </label>
            </div>

            <div>
                <label>
                    <input type="checkbox" className="accent-[yellow]" checked /> Customized
                </label>
            </div>

        </div>
    )
}

export default AccentColor