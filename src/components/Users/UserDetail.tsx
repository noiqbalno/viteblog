import { useParams } from 'react-router-dom';
import { useFetchUserPosts } from '../../hooks/Posts/PostQuery';
import { useFetchSingleUser } from '../../hooks/Users/UserQuery';
import LoadingPage from '../Common/LoadingPage';
import ContentHeader from '../Dashboard/ContentHeader';
import DefaultError from '../Error/DefaultError';
import PostItem from '../Posts/PostItem';
import UserAlbum from './UserAlbum/UserAlbum';
import UserProfile from './UserProfile/UserProfile';

const UserDetail = () => {
  const { userId } = useParams();

  const user = useFetchSingleUser(userId as string);
  const userPosts = useFetchUserPosts(userId as string);

  if (user.isLoading) return <LoadingPage />;

  if (user.isError)
    return (
      <DefaultError
        errorCode={user.error.response!.status}
        errorMessage={user.error.message}
      />
    );

  if (userPosts.isLoading) return <LoadingPage />;

  if (userPosts.isError)
    return (
      <DefaultError
        errorCode={userPosts.error.response!.status}
        errorMessage={userPosts.error.message}
      />
    );

  return (
    <div className="content-wrapper">
      <ContentHeader title={'User Detail'} />

      <section className="content">
        <div className="containter-fluid">
          <div className="row">
            <div className="col-md-3">
              {user.data && <UserProfile data={user.data} />}
            </div>
            <div className="col-md-9">
              <div className="card">
                <div className="card-header p-2">
                  <ul className="nav nav-pills">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        href="#post"
                        data-toggle="tab"
                      >
                        Posts
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#album" data-toggle="tab">
                        Albums
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="card-body">
                  <div className="tab-content">
                    <div className="tab-pane active" id="post">
                      {userPosts.data && <PostItem posts={userPosts.data} />}
                    </div>
                    <div className="tab-pane" id="album">
                      <UserAlbum userId={userId} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserDetail;
