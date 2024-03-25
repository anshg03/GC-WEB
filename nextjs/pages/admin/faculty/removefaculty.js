import React,{useState} from 'react'
import Adminlayout from '../../components/adminlayout'
import Link from 'next/link'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const RemoveFacultyComponent = ({ Faculty, setFaculty }) => {
  const [formData, setFormData] = useState({
    username: '',
    rollno: ''
  });

  const dummyFaculty = [
    { rollno: 1, username:'johndoe', name: 'John Doe', branch: 'Computer Science', year: 2020, subjects: ['Introduction to Computer Science', 'Data Structures and Algorithms'] },
    { rollno: 2, username:'alicesmith', name: 'Alice Smith', branch: 'Electrical Engineering', year: 2021, subjects: ['Electrical Circuits', 'Digital Electronics'] },
    { rollno: 3, username:'michaeljohnson', name: 'Michael Johnson', branch: 'Mechanical Engineering', year: 2022, subjects: ['Thermodynamics', 'Fluid Mechanics'] },
    { rollno: 4, username:'emilybrown', name: 'Emily Brown', branch: 'Civil Engineering', year: 2023, subjects: ['Structural Engineering', 'Transportation Engineering'] },
    { rollno: 5, username:'emmawilson', name: 'Emma Wilson', branch: 'Chemical Engineering', year: 2024, subjects: ['Chemical Reactions', 'Organic Chemistry'] },
    { rollno: 6, username:'danieltaylor', name: 'Daniel Taylor', branch: 'Computer Science', year: 2020, subjects: ['Introduction to Computer Science', 'Data Structures and Algorithms'] },
    { rollno: 7, username:'oliviawhite', name: 'Olivia White', branch: 'Electrical Engineering', year: 2021, subjects: ['Electrical Circuits', 'Digital Electronics'] },
    { rollno: 8, username:'matthewmatrinez', name: 'Matthew Martinez', branch: 'Mechanical Engineering', year: 2022, subjects: ['Thermodynamics', 'Fluid Mechanics'] },
    { rollno: 9, username:'sophiaanderson', name: 'Sophia Anderson', branch: 'Civil Engineering', year: 2023, subjects: ['Structural Engineering', 'Transportation Engineering'] },
    { rollno: 10, username:'jamesjackson', name: 'James Jackson', branch: 'Chemical Engineering', year: 2024, subjects: ['Chemical Reactions', 'Organic Chemistry'] }
];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, rollno } = formData;

    // Check if Faculty exists in the list
     //write logic for removing Faculty
      // alert(`Faculty with roll number ${rollno} removed successfully.`);
    

    // Clear the form fields
    setFormData({
      username: '',
      rollno: ''
    });
  };

  return (
    <div className="container mx-auto px-4">
      <button className='font-bold text-sm text-yellow-500'><Link href="/admin/facultys"> <ArrowBackIosIcon/>Back </Link></button>
      <h1 className="mt-4 text-2xl font-bold mb-4 text-red-500">Remove Faculty</h1>
      <form onSubmit={handleSubmit} className="max-w-sm">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rollno">
            Roll No
          </label>
          <input
            type="text"
            id="rollno"
            name="rollno"
            value={formData.rollno}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Remove Faculty
          </button>
        </div>
      </form>
    </div>
  );
};

function RemoveFaculty() {
  return (
    <Adminlayout>
        <RemoveFacultyComponent/>
    </Adminlayout>
  )
}

export default RemoveFaculty