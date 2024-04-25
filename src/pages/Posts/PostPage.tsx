import Footer from '../../components/Dashboard/Footer';
import Navbar from '../../components/Dashboard/Navbar';
import PostMain from '../../components/Posts/PostMain';

const PostPage = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <PostMain />
      <Footer />
    </div>
  );
};

export default PostPage;
