import './App.css';
import HeaderComp from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import DashboardSectionContent from './Components/DashboardSectionContent'
import Footer from './Components/Footer'
import PrincipalDashboard from './Components/Principal Dashboard/PrincipalDashboard';
import { Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HeaderComp />
      <Switch>
        <Route path="/principalDashboard" component={PrincipalDashboard} />
        <Route path="/" component={DashboardSectionContent} />
      </Switch>
      {/* <DashboardCarousel />
      <DashboardSectionContent /> */}
      {/* <PrincipalDashboard /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
