import React from "react";
import Facultylayout from "../components/facultylayout";
import PersonIcon from '@mui/icons-material/Person';

function ProfileBody() {
  const facultyInfo = {
    name: "John Doe",
    email: "johndoe@example.com",
    gender: "Male",
    branch: "Computer Science",
    designation: "Professor",
    contactNumber: "+1234567890",
    dob: "January 1, 1980",
    joiningYear: "2010",
  };

  return (
    <div className="max-w-screen-lg mx-auto px-4 ">
      <h2 className="text-2xl font-bold mb-4 text-blue-600"><PersonIcon className="text-4xl pb-1"/> Faculty Profile</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        
        <div className="mb-2">
          <label className="block text-gray-700 font-bold mb-2">Name:</label>
          <input
            className="bg-gray-200  border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight cursor-not-allowed"
            type="text"
            value={facultyInfo.name}
            readOnly
          />
        </div>

        <div className="mb-2">
          <label className="block text-gray-700 font-bold mb-2">Email:</label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight cursor-not-allowed"
            type="email"
            value={facultyInfo.email}
            readOnly
          />
        </div>
        <div className="mb-4 ">
          <label className="block text-gray-700 font-bold mb-2">Gender:</label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight cursor-not-allowed"
            type="text"
            value={facultyInfo.gender}
            readOnly
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 font-bold mb-2">Branch:</label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight cursor-not-allowed"
            type="text"
            value={facultyInfo.branch}
            readOnly
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 font-bold mb-2">
            Designation:
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight cursor-not-allowed"
            type="text"
            value={facultyInfo.designation}
            readOnly
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 font-bold mb-2">
            Contact Number:
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight cursor-not-allowed"
            type="text"
            value={facultyInfo.contactNumber}
            readOnly
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 font-bold mb-2">
            Date of Birth:
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight cursor-not-allowed"
            type="text"
            value={facultyInfo.dob}
            readOnly
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 font-bold mb-2">
            Joining Year:
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight cursor-not-allowed"
            type="text"
            value={facultyInfo.joiningYear}
            readOnly
          />
          </div>
        </div>
      </div>
  );
}

function profile() {
  return (
    <>
      <Facultylayout>
        <ProfileBody />
      </Facultylayout>
    </>
  );
}

export default profile;
