import React from "react";

const ProfileImage = () => {
  return (
    <>
      <img
        src="./images/profile.jpg"
        alt="profile"
        className="w-52 h-52 object-cover rounded-lg mt-5"
      />
      <div className="text-xl font-bold font-poppins">Dani Ramdani</div>
    </>
  );
};

export default ProfileImage;
