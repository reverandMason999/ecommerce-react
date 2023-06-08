import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Card, Button } from 'react-bootstrap';


const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Required"),
    password: Yup.string()
      .min(3, "Password is too short - should be 3 chars minimum.")
      .required("Required"),
});




const Account = () => {
  return (
    <div>
    
    <h1>Account</h1>
    <Card body>
      <Formik
        initialValues={{ email: '', password: '' }}
        
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="email" name="email" placeholder='email'/>
            <ErrorMessage name="email" component="div" />
            <Field type="password" name="password" placeholder='password' />
            <ErrorMessage name="password" component="div" />
            <Button type="submit" disabled={isSubmitting}>
              Register
            </Button>
          </Form>
        )}
      </Formik>
    </Card>
  </div>
)}

export default Account