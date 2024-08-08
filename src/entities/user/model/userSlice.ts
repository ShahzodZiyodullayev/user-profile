import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TUser } from "@/shared/lib/types";

const initialState: TUser = {
  avatar: "",
  bio: "",
  city: "",
  country: "",
  firstName: "",
  lastName: "",
  street: "",
};

const userSlice = createSlice({
  name: "user-data",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<TUser | any>) {
      return { ...state, ...action.payload };
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
