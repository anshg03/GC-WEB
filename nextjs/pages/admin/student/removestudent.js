import React from 'react'
import Adminlayout from '../../components/adminlayout'
import Link from 'next/link'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function RemoveStudentComponent(){
    return(
        <>
        <button className='font-bold text-sm text-yellow-500'><Link href="/admin/students"> <ArrowBackIosIcon/>Back </Link></button>
        <div>Remove Student</div>
        </>
    )
}

function RemoveStudent() {
  return (
    <Adminlayout>
        <RemoveStudentComponent/>
    </Adminlayout>
  )
}

export default RemoveStudent