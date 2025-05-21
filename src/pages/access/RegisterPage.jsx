import React from 'react';
import AuthLayout from './components/auth/AuthLayout';
import RegisterForm from './components/auth/forms/RegisterForm';

const RegisterPage = () => {
  return (
    <AuthLayout
      title="Create an account"
      subtitle="Join our community today"
      footerText="Already have an account?"
      footerLink="/login"
      footerLinkText="Sign in"
    >
      <RegisterForm />
    </AuthLayout>
  );
};

export default RegisterPage;