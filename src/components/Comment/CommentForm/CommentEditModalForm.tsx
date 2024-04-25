import { IComment } from '../../../interfaces/IComment';
import CommentEditForm from './CommentEditForm';

const CommentEditModalForm = ({ comment }: { comment: IComment | null }) => {
  return (
    <div
      className="modal fade"
      id="postEditModalForm"
      role="dialog"
      aria-labelledby="postEditModalFormLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        {comment === null ? (
          <div>Comment undefined</div>
        ) : (
          <CommentEditForm currentComment={comment} />
        )}
      </div>
    </div>
  );
};

export default CommentEditModalForm;
