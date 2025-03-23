import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-[375px] h-[800px] bg-[#f7f8f9] border border-gray-300 flex flex-col p-6 text-center">
                {/* Content */}
                <h1 className="text-3xl text-left font-bold text-[#1d2226]">
                    Signin to your <br /> PopX Account
                </h1>
                <p className="text-[#b5b7ba] font-semibold text-left mt-2 text-lg mb-2">
                    Unlock new opportunities and <br /> engage with incredible individuals.
                </p>

                {/* Form */}
                <form className="flex flex-col h-full">
                    <div className="flex-grow">
                        <div className="relative pt-2 mb-2">
                            <label className="text-sm font-medium absolute bg-[#f7f8f9] p-1 top-0 right-50 text-[#7b3cfe]">
                                Email Address<span className="text-red-500 mr-4">*</span>
                            </label>
                            <input
                                type="text"
                                className="w-full p-2 border font-semibold rounded-md bg-[#f7f8f9] text-[#383c40] mt-1"
                                placeholder="Enter email address"
                            />
                        </div>

                        <div className="relative pt-2">
                            <label className="text-sm font-medium absolute bg-[#f7f8f9] p-1 top-0 right-57 text-[#7b3cfe]">
                                Password<span className="text-red-500 mr-4">*</span>
                            </label>
                            <input
                                type="text"
                                className="w-full p-2 border font-semibold rounded-md bg-[#f7f8f9] text-[#383c40] mt-1"
                                placeholder="Enter password"
                            />
                        </div>
                          {/* Submit Button */}
               <Link to='/profile'>     <button className="w-full bg-[#cbcbcb] text-white font-bold p-3 rounded-md mt-4">
                        Login
                    </button></Link>
                    </div>

                  
                </form>
            </div>
        </div>
    );
};

export default Login;
