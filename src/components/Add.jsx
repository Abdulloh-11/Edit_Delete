import React from 'react'

export default function Add({pname, setPname, price, setPrice, addProduct, edit, }) {
  return (
    <div>
        <form className='add'>
            <input type="text"  name="" id='' placeholder='product name'  value={pname} onChange={(e) => setPname(e.target.value) } required />
            <input type="text" name='' id=''   value={price} placeholder='product price'  onChange={(e) => setPrice(e.target.value)} required />
            <button className='add_btn' onClick={() => addProduct()}>
              {edit ? 'edit' : 'add'}
            </button>
        </form>
    </div>
  )
}
