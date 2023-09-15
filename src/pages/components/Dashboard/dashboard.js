import React from 'react'
import { useParams } from 'react-router-dom';
import NavWidget from '../../widget/Nav/NavWidget'
import DashboardHome from './pages/home';
import {
    ContainerFluid,
    Container,
    SidebarListItem,
    Sidebar
 } from './dahsboard.style';
import SidebarWidget from '../../widget/SidebarWidget/SidebarWidget';
function dashboard() {
  return (
    <div>
        <NavWidget/>
        <div className='row'>
            <div className='col s12 m2  cyan darken-4'>
                <SidebarWidget/>
            </div>
            <div className='col s12 m9'>
                {/* <div className='container'> */}
                   <DashboardHome/>
                {/* </div> */}
            </div>
        </div>
    </div>
  )
}

export default dashboard