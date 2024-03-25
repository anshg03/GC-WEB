import React,{useState} from 'react'
import Adminlayout from '../../components/adminlayout'
import Link from 'next/link';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function AllCoursesComponent(){
    const dummyCourses = [
        {
          subjectName: 'Introduction to Computer Science',
          subjectCode: 'CS101',
          department: 'Computer Science',
          totalLectures: 30,
          year: 2022,
          attendance: '75%',
          instructorName: 'John Doe',
          credits: 3
        },
        {
          subjectName: 'Data Structures and Algorithms',
          subjectCode: 'CS201',
          department: 'Computer Science',
          totalLectures: 35,
          year: 2022,
          attendance: '80%',
          instructorName: 'Alice Smith',
          credits: 4
        },
        {
          subjectName: 'Electrical Circuits',
          subjectCode: 'EE101',
          department: 'Electrical Engineering',
          totalLectures: 28,
          year: 2022,
          attendance: '70%',
          instructorName: 'Michael Johnson',
          credits: 3
        },
        {
          subjectName: 'Digital Electronics',
          subjectCode: 'EE201',
          department: 'Electrical Engineering',
          totalLectures: 32,
          year: 2022,
          attendance: '75%',
          instructorName: 'Olivia White',
          credits: 4
        },
        {
          subjectName: 'Thermodynamics',
          subjectCode: 'ME101',
          department: 'Mechanical Engineering',
          totalLectures: 27,
          year: 2022,
          attendance: '68%',
          instructorName: 'Matthew Martinez',
          credits: 3
        },
        {
          subjectName: 'Fluid Mechanics',
          subjectCode: 'ME201',
          department: 'Mechanical Engineering',
          totalLectures: 31,
          year: 2022,
          attendance: '72%',
          instructorName: 'Sophia Anderson',
          credits: 4
        }
      ];
      
    
      return (
        <div className="container mx-auto px-2">
            <button className='font-bold text-sm text-yellow-500'><Link href="/admin/courses"> <ArrowBackIosIcon/>Back </Link></button>
          <h1 className="text-2xl font-bold mb-4 text-blue-600 text-center">Courses</h1>
          <table className="w-full border-collapse border border-gray-400">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-400 px-4 py-2 text-sm">Subject Name</th>
                <th className="border border-gray-400 px-4 py-2 text-sm">Subject Code</th>
                <th className="border border-gray-400 px-4 py-2 text-sm">Department</th>
                <th className="border border-gray-400 px-4 py-2 text-sm">Total Lectures</th>
                <th className="border border-gray-400 px-4 py-2 text-sm">Year</th>
                <th className="border border-gray-400 px-4 py-2 text-sm">Attendance</th>
                <th className="border border-gray-400 px-4 py-2 text-sm">Instructor Name</th>
                <th className="border border-gray-400 px-4 py-2 text-sm">Credits</th>
              </tr>
            </thead>
            <tbody>
              {dummyCourses.map((course, index) => (
                <tr key={index}>
                  <td className="border border-gray-400 px-4 py-2 text-sm">{course.subjectName}</td>
                  <td className="border border-gray-400 px-4 py-2 text-sm">{course.subjectCode}</td>
                  <td className="border border-gray-400 px-4 py-2 text-sm">{course.department}</td>
                  <td className="border border-gray-400 px-4 py-2 text-sm">{course.totalLectures}</td>
                  <td className="border border-gray-400 px-4 py-2 text-sm">{course.year}</td>
                  <td className="border border-gray-400 px-4 py-2 text-sm">{course.attendance}</td>
                  <td className="border border-gray-400 px-4 py-2 text-sm">{course.instructorName}</td>
                  <td className="border border-gray-400 px-4 py-2 text-sm">{course.credits}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    };

function AllCourses() {
  return (
    <Adminlayout>
        <AllCoursesComponent/>
    </Adminlayout>
  )
}

export default AllCourses
