import { useState } from 'react';
import { IComment } from '../../interfaces/IComment';

const useDetailComment = (defaultValue: null | IComment) => {
  const [comment, setComment] = useState<IComment | null>(defaultValue);

  const onDetailCommentClick = (e: any, comment: IComment) => {
    e.preventDefault();
    setComment(comment);
  };

  return { comment, onDetailCommentClick };
};

export default useDetailComment;
