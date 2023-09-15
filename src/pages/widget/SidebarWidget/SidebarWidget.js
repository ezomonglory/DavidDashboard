import React from 'react'
import { Link } from 'react-router-dom';
import {

    SidebarListItem,
    Sidebar
 } from './SidebarWidget.style';
function SidebarWidget() {
  return (
    <div>
        <Sidebar>
            <br/>
            <br/>
            <br/>
            <br/>
            <ul class=" " style={{
                border:"none !important"
            }}>
                <Link to='/dashboard'>
                    <SidebarListItem >
                        Home
                    </SidebarListItem>
                </Link>
                
                <Link to="/admins">
                    <SidebarListItem>
                        List Users
                    </SidebarListItem>
                </Link>
                <Link to="/clock-in">
                    <SidebarListItem>
                        Clock-in history
                    </SidebarListItem>
                </Link>

                {/* <Link to="/users">
                    <SidebarListItem>
                        Users
                    </SidebarListItem>
                </Link> */}
                {/* <Link to="/courses">
                    <SidebarListItem>
                        Courses
                    </SidebarListItem>
                </Link> */}
                {/* <Link to="/notice">
                    <SidebarListItem>
                        Notice
                    </SidebarListItem>
                </Link> */}
            </ul>
        </Sidebar>

    </div>
  )
}

export default SidebarWidget