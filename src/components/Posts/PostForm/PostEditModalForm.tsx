import { IPost } from '../../../interfaces/IPost';
import PostEditForm from './PostEditForm';

const PostEditModalForm = ({ post }: { post: IPost | null }) => {
  return (
    <div
      className="modal fade"
      id="postEditModalForm"
      role="dialog"
      aria-labelledby="postEditModalFormLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        {post === null ? (
          <div>Post undefined</div>
        ) : (
          <PostEditForm currentPost={post} />
        )}
      </div>
    </div>
  );
};

export default PostEditModalForm;
