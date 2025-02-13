import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        storeLogin: (state, action) => {
            localStorage.setItem('stickerAppLogin', true)
            localStorage.setItem('stickerAppUserData', JSON.stringify(action.payload.userData))
            state.status = true;
            state.userData = action.payload.userData;
        },
        storeLogout: (state) => {
            localStorage.setItem('stickerAppLogin', false)
            localStorage.removeItem('stickerAppUserData')
            state.status = false;
            state.userData = null;
        }
    }
})

export const { storeLogin, storeLogout } = authSlice.actions;

export default authSlice.reducer;