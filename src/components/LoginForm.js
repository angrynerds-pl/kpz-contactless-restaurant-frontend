import React from 'react';
import '../styles/forms.scss';
import { MdLock, MdEmail } from "react-icons/md";
const LoginForm = () => {
    return (
        <form className='form'>
            <label className='form__label' htmlFor="email">Enter email:</label>
            <div className="form__input">
                <MdEmail/>
                <input type="text" name='email'placeholder='example@domain.com'></input>
            </div>
            <label className='form__label' htmlFor="password">Enter password:</label>
            <div className="form__input">
                <MdLock/>
                <input type="password" name='password' placeholder='*********'></input>
            </div>
            <button className='form__btn'>Log in</button>
        </form>
    )
}

export default LoginForm;
