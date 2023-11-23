import React from 'react'

export default function Login({name, setName, email, setEmail, handleSubmit}) {
  return (
    <div>

        <form className='login'>
            <input placeholder='name' type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            <br />
            <input  placeholder='email.com' type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <br />
            <button className='login_btn'   onClick={() => handleSubmit()}>login</button>
        </form>
    </div>
  )
}
