import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TSession } from "@/shared/lib/types";
import { getSession, setSession } from "@/shared/lib/helpers/storage";

const initialState: TSession = getSession() || {
  userId: "",
  accessToken: "",
  refreshToken: "",
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin(state, action: PayloadAction<TSession>) {
      // Update the state with the new session
      state.userId = action.payload.userId;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.isAuthenticated = true;

      // Store the session in localStorage
      setSession({ ...action.payload, isAuthenticated: true });
    },
    logout: (state) => {
      state.userId = null;
      state.accessToken = null;
      state.isAuthenticated = false;
      state.refreshToken = null;

      setSession({
        userId: null,
        accessToken: null,
        refreshToken: null,
        isAuthenticated: false,
      });
    },
  },
});

export const { setLogin, logout } = authSlice.actions;
export default authSlice.reducer;
