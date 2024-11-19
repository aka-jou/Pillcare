import React from "react";
import { Link } from "react-router-dom";
import Notifications from "./Notifications";

function Header() {
  return (
    <div className="flex justify-between items-center p-4 bg-[#FDFDFD] mb-12 rounded-xl shadow-lg">
      <h1 className="text-2xl font-semibold text-teal-700">Home</h1>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search here"
          className="p-2 border rounded-md focus:outline-none"
        />

        <Notifications />

        <div className="flex items-center space-x-2">
          <Link to="/user" className="text-gray-700 no-underline">
            Jhon Willis
          </Link>
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
