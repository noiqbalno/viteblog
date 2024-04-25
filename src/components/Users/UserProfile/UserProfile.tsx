import React from 'react';
import { IUser } from '../../../interfaces/IUser';

const UserProfile = ({ data }: { data: IUser }) => {
  return (
    <>
      <div className="card card-primary card-outline">
        <div className="card-body box-profile">
          <div className="text-center">
            <img
              className="profile-user-img img-fluid img-circle"
              src="/assets/adminlte/dist/img/user2-160x160.jpg"
              alt="User profile picture"
            />
          </div>
          <h3 className="profile-username text-center">{data?.name}</h3>
          <p className="text-muted text-center m-0 ">@{data?.username}</p>
          <a href="">
            <p className="text-center font-weight-bold">{data?.website}</p>
          </a>
        </div>
      </div>
      <div className="card card-primary">
        <div className="card-header">
          <h3 className="card-title">About</h3>
        </div>

        <div className="card-body">
          <strong>
            <i className="fas fa-book mr-1"></i> Email
          </strong>
          <p className="text-muted">{data?.email}</p>
          <hr />
          <strong>
            <i className="fas fa-phone mr-1"></i> Phone
          </strong>
          <p className="text-muted">{data?.phone}</p>
          <hr />
          <strong>
            <i className="fas fa-map-marker-alt mr-1"></i> Address
          </strong>
          <p className="text-muted">
            {data?.address.suite}, {data?.address.street}, {data?.address.city}.
            Zip Code: {data?.address.zipcode}
          </p>
          <hr />
        </div>
      </div>
      <div className="card card-primary">
        <div className="card-header">
          <h3 className="card-title">Company</h3>
        </div>

        <div className="card-body">
          <strong>
            <i className="fas fa-map-marker-alt mr-1"></i> Company Name
          </strong>
          <p className="text-muted">{data?.company.name}</p>
          <hr />
          <strong>
            <i className="fas fa-file-alt mr-1"></i> Business Service
          </strong>
          <p className="text-muted">{data?.company.bs}</p>
          <hr />
          <strong>
            <i className="fas fa-stream mr-1"></i> Catchphrase
          </strong>
          <p className="text-muted">{data?.company.catchPhrase}</p>
          <hr />
        </div>
      </div>
    </>
  );
};

export default UserProfile;
