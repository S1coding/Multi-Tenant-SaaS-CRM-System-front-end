import React from 'react';
import AuthLayout from './components/auth/AuthLayout';
import RegisterForm from './components/auth/forms/RegisterForm';

const RegisterAdminTab = () => {
  return (
    <AuthLayout
      title="Create an Admin account"
      subtitle="Join our community today"
      footerText="Already have an account?"
      footerLink="/login"
      footerLinkText="Sign in"
    >
      <RegisterForm type={"admin"} />
    </AuthLayout>
  );
};

export default RegisterAdminTab;