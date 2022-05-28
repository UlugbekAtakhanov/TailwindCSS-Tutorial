import React from 'react'

const Cursor = () => {
  return (
    <div className='p-12 pb-[50rem] flex flex-col gap-4 items-start'>

          <button type="button" class="cursor-pointer bg-fuchsia-500 py-1 px-4 rounded hover:bg-fuchsia-700">
              Submit
          </button>
          <button type="button" class="cursor-progress bg-fuchsia-600 py-1 px-4 rounded">
              Saving...
          </button>
          <button type="button" disabled class="cursor-not-allowed bg-fuchsia-500/50 py-1 px-4 rounded">
              Confirm
          </button>

    </div>
  )
}

export default Cursor