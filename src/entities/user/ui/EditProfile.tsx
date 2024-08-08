// // src/entities/user/ui/EditProfile.tsx
// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState, AppDispatch } from "../../../app/store";
// import { updateUser } from "../model/userSlice";

// const EditProfile: React.FC = () => {
//   const dispatch: AppDispatch = useDispatch();
//   const user = useSelector((state: RootState) => state.user.user);

//   const [name, setName] = useState(user?.name || "");
//   const [email, setEmail] = useState(user?.email || "");
//   const [bio, setBio] = useState(user?.bio || "");

//   const handleSubmit = () => {
//     dispatch(updateUser({ name, email, bio }));
//   };

//   return (
//     <div>
//       {/* <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       /> */}
//       {/* <textarea value={bio} onChange={(e) => setBio(e.target.value)} /> */}
//       <button onClick={handleSubmit}>Save</button>
//     </div>
//   );
// };

// export default EditProfile;
