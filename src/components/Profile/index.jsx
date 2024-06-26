import React from "react";
import ListSocial from "./ListSocial";

import {
  BehanceLogo,
  Calendar,
  DownloadSimple,
  Envelope,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  MapPin,
  Phone,
} from "@phosphor-icons/react";
import ProfileImage from "./ProfileImage";
import ListData from "./ListData";

const Profile = () => {
  const handleDownloadCV = () => {
    // Mengganti URL dengan URL tempat CV Anda tersedia
    const cvUrl = "../../public/cv/dani_ramdani.pdf";

    // Membuat sebuah elemen anchor untuk menginisiasi pengunduhan CV
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "dani_ramdani.pdf"; // Nama file CV yang akan diunduh
    document.body.appendChild(link);

    // Klik link secara otomatis untuk menginisiasi pengunduhan CV
    link.click();

    // Hapus elemen anchor setelah selesai
    document.body.removeChild(link);
  };
  return (
    <div className="flex flex-col lg:flex-row gap-2 lg:gap-7 items-center rounded h-auto md:mt-10">
      <div className="flex flex-col items-center gap-2">
        <ProfileImage />
        <ListSocial>Front-end Developer</ListSocial>
        <div className="flex gap-1">
          <ListSocial link={"https://www.instagram.com/daniramdani10/"}>
            <InstagramLogo size={20} color="#E12A57" />
          </ListSocial>
          <ListSocial link={"https://www.linkedin.com/in/dani-ramdani10/"}>
            <LinkedinLogo size={20} color="#144679" />
          </ListSocial>
          <ListSocial link={"https://github.com/daniramdani10/"}>
            <GithubLogo size={20} />
          </ListSocial>
          <ListSocial link={"behance"}>
            <BehanceLogo size={20} color="#1773EA" />
          </ListSocial>
        </div>
      </div>

      <div className="w-full flex flex-col items-center lg:items-end gap-2">
        <div className="w-full h-auto rounded-md flex flex-col gap-5 py-5 text-xs bg-base-200 ">
          <ListData label="Phone" content="+62 812 7140 0716">
            <Phone size={20} color="#238636" />
          </ListData>
          <ListData label="Email" content="ddaniramdani10@gmail.com">
            <Envelope size={20} color="#E12A57" />
          </ListData>
          <ListData label="Location" content="Indonesia, South Jakarta">
            <MapPin size={20} color="#FD7590" />
          </ListData>
          <ListData label="Birthday" content="December 10, 1997">
            <Calendar size={20} color="#1773EA" />
          </ListData>
        </div>
        <button
          onClick={handleDownloadCV}
          className="flex items-center gap-3 btn btn-primary hover:bg-neutral-700 text-white px-5 py-2 w-max rounded-md mt-2 text-xs "
        >
          <DownloadSimple size={24} />
          Download CV
        </button>
      </div>
    </div>
  );
};

export default Profile;
