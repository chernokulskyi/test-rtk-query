import React, { useCallback } from 'react';
import { IPost } from '../models/IPost';

interface Props {
  post: IPost;

  update: (post: IPost) => void;
  remove: (post: IPost) => void;
}

export const PostItem: React.FC<Props> = ({ post, update, remove }) => {
  const handleUpdate = useCallback(() => {
    const title = prompt() || '';
    update({ ...post, title });
  }, [post, update]);

  const handleRemove = useCallback(
    (event: React.MouseEvent) => {
      event.stopPropagation();
      remove(post);
    },
    [post, remove]
  );

  return (
    <div className='post' onClick={handleUpdate}>
      {post.id} {post.title}
      <button onClick={handleRemove}>delete</button>
    </div>
  );
};
