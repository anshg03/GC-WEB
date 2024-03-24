import React from 'react'
import Adminlayout from '../../components/adminlayout'
import Link from 'next/link'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function UpdateStudentComponent(){
    return(
        <>
        <button className='font-bold text-sm text-yellow-500'><Link href="/admin/students"> <ArrowBackIosIcon/>Back </Link></button>
        <div>Update Student</div>
        </>
    )
}

function UpdateStudent() {
  return (
    <Adminlayout>
        <UpdateStudentComponent/>
    </Adminlayout>
  )
}

export default UpdateStudent
