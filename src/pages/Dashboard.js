import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-400 to-pink-500 text-white">
      <h1 className="text-4xl font-bold mb-6">Hospitality Platform</h1>
      {/* <div className="space-x-4">
        <Link to="/profile" className="bg-white text-purple-600 px-6 py-3 rounded shadow hover:bg-gray-200">
          Profile
        </Link>
        <button
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/login";
          }}
          className="bg-red-600 px-6 py-3 rounded shadow hover:bg-red-700"
        >
          Logout
        </button>
      </div> */}
    </div>
  );
}