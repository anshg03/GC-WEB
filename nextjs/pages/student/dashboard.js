import React from 'react'
import StudentLayout from '../components/studentlayout'

function DashboardContent(){
  return(
    <>
    Student Dashboard
    </>
  )
}

function dashboard() {
  return (
    <> 
      <StudentLayout>
        <DashboardContent/>
      </StudentLayout>
    </>
  )
}

export default dashboard
