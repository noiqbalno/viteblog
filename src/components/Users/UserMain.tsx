import React from 'react';
import ContentHeader from '../Dashboard/ContentHeader';
import UserTable from './UserTable';
import { useFetchUsers } from '../../hooks/Users/UserQuery';
import DefaultError from '../Error/DefaultError';
import LoadingPage from '../Common/LoadingPage';

const UserMain = () => {
  const users = useFetchUsers();

  if (users.isLoading) return <LoadingPage />;

  if (users.isError)
    return (
      <DefaultError
        errorCode={users.error.response!.status}
        errorMessage={users.error.message}
      />
    );

  return (
    <div className="content-wrapper">
      <ContentHeader title={'Users'} />

      <section className="content">
        <div className="card">
          <div className="card-header">
            <div className="card-tools"></div>
          </div>
          <div className="card-body table-responsive p-0">
            <UserTable data={users.data} />
          </div>
          <div className="card-footer"></div>
        </div>
      </section>
    </div>
  );
};

export default UserMain;
