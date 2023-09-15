import React from 'react'
import NavWidget from '../../../../widget/Nav/NavWidget'
import SidebarWidget from '../../../../widget/SidebarWidget/SidebarWidget'
import NoticeList from './noticeList'

function NoticeListPage() {
  return (
    <div>
        <NavWidget/>
        <div className='row'>
            <div className='col s12 m2  cyan darken-4'>
                <SidebarWidget/>
            </div>
            <div className='col s12 m9'>
              <NoticeList/>
            </div>
        </div>
    </div>
  )
}

export default NoticeListPage