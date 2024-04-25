import { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useUpdateComment } from '../../../hooks/Comments/CommentMutation';
import { IComment, ICommentForm } from '../../../interfaces/IComment';

const CommentEditForm = ({ currentComment }: { currentComment: IComment }) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ICommentForm>({
    defaultValues: useMemo(() => {
      return currentComment;
    }, [currentComment]),
  });

  useEffect(() => {
    reset(currentComment);
  }, [currentComment]);

  const mutation = useUpdateComment();

  const onSubmitForm = (data: ICommentForm) => {
    mutation.mutate({
      id: currentComment?.id as number,
      data: {
        name: data.name,
        email: data.email,
        body: data.body,
        postId: currentComment?.postId,
      },
    });
  };

  return (
    <form className="modal-content" onSubmit={handleSubmit(onSubmitForm)}>
      <div className="modal-header">
        <h5 className="modal-title" id="posteditModalFormLabel">
          Edit Comment
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

export default CommentEditForm;
