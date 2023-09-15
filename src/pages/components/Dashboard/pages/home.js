import React from 'react'
import { Link } from 'react-router-dom'

function DashboardHome() {
  return (
    <div>
        <h1>Home</h1>
        <div class="row">
          <div class="col s12 m5">
            <Link to="/registerUser">
              <div class="card-panel teal">
                <span class="white-text">
                  <h3>Register user</h3>
                </span>
              </div>
            </Link>
          </div>
          {/* <div class="col s12 m5">
            <Link to="/noticeList">  
              <div class="card-panel teal">
                <span class="white-text">
                  <h3>Notice stories</h3>
                </span>
              </div>
            </Link> */}
          {/* </div> */}
          {/* <div class="col s12 m5">
            <Link to="/users">
            <div class="card-panel teal">
              <span class="white-text"> 
                <h3>Users</h3>
              </span>
            </div>
            </Link>
          </div>
          <div class="col s12 m5">
            <Link to="/users">
            <div class="card-panel teal">
              <span class="white-text"> 
                <h3>Admin</h3>
              </span>
            </div>
            </Link>
          </div>
         */}
        </div> 
    </div>
  )
}

export default DashboardHome