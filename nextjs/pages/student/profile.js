import React from 'react'
import StudentLayout from '../components/studentlayout'

function ProfileContent(){
  return(
    <>
    Student Profile
    </>
  )
}

function dashboard() {
  return (
    <> 
      <StudentLayout>
        <ProfileContent/>
      </StudentLayout>
    </>
  )
}

export default dashboard
