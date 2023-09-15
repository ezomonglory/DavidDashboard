import React from 'react'
import { useParams } from 'react-router-dom';
import NavWidget from '../../../../widget/Nav/NavWidget'
import {
    ContainerFluid,
    Container,
    SidebarListItem,
    Sidebar
 } from './../../dahsboard.style';
import SidebarWidget from '../../../../widget/SidebarWidget/SidebarWidget';
import CoursesPagewidget from './coursepagewidget';

function CoursesPage() {
  return (
    <div>
        <NavWidget/>
        <div className='row'>
            <div className='col s12 m2  cyan darken-4'>
                <SidebarWidget/>
            </div>
            <div className='col s12 m9'>
                {/* <div className='container'> */}
                   <CoursesPagewidget/>
                {/* </div> */}
            </div>
        </div>
    </div>
  );
}

export default CoursesPage;