import AlbumDetail from '../../components/Album/AlbumDetail';
import Footer from '../../components/Dashboard/Footer';
import Navbar from '../../components/Dashboard/Navbar';

const AlbumDetailPage = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <AlbumDetail />
      <Footer />
    </div>
  );
};

export default AlbumDetailPage;
