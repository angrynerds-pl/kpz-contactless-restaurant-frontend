import React from 'react';
import '../styles/forms.scss';
import { MdLock, MdEmail } from "react-icons/md";
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
    email: yup.string().email('Your email address is not valid!').required('Please enter your email address!'),
    password: yup.string().required('Please enter your password!').min(8,'Your password need to be at least 8 characters long!'),
});


const LoginForm = () => (
    <>
        <Formik
            initialValues ={{
                email: '',
                password: '',
            }}
            validationSchema = {validationSchema}
            onSubmit = {(values, { resetForm,setSubmitting, props })=>{
                const data = {
                    user:{
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
                fetch('http://localhost:8585/v1/users/login', init)
                    .then(res => {
                        if(!res.ok){
                            throw new Error(`HTTP Error with status: ${res.status}`);
                        }
                        return res.json();
                    })
                    .then(data=>{
                        console.log(data);
                        resetForm();
                        setSubmitting(false);
                        props.history.push('/admin-panel')
                    })
                    .catch(err => {
                        console.log(err);
                    });
            }}
        >
            {({touched, errors, isSubmitting})=>(
                <Form className='form'>
                <label className='form__label' htmlFor="email">Enter email:</label>
                <div className="form__input">
                    <MdEmail/>
                    <Field type="text" name='email'placeholder='example@domain.com'></Field>
                </div>
                {touched.email && errors.email && <p className='form__error'>{errors.email}</p>}
                <label className='form__label' htmlFor="password">Enter password:</label>
                <div className="form__input">
                    <MdLock/>
                    <Field type="password" name='password' placeholder='*********'></Field>
                </div>
                {touched.password && errors.password && <p className='form__error'>{errors.password}</p>}
                <button className='form__btn' type='submit' disabled={isSubmitting}>Log in</button>
            </Form>
            )}
        </Formik>
    </>
);
export default LoginForm;
