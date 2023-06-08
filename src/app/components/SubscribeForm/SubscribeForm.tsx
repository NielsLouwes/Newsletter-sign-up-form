import React from 'react';
import * as Yup from 'yup';
import logoMobile from '../../assets/illustration-sign-up-mobile.svg';
import Icon from '../../assets/icon-list.svg';
import { SubscribeFormStyled } from './SubscribeForm.styles';
import { ListItem } from '../ListItem/ListItem';

import { Formik, Form } from 'formik';

// Validation schema
const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
});

const listItems = [
  'Product discovery and building what matters',
  'Measuring to ensure updates are a success',
  'And much more!',
];

const renderedListItems = () => {
  return listItems.map((item) => <ListItem icon={Icon} text={item}></ListItem>);
};

export function SubscribeForm() {
  return (
    <SubscribeFormStyled.FormContainer>
      <Formik
        initialValues={{ email: '' }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting, setStatus }) => {
          // Fake a network request
          await new Promise((resolve) => setTimeout(resolve, 500));
          // Form submission logic goes here
         setStatus({ success: true, email: values.email });
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, errors, status }) =>
          status && status.success ? (
            <SubscribeFormStyled.SuccessForm>
              <img src={Icon} alt="" height="50px" width="50px" />
              <SubscribeFormStyled.MainTitle>Thank you for subscribing!</SubscribeFormStyled.MainTitle>
              <body>A confirmation email has been sent to {status.email} Please open it and click the button inside to confirm your subscription</body>
              </SubscribeFormStyled.SuccessForm>
          ) : (
            <SubscribeFormStyled.BodyContainer>
                <SubscribeFormStyled.MainTitle>
                  Stay updated!
                </SubscribeFormStyled.MainTitle>
                <body style={{ marginBottom: '25px' }}>
                  Join 60,000+ product managers receiving monthly updates on:
                </body>
                <body>{renderedListItems()}</body>
                <Form>
                  <SubscribeFormStyled.EmailContainer>
                    <SubscribeFormStyled.EmailTitle>
                      Email Adress
                    </SubscribeFormStyled.EmailTitle>
                    <SubscribeFormStyled.StyledError
                      name="email"
                      component="span"
                    />
                  </SubscribeFormStyled.EmailContainer>
                  <SubscribeFormStyled.BottomFormContainer>
                    <SubscribeFormStyled.StyledField
                      aria-invalid={errors.email ? true : false}
                      type="email"
                      name="email"
                      placeholder="email@company.com"
                    />
                  </SubscribeFormStyled.BottomFormContainer>
                  <SubscribeFormStyled.SubscribeButton
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Subscribe to monthly newsletter
                  </SubscribeFormStyled.SubscribeButton>
                </Form>
              </SubscribeFormStyled.BodyContainer>
          )
        }
      </Formik>
    </SubscribeFormStyled.FormContainer>
  );
}
