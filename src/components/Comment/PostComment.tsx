import { Fragment } from 'react';
import { useGetCommentsObserver } from '../../hooks/Comments/CommentQuery';
import useDetailComment from '../../hooks/Comments/useDetailComment';
import CommentCreateModalForm from './CommentForm/CommentCreateModalForm';
import CommentEditModalForm from './CommentForm/CommentEditModalForm';
import CommentInput from './CommentInput';
import CommentItem from './CommentItem';

const PostComment = ({ postId }: { postId: string | undefined }) => {
  const { comment, onDetailCommentClick } = useDetailComment(null);

  const postComments = useGetCommentsObserver(postId as string);

  if (postComments.isLoading) return <div>Loading...</div>;

  if (postComments.isError)
    return (
      <div>Error while trying to fetching comments, please try again later</div>
    );

  return (
    <div>
      <CommentInput />

      {postComments.data &&
        postComments.data.map((item) => (
          <Fragment key={item.id}>
            <CommentItem item={item} onCommentEdit={onDetailCommentClick} />
          </Fragment>
        ))}

      <CommentCreateModalForm postId={+postId!} />
      <CommentEditModalForm comment={comment} />
    </div>
  );
};

export default PostComment;
