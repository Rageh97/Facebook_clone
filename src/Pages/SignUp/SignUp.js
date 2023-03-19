import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signUp } from '../../RTK/AuthSLice';
const SignUp = () => {
const [firstName, setfirstName] = useState('')
const [lastName, setlastName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [img , setImg] = useState(null)
const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (img) {
      setImageUrl(URL.createObjectURL(img));
    }
  }, [img]);
const dispath = useDispatch()
const navigate = useNavigate()
const handleSignUp = (e) => {
e.preventDefault()
if(firstName=== '' || lastName===''|| email=== '' || password===''){
  toast.error('please fill all data !', {
    position: toast.POSITION.TOP_CENTER
});
}else{
  dispath(signUp({firstName , lastName, email, password}))
  navigate('/sign-in')
}
}
  return (
    <>
    <ToastContainer/>
     <section className='section-register'>
        <div className="container">
            <div className="row d-flex align-items-center justify-content-center">
                <div className="col-8 d-flex align-items-center justify-content-center">
                    <div className="form-register w-75 d-flex flex-column p-4 gap-15">
                        
                            <input className='form-control  p-2' onChange={(e) => setfirstName(e.target.value)} value={firstName} placeholder='first name' type="text" />
                            <input className='form-control  p-2' onChange={(e) => setlastName(e.target.value)} value={lastName} placeholder='last name' type="text" />
                            <input className='form-control  p-2' onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Enter your email' type="email" />
                            <input className='form-control  p-2' onChange={(e) => setPassword(e.target.value)} value={password} placeholder='Enter your password' type="password" />
                            
                            
                            <button onClick={handleSignUp} className='btn btn-primary' type='submit'>Sign Up</button>
                            
                            
                            <hr />
                            <button className='btn btn-success p-2'>Already have account ?<Link to='/' className='text-white mx-2'>Sign in</Link></button>
                        
                    </div>
                </div>
                <div className='col-4'>
                  <div className='d-flex flex-column align-items-center justify-content-center gap-15'>
                 
                   <input onChange={(e) => setImg(e.target.files[0])}  id="img" type="file" />
                    <label htmlFor="img">
                      <button className='btn btn-primary'>upload</button>
                    </label>
                    {imageUrl && img && (
                      <>
                      <img className='w-100 rounded-circle' src={imageUrl} alt="" />
                      </>
                    )}
                   
                    
                  </div>
                </div>
              
            </div>
        </div>
    </section>
    </>
  )
}

export default SignUp