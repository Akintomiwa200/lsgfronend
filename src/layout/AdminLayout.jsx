import React from 'react'
import { Outlet } from 'react-router-dom'
import TeacherSidebar from '../components/sidebar/Sidebar'

const AdminLayout = () => {
  return (
    <div className='flex'>
        <TeacherSidebar/>
        <Outlet/>
    </div>
  )
}

export default AdminLayout