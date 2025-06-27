import React from 'react';
import AuthLayout from './components/auth/AuthLayout';
import RegisterForm from './components/auth/forms/RegisterForm';

const RegisterTenantTab = () => {
  return (
    <AuthLayout
      title="Create a Tenant account"
      subtitle="Specificy your enterprise details"
      footerText="Already have an account?"
      footerLink="/login"
      footerLinkText="Sign in"
    >
      <RegisterForm />
    </AuthLayout>
  );
};

export default RegisterTenantTab;