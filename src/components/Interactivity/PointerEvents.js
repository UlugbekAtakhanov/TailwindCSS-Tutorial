import React from 'react'

const PointerEvents = () => {
  return (
    <div className='p-12 flex flex-col gap-4'>
            {/* check by clicking to search icon */}
          <div class="relative">
              <div class="absolute top-1/2 -translate-y-1/2 left-1                         pointer-events-auto ...">
                  <svg class=" text-slate-400 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                  </svg>
              </div>
              <input type="text" placeholder="Search" className="border bg-slate-900 py-1 px-2 caret-sky-500 rounded text-slate-300 pl-6 text-xs" />
          </div>

          <div class="relative">
              <div class="absolute top-1/2 -translate-y-1/2 left-1                          pointer-events-none ...">
                  <svg class=" text-slate-400 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                  </svg>
              </div>
              <input type="text" placeholder="Search" className="border bg-slate-900 py-1 px-2 rounded text-slate-300 pl-6 text-xs" />
          </div>

    </div>
  )
}

export default PointerEvents