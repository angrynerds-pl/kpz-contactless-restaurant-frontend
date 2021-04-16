import React from 'react';
import { MdLock, MdEmail, MdAccountCircle } from "react-icons/md";
import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup';
import { withRouter } from 'react-router';

const RegisterInnerForm = ({
    errors,
    touched,
    isSubmiting
}) => {

    return (
        <Form className='form' >
            <label className='form__label' htmlFor="email">Enter your email address</label>
            <div className='form__input'>
                <MdEmail/>
                <Field type="email" name='email' placeholder='example@domain.com' required></Field>
            </div>
            {touched.email && errors.email && <p className='form__error'>{errors.email}</p>}
            <label className='form__label' htmlFor="username">Enter your username</label>
            <div className='form__input'> 
                <MdAccountCircle/>
                <Field type="text" name='username' placeholder='SampleNick123' required></Field>
            </div>
            {touched.username && errors.username && <p className='form__error'>{errors.username}</p>}
            <label className='form__label' htmlFor="password" >Enter password</label>
            <div className='form__input'>
                <MdLock/>
                <Field type="password" name='password' placeholder='**********' required></Field>
            </div>
            {touched.password && errors.password && <p className='form__error'>{errors.password}</p>}
            <label className='form__label' htmlFor="confirm-password">Confirm your password</label>
            <div className='form__input'> 
                <MdLock/>
                <Field type="password" name='confirm_password' placeholder='**********' required></Field>
            </div>
            {touched.confirm_password && errors.confirm_password && <p className='form__error'>{errors.confirm_password}</p>}
            <button type='submit' className='form__btn' disabled={isSubmiting}>Sign Up</button>
        </Form>
    )
}
const RegisterForm = withRouter(withFormik({
    mapPropsToValues({username, email,password, confirm_password}){
        return{
            username: username || '',
            email:email || '',
            password: password || '',
            confirm_password: confirm_password || ''
        }
    },
    validationSchema: yup.object().shape({
        username: yup.string().required('Please enter your username!'),
        email: yup.string().email('Your email address is not valid!').required('Please enter your email address!'),
        password: yup.string().required('Please enter your password!').min(8,'Your password need to be at least 8 characters long!'),
        confirm_password: yup.string().required('Please confirm your password!').min(8,'Your password need to be at least 8 characters long!').oneOf([yup.ref('password'),null],'Wrong password confirmation! Passwords must match')
    }),
    handleSubmit(values, { resetForm, setSubmitting, props }){
        const data = {
            user:{
                username: values.username,
                email: values.email,
                password: values.password 
            }
        };
        const requestData = JSON.stringify(data);
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        const init = {
            method: 'POST',
            headers: headers,
            body: requestData,
        }
        fetch('http://localhost:8585/v1/users', init)
            .then(res => {
                if(!res.ok){
                    throw new Error(`HTTP Error with status: ${res.status}`);
                }
                return res.json();
            })
            .then(data=>{
                console.log(data);
            })
            .catch(err => {
                console.log(err);;
            });
        resetForm();
        setSubmitting(false);
        props.history.push('/');
    }
})(RegisterInnerForm));

export default RegisterForm;