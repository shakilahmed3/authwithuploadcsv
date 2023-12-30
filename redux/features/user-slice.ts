import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@/lib/user';

// Define a type for the slice state
interface UserState {
    user: User | null;
}

// Define the initial state using that type
const initialState: UserState = {
    user: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        },
        clearUser: (state) => {
            state.user = null;
        },
        // You can add more user-related actions here
    },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
