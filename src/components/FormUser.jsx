import React, { useEffect } from "react";
import { useForm } from "react-hook-form";


const FormUser = ({createNewUser, updateInfo, updateUserById, setUpdateInfo, setIsFormClose}) => {

const { register, reset , handleSubmit, } = useForm()

useEffect(() => {
    reset(updateInfo)
   
}, [updateInfo])


const submit = data =>{
   if(updateInfo ){
    updateUserById('/users', updateInfo.id, data)
    setUpdateInfo()
   }else{
    createNewUser('/users', data);
   }
    reset({
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        birthday: ''
    })

    setIsFormClose(true)
}
const handleExite =()=>{
  reset({
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    birthday: ''
})

  setIsFormClose(true)
  setUpdateInfo()
}

  return (
    <form className="form" onSubmit={handleSubmit(submit)} >
        <div onClick={handleExite}><i className='bx bx-x-circle'></i></div>
      <h2 className="form__title">User form</h2>
      <div className="form__section">
        <label className="form__label" htmlFor="email">Email</label>
        <input className="form__imput"{...register('email')} id="email" type="text" />
      </div>
      <div className="form__section">
        <label className="form__label" htmlFor="password">Password</label>
        <input className="form__imput"{...register('password')} id="password" type="password" />
      </div>
      <div className="form__section">
        <label className="form__label" htmlFor="first_name">First Name</label>
        <input className="form__imput"{...register('first_name')} id="first_name" type="text" />
      </div>
      <div className="form__section">
        <label className="form__label" htmlFor="last_name">Last Name</label>
        <input className="form__imput"{...register('last_name')} id="last_name"  type="text" />
      </div>
      <div className="form__section">
        <label className="form__label" htmlFor="birthday">Birthday</label>
        <input className="form__imput"{...register('birthday')} id="birthday"  type="date" />
      </div>
    
      <button className="form__btn">{updateInfo ? 'UPDATE' : 'CREATE'}</button>
    </form>
  );
};

export default FormUser;
