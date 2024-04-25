import CommentCreateForm from './CommentCreateForm';

const CommentCreateModalForm = ({ postId }: { postId: number }) => {
  return (
    <div
      className="modal fade"
      id="commentCreateModalForm"
      role="dialog"
      aria-labelledby="commentCreateModalFormLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <CommentCreateForm postId={postId} />
      </div>
    </div>
  );
};

export default CommentCreateModalForm;
