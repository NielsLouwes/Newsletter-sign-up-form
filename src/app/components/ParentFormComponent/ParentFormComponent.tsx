import { useEffect, useState } from 'react';
import SuccessForm from '../SuccessForm/SuccessForm';
import { SubscribeForm } from '../SubscribeForm/SubscribeForm';

export function ParentFormComponent() {
  const [formStatus, setFormStatus] = useState({ success: false, email: '' });

  useEffect(() => {
    if (formStatus.success) {
      setTimeout(
        () => setFormStatus({ success: false, email: formStatus.email }),
        5000
      );
    }
  }, [formStatus]);

  const resetForm = () => setFormStatus({ success: false, email: '' });

  return formStatus && formStatus.success ? (
    <SuccessForm email={formStatus.email} resetForm={resetForm} />
  ) : (
    <SubscribeForm onFormSubmit={setFormStatus} />
  );
}
