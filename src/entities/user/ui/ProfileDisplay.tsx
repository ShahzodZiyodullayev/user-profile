// // src/entities/user/ui/ProfileDisplay.tsx
// import React from "react";
// import { useSelector } from "react-redux";
// import { RootState } from "../../app/store";

// const ProfileDisplay: React.FC = () => {
//   const user = useSelector((state: RootState) => state.user.user);

//   if (!user) return null;

//   return (
//     <div>
//       <img src={user.profilePicture} alt="Profile" />
//       <h1>{user.name}</h1>
//       <p>{user.email}</p>
//       <p>{user.bio}</p>
//     </div>
//   );
// };

// export default ProfileDisplay;
