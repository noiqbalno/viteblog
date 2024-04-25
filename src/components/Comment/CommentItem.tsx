import { useDeleteComment } from '../../hooks/Comments/CommentMutation';
import { IComment } from '../../interfaces/IComment';

const CommentItem = ({
  item,
  onCommentEdit,
}: {
  item: IComment;
  onCommentEdit: (e: any, item: IComment) => void;
}) => {
  const mutation = useDeleteComment();

  const onDeleteComment = (data: IComment) => {
    mutation.mutate({
      commentData: data,
    });
  };

  return (
    <div className="user-block w-100 mb-4">
      <span className="float-right btn-tool">
        <div className="dropdown">
          <button
            className="btn btn-sm btn-secondary"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fas fa-ellipsis-v"></i>
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <button
              className="dropdown-item"
              data-toggle="modal"
              data-target="#postEditModalForm"
              onClick={(e) => onCommentEdit(e, item)}
            >
              Edit
            </button>
            <button
              className="dropdown-item"
              type="button"
              onClick={() => {
                if (
                  window.confirm('Are you sure you want to delete this item?')
                ) {
                  onDeleteComment(item);
                }
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </span>

      <span className="username font-weight-normal ml-0">
        <span className="text-primary">{item.email}</span>
      </span>
      <span className="text-sm">{item.name}</span>
      <span className="description ml-0 mt-1">{item.body}</span>
    </div>
  );
};

export default CommentItem;
