import React from 'react'

const Divide = () => {
    return (
        <div className='p-12 pb-[50rem]'>

            {/* divide */}
            <div className="divide-y divide-slate-500 text-white mb-12">
                <div>01</div>
                <div>02</div>
                <div>03</div>
            </div>

            <div className="divide-x divide-slate-500 text-white mb-12">
                <span>01</span>
                <span>02</span>
                <span>03</span>
            </div>

            {/* divide width */}
            <div className=" divide-y-4 divide-slate-500 hover:divide-sky-400 text-white mb-12">
                <div>01</div>
                <div>02</div>
                <div>03</div>
            </div>

            {/* divide-solid / dashed / dotted / double / none */}
            <div className="divide-dotted divide-y-4 divide-slate-500 hover:divide-sky-400 text-white mb-12">
                <div>01</div>
                <div>02</div>
                <div>03</div>
            </div>

        </div>
    )
}

export default Divide