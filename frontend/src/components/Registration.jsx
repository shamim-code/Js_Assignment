import axios from 'axios';
import { useFormik } from 'formik'
import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Registration() {

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      gender: '',
      dob: '',
      nationality: '',
      address: '',
      email: '',
      phone: '',
      admissionDate: '',
      courses: '',
    },

    onSubmit: (values) => {
      console.log(values);
      axios.post('http://localhost:5050/registration',values)
      .then((res)=> console.log(res.data))
      .catch((err) => console.log(err))
    }
  })

  return (
    <div>
      <nav className=' bg-orange-500 text-white flex justify-evenly p-2 text-lg font-serif'>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/registration'}>Registration</NavLink>
      </nav>
      <br />

    <form onSubmit={formik.handleSubmit} className='flex flex-col justify-center ml-[35%] mb-10'>
        <input type="text" onChange={formik.handleChange} placeholder="FirstName" name='firstName' className="input input-bordered input-warning w-full max-w-xs m-2" />
        <input type="text" onChange={formik.handleChange} placeholder="LastName" name='lastName' className="input input-bordered input-warning w-full max-w-xs m-2" />
        <input type="text" onChange={formik.handleChange} placeholder="gender" name='gender' className="input input-bordered input-warning w-full max-w-xs m-2" />
        <input type="text" onChange={formik.handleChange} placeholder="email" name='email' className="input input-bordered input-warning w-full max-w-xs m-2" />
        <input type="text" onChange={formik.handleChange} placeholder="date of birth" name='dob' className="input input-bordered input-warning w-full max-w-xs m-2" />
        <input type="text" onChange={formik.handleChange} placeholder="nationality" name='nationality' className="input input-bordered input-warning w-full max-w-xs m-2" />
        <input type="text" onChange={formik.handleChange} placeholder="admission date" name='admissionDate' className="input input-bordered input-warning w-full max-w-xs m-2" />
        <input type="text" onChange={formik.handleChange} placeholder="phone" name='phone' className="input input-bordered input-warning w-full max-w-xs m-2" />
        <input type="text" onChange={formik.handleChange} placeholder="address" name='address' className="input input-bordered input-warning w-full max-w-xs m-2" />
        <input type="text" onChange={formik.handleChange} placeholder="courses" name='courses' className="input input-bordered input-warning w-full max-w-xs m-2" />
        <br />
        <button type='submit' className="btn btn-outline btn-warning w-24">Warning</button>
    </form>

    </div>
  )
}
