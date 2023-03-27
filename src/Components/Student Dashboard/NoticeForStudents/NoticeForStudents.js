import React, { useEffect, useState } from 'react'
import { Row, Col, ButtonGroup, Dropdown, Card, Button } from "react-bootstrap";
import StudentSidebar from '../StudentSidebar';
import seeAll from "../../../Images/icon_chevron_see_all.svg";
import { viewNotice } from '../../../ApiClient';
import moment from 'moment'



const NoticeForStudents = () => {

    const userDetails = JSON.parse(localStorage.getItem('UserData'))

    const [allNotice, setAllNotice] = useState({})

    useEffect(() => {
      allNotices();
    }, [])

  const allNotices = () => {
    const role = "student"
    viewNotice(role)
    .then((res) => setAllNotice(res.data))
    .catch((err) => console.log("Notices err - ", err))
  }


    return(
        <>
        <Row>
            <Col md={3} style={{marginTop:"91px", width:"20%"}}>
                <StudentSidebar />     
            </Col>
            <Col md={9} style={{width:"80%"}}>
        <div className='resourcesHeader'>
        <Row
          style={{
            height: "74px",
            boxShadow: "0px 3px 6px #B4B3B329",
            position: "relative",
            left: "12px",
            width: "100%",
          }}
        >
            <Col md={7}>
            <h4>Notice</h4>
            </Col>
            <Col md={2} className="teacherRoutingDD">
            {/* <span>
                  <Dropdown>
                    <Dropdown.Toggle className="dropdownHead" id="dropdown-basic">
                    Sort By
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">2 </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">3 </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </span> */}
            </Col>
        </Row>
        {allNotice?.status == "failure" ? (<Row style={{height: "93px"}}>
          <Col md={12} style={{paddingTop: "30px"}}>
            <span className='failureMessage'>{allNotice.message}</span>
          </Col>
        </Row>) 
        :
        (
          allNotice?.notices?.map((notice, indx) => {
            return <Row style={{height: "93px"}}>
            <Col md={1} style={{paddingTop: "30px"}}>
              <img src={seeAll} alt="seeAll" />
            </Col>
            <Col md={11} className="noticeContent">
              <h6 className="noticeHeader">{notice}</h6>
              {/* <p className="noticeTime">{moment(notice?.published_at).format("DD-MMM-YYYY")}</p> */}
            </Col>
          </Row>
          })
        )
        }
        
        
        </div>
        </Col>
        </Row>
        
        </>
    )
}

export default NoticeForStudents;