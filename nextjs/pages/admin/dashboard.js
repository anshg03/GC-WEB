import React from 'react';
import Adminlayout from '../components/adminlayout';

const AdminDashboard = () => {

    const adminDetails = {
        name: "John Doe",
        contactNumber: "+1234567890",
        gender:"male",
        email: "john.doe@example.com",
        dob: "03-10-1993",
        joiningYear: "2015",
        department: "Administration"
      };


  return (
    <div className="max-w-screen-lg mx-auto px-4 ">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Admin Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        
        <div className="mb-2">
          <label className="block text-gray-700 font-bold mb-2">Name:</label>
          <input
            className="bg-gray-200  border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight cursor-not-allowed"
            type="text"
            value={adminDetails.name}
            readOnly
          />
        </div>

        <div className="mb-2">
          <label className="block text-gray-700 font-bold mb-2">Email:</label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight cursor-not-allowed"
            type="email"
            value={adminDetails.email}
            readOnly
          />
        </div>
        <div className="mb-4 ">
          <label className="block text-gray-700 font-bold mb-2">Gender:</label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight cursor-not-allowed"
            type="text"
            value={adminDetails.gender}
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
            value={adminDetails.contactNumber}
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
            value={adminDetails.dob}
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
            value={adminDetails.joiningYear}
            readOnly
          />
          </div>
        </div>
      </div>
  );
}


function dashboard() {
  return (
    <Adminlayout>
        <AdminDashboard/>
    </Adminlayout>
  )
}

export default dashboard
