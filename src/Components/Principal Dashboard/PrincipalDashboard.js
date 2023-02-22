import React from 'react';
import './PrincipalDashboard.css'
import PrincipalSidebar from './PrincipalSidebar'
import { Row, Col, Modal } from "react-bootstrap";
import DashboardContent from './DashboardContent'
import DashboardRightPanel from './DashboardRightPanel'

const PrincipalDashboard = () => {
    return ( 
        <>
        <div className='dashboardMain'>
        <Row>
            <Col xs={4} md={2}>
                <PrincipalSidebar />
            </Col>
            <Col xs={16} md={7}>
                <DashboardContent />
            </Col>
            <Col xs={4} md={3}>
                <DashboardRightPanel />
            </Col>
        </Row>
        </div>
        
        </>
     );
}

export default PrincipalDashboard;