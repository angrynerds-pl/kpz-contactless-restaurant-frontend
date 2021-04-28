import React,{useState} from 'react';
import { MdLock, MdEmail, MdAccountCircle } from "react-icons/md";
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import {registerUser} from '../api/registerUser';
import {useHistory} from 'react-router-dom';


const validationSchema= yup.object().shape({
    username: yup.string().required('Please enter your username!'),
    email: yup.string().email('Your email address is not valid!').required('Please enter your email address!'),
    password: yup.string().required('Please enter your password!').min(8,'Your password need to be at least 8 characters long!'),
    confirm_password: yup.string().required('Please confirm your password!').min(8,'Your password need to be at least 8 characters long!').oneOf([yup.ref('password'),null],'Wrong password confirmation! Passwords must match')
});

const RegisterForm = () => {

    const history = useHistory();
    const [errorMsg, setErrorMsg] = useState();

    return (
        <>
            <Formik
                initialValues ={{
                    username: '',
                    email: '',
                    password: '',
                    confirm_password: ''
                }}
                validationSchema = {validationSchema}
                onSubmit = {async(values, { resetForm, setSubmitting}, props)=>{
                    const data = {
                        user:{
                            email: values.email,
                            password: values.password, 
                            username: values.username,
                        }
                    };
                    
                    registerUser(data)
                        .then(()=>{
                            resetForm();
                            setSubmitting(false);
                            history.push('/login');
                        })
                        .catch(err=>{
                            setErrorMsg(err.message);
                        })
                    
                }}
            >
                {({touched,errors,isSubmitting})=>(
                    <Form className='form' >
                    {errorMsg && <p className='form__request_error'>{errorMsg}</p>}
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
                    <button type='submit' className='form__btn' disabled={isSubmitting}>Sign Up</button>
                </Form>
                )}
            </Formik>
        </>
    )};


export default RegisterForm;