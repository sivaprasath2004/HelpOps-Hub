
'use client'
import React, { useContext, useState } from 'react'
import "@stylesheets/profilepage.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPen } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { Context } from '@context/store';
import EditProfileModal from './EditProfileModal';
export default function ProfilepageDetails() {
   // Extract user data from context
  const { userName, userEmail, userImage, designation, caption, github, linkedin ,theme} = useContext(Context);

  // State to control the visibility of the edit profile modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    // Function to open the modal
    const handleOpenModal = () => {
      setIsModalOpen(true);
    };
  // Function to close the modal
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
    // Function to handle saving changes from the modal
    const handleSaveChanges = (updatedData) => {
      // Update the user data logic here
      console.log(updatedData);
    };

    // Prepare user data for the modal
    const userData = {
      userName,
      userEmail,
      userImage: userImage.length > 0 ? userImage : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81iX4Mo49Z3oCPSx-GtgiMAkdDop2uVmVvw&s',
      designation,
      caption,
      github,
      linkedin
    };
  return (
   <div className={`${theme?"":"bg-[#1e1d1d]  text-white " }`}>
    {/* Edit Profile button */}
   <div className="absolute top-[20px] right-[20px] flex items-center gap-[5px] font-bold text-[13px] md:text-[20px] text-[rgb(29,29,201)] transition-all duration-300 ease-in-out cursor-pointer hover:text-[rgb(36,36,160)] hover:underline" onClick={handleOpenModal}>
          <span className={`text-[10px] md:text-[14px] ${theme?"text-[#1d1dc9]":"text-white"}`}>
            <FontAwesomeIcon icon={faPen} />
          </span>
          <p className={`${theme?"text-[#1d1dc9]":"text-white"}`}>Edit Profile</p>
        </div>
        {/* Profile picture section */}
        <div className="flex justify-center items-center mt-[-140px] md:mt-[-180px]">
          <img
            src={userImage.length>0?userImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81iX4Mo49Z3oCPSx-GtgiMAkdDop2uVmVvw&s'}
            alt="Profile Picture"
            className="border-[15px] border-[rgb(162,160,160)] w-[140px] h-[140px] md:w-[200px] md:h-[200px] rounded-full object-cover overflow-hidden"
          />
       
        </div>
         {/* Profile details section */}
        <div className={`flex flex-col justify-center items-center   ${theme?"":"bg-[#1e1d1d] text-white"}`}>
        <p  className="mt-[20px] text-[10px] md:text-[12px]">mail: {userEmail}</p>
          <h1  className={`mt-[5px] text-[24px] md:text-[32px] font-bold `}>{userName}</h1>
          <p className={`mt-[5px] text-[18px] font-bold ${theme?"text-[#5a5151]":"text-white"}`}>Software Engineer</p>
          
          <p className={`mt-[10px] text-[14px] font-medium  text-center ${theme?"text-[#5a5151]":"text-white"}`}>
            Creating visually appealing and highly functional software that bridges technology and user needs.
          </p>
           {/* Social media icons */}
          <div className="flex justify-around items-center w-full mt-[20px]">
            <div className={`w-full border-r-[1px] border-[rgb(94,94,94)] flex flex-col items-center justify-center text-[30px] cursor-pointer transition-all duration-300 ease-in-out hover:text-[#1a1a1a] hover:translate-y-[-5px] ${theme?"hover:text-[#1a1a1a]":"hover:text-[#635e5e]"}`} title="nishantkaushal0708@gmail.com">
              <p>
                <FontAwesomeIcon icon={faEnvelope} />
              </p>
         
            </div>
            <div className={`w-full border-r-[1px] border-[rgb(94,94,94)] flex flex-col items-center justify-center text-[30px] cursor-pointer transition-all duration-300 ease-in-out hover:text-[#1a1a1a] hover:translate-y-[-5px] ${theme?"hover:text-[#1a1a1a]":"hover:text-[#635e5e]"}`} title="nishantkaushal0708@gmail.com">
              <p>
                <FontAwesomeIcon icon={faGithub} />
              </p>
           
            </div>
            <div className={`w-full flex flex-col items-center justify-center text-[30px] cursor-pointer transition-all duration-300 ease-in-out hover:text-[#1a1a1a] hover:translate-y-[-5px] ${theme?"hover:text-[#1a1a1a]":"hover:text-[#635e5e]"}`}  title="nishantkaushal0708@gmail.com">
              <p>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </p>
              
            </div>
          </div>
           {/* Edit Profile Modal component */}
          <EditProfileModal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        userData={userData}
        onSave={handleSaveChanges}
      />
        </div>
   </div>
  )
}