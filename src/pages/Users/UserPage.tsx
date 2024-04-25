import React from 'react';
import Navbar from '../../components/Dashboard/Navbar';
import UserMain from '../../components/Users/UserMain';
import Footer from '../../components/Dashboard/Footer';

const UserPage = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <UserMain />
      <Footer />
    </div>
  );
};

export default UserPage;
