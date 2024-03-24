import React,{useState} from 'react'
import Facultylayout from '../components/facultylayout'
import AddIcon from '@mui/icons-material/Add';

function AssignmentBody(){
  const [assignmentNumber, setAssignmentNumber] = useState('');
    const [subjectCode, setSubjectCode] = useState('');
    const [department, setDepartment] = useState('');
    const [year, setYear] = useState('');
    const [totalMarks, setTotalMarks] = useState('');
    const [creationDate, setCreationDate] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [section, setSection] = useState('');
    const [file, setFile] = useState(null);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Perform assignment creation logic here
        console.log("Assignment creation logic goes here...");
    };

   return (
        <div className="max-w-2xl mx-auto mt-2">
            <h2 className="text-2xl font-bold mb-4 text-blue-600 "><AddIcon className='text-3xl pb-1 '/>Create New Assignment </h2>
            <form onSubmit={handleFormSubmit} className="grid grid-cols-2 gap-4">
                <div className="mb-2">
                    <label htmlFor="assignmentNumber" className="block md-1 font-semibold">Assignment No.:</label>
                    <input type="text" id="assignmentNumber" name="assignmentNumber" value={assignmentNumber} onChange={(e) => setAssignmentNumber(e.target.value)} required className="w-full px-3 py-2 rounded border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200" />
                </div>
                <div className="mb-2">
                    <label htmlFor="subjectCode" className="block md-1 font-semibold">Subject Code:</label>
                    <input type="text" id="subjectCode" name="subjectCode" value={subjectCode} onChange={(e) => setSubjectCode(e.target.value)} required className="w-full px-3 py-2 rounded border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200" />
                </div>
                <div className="mb-2">
                    <label htmlFor="department" className="block md-1 font-semibold">Department:</label>
                    <input type="text" id="department" name="department" value={department} onChange={(e) => setDepartment(e.target.value)} required className="w-full px-3 py-2 rounded border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200" />
                </div>
                <div className="mb-2">
                    <label htmlFor="year" className="block md-1 font-semibold">Year:</label>
                    <input type="text" id="year" name="year" value={year} onChange={(e) => setYear(e.target.value)} required className="w-full px-3 py-2 rounded border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200" />
                </div>
                <div className="mb-2">
                    <label htmlFor="totalMarks" className="block md-1 font-semibold">Total Marks:</label>
                    <input min={0} type="number" id="totalMarks" name="totalMarks" value={totalMarks} onChange={(e) => setTotalMarks(e.target.value)} required className="w-full px-3 py-2 rounded border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200" />
                </div>
                <div className="mb-2">
                    <label htmlFor="creationDate" className="block md-1 font-semibold">Date of Creation:</label>
                    <input type="date" id="creationDate" name="creationDate" value={creationDate} onChange={(e) => setCreationDate(e.target.value)} required className="w-full px-3 py-2 rounded border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200" />
                </div>
                <div className="mb-2">
                    <label htmlFor="dueDate" className="block md-1 font-semibold">Due Date:</label>
                    <input type="date" id="dueDate" name="dueDate" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required className="w-full px-3 py-2 rounded border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200" />
                </div>
                <div className="mb-2">
                    <label htmlFor="section" className="block md-1 font-semibold">Section:</label>
                    <input type="text" id="section" name="section" value={section} onChange={(e) => setSection(e.target.value)} required className="w-full px-3 py-2 rounded border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200" />
                </div>
                <div className="col-span-2 mb-2">
                    <label htmlFor="file" className="block md-1 font-semibold">Upload File:</label>
                    <input type="file" id="file" name="file" onChange={(e) => setFile(e.target.files[0])} required className="w-full px-3 py-2 rounded border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200" />
                </div>
                <div className="col-span-2">
                    <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition-colors duration-300">Create Assignment</button>
                </div>
            </form>
        </div>
    );
}

function assignments() {
  return (
    <>
     <Facultylayout>
        <AssignmentBody/>
        </Facultylayout> 

    </>
  )
}

export default assignments
