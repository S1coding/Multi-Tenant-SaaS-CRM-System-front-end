import React from 'react';
import AuthLayout from './components/auth/AuthLayout';
import LoginForm from './components/auth/forms/LoginForm';

const LoginPage = () => {
  return (
    <AuthLayout
      title="Access Page"
      subtitle="Enter your credentials to access the server"
      footerText="Don't have an account?"
      footerLink="/register"
      footerLinkText="Sign up"
    >
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;