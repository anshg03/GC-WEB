
import React, { useEffect, useState } from 'react';
import Adminlayout from "../components/adminlayout"

function AddBranchComponent() {
    const [branchCode, setBranchCode] = useState('');
    const [branchName, setBranchName] = useState('');
    const [branches, setBranches] = useState();

    const dummyBranches = [
        { code: 'CS', name: 'Computer Science' },
        { code: 'EE', name: 'Electrical Engineering' },
        { code: 'ME', name: 'Mechanical Engineering' },
        { code: 'CE', name: 'Civil Engineering' },
        { code: 'CH', name: 'Chemical Engineering' },
        { code: 'IT', name: 'Information Technology' },
        { code: 'EC', name: 'Electronics and Communication Engineering' },
        { code: 'AE', name: 'Aerospace Engineering' },
        { code: 'EN', name: 'Environmental Engineering' },
        { code: 'BT', name: 'Biotechnology' },
        { code: 'MA', name: 'Mathematics' },
        { code: 'PH', name: 'Physics' },
        { code: 'CHM', name: 'Chemistry' },
        { code: 'MGT', name: 'Management' },
        { code: 'ENG', name: 'English' }
    ];


    useEffect(()=>{
        setBranches(dummyBranches);
    },[])
    

    const handleBranchCodeChange = (event) => {
        setBranchCode(event.target.value);
    };

    const handleBranchNameChange = (event) => {
        setBranchName(event.target.value);
    };

    const handleAddBranch = () => {
        if (branchCode.trim() !== '' && branchName.trim() !== '') {
            const newBranch = { code: branchCode, name: branchName };
            setBranches([...branches, newBranch]);
            setBranchCode('');
            setBranchName('');
            console.log('Branch added:', newBranch);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4 text-green-500 ">Add Branch</h2>
            <div className='flex gap-4'>
            <div className="mb-4">
                <label className="block mb-2 font-semibold">Branch Code:</label>
                <input placeholder='Enter Branch Code' type="text" value={branchCode} onChange={handleBranchCodeChange} className="border rounded px-3 py-2 w-64" />
            </div>
            <div className="mb-4">
                <label className="block mb-2 font-semibold">Branch Name:</label>
                <input placeholder='Enter Branch Name' type="text" value={branchName} onChange={handleBranchNameChange} className="border rounded px-3 py-2 w-64" />
            </div>
            </div>
            <button onClick={handleAddBranch} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Branch</button>
            <hr className="mt-5" />
            <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4 text-center">All Branches</h2>
            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 bg-gray-200 border border-gray-300">Branch Code</th>
                            <th className="px-4 py-2 bg-gray-200 border border-gray-300">Branch Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dummyBranches.map((branch, index) => (
                            <tr key={index}>
                                <td className="px-4 py-2 border border-gray-300 text-center">{branch.code}</td>
                                <td className="px-4 py-2 border border-gray-300 text-center">{branch.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    );
}


function AddBranch() {
  return (
    <>
      <Adminlayout>
        <AddBranchComponent/>
      </Adminlayout>
    </>
  )
}

export default AddBranch

