import React from 'react';
import { useFetchUserAlbums } from '../../../hooks/Albums/AlbumQuery';
import { Link } from 'react-router-dom';

const UserAlbum = ({ userId }: { userId: string | undefined }) => {
  const userAlbums = useFetchUserAlbums(userId as string);

  if (userAlbums.isLoading) return <div>Loading...</div>;

  if (userAlbums.isError)
    return (
      <div>
        Error while trying to fetching albumns, you can refresh the page or try
        again later
      </div>
    );

  return (
    <div className="row">
      {userAlbums.data &&
        userAlbums.data.map((item) => (
          <div className="col-lg-3 col-6" key={item.id}>
            <div className="small-box bg-primary">
              <div className="inner">
                <h3>Album</h3>
                <p className="text-capitalize">{item.title}</p>
              </div>
              <div className="icon">
                <i className="fas fa-image"></i>
              </div>
              <Link
                to={`${import.meta.env.VITE_BASE_URL}/album/detail/${item.id}`}
                className="small-box-footer"
              >
                View <i className="fas fa-arrow-circle-right"></i>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default UserAlbum;
