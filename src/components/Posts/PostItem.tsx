import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import { useDeletePost } from '../../hooks/Posts/PostMutation';
import useDetailPost from '../../hooks/Posts/useDetailPost';
import { IPost } from '../../interfaces/IPost';
import CommentCreateModalForm from '../Comment/CommentForm/CommentCreateModalForm';
import PostEditModalForm from './PostForm/PostEditModalForm';

const PostItem = ({ posts }: { posts: IPost[] }) => {
  const [page, setPage] = useState(0);
  const [filteredData, setFilteredData] = useState<IPost[]>();
  const n = 5;

  useEffect(() => {
    setFilteredData(
      posts
        .sort((a, b) => b.id - a.id)
        .filter((item, index) => {
          console.log(item);
          return index >= page * n && index < (page + 1) * n;
        })
    );
  }, [page, posts]);

  const { post, onDetailPostClick } = useDetailPost(null);

  const mutation = useDeletePost();

  const onDeletePost = (id: number) => {
    mutation.mutate({
      id: id,
    });
  };

  return (
    <>
      {filteredData &&
        filteredData.map((item) => (
          <div className="post clearfix" key={item.id}>
            <div className="user-block">
              <span className="float-right btn-tool">
                <button
                  className="btn btn-primary"
                  type="button"
                  data-toggle="modal"
                  data-target="#postEditModalForm"
                  onClick={(e) => {
                    onDetailPostClick(e, item);
                  }}
                >
                  <i className="fa fa-edit"></i> Edit
                </button>
                <button
                  className="btn btn-danger ml-2"
                  type="button"
                  onClick={() => {
                    if (
                      window.confirm(
                        'Are you sure you want to delete this item?'
                      )
                    ) {
                      onDeletePost(item.id);
                    }
                  }}
                >
                  <i className="fa fa-trash"></i> Delete
                </button>
              </span>
              <span>
                <Link
                  to={`/post/detail/${item.id}`}
                  className="text-capitalize font-weight-bold"
                >
                  {item.title}
                </Link>
              </span>
            </div>

            <p className="w-75">{item.body}</p>
            <p>
              <span>
                <Link
                  to={`/post/detail/${item.id}`}
                  className="link-black text-sm"
                >
                  <i className="far fa-comments mr-1"></i> Comments
                </Link>
              </span>
            </p>
            <form className="form-horizontal">
              <div
                className="input-group input-group-sm mb-0"
                data-toggle="modal"
                data-target="#commentCreateModalForm"
                onClick={(e) => {
                  onDetailPostClick(e, item);
                }}
              >
                <input
                  className="form-control form-control-sm"
                  placeholder="Write Comment.."
                />
                <div className="input-group-append">
                  <button type="button" className="btn btn-primary">
                    Send
                  </button>
                </div>
              </div>
            </form>
            {/* <button className="btn btn-sm btn-primary">Read More</button> */}
          </div>
        ))}
      <div className="pagination-container">
        <ReactPaginate
          containerClassName={'pagination mt-4'}
          pageClassName={'page-item'}
          activeClassName={'active'}
          pageLinkClassName={'page-link'}
          nextClassName={'page-link'}
          previousClassName={'page-link'}
          onPageChange={(event) => setPage(event.selected)}
          pageCount={Math.ceil(posts.length / n)}
          breakLabel="..."
          breakLinkClassName={'page-link'}
          previousLabel={'previous'}
          nextLabel={'next'}
        />
      </div>
      <PostEditModalForm post={post} />
      <CommentCreateModalForm postId={post?.id as number} />
    </>
  );
};

export default PostItem;
