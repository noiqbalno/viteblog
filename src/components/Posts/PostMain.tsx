import '../../assets/css/Pagination.css';
import { useGetPostsObserver } from '../../hooks/Posts/PostQuery';
import LoadingPage from '../Common/LoadingPage';
import ContentHeader from '../Dashboard/ContentHeader';
import DefaultError from '../Error/DefaultError';
import PostCreateModalForm from './PostForm/PostCreateModalForm';
import PostItem from './PostItem';

const PostMain = () => {
  const posts = useGetPostsObserver();

  if (posts.isLoading) return <LoadingPage />;

  if (posts.isError)
    return (
      <DefaultError
        errorCode={posts.error.response!.status}
        errorMessage={posts.error.message}
      />
    );

  return (
    <div className="content-wrapper">
      <ContentHeader title={'Posts'} />

      <section className="content">
        <div className="card">
          <div className="card-header">
            <button
              className="btn btn-warning"
              data-toggle="modal"
              data-target="#postCreateModalForm"
            >
              <i className="fa fa-plus"></i> Create
            </button>
          </div>
          <div className="card-body table-responsive">
            {posts.data && <PostItem posts={posts.data} />}
          </div>
          <div className="card-footer"></div>
        </div>
      </section>
      <PostCreateModalForm />
    </div>
  );
};

export default PostMain;
