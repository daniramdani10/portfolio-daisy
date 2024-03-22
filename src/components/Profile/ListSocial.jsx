import React from "react";

const ListSocial = ({ link, children }) => {
  return (
    <a
      href={link}
      className="text-xs px-3 py-2 rounded-md bg-base-100 hover:scale-110"
    >
      {/* <InstagramLogo size={20} /> */}
      {children}
    </a>
  );
};

export default ListSocial;
