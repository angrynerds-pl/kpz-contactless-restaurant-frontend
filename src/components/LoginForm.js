import React from 'react';
import '../styles/forms.scss';
import { MdLock, MdEmail } from "react-icons/md";
import { withFormik } from 'formik';


const LoginForm = ({
    values,
    handleChange,
    handleSubmit
}) => {

    return (
        <form className='form' onSubmit={handleSubmit}>
            <label className='form__label' htmlFor="email">Enter email:</label>
            <div className="form__input">
                <MdEmail/>
                <input type="text" name='email'placeholder='example@domain.com' onChange={handleChange}></input>
            </div>
            <label className='form__label' htmlFor="password">Enter password:</label>
            <div className="form__input">
                <MdLock/>
                <input type="password" name='password' placeholder='*********' onChange={handleChange}></input>
            </div>
            <button className='form__btn' type='submit'>Log in</button>
        </form>
    )
}

const FormikLoginForm = withFormik({
    mapPropsToValues({email,password}){
        return{
            email: '',
            password: '',
        }
    },
    handleSubmit(values){
        console.log(values);
    }
})(LoginForm);

export default FormikLoginForm;
