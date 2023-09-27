import React from 'react'
import { useParams } from 'react-router-dom';
import NavWidget from '../../../../widget/Nav/NavWidget'
import {
    ContainerFluid,
    Container,
    SidebarListItem,
    Sidebar
} from '../../dahsboard.style';
import SidebarWidget from '../../../../widget/SidebarWidget/SidebarWidget';
import ClockInpagewidget from './clock-inpagewidget';

function ClockInPage() {
    return (
        <div className=' '>
            <div className='flex flex-col md:flex-row space-y-[40px] md:space-y-0 pt-[32px] md:pt-0'>


                <NavWidget />
                <div className='hidden md:block'>
                    <SidebarWidget />
                </div>


                <div className=' w-full overflow-hidden'>
                    <ClockInpagewidget />
                </div>

            </div>
        </div>


    );
}

export default ClockInPage;