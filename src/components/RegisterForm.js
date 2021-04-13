import React from 'react';
import { MdLock, MdEmail, MdAccountCircle } from "react-icons/md";
import { withFormik } from 'formik';

const RegisterForm = ({
    values,
    handleChange,
    handleSubmit
}) => {
    return (
        <form className='form' onSubmit={handleSubmit}>
            <label className='form__label' htmlFor="email">Enter your email address</label>
            <div className='form__input'>
                <MdEmail/>
                <input type="text" name='email' placeholder='example@domain.com' onChange={handleChange}></input>
            </div>
            <label className='form__label' htmlFor="username">Enter your username</label>
            <div className='form__input'> 
                <MdAccountCircle/>
                <input type="text" name='username' placeholder='SampleNick123'onChange={handleChange}></input>
            </div>
            <label className='form__label' htmlFor="password" >Enter password</label>
            <div className='form__input'>
                <MdLock/>
                <input type="password" name='password' placeholder='**********'onChange={handleChange}></input>
            </div>
            <label className='form__label' htmlFor="confirm-password">Confirm your password</label>
            <div className='form__input'> 
                <MdLock/>
                <input type="password" name='confirm-password' placeholder='**********' onChange={handleChange}></input>
            </div>
            <button type='submit' className='form__btn'>Sign Up</button>
        </form>
    )
}
const FormikRegisterForm = withFormik({
    mapPropsToValues({email,password}){
        return{
            username:'',
            email: '',
            password: '',
            'confirm-password':''
        }
    },
    handleSubmit(values){
        console.log(values);
    }
})(RegisterForm);

export default FormikRegisterForm;