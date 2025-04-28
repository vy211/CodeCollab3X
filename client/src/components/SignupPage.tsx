// src/pages/SignupPage.tsx
import React from 'react';
import AuthForm from '../components/AuthForm';

const SignupPage: React.FC = () => {
  const handleSignup = (data: any) => {
    // Handle signup logic here
    console.log('Signup data:', data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <AuthForm type="signup" onSubmit={handleSignup} />
    </div>
  );
};

export default SignupPage;