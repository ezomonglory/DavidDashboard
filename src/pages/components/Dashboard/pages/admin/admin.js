import React from 'react'
import NavWidget from '../../../../widget/Nav/NavWidget'
import SidebarWidget from '../../../../widget/SidebarWidget/SidebarWidget'
import AdminPageWidget from './adminPageWidget'

function AdminWidget() {
    return (
        <div className=' '>
            <div className='flex flex-col md:flex-row space-y-[40px] md:space-y-0 pt-[32px] md:pt-0'>


                <NavWidget />
                <div className='hidden md:block'>
                    <SidebarWidget />
                </div>


                {/* <div className='container'> */}
                <AdminPageWidget />
                {/* </div> */}

            </div>
        </div>
    )
}

export default AdminWidget