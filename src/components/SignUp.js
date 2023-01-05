import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignUp = () => {

  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Name must be at least 3 characters')
      .max(30, 'Name must be at most 30 characters')
      .required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(10, 'Password must be at least 10 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm password is required')
  });

  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      console.log(values);
      sessionStorage.setItem('name',values.name)

      setSubmitting(false);
      window.open('http://localhost:3000/', '_self')
    }, 1000);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
           <h1>Registration</h1>
          <Field type="text" name="name" placeholder="Type in your name..." />
          <ErrorMessage name="name" component="div" />
          <br />
          <Field type="email" name="email" placeholder="Type in your email..." />
          <ErrorMessage name="email" component="div" />
          <br />
          <Field type="password" name="password" placeholder="Your password here..." />
          <ErrorMessage name="password" component="div" />
          <br />
          <Field type="password" name="confirmPassword" placeholder="Confirm Password..." />
          <ErrorMessage name="confirmPassword" component="div" />
          <br />
          <button type="submit" disabled={isSubmitting}>
            Sign up
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SignUp
