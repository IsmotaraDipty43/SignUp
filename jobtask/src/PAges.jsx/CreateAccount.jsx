import React from 'react';
import { Link } from 'react-router-dom';

const CreateAccount = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-96 p-5 h-[800px] bg-[#f7f8f9]  border border-gray-300 flex flex-col">
        <h2 className="text-3xl text-left font-bold text-[#1d2226] pl-2 mb-5">
          Create your <br />
          PopX account
        </h2>
        <form className="flex flex-col h-full">
          <div className="space-y-4 flex-grow">
            <div className="relative p-2">
              <label className="text-sm font-medium absolute bg-[#f7f8f9] p-1 top-0 right-58 text-[#7b3cfe]">
                Full Name<span className="text-red-500 mr-4">*</span>
              </label>
              <input
                type="text"
                className="w-full p-2 border font-semibold rounded-md bg-[#f7f8f9] text-[#383c40] mt-1"
                placeholder="Marry Doe"
              />
            </div>
            <div className="relative p-2">
              <label className="text-sm font-medium absolute bg-[#f7f8f9] p-1 top-0 right-50 text-[#7b3cfe]">
                Phone Number<span className="text-red-500 mr-4">*</span>
              </label>
              <input
                type="text"
                className="w-full p-2 border font-semibold rounded-md bg-[#f7f8f9] text-[#383c40] mt-1"
                placeholder="Marry Doe"
              />
            </div>
            <div className="relative p-2">
              <label className="text-sm font-medium absolute bg-[#f7f8f9] p-1 top-0 right-66 text-[#7b3cfe]">
                Email<span className="text-red-500 mr-4">*</span>
              </label>
              <input
                type="text"
                className="w-full p-2 border font-semibold rounded-md bg-[#f7f8f9] text-[#383c40] mt-1"
                placeholder="Marry Doe"
              />
            </div>

            <div className="relative p-2">
              <label className="text-sm font-medium absolute bg-[#f7f8f9] p-1 top-0 right-60 text-[#7b3cfe]">
                Password<span className="text-red-500 mr-4">*</span>
              </label>
              <input
                type="text"
                className="w-full p-2 border font-semibold rounded-md bg-[#f7f8f9] text-[#383c40] mt-1"
                placeholder="Marry Doe"
              />
            </div>

            <div className="relative p-2">
              <label className="text-sm font-medium absolute bg-[#f7f8f9] p-1 top-0 right-49 text-[#7b3cfe]">
                Company Name<span className="text-red-500 mr-4">*</span>
              </label>
              <input
                type="text"
                className="w-full p-2 border font-semibold rounded-md bg-[#f7f8f9] text-[#383c40] mt-1"
                placeholder="Marry Doe"
              />
            </div>

            <div>
              <h1 className="text-left text-sm font-medium text-[#383c40] ml-2">
                Are you an Agency?<span className="text-red-500">*</span>
              </h1>

              <div className="flex items-center space-x-5 ml-2 mt-2">
                <label className="flex items-center space-x-2">
                  <input type="radio" name="agency" className="accent-[#7b3cfe]" />
                  <span className="text-[#383c40]">Yes</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="agency" className="accent-[#7b3cfe]" />
                  <span className="text-[#383c40]">No</span>
                </label>
              </div>
            </div>
          </div>

          {/* Button at the bottom */}
          <Link to='/profile'>    <button className="w-full bg-[#6c25ff] text-white font-bold p-2 rounded-md mt-auto">
            Create Account
          </button> </Link>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
