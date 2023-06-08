import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Validation schema
const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
});

export function SubscribeForm() {
    return (
        <div>
            <h1>Subscribe to our newsletter</h1>
            <Formik
                initialValues={{ email: '' }}
                validationSchema={validationSchema}
                onSubmit={async (values) => {
                    // Form submission logic goes here
                    console.log(values);
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div>
                            <Field type="email" name="email" placeholder="email@company.com" />
                            <ErrorMessage name="email" component="div" />
                        </div>
                        <button type="submit" disabled={isSubmitting}>
                            Subscribe to monthly newsletter
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
