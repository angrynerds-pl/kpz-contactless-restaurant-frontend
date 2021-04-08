import React from 'react';
import { MdLock, MdEmail, MdAccountCircle } from "react-icons/md";

const RegisterForm = () => {
    return (
        <form className='form'>
            <label className='form__label' htmlFor="email">Enter your email address</label>
            <div className='form__input'>
                <MdEmail/>
                <input type="text" name='email' placeholder='example@domain.com'></input>
            </div>
            <label className='form__label' htmlFor="username">Enter your username</label>
            <div className='form__input'> 
                <MdAccountCircle/>
                <input type="text" name='username' placeholder='SampleNick123'></input>
            </div>
            <label className='form__label' htmlFor="password">Enter password</label>
            <div className='form__input'>
                <MdLock/>
                <input type="password" name='password' placeholder='**********'></input>
            </div>
            <label className='form__label' htmlFor="confirm-password">Confirm your password</label>
            <div className='form__input'> 
                <MdLock/>
                <input type="password" name='confirm-password' placeholder='**********'></input>
            </div>
            <button className='form__btn'>Sign Up</button>
        </form>
    )
}

export default RegisterForm;