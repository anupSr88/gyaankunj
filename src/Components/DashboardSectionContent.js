import React from "react";
import { Row, Col, Modal, Form, Button } from "react-bootstrap";
import "../Styles/DashboardSectionContent.css";
import DashboardBg1 from '../Images/DashboardBg1.png'
import parentImg from '../Images/parentImg.png'
import principleImg from '../Images/principleImg.png'
import studentImg from '../Images/studentImg.png'
import teacherImg from '../Images/teacherImg.png'

const DashboardSectionContent = () => {
    return (
            <>
            <div className="dashboardContentMain" style={{background: `url(${DashboardBg1})`}}>
            <section>
            Gyaankunj is the first ever cloud-based School Management Software providing an amazing automated experience to educational institutions of all size with its highly scalable, secure and robust ERP solutions. Our School ERP Software is designed to simplify all your academic and back office chores with unmatched efficiencies and empowering you to keep up with the learning demands of the 21st century, that too, with the most user-friendly interface.
            </section>
            <section className="sectionMid">
            If you are looking for a Tailor-Fit Cloud ERP Software for your School/College with Better Administration, Better Reports & Better Communication. Then the answer is Gyankunj.
            </section>
            <h1>A Single Tool to Manage Entire Institute</h1>
            <p className="sectionEnd">Edmatix is the most comprehensive & powerful Student Information System Software that streamlines all aspects of school/college management right from enrollment to graduation in one single database, skipping every manual and obsolete process you've been struggling with. Check out all our cool features, that make life easier for you and your customers.</p>
            </div>
            <div className="dashboardContentMid">
                <Row>
                    <Col md={6} className="testClass"><img
                  className="dashboardImageContent"
                  alt="login"
                  src={principleImg}
                /></Col>
                    <Col md={6} className="testClass"><img
                  className="dashboardImageContent"
                  alt="login"
                  src={teacherImg}
                /></Col>
                </Row>
                <Row>
                    <Col md={6} className="testClass"><img
                  className="dashboardImageContent"
                  alt="login"
                  src={studentImg}
                /></Col>
                    <Col md={6} className="testClass"><img
                  className="dashboardImageContent"
                  alt="login"
                  src={parentImg}
                /></Col>
                </Row>
            </div>
            </>
    )
}

export default DashboardSectionContent;