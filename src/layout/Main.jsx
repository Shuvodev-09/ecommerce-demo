import React from 'react';
import Header from '../components/shared/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      <Header />
      <div className="pt-20">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
