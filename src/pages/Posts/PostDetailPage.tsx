import React from 'react';
import Navbar from '../../components/Dashboard/Navbar';
import Footer from '../../components/Dashboard/Footer';
import PostDetail from '../../components/Posts/PostDetail';

const PostDetailPage = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <PostDetail />
      <Footer />
    </div>
  );
};

export default PostDetailPage;
