import React from 'react';
import * as Yup from 'yup';
import logoMobile from '../../assets/illustration-sign-up-mobile.svg'
import Icon from '../../assets/icon-list.svg'
import { SubscribeFormStyled } from './SubscribeForm.styles';
import { ListItem } from '../ListItem/ListItem';

import { Formik, Field, Form, ErrorMessage } from 'formik';

// Validation schema
const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
});

const listItems = ["Product discovery and building what matters", "Measuring to ensure updates are a success", "And much more!"]

const renderedListItems = () => {
  return listItems.map((item) => (
    <ListItem icon={Icon} text={item}></ListItem>
  ))
}

export function SubscribeForm() {
  return (
    <SubscribeFormStyled.FormContainer>
      <img src={logoMobile} alt="" />
      <SubscribeFormStyled.BodyContainer>
      <h1>Stay updated!</h1>
      <body>Join 60,000+ product managers receiving monthly updates on:</body>
      <body>{renderedListItems()}</body>
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
              <body>Email Adress</body>
            <SubscribeFormStyled.BottomFormContainer>
              <SubscribeFormStyled.StyledField
                type="email"
                name="email"
                placeholder="email@company.com"
              />
              <ErrorMessage name="email" component="div" />
            </SubscribeFormStyled.BottomFormContainer>
            <SubscribeFormStyled.SubscribeButton type="submit" disabled={isSubmitting}>
              Subscribe to monthly newsletter
            </SubscribeFormStyled.SubscribeButton>
          </Form>
        )}
      </Formik>
      </SubscribeFormStyled.BodyContainer>
    </SubscribeFormStyled.FormContainer>
  );
}
