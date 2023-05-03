import React from 'react'
import { Button, Form, Modal, Row, Col, Card } from "react-bootstrap";
import './studentAssignment.css'

const AnswerTypeFillTheBlank = ({...props}) => {
 
    return (
      <>
        {/* <Row> */}
          {/* <Col md={4} className="questionSetSidebar">
            {" "}
            Sidebar
          </Col> */}
          {/* <Col md={8} className="assignmentDataInner"> */}
            <Row>
              <Col md={9} className="questionSetHeaderText">
                <p>Fill in the Blanks</p>
              </Col>
            </Row>
            {props?.assignmentFullData?.assignment_data?.assignmentDataForStudent?.map((fillInTheBlank, indx) => {
                return fillInTheBlank?.type === 'fill_in_the_blanks' && <Row>
                <Col md={10} className="questionSetHeader">
                  <p className="questionSetText">
                    {fillInTheBlank?.question}
                  </p>
                </Col>
                <Col md={2}>
                  <p className="questionSetText">{fillInTheBlank?.marks}</p>
                </Col>
              </Row>
            }) }
            <Row>
              <Col md={6}>
                <p>Enter your Answer</p>
                <input
                  type="text"
                  placeholder="Answer"
                  className="fillBlankAnswer"
                //   onChange={(e) => handleQuestionData(e)}
                ></input>
              </Col>
            </Row>
            <hr />
          {/* </Col> */}
        {/* </Row> */}
      </>
    );
}

export default AnswerTypeFillTheBlank