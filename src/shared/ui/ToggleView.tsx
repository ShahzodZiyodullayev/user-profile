// src/shared/ui/ToggleView.tsx
import React from "react";

interface ToggleViewProps {
  isEditing: boolean;
  setIsEditing: (value: boolean) => void;
}

const ToggleView: React.FC<ToggleViewProps> = ({ isEditing, setIsEditing }) => {
  return (
    <button onClick={() => setIsEditing(!isEditing)}>
      {isEditing ? "View Profile" : "Edit Profile"}
    </button>
  );
};

export default ToggleView;
