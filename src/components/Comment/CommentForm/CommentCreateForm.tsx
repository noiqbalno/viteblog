import { useForm } from 'react-hook-form';
import { useCreateComment } from '../../../hooks/Comments/CommentMutation';
import { ICommentForm } from '../../../interfaces/IComment';

const CommentCreateForm = ({ postId }: { postId: number }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICommentForm>();

  const mutation = useCreateComment();

  const onSubmitForm = (data: ICommentForm) => {
    mutation.mutate({
      postId: postId,
      body: data.body,
      email: data.email,
      name: data.name,
    });
  };

  return (
    <form className="modal-content" onSubmit={handleSubmit(onSubmitForm)}>
      <div className="modal-header">
        <h5 className="modal-title" id="commentCreateModalFormLabel">
          Add Comment
        </h5>
        <button
          type="button"
          className="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <div>
          <div className="form-group">
            <label className="col-form-label">Name:</label>
            <input
              type="text"
              className="form-control"
              required
              {...register('name', { required: true })}
            />
            {errors.name && (
              <small className="text-danger">This field is required</small>
            )}
          </div>
          <div className="form-group">
            <label className="col-form-label">Email:</label>
            <input
              type="text"
              className="form-control"
              required
              {...register('email', { required: true })}
            />
            {errors.email && (
              <small className="text-danger">This field is required</small>
            )}
          </div>
          <div className="form-group">
            <label className="col-form-label">Body:</label>
            <textarea
              className="form-control"
              {...register('body', { required: true })}
              required
            ></textarea>
            {errors.body && (
              <small className="text-danger">This field is required</small>
            )}
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          data-dismiss="modal"
        >
          Close
        </button>
        <button
          className="btn btn-primary"
          type="button"
          data-dismiss="modal"
          onClick={handleSubmit(onSubmitForm)}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default CommentCreateForm;
