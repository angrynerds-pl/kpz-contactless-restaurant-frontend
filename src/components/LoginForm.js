import React from 'react';
import '../styles/forms.scss';
import { MdLock, MdEmail } from "react-icons/md";
import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup';
import { withRouter } from 'react-router';

const LoginInnerForm = ({
    errors,
    touched
}) => {

    return (
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
            <button className='form__btn' type='submit'>Log in</button>
        </Form>
    )
}

const LoginForm = withRouter(withFormik({
    mapPropsToValues({email,password}){
        return{
            email: email || '',
            password: password || '',
        }
    },
    validationSchema: yup.object().shape({
        email: yup.string().email('Your email address is not valid!').required('Please enter your email address!'),
        password: yup.string().required('Please enter your password!').min(8,'Your password need to be at least 8 characters long!'),
    }),
    handleSubmit(values, {props}){
        console.log(values);
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
                props.history.push('/admin-panel')
            })
            .catch(err => {
                console.log(err);
            });
    }
})(LoginInnerForm));

export default LoginForm;
