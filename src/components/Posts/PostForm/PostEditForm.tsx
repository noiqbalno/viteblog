import { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useUpdatePost } from '../../../hooks/Posts/PostMutation';
import { ICreatePost, IPost } from '../../../interfaces/IPost';

const PostEditForm = ({ currentPost }: { currentPost: IPost }) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreatePost>({
    defaultValues: useMemo(() => {
      return currentPost;
    }, [currentPost]),
  });

  useEffect(() => {
    reset(currentPost);
  }, [currentPost]);

  const mutation = useUpdatePost();

  const onSubmitForm = (data: ICreatePost) => {
    mutation.mutate({
      id: currentPost?.id as number,
      data: {
        title: data.title,
        body: data.body,
        userId: currentPost?.userId,
      },
    });
  };

  return (
    <form className="modal-content" onSubmit={handleSubmit(onSubmitForm)}>
      <div className="modal-header">
        <h5 className="modal-title" id="posteditModalFormLabel">
          Edit Post
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
            <label className="col-form-label">Title:</label>
            <input
              type="text"
              className="form-control"
              required
              {...register('title', { required: true, value: '' })}
            />
            {errors.title && (
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

export default PostEditForm;
