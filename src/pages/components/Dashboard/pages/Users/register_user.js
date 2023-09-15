import React from 'react'
import NavWidget from '../../../../widget/Nav/NavWidget';
import SidebarWidget from '../../../../widget/SidebarWidget/SidebarWidget';
import AddUser from './add_user';

function RegisterUser() {
    return (
    <div>
        <NavWidget/>
        <div className='row'>
            <div className='col s12 m2  cyan darken-4'>
                <SidebarWidget/>
            </div>
            <div className='col s12 m9'>
                {/* <div className='container'> */}
                    <AddUser/>
                {/* </div> */}
            </div>
        </div>
    </div>
    );
}

export default RegisterUser