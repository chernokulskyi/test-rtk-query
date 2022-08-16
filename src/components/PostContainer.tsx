import React, { useCallback } from 'react';
import { IPost } from '../models/IPost';
import { postApi } from '../services/PostService';
import { PostItem } from './PostItem';

export const PostContainer: React.FC = () => {
  const { data: posts, isLoading, error } = postApi.useFetchAllPostsQuery(100);
  const [createPost] = postApi.useCreatePostMutation();
  const [updatePost] = postApi.useUpdatePostMutation();
  const [deletePost] = postApi.useDeletePostMutation();

  const handleCreate = useCallback(async () => {
    const title = prompt();

    await createPost({ title, body: title } as IPost);
  }, [createPost]);

  const handleUpdate = useCallback(
    (post: IPost) => {
      updatePost(post);
    },
    [updatePost]
  );

  const handleRemove = useCallback(
    (post: IPost) => {
      deletePost(post);
    },
    [deletePost]
  );

  return (
    <div>
      <div className='post__list'>
        <button onClick={handleCreate}>add new post</button>

        {isLoading && <h1>loading...</h1>}
        {error && <h1>{JSON.stringify(error)}</h1>}
        {posts?.map((post) => (
          <PostItem
            key={post.id}
            post={post}
            update={handleUpdate}
            remove={handleRemove}
          />
        ))}
      </div>
    </div>
  );
};
