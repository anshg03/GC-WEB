import React, { useState } from 'react';
import Adminlayout from '../../components/adminlayout';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Link from 'next/link';

const AddFacultyForm = ({ onAddFaculty }) => {
  const [Faculty, setFaculty] = useState({
    username:'',
    password:'',
    dob:'',
    rollno: '',
    name: '',
    branch: '',
    year: '',
    subjects: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFaculty(prevFaculty => ({
      ...prevFaculty,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    if (!Faculty.rollno || !Faculty.name || !Faculty.branch || !Faculty.year || !Faculty.subjects) {
      alert('Please fill in all fields');
      return;
    }
    // Call the parent component's function to add the new Faculty
    onAddFaculty(Faculty);
    // Clear form fields after submission
    setFaculty({
      username:'',
      password:'',
      rollno: '',
      dob:'',
      name: '',
      branch: '',
      year: '',
      subjects: ''
    });
  };

  return (
    <div className="container mx-auto px-4">
      <button className='font-bold text-sm text-yellow-500'><Link href="/admin/facultys"> <ArrowBackIosIcon/>Back </Link></button>
  <h1 className="text-2xl font-bold mb-2 text-center text-green-500">Add New Faculty</h1>
  <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <div className="mb-1">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rollno">
        Username
      </label>
      <input
        type="text"
        placeholder="Username"
        name="rollno"
        value={Faculty.username}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
    <div className="mb-1">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rollno">
        Password
      </label>
      <input
        type="text"
        placeholder="Password"
        name="rollno"
        value={Faculty.password}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
    <div className="mb-1">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rollno">
        Roll No
      </label>
      <input
        type="text"
        placeholder="Rollno"
        name="rollno"
        value={Faculty.rollno}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
    <div className="mb-1">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
        Name
      </label>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={Faculty.name}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
    <div className="mb-1">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="branch">
        Date Of Birth
      </label>
      <input
        type="date"
        placeholder="Date Of Birth"
        name="branch"
        value={Faculty.dob}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
    <div className="mb-1">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="branch">
        Branch
      </label>
      <input
        type="text"
        placeholder="Branch"
        name="branch"
        value={Faculty.branch}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
    <div className="mb-1">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="year">
        Year
      </label>
      <input
        type="text"
        placeholder="Year"
        name="year"
        value={Faculty.year}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
    <div className="mb-1">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subjects">
        Subjects
      </label>
      <input
        type="text"
        placeholder="Subjects"
        name="subjects"
        value={Faculty.subjects}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
    <div className="col-span-full">
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
      >
        Add Faculty
      </button>
    </div>
  </form>
</div>

  );
};

function AddFaculty() {
  return (
    <Adminlayout>
        <AddFacultyForm/>
    </Adminlayout>
  )
}

export default AddFaculty

