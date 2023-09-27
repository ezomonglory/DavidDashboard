import React from 'react'
import NavWidget from '../../../../widget/Nav/NavWidget';
import SidebarWidget from '../../../../widget/SidebarWidget/SidebarWidget';
import AddUser from './add_user';

function RegisterUser() {

    return (
        <div className=' '>
            <div className='flex flex-col md:flex-row space-y-[40px] md:space-y-0 pt-[32px] md:pt-0'>


                <NavWidget />
                <div className='hidden md:block'>
                    <SidebarWidget />
                </div>


                <div className=' overflow-hidden '>
                <AddUser />
                </div>

            </div>
        </div>
    );
}

export default RegisterUser