// src/pages/LoginPage.tsx
import React from 'react';
import AuthForm from './AuthForm';

const LoginPage: React.FC = () => {
  const handleLogin = (data: any) => {
    // Handle login logic here
    console.log('Login data:', data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <AuthForm type="login" onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;