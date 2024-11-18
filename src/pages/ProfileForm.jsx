import React from 'react'
import Title from '../components/Title'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'

const ProfileForm = () => {

   let navigate = useNavigate()
   let formik = useFormik({
      initialValues: {
         firstName:'',
         lastName:'',
         email:'',
         phone:'',
         address1:'',
         address2:''
      },
      validate,
      onSubmit:(values) => {
         alert(Object.values(values).join('\n'))
         navigate('/')
         // console.log(Object.values(values).join('\n'))
      }     
   })
   function validate(values) {
      let errors = {}
      if ( values.firstName === "" ) errors.firstName = 'required' ;
      if ( values.lastName === "" ) errors.lastName = 'required' ;
      if ( values.email === "" ) errors.email = 'required' ;
      if ( values.phone === "" ) errors.phone = 'required' ;
      if ( values.address1 === "" ) errors.address1 = 'required' ;
      if ( values.address2 === "" ) errors.address2 = 'required' ;
      return errors 
   }

   return (
      <section className="p-5">
         <Title title={'CREATE USER'} subtitle={'Create a New User Profile'} />
         <form onSubmit={formik.handleSubmit} className='grid gap-6 grid-cols-1 md:grid-cols-2 text-lg md:text-xl text-[--whiteColor]'>
            <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" id='firstName' placeholder='First Name' className={`p-3 bg-[--lightColor] rounded-t-lg outline-none border-b ${formik.errors.firstName && formik.touched.firstName ? 'border-b-red-500' : 'border-b-[--whiteColor]'}`} />
            <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" id='lastName' placeholder='Last Name' className={`p-3 bg-[--lightColor] rounded-t-lg outline-none border-b ${formik.errors.lastName && formik.touched.lastName ? 'border-b-red-500' : 'border-b-[--whiteColor]'} `} />
            <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="email" id='email' placeholder='Email' className={`p-3 bg-[--lightColor] rounded-t-lg outline-none border-b ${formik.errors.email && formik.touched.email ? 'border-b-red-500' : 'border-b-[--whiteColor]'} md:col-span-2`} />
            <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="tel" id='phone' placeholder='Contact Number' className={`p-3 bg-[--lightColor] rounded-t-lg outline-none border-b ${formik.errors.phone && formik.touched.phone ? 'border-b-red-500' : 'border-b-[--whiteColor]'} md:col-span-2`} />
            <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" id='address1' placeholder='Address 1' className={`p-3 bg-[--lightColor] rounded-t-lg outline-none border-b ${formik.errors.address1 && formik.touched.address1 ? 'border-b-red-500' : 'border-b-[--whiteColor]'} md:col-span-2`} />
            <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" id='address2' placeholder='Address 2' className={`p-3 bg-[--lightColor] rounded-t-lg outline-none border-b ${formik.errors.address2 && formik.touched.address2 ? 'border-b-red-500' : 'border-b-[--whiteColor]'} md:col-span-2`} />
            <button type='submit' className='p-3 bg-[--greenColor] duration-300 hover:bg-[--violetColor] rounded-lg '>Create New User</button>
         </form>
      </section>
   )
}

export default ProfileForm
