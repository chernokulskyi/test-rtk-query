import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUser } from './../../models/IUser';
import axios from 'axios';

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(userSlice.actions.usersFetching());
//     const response = await axios.get<IUser[]>(
//       'https://jsonplaceholder.typicode.com/users'
//     );
//     dispatch(userSlice.actions.usersFetchingSuccess(response.data));
//   } catch (e) {
//     e instanceof Error &&
//       dispatch(userSlice.actions.usersFetchingError(e.message));
//   }
// };

export const fetchUsers = createAsyncThunk(
  'user/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IUser[]>(
        'https://jsonplaceholder.typicode.com/users'
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e instanceof Error ? e.message : 'error');
    }
  }
);
