import React, { useState } from 'react'

export default function Login() {
    let [uname,setUname] = useState('');
    let [upassword,setUpassword] = useState('');
    let handlesubmit=(event)=>{
      event.preventDefault()
  
    }
    // let getUname=(event)=>{
    //  setUname(event.target.value)
    // }
  return (
    <div>
        <h1>Login</h1>
        <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <form onSubmit={handlesubmit}>
              <div className='text-start'>
                <label>User Name</label>
                <input type='text' onChange={(event)=>setUname(event.target.value)} className='form-control' value={uname}/>
              </div>
              <div className='text-start'>
                <label>Password</label>
                <input type='text' onChange={(event)=>setUpassword(event.target.value)} className='form-control' value={upassword}/>
              </div>
              <div className='text-start'>
               <button>Log in</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
