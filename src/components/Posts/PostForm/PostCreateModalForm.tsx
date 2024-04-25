import PostCreateForm from './PostCreateForm';

const PostCreateModalForm = () => {
  return (
    <div
      className="modal fade"
      id="postCreateModalForm"
      role="dialog"
      aria-labelledby="postCreateModalFormLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <PostCreateForm />
      </div>
    </div>
  );
};

export default PostCreateModalForm;
