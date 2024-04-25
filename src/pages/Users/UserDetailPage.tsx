import Navbar from '../../components/Dashboard/Navbar';
import Footer from '../../components/Dashboard/Footer';
import UserDetail from '../../components/Users/UserDetail';

const UserDetailPage = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <UserDetail />
      <Footer />
    </div>
  );
};

export default UserDetailPage;
