import React, { useContext } from 'react';
import { AuthContext } from '../Context/UserContext';

const Profile = () => {
      const { user } = useContext(AuthContext);
      const { displayName, emailVerified, photoURL, uid, email } = user;

    return (
      <div className="flex flex-col lg:flex-row items-center my-10 w-fit bg-slate-300 mx-auto p-3 rounded-lg">
        <div className="lg:pr-3 mb-5 lg:m-0">
          <img
            src={
        user?.photoURL
                ? photoURL
                : "https://cdn.vectorstock.com/i/1000x1000/25/72/picture-coming-soon-icon-vector-31612572.webp"
            }
            alt="Profile"
            referrerPolicy="no-referrer"
            className="object-cover object-center w-96 rounded dark:bg-gray-500"
          />
        </div>
        <div className="flex flex-col gap-2 text-black">
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="text-2xl font-semibold">
              {displayName ? displayName : "Name Not Available"}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
              />
            </svg>

            {email ? (
              <span className="dark:text-gray-400">{email}</span>
            ) : (
              <span className="text-red-700">No Email Found</span>
            )}
          </div>
          <div className="flex items-center gap-3">
            <p>UID :</p>
            <span className="dark:text-gray-400">{uid}</span>
          </div>
          <div className="flex items-center gap-3">
            <p>Email Verified :</p>
            <span className="dark:text-gray-400">
              {emailVerified ? (
                <span className="text-green-800">Verified</span>
              ) : (
                <span className="text-red-800">Not Verified</span>
              )}
            </span>
          </div>
        </div>
      </div>
    );
};

export default Profile;