import './App.css';
import HeaderComp from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import DashboardSectionContent from './Components/DashboardSectionContent'
import MasterRoutine from './Components/Principal Dashboard/MasterRoutine/MasterRoutine';
import Footer from './Components/Footer'
import PrincipalDashboard from './Components/Principal Dashboard/PrincipalDashboard';
import LessonPlan from './Components/Principal Dashboard/Lesson Plan/LessonPlan';
import AttendanceOverview from './Components/Principal Dashboard/Attendance/AttendanceOverview';
import ReportSection from './Components/Principal Dashboard/Reports/Reports';
import Resources from './Components/Principal Dashboard/Resources/ResourcesList';
import { Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HeaderComp />
      <Switch>
        <Route path="/principalDashboard" component={PrincipalDashboard} />
        <Route path="/" component={DashboardSectionContent} />
        <Route path="/principalDashboard/masterRoutine" component={MasterRoutine} />
        <Route path="/principalDashboard/LessonPlan" component={LessonPlan} />
        <Route path="/principalDashboard/AttendanceOverview" component={AttendanceOverview} />
        <Route path="/principalDashboard/Reports" component={ReportSection} />
        <Route path="/principalDashboard/Resources" component={Resources} />
      </Switch>
      {/* <DashboardCarousel />
      <DashboardSectionContent /> */}
      {/* <PrincipalDashboard /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
