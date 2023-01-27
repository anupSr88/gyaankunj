import './App.css';
import HeaderComp from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import DashboardCarousel from './Components/DashboardCarousel';
import DashboardCards from './Components/DashboardCards'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
      <HeaderComp />
      <DashboardCarousel />
      <DashboardCards />
      <Footer />
    </div>
  );
}

export default App;
