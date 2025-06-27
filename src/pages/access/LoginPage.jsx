import React from 'react';
import AuthLayout from './components/auth/AuthLayout';
import LoginForm from './components/auth/forms/LoginForm';

const LoginPage = () => {
  return (
    <AuthLayout
      title="Company Access Page (schema creation page)"
      subtitle="Enter company account credentials"
      footerText="Don't have an account?"
      footerLink="/register"
      footerLinkText="Sign up"
    >
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;