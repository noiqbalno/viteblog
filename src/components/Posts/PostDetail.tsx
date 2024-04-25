import React from 'react';
import ContentHeader from '../Dashboard/ContentHeader';
import { useFetchSinglePost } from '../../hooks/Posts/PostQuery';
import { Link, useParams } from 'react-router-dom';
import LoadingPage from '../Common/LoadingPage';
import DefaultError from '../Error/DefaultError';
import PostComment from '../Comment/PostComment';
import RecentPost from './RecentPost';

const PostDetail = () => {
  const { postId } = useParams();

  const post = useFetchSinglePost(postId as string);

  if (post.isLoading) return <LoadingPage />;

  if (post.isError)
    return (
      <DefaultError
        errorCode={post.error.response!.status}
        errorMessage={post.error.message}
      />
    );

  return (
    <div className="content-wrapper">
      <ContentHeader title={post.data?.title as string} />

      <section className="content">
        <div className="containter-fluid">
          <div className="row">
            <div className="col-md-9">
              <div className="card">
                <div className="card-header p-2">
                  <Link to={`/user/detail/${post.data?.userId}`}>
                    <button className="btn btn-warning">Back</button>
                  </Link>
                </div>
                <div className="card-body">
                  <p className="w-75">{post.data?.body}</p>
                  <div>
                    <p>
                      <i className="far fa-comments mr-1"></i> Comments
                    </p>
                    <PostComment postId={postId} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card card-primary">
                <div className="card-header">
                  <h3 className="card-title">Recent Posts</h3>
                </div>
                <div className="card-body">
                  <RecentPost />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PostDetail;
