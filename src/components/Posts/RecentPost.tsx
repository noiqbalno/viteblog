import { useFetchPosts } from '../../hooks/Posts/PostQuery';
import { Link } from 'react-router-dom';

const RecentPost = () => {
  const recentPost = useFetchPosts();

  if (recentPost.isLoading) return <div>Loading...</div>;

  if (recentPost.isError)
    return (
      <div>Error while trying to fetching posts, please try again later</div>
    );
  return (
    <>
      {recentPost.data &&
        recentPost.data.slice(0, 5).map((item) => (
          <div key={item.id}>
            <Link to={`/post/detail/${item.id}`} className="text-capitalize">
              {item.title}
            </Link>
            <p className="text-muted">{item.body.substring(0, 30)}</p>
            <hr />
          </div>
        ))}
    </>
  );
};

export default RecentPost;
