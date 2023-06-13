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

type SubscribeFormProps = {
  onFormSubmit: (value: { success: boolean; email: string }) => void;
};

const renderedListItems = () => {
  return listItems.map((item) => <ListItem icon={Icon} text={item}></ListItem>);
};

export function SubscribeForm({ onFormSubmit }: SubscribeFormProps) {
  return (
    <SubscribeFormStyled.FormContainer>
      <Formik
        initialValues={{ email: '' }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting }) => {
          await new Promise((resolve) => setTimeout(resolve, 500));

          onFormSubmit({ success: true, email: values.email });
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, errors }) => (
          <SubscribeFormStyled.SubscribeContainer>
            <SubscribeFormStyled.ImageContainer>
              <SubscribeFormStyled.Image src={logoMobile} alt="" />
            </SubscribeFormStyled.ImageContainer>
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
                <SubscribeFormStyled.FormButton
                  type="submit"
                  disabled={isSubmitting}
                >
                  Subscribe to monthly newsletter
                </SubscribeFormStyled.FormButton>
              </Form>
            </SubscribeFormStyled.BodyContainer>
          </SubscribeFormStyled.SubscribeContainer>
        )}
      </Formik>
    </SubscribeFormStyled.FormContainer>
  );
}
