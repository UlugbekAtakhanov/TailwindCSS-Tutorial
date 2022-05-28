import React from 'react'

const UserSelect = () => {
  return (
    <div className='p-12'>

        {/* you can not select and copy the text */}
          <p className='select-none mb-12'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, architecto.</p>

          {/* default */}
          <p className='select-text mb-12'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, architecto.</p>

          {/* select-all in one click */}
          <p className='select-all mb-12'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, architecto.</p>

    </div>
  )
}

export default UserSelect