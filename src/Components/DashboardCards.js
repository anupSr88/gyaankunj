import Card from 'react-bootstrap/Card';
import '../Styles/DashboardCards.css'
import Reports from '../Images/Reports.png'
import AddNotes from '../Images/AddNotes.png'
import Classes from '../Images/Classes.png'
import Courses from '../Images/Courses.png'

function DashboardCards() {
  return (
    <>
    <div className='cards'>
      
        <Card
          style={{ width: '18rem', height:"356px", backgroundColor:"white"}}
          className="mb-2"
        >
          
          <Card.Body>
          <img className='dashboardCards' src = {Classes} />
            <Card.Title style={{fontSize:"40px", fontWeight:"bold", fontFamily:"sans-serif", position: "relative", top: "39px"}}> Classes </Card.Title>
            <Card.Text style={{fontSize:"20px", fontFamily:"sans-serif", position: "relative", top: "39px"}}>
              Click here to check classes and schedules.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{ width: '18rem', height:"356px", backgroundColor:"white"}}
          className="mb-2"
        >
          
          <Card.Body>
          <img className='dashboardCards' src = {Courses} />
            <Card.Title style={{fontSize:"40px", fontWeight:"bold", fontFamily:"sans-serif", position: "relative", top: "39px"}}> Courses </Card.Title>
            <Card.Text style={{fontSize:"20px", fontFamily:"sans-serif", position: "relative", top: "39px"}}>
              Click here to explore more class wise courses
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{ width: '18rem', height:"356px", backgroundColor:"white"}}
          className="mb-2"
        >
          
          <Card.Body>
          <img className='dashboardCards' src = {AddNotes} />
            <Card.Title style={{fontSize:"40px", fontWeight:"bold", fontFamily:"sans-serif", position: "relative", top: "39px"}}> Add Content </Card.Title>
            <Card.Text style={{fontSize:"20px", fontFamily:"sans-serif", position: "relative", top: "39px"}}>
              Click here to add Quick notes 
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{ width: '18rem', height:"356px", backgroundColor:"white"}}
          className="mb-2"
        >
          
          <Card.Body>
          <img className='dashboardCards' src = {Reports} />
            <Card.Title style={{fontSize:"40px", fontWeight:"bold", fontFamily:"sans-serif", position: "relative", top: "39px"}}> Reports </Card.Title>
            <Card.Text style={{fontSize:"20px", fontFamily:"sans-serif", position: "relative", top: "39px"}}>
              Click here to check reports
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default DashboardCards;