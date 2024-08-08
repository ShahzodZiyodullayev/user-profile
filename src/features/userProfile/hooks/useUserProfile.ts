// // src/features/userProfile/hooks/useUserProfile.ts
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { useQuery } from "react-query";
// import { fetchUser } from "../../../entities/user/api/fetchUser";
// import { setUser } from "../../../entities/user/model/userSlice";

// export const useUserProfile = () => {
//   const dispatch = useDispatch();
//   const { data, isLoading } = useQuery("userProfile", fetchUser);

//   useEffect(() => {
//     if (data) {
//       dispatch(setUser(data));
//     }
//   }, [data, dispatch]);

//   return { user: data, isLoading };
// };
