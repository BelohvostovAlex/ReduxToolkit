import axios from "axios";
import { AppDispatch } from "../store";

import { IUser } from "../../models/IUser";
import {userSlice} from "./userSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(userSlice.actions.userFetch)
//         const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
//         dispatch(userSlice.actions.userFetchSuccess(response.data))
//     } catch(error) {
//         dispatch(userSlice.actions.userFetchError('Whoops'))
//     }
// }

export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
   async () => {
    const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
    return response.data
   }
)