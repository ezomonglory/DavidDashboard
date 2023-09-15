import './App.css';
import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import dashboard from './pages/components/Dashboard/dashboard';
import UserPage from './pages/components/Dashboard/pages/Users/users';
import CoursesPage from './pages/components/Dashboard/pages/Courses/courses';
import NoticePage from './pages/components/Dashboard/pages/Notice/notice';
import CourseListPage from './pages/components/Dashboard/pages/Courses/courseListPage';
import CourseDetails from './pages/components/Dashboard/pages/Courses/courseDetails';
import NoticeListPage from './pages/components/Dashboard/pages/Notice/noticeListPage';
import NoticeDetails from './pages/components/Dashboard/pages/Notice/noticeDetails';
import HomeComponent from './pages/components/Home/HomeComponent';
import AuthProvider from './context/AuthContext';
import AdminPageWidget from './pages/components/Dashboard/pages/admin/adminPageWidget';
import AdminWidget from './pages/components/Dashboard/pages/admin/admin';
import RegisterUser from './pages/components/Dashboard/pages/Users/register_user';
import ClockInPage from './pages/components/Dashboard/pages/clock-in/clock-in';



function App() {
    
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={dashboard} />
          {/* <Route path="/subscribe" component={SubscribeComponent} /> */}
          <Route path="/dashboard" component={dashboard} />
          <Route path="/registerUser" component={RegisterUser} />

          <Route path="/admins" component={AdminWidget} />
          <Route path="/users" component={UserPage} />
          <Route path="/courses" component={CoursesPage} />
          <Route path="/coursesDetails" component={CourseDetails} />
          <Route path="/coursesListPage" component={CourseListPage} />
          <Route path="/notice" component={NoticePage} />
          <Route path="/noticeList" component={NoticeListPage} />
          <Route path="/noticeDetails" component={NoticeDetails} />
          <Route path="/clock-in" component={ClockInPage} />

          

        </Switch>
      </Router>
      </AuthProvider>

  );
}

export default App;
