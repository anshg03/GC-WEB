import React, { useState, useEffect } from "react";
import Adminlayout from "../../components/adminlayout";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Link from "next/link";

function AllStudentsBody(){
    const [students, setStudents] = useState([]);
    const dummyStudents = [
      {
        name: 'John Doe',
        email: 'john@example.com',
        rollno: 'CS101',
        year: 2022,
        subjects: ['Mathematics', 'Computer Science', 'Physics'],
        gender: 'Male',
        branch: 'Computer Science',
        contactNumber: '1234567890',
        dob: '1998-05-15'
      },
      {
        name: 'Alice Smith',
        email: 'alice@example.com',
        rollno: 'EE101',
        year: 2023,
        subjects: ['Electrical Circuits', 'Digital Electronics'],
        gender: 'Female',
        branch: 'Electrical Engineering',
        contactNumber: '9876543210',
        dob: '1999-07-20'
      },
      {
        name: 'Michael Johnson',
        email: 'michael@example.com',
        rollno: 'ME101',
        year: 2024,
        subjects: ['Thermodynamics', 'Fluid Mechanics'],
        gender: 'Male',
        branch: 'Mechanical Engineering',
        contactNumber: '8765432109',
        dob: '1997-12-10'
      },
      {
        name: 'Emily Brown',
        email: 'emily@example.com',
        rollno: 'CE101',
        year: 2022,
        subjects: ['Structural Engineering', 'Transportation Engineering'],
        gender: 'Female',
        branch: 'Civil Engineering',
        contactNumber: '2345678901',
        dob: '2000-03-25'
      },
      {
        name: 'Emma Wilson',
        email: 'emma@example.com',
        rollno: 'CH101',
        year: 2023,
        subjects: ['Chemical Reactions', 'Organic Chemistry'],
        gender: 'Female',
        branch: 'Chemical Engineering',
        contactNumber: '7890123456',
        dob: '1998-09-05'
      },
      {
        name: 'Daniel Taylor',
        email: 'daniel@example.com',
        rollno: 'CS102',
        year: 2024,
        subjects: ['Data Structures and Algorithms', 'Web Development'],
        gender: 'Male',
        branch: 'Computer Science',
        contactNumber: '3456789012',
        dob: '1999-11-30'
      },
      {
        name: 'Olivia White',
        email: 'olivia@example.com',
        rollno: 'EE102',
        year: 2022,
        subjects: ['Electromagnetic Theory', 'Power Systems'],
        gender: 'Female',
        branch: 'Electrical Engineering',
        contactNumber: '8901234567',
        dob: '2001-01-20'
      },
      {
        name: 'Matthew Martinez',
        email: 'matthew@example.com',
        rollno: 'ME102',
        year: 2023,
        subjects: ['Heat Transfer', 'Machine Design'],
        gender: 'Male',
        branch: 'Mechanical Engineering',
        contactNumber: '5678901234',
        dob: '1997-08-15'
      },
      {
        name: 'Sophia Anderson',
        email: 'sophia@example.com',
        rollno: 'CE102',
        year: 2024,
        subjects: ['Geotechnical Engineering', 'Environmental Engineering'],
        gender: 'Female',
        branch: 'Civil Engineering',
        contactNumber: '9012345678',
        dob: '1998-04-10'
      },
      {
        name: 'James Jackson',
        email: 'james@example.com',
        rollno: 'CH102',
        year: 2022,
        subjects: ['Chemical Engineering Thermodynamics', 'Process Control'],
        gender: 'Male',
        branch: 'Chemical Engineering',
        contactNumber: '6789012345',
        dob: '2000-06-20'
      }
    ];
    
    
    return(
        <div className="container mx-auto">
            <button className='font-bold text-sm text-yellow-500'><Link href="/admin/students"> <ArrowBackIosIcon/>Back </Link></button>
      <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">All Students</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-md overflow-auto max-h-[450px]">
          <thead className="bg-gray-500 text-black border-white">
            <tr>
              <th className="px-4 py-2 text-center">Roll No.</th>
              <th className="px-4 py-2 text-center">Name</th>
              <th className="px-4 py-2 text-center">Branch</th>
              <th className="px-4 py-2 text-center">Year</th>
              {/* <th className="px-4 py-2 text-center">Subjects</th> */}
            </tr>
          </thead>
          <tbody className="bg-gray-100 max-h-[450px] overflow-auto">
            {students.map((student) => (
              <tr key={student.rollno}>
                <td className="border px-4 py-2 text-center text-sm">
                  {student.rollNumber}
                </td>
                <td className="border px-4 py-2 text-sm">{student.name}</td>
                <td className="border px-4 py-2 text-sm">{student.branch}</td>
                <td className="border px-4 py-2 text-sm">{student.year}</td>
                {/* <td className="border px-4 py-2 text-sm">
                  {student.subjects.join(", ")}
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function AllStudents() {
  return (
    <Adminlayout>
      <AllStudentsBody />
    </Adminlayout>
  );
}

export default AllStudents;
