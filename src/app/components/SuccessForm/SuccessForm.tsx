import React from 'react'
import { SubscribeFormStyled } from './SuccessForm.styles'
import Icon from '../../assets/icon-list.svg';
import { FormikState } from 'formik';


type SuccessFormProps = {
  email: string;
  resetForm: (nextState?: Partial<FormikState<{ email: string; }>> | undefined) => void;
};

function SuccessForm({email , resetForm}: SuccessFormProps) {

  return (
    <SubscribeFormStyled.SuccessForm>
              <SubscribeFormStyled.ContentContainer>
                <img src={Icon} alt="" height="50px" width="50px" />
                <SubscribeFormStyled.MainTitle>
                  Thank you for subscribing!
                </SubscribeFormStyled.MainTitle>
                <body>
                  A confirmation email has been sent to{' '}
                  <strong>{email}</strong>. Please open it and click the
                  button inside to confirm your subscription
                </body>
              </SubscribeFormStyled.ContentContainer>
              <SubscribeFormStyled.DismissButton onClick={() => resetForm()}>
                Dismiss message
              </SubscribeFormStyled.DismissButton>
            </SubscribeFormStyled.SuccessForm>
  )
}

export default SuccessForm