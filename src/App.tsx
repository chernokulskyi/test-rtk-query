import React, { useEffect } from 'react';
import './App.css';
import { PostContainer } from './components/PostContainer';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchUsers } from './store/reducers/ActionCreators';
import { userSlice } from './store/reducers/UserSlice';

export const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const { users, isLoading, error } = useAppSelector(
    (state) => state.userReducer
  );
  const {} = userSlice.actions;

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className='App'>
      {/* {isLoading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {JSON.stringify(users, null, 2)} */}

      <PostContainer />
    </div>
  );
};
