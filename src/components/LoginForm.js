import React,{ useState} from 'react';
import '../styles/forms.scss';
import { MdLock, MdEmail } from "react-icons/md";
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import {loginUser} from '../api/loginUser';
import {useHistory} from 'react-router-dom';

const validationSchema = yup.object().shape({
    email: yup.string().email('Your email address is not valid!').required('Please enter your email address!'),
    password: yup.string().required('Please enter your password!').min(8,'Your password need to be at least 8 characters long!'),
});

const LoginForm = ({msg}) => {

    const history = useHistory();
    const [errorMsg, setErrorMsg] = useState();

    return(
        <>
            <Formik
                initialValues ={{
                    email: '',
                    password: '',
                }}
                validationSchema = {validationSchema}
                onSubmit = {async (values, { resetForm,setSubmitting, props })=>{
                    const userData = {
                        user:{
                            email: values.email,
                            password: values.password 
                        }
                    };            
                    loginUser(userData)
                        .then(res => {
                            //save res to global state (Redux)
                            resetForm();
                            setSubmitting(false);
                            history.push('/admin-panel')
                        })
                        .catch(err => {
                            setErrorMsg(err.message)
                        });                
                }}
            >
                {({touched, errors, isSubmitting})=>(
                    <Form className='form'>
                    {msg && <p className='form__msg'>{msg}</p>}
                    {errorMsg && <p className='form__request_error'>{errorMsg}</p>}
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
    )};

export default LoginForm;
