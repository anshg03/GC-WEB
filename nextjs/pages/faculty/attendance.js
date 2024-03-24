import React,{useState} from 'react'
import Facultylayout from '../components/facultylayout'

function AttendanceBody(){
    const [branch, setbranch] = useState('');
    const [year, setYear] = useState(0);
    const [students, setStudents] = useState([]);
    const [date, setDate] = useState(new Date());

    // Dummy data for demonstration
    const dummyStudents = [
      { rollno: 1, name: 'John Doe', branch: 'Computer Science', year: 2020},
      { rollno: 2, name: 'Alice Smith', branch: 'Electrical Engineering', year: 2021},
      { rollno: 3, name: 'Michael Johnson', branch: 'Mechanical Engineering', year: 2022},
      { rollno: 4, name: 'Emily Brown', branch: 'Civil Engineering', year: 2023},
      { rollno: 5, name: 'Emma Wilson', branch: 'Chemical Engineering', year: 2024},
      { rollno: 6, name: 'Daniel Taylor', branch: 'Computer Science', year: 2020},
      { rollno: 7, name: 'Olivia White', branch: 'Electrical Engineering', year: 2021},
      { rollno: 8, name: 'Matthew Martinez', branch: 'Mechanical Engineering', year: 2022},
      { rollno: 9, name: 'Sophia Anderson', branch: 'Civil Engineering', year: 2023},
      { rollno: 10, name: 'James Jackson', branch: 'Chemical Engineering', year: 2024}
  ];
  

  const branchNames = [
      'Computer Science',
      'Electrical Engineering',
      'Mechanical Engineering',
      'Civil Engineering',
      'Chemical Engineering',
      'Biomedical Engineering',
      'Physics',
      'Mathematics',
      'Chemistry',
      'Biology',
  ];

  const yearStudents = [
      2020,2021,2022,2023,2024
    ];
 

    // Function to handle marking attendance
    const handleMarkAttendance = (studentRollno) => {
        const updatedStudents = students.map(student => {
            if (student.rollno === studentRollno) {
                return { ...student, present: !student.present };
            }
            return student;
        });
        setStudents(updatedStudents);
    };

    // Function to fetch students based on branch, year, and section
    function getStudentsForYearBranchSection(year,branch) {
      // Filter the dummyStudents array based on the provided criteria
      const filteredStudents = dummyStudents.filter(student => {
        return (
            student &&
            student.year == year &&
            student.branch == branch
        );
    });

    setStudents(filteredStudents);
  }
    

    return (
        <div className="max-w-2xl mx-auto mt-4">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">Mark Attendance</h2>
            <div className="grid grid-cols-2 gap-4">
                <div className="mb-2">
                    <label htmlFor="creationDate" className="block md-1 font-semibold mb-1">Date:</label>
                    <input type="date" id="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} required className="w-full px-3 py-2 rounded border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200" />
                </div>
                <div>
                    <label htmlFor="branch" className="block font-semibold mb-1">Branch:</label>
                    <select id="branch" name="branch" value={branch} onChange={(e) => setbranch(e.target.value)} className="w-full px-3 py-2 rounded border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200">
                        <option value="">Select branch</option>
                        {branchNames.map((branch,index)=> (
                          <option key={index} value={branch}>{branch}</option>
                        ))}  
                       
                    </select>
                </div>

                <div>
                    <label htmlFor="year" className="block font-semibold mb-1">Year:</label>
                    <select  value={year} onChange={(e) => setYear(e.target.value)} className="w-full px-3 py-2 rounded border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200">
                        <option value="">Select Year</option>
                        {yearStudents.map((year,index)=> (
                          <option key={index} value={year}>{year}</option>
                        ))}            
                    </select>
                </div>
                
                <div className="col-span-2 flex justify-center items-center mt-2">
                    <button onClick={()=> {getStudentsForYearBranchSection(year,branch)}} className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition-colors duration-300">Fetch Students</button>
                </div>
            </div>

            {students.length > 0 ? (
                <table className="w-full border-collapse border-2 border-gray-400 mt-6 rounded">
                    <thead >
                        <tr>
                            <th className="border border-gray-400 px-4 py-2">Roll no.</th>
                            <th className="border border-gray-400 px-4 py-2">Student Name</th>
                            <th className="border border-gray-400 px-4 py-2">Present</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map(student => (
                            <tr key={student.rollno}>
                                <td className="border border-gray-200 text-center py-2">{student.rollno}</td>
                                <td className="border border-gray-200 text-center py-2">{student.name}</td>
                                <td className="border border-gray-200 text-center py-2">
                                    <input type="checkbox" className='w-4 h-4' checked={student.present} onChange={() => handleMarkAttendance(student.rollno)} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className='mt-6'>No students available.</p>
            )}
        </div>
    );
}

function Attendance() {
  return (
    <>
      <Facultylayout >
        <AttendanceBody/>
      </Facultylayout>
    </>
  )
}

export default Attendance
