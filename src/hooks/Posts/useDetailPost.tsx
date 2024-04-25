import { useState } from 'react';
import { IPost } from '../../interfaces/IPost';

const useDetailPost = (defaultValue: null | IPost) => {
  const [post, setPost] = useState<IPost | null>(defaultValue);

  const onDetailPostClick = (e: any, post: IPost) => {
    e.preventDefault();
    setPost(post);
  };

  return { post, onDetailPostClick };
};

export default useDetailPost;
