// // src/features/userProfile/ui/UserProfile.tsx
// import React, { useState } from "react";
// import ProfileDisplay from "../../../entities/user/ui/ProfileDisplay";
// import EditProfile from "../../../entities/user/ui/EditProfile";
// import ToggleView from "../../../shared/ui/ToggleView";

// const UserProfile: React.FC = () => {
//   const [isEditing, setIsEditing] = useState(false);

//   return (
//     <div>
//       <ToggleView isEditing={isEditing} setIsEditing={setIsEditing} />
//       {isEditing ? <EditProfile /> : <ProfileDisplay />}
//     </div>
//   );
// };

// export default UserProfile;
