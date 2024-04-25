import { Link, useParams } from 'react-router-dom';
import { useFetchSingleAlbum } from '../../hooks/Albums/AlbumQuery';
import { useFetchAlbumPhotos } from '../../hooks/Photo/PhotoQuery';
import useDetailPhoto from '../../hooks/Photo/useDetailPhoto';
import LoadingPage from '../Common/LoadingPage';
import ContentHeader from '../Dashboard/ContentHeader';
import DefaultError from '../Error/DefaultError';
import PhotoDetailModal from '../Photos/PhotoDetailModal';

const AlbumDetail = () => {
  const { albumId } = useParams();

  const { photo, onDetailPhotoClick } = useDetailPhoto(null);

  const album = useFetchSingleAlbum(albumId as string);

  const albumPhotos = useFetchAlbumPhotos(albumId as string);

  if (albumPhotos.isLoading) return <LoadingPage />;

  if (albumPhotos.isError)
    return (
      <DefaultError
        errorCode={albumPhotos.error.response!.status}
        errorMessage={albumPhotos.error.message}
      />
    );

  if (album.isLoading) return <LoadingPage />;

  if (album.isError)
    return (
      <DefaultError
        errorCode={album.error.response!.status}
        errorMessage={album.error.message}
      />
    );

  return (
    <div className="content-wrapper">
      <ContentHeader title={`${album.data?.title}`} />

      <section className="content">
        <div className="card">
          <div className="card-header">
            <Link
              to={`${import.meta.env.VITE_BASE_URL}/user/detail/${
                album.data?.userId
              }`}
            >
              <button className="btn btn-warning">Back</button>
            </Link>
          </div>
          <div className="card-body">
            <div className="row">
              {albumPhotos.data &&
                albumPhotos.data.map((item) => (
                  <div className="col-sm-2" key={item.id}>
                    <div
                      onClick={(e) => {
                        onDetailPhotoClick(e, item);
                      }}
                      data-gallery="gallery"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      <img
                        src={item.thumbnailUrl}
                        className="img-fluid mb-2"
                        alt="white sample"
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="card-footer"></div>
        </div>
        <PhotoDetailModal photo={photo} />
      </section>
    </div>
  );
};

export default AlbumDetail;
