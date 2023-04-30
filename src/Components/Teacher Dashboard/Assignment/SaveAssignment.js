import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Row, Col, Card } from "react-bootstrap";
import Select from "react-select";
import {  saveLessonPlan, getLessonPlanMetadata, getGradeDetails } from "../../../ApiClient";
import './assignment.css'
import AddQuestionSet from "./AddQuestionSet";
import {FaAngleDown} from 'react-icons/fa';
import {FaAngleUp} from 'react-icons/fa';

const SaveAssignment = (props) => {

    const [fullscreen, setFullscreen] = useState(true);
    const [questionType, setQuestionType] = useState('')
    const [AssignmentDataFromSingleChild, setAssignmentDataFromSingleChild] = useState([])
    const [assignmentFinalQuestionData, setAssignmentFinalQuestionData] = useState([])
    const [questionData, setQuestionData] = useState(false)
    const [questionSetData, setQuestionSetData] = useState([{}])
    const [grade, setGrade] = useState([]);
    const [gradeData, setGradeData] = useState([])
    const [sectionData, setSectionData] = useState([]);
    const [hideResponse, setHideResponse] = useState([])

    useEffect(() => {
      getAllGradeDetails();
      finalDataSetFromChild()
    }, []);

    const questionTypeOptions = [
        { value: "fill_in_the_blanks", label: "Fill in the blanks" },
        { value: "multiple_choice(radio)", label: "Single Select" },
        { value: "multiple_choice(checkbox)", label: "Multiple Choice" },
        { value: "subjective", label: "Subjective" },
        { value: "unjumble", label: "Unjumble the word" },
    ]

    const sectionOptions = [
      { value: "1", label: "A" },
      { value: "2", label: "B" },
      { value: "3", label: "C" },
      { value: "4", label: "D" },
    ];

    const handleGradeChange = (e) => {
      setGrade(e.target.value);
    };

    // const dataFromSingleChild = (data) => {
    //   setAssignmentDataFromSingleChild(data)
    // }

    const addQuestionSetData = () => {
      setQuestionData(true)
    }

    const finalDataSetFromChild = (finalData) => {
      setQuestionSetData(finalData)
      console.log("final data", finalData)
    }

    console.log("questionSetData - AssignmentDataFromSingleChild ", questionSetData, AssignmentDataFromSingleChild)

    const closeAndLoad = () => {
      setQuestionData(false)
      assignmentDataFinal()
    }

    const getAllGradeDetails = () => {
      getGradeDetails()
        .then((res) => setGradeData(res.data))
        .catch((err) => console.log(err));
    };

    const assignmentDataFinal = () => {
console.log("questionSetData - ", questionSetData)
      let newAssignmentDataFromSingleChild = [questionSetData]
      let newQuestion = [newAssignmentDataFromSingleChild];
      let newQuestionSet = {
        "assignment_data": {
          question_number_1: {
            "type": questionSetData?.type,
            "question": questionSetData?.question,
            "correct_answer": questionSetData?.correct_answer,
            "all_options": questionSetData?.all_options,
            "marks": "5 marks"
        }
      }
  }
  newQuestion = [...newQuestion, newQuestionSet]
  setAssignmentDataFromSingleChild(newQuestion)
}

// const showResponseHandler = (id) => {
//   showLessonPlanAllDetails(id)
//   let openHandler = [...hideResponse];
//   openHandler.push(id);
//   setHideResponse([...openHandler]);
//   setSectionExpanded(true);
// }

// const hideResponseHandler = (id) => {

//   let openHandler = [...hideResponse];
//   let findindex = openHandler.indexOf(id);
//   setSectionExpanded(false);

//   if(findindex > -1){
//       openHandler.splice(findindex, 1);
//       setHideResponse([...openHandler])
//   }
// };

  console.log("AssignmentDataFromSingleChild - ", AssignmentDataFromSingleChild)

    

    // const assignmentDataToSubmit = () => {
    //   const finalDataSet = {
    //     "question_number_1": {
    //       "type": AssignmentDataFromSingleChild?.type,
    //       "question": AssignmentDataFromSingleChild?.question,
    //       "correct_answer": "",
    //       "all_options": AssignmentDataFromSingleChild.all_options,
    //       "marks": "5 marks"
    //   }
    //   }
    //   setAssignmentFinalQuestionData([finalDataSet, ...assignmentFinalQuestionData])
    // }

    // console.log("AssignmentDataFromSingleChild - ", AssignmentDataFromSingleChild)
    
    // console.log("assignmentFinalQuestionData - ", assignmentFinalQuestionData)

    console.log("questionSetData - ", questionSetData)
    
    console.log("assignmentFinalQuestionData - ", assignmentFinalQuestionData)

  return (
    <>
    
      <Modal
        className="ModalBody"
        {...props}
        // size="xl"
        fullscreen={fullscreen}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title
            style={{
              font: "normal normal bold 22px/34px Roboto",
              alignItems: "center",
            }}
          >
            Create Assignment
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row style={{
                      height: "74px",
                      boxShadow: "0px 3px 6px #B4B3B329",
                    }}>
            <Col md={2}>
            <Form.Group className="mb-3">
                  {/* <Form.Label>Select grade</Form.Label> */}
                  <Form.Select
                    
                    name="grade"
                    id="grade"
                    onChange={(e) => handleGradeChange(e)}
                  >
                    <option value="">--Grade--</option>
                    {gradeData?.grade_details?.grade_details?.map((grade) => {
                      // console.log("grade - ", grade)
                      return (
                        <option value={grade?.grade_id}>
                          {grade?.grade_id}
                        </option>
                      );
                    })}
                  </Form.Select>
                </Form.Group>
            </Col>
            <Col md={1}></Col>
            <Col md={2}>
            <Form.Group className="mb-3">
                  {/* <Form.Label>Select Section</Form.Label> */}
                  <Form.Select
                    
                    name="section"
                    id="section"
                    onChange={(e) => setSectionData(e.target.value)}
                  >
                    <option value="">--Section--</option>
                    {sectionOptions?.map((section, indx) => {
                      return (
                        <option value={section?.value}>{section?.label}</option>
                      );
                    })}
                  </Form.Select>
                </Form.Group>
            </Col>
            <Col md={3}>
              
            </Col>
            <Col md={2}>
            <Button variant="outline-primary">Save Assignment</Button>
            </Col>
            <Col md={2}>
            <Button variant="outline-primary">Publish Assignment</Button>
            </Col>
          </Row>
          <Row style={{marginTop:"30px"}}>
            <Col md={3}>
              
            </Col>
            <Col md={6}>
              {questionSetData?.question?.length > 0 ? <Card className="lessonPlanCardHeader">
                <Card.Body>
                  <Row>
                    <Col md={12} className="lessonHeading">
                      <h6>{questionSetData?.question}</h6>
                    </Col>
                    

                    
                  </Row>
                </Card.Body>
              </Card>
              :
              ""}
              {/* <p>{questionSetData?.type}</p>
              <p>{questionSetData?.question}</p>
              <p>{questionSetData?.marks}</p> */}
              {/* {questionSetData?.all_options?.map((option, indx) => {
               return (<input>{option}</input>)
              })} */}
            </Col>
            <Col md={1}></Col>
            <Col md={2}>
              <Button variant="success" onClick={addQuestionSetData}>
                Add Questions
              </Button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
      {questionData && (
        <AddQuestionSet
        closeModal={closeAndLoad}
          show={questionData}
          onHide={() => setQuestionData(false)}
          finalDataSetFromChild={finalDataSetFromChild}
        />
      )}
    </>
  );
};

export default SaveAssignment;
