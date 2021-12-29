import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";

interface UserState {
    users: IUser[],
    isLoading: boolean,
    error: null | string,
    count: number
}

const initialState:UserState = {
    users: [],
    isLoading: false,
    error: null,
    count: 0
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userFetch(state) {
            state.isLoading =  true
        },
        userFetchSuccess(state, action: PayloadAction<IUser[]>) {
            state.users = action.payload,
            state.isLoading = false
        },
        userFetchError(state, action: PayloadAction<string>) {
            state.error = action.payload,
            state.isLoading = false
        }
    }
})

export default userSlice.reducer

