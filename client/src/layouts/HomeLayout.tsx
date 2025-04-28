// src/layouts/HomeLayout.tsx
import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

const HomeLayout: React.FC = () => {
  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden">
    <Header />
    <div className="flex-1 flex overflow-hidden">
      <Outlet />
    </div>
  </div>  
  );
};

export default HomeLayout;
