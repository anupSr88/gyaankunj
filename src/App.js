import './App.css';
import HeaderComp from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import DashboardSectionContent from './Components/Principal Dashboard/DashboardSectionContent'
import MasterRoutine from './Components/Principal Dashboard/MasterRoutine/MasterRoutine';
import Footer from './Components/Footer'
import PrincipalDashboard from './Components/Principal Dashboard/PrincipalDashboard';
import LessonPlan from './Components/Principal Dashboard/Lesson Plan/LessonPlan';
import AttendanceOverview from './Components/Principal Dashboard/Attendance/AttendanceOverview';
import ReportSection from './Components/Principal Dashboard/Reports/Reports';
import Resources from './Components/Principal Dashboard/Resources/ResourcesList';
import Announcements from './Components/Principal Dashboard/Announcement/Announcement';
import Notifications from './Components/Principal Dashboard/Notifications/Notifications';
import TeacherDashboard from './Components/Teacher Dashboard/TeacherDashboard'
import TDashboard from './Components/Teacher Dashboard/Dashboard/Dashboard';
import Classes from './Components/Teacher Dashboard/Classes/Classes';
import TLessonPlan from './Components/Teacher Dashboard/LessonPlan/LessonPlan';
import { Router, Route, Switch } from "react-router-dom";
import LogBook from './Components/Teacher Dashboard/LogBook/LogBook';

function App() {
  return (
    <>
    <div className="App">
      <HeaderComp />
      <Switch>

        <Route path="/principalDashboard/Dashboard" component={PrincipalDashboard} />
        <Route path="/principalDashboard/masterRoutine" component={MasterRoutine} />
        <Route path="/principalDashboard/LessonPlan" component={LessonPlan} />
        <Route path="/principalDashboard/AttendanceOverview" component={AttendanceOverview} />
        <Route path="/principalDashboard/Reports" component={ReportSection} />
        <Route path="/principalDashboard/Resources" component={Resources} />
        <Route path="/principalDashboard/Announcements" component={Announcements} />
        <Route path="/principalDashboard/Notifications" component={Notifications} />

        <Route path="/teacherDashboard/Dashboard" component={TeacherDashboard} />
        <Route path="/teacherDashboard/Classes"   component={Classes} />
        <Route path="/teacherDashboard/LogBook" component={LogBook} />
        <Route path="/teacherDashboard/LessonPlan" component={TLessonPlan} />
        <Route path="/teacherDashboard/Reports" component={ReportSection} />
        <Route path="/teacherDashboard/Resources" component={Resources} />
        <Route path="/teacherDashboard/Announcements" component={Announcements} />
        <Route path="/teacherDashboard/Notifications" component={Notifications} />
        <Route path="/" component={DashboardSectionContent} />
      </Switch>
    </div>
    </>
  );
}

export default App;
