import React from 'react';
import { AiOutlineArrowLeft, AiFillCamera } from "react-icons/ai";
import image from '../assets/mary.jpg';

const Profile = () => {
    return (
        <section>
           <div>
           <div className="flex items-center justify-center min-h-screen">
                <div className="w-[375px] h-[800px] bg-[#f7f8f9] border border-gray-300 flex flex-col text-center">
                    <div className='w-full h-16 shadow-b-white bg-white'>
                        <h1 className='text-left mt-5 ml-3 font-semibold text-xl'>Account Setting</h1>
                    </div>

                    <div className="text-center flex gap-5 p-5">
                        <div className="relative inline-block">
                            <img
                                src={image}
                                alt="User Avatar"
                                className="w-24 h-24 rounded-full mx-auto shadow-lg"
                            />
                            <button className="absolute bottom-0 right-0 bg-[#6c25ff] text-white rounded-full p-1 border-2 border-white shadow">
                                <AiFillCamera className='bg-[#6c25ff]' size={16} />
                            </button>
                        </div>
                        <div className='text-left'>
                            <h2 className="mt-4 text-xl font-semibold text-gray-700">Marry Doe</h2>
                            <p className="text-base font-semibold text-gray-700">Marry@Gmail.com</p>
                        </div>
                    </div>

                    <p className="mt-2 font-semibold text-base text-left p-4 text-gray-600 leading-relaxed">
                        Welcome to your account settings page. Here, you can manage your personal details, update your profile picture, change your email preferences, and customize various account options to enhance your experience.
                    </p>

                    <hr className="border-dotted border-gray-300 my-4" />

                </div>
               
           
            </div>
           </div>
         
        </section>
    );
};

export default Profile;
