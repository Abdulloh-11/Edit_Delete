import React from 'react'

export default function Edit() {
  return (
    <div>
      <form className='add'>
        <input type="text" placeholder='edit product name' required />
        <input type="text" placeholder='edit price' required />
        <button className='add_btn'>edit</button>
      </form>
    </div>
  )
}
