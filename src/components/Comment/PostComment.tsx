import React, { Fragment } from 'react';
import { useFetchPostComments } from '../../hooks/Comments/CommentQuery';

const PostComment = ({ postId }: { postId: string | undefined }) => {
  const postComments = useFetchPostComments(postId as string);

  if (postComments.isLoading) return <div>Loading...</div>;

  if (postComments.isError)
    return (
      <div>Error while trying to fetching comments, please try again later</div>
    );

  return (
    <div>
      <form className="form-horizontal mb-4">
        <div className="input-group input-group-sm mb-0">
          <input
            className="form-control form-control-sm"
            placeholder="Write Comment.."
          />
          <div className="input-group-append">
            <button type="submit" className="btn btn-danger">
              Send
            </button>
          </div>
        </div>
      </form>

      {postComments.data &&
        postComments.data.map((item) => (
          <Fragment key={item.id}>
            <div className="user-block w-100 mb-4">
              <span className="float-right btn-tool">
                <i className="fas fa-ellipsis-v"></i>
              </span>

              <span className="username font-weight-normal ml-0">
                <span className="text-primary">{item.email}</span>
              </span>
              <span className="text-sm">{item.name}</span>
              <span className="description ml-0 mt-1">{item.body}</span>
            </div>
          </Fragment>
        ))}
    </div>
  );
};

export default PostComment;
