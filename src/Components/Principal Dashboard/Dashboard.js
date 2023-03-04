import React, {useEffect} from 'react';
import './PrincipalDashboard.css'
import PrincipalSidebar from './PrincipalSidebar'
import { Row, Col, Modal } from "react-bootstrap";
import DashboardContent from './DashboardContent'
import DashboardRightPanel from './DashboardRightPanel'
import {getMasterRoutineData } from '../../ApiClient'



const Dashboard = () => {
    useEffect(() => {
        apiTesting();
      },[])
    
      const apiTesting = () => {
        getMasterRoutineData()   
        .then((res) => console.log(res.data))
        .catch((err) => console.log("error occured"))
      }
    return ( 
        <>
        <div className='dashboardMain'>
        <Row>
            <Col xs={16} md={8} style={{paddingLeft:"0px"}}>
                <DashboardContent />
            </Col>
            <Col xs={4} md={4}>
                <DashboardRightPanel />
            </Col>
        </Row>
        </div>
        
        </>
     );
}

export default Dashboard;