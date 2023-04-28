import React, { useEffect, useState } from "react";
import { Row, Col, ButtonGroup, Dropdown, Card, Button } from "react-bootstrap";
import PrincipalSidebar from "../PrincipalSidebar";
import seeAll from "../../../Images/icon_chevron_see_all.svg";
import { viewNotification } from "../../../ApiClient";
import moment from "moment";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import Select from 'react-select'

const NotificationsForTeacher = () => {
  const userDetails = JSON.parse(localStorage.getItem("UserData"));

  const [notificationData, setNotificationData] = useState({});
  const [hideResponse, setHideResponse] = useState([]);
  const [sectionExpanded, setSectionExpanded] = useState(false);
  const [selectedRole, setSelectedRole] = useState('')

  const userName = userDetails?.user_id;

  useEffect(() => {
    allNotification();
  }, [selectedRole]);

  const roleOptions = [
    {value: "teacher", label: "Teacher"},
    {value: "student", label: "Student"},
   ]

  const allNotification = () => {
    const userId = userName;
    const role = selectedRole;
    viewNotification(userId, role)
      .then((res) => setNotificationData(res.data))
      .catch((err) => console.log("Notices err - ", err));
  };

  const showResponseHandler = (id) => {
    let openHandler = [...hideResponse];
    openHandler.push(id);
    setHideResponse([...openHandler]);
    setSectionExpanded(true);
  };

  const hideResponseHandler = (id) => {
    let openHandler = [...hideResponse];
    let findindex = openHandler.indexOf(id);
    setSectionExpanded(false);

    if (findindex > -1) {
      openHandler.splice(findindex, 1);
      setHideResponse([...openHandler]);
    }
  };

  const handleRoleChange = (e) => {
    setSelectedRole(e.value)
  }

  console.log("notificationData - ", notificationData)

  return (
    <>
      <Row>
        <Col md={3} style={{ marginTop: "91px", width: "20%" }}>
          <PrincipalSidebar />
        </Col>
        <Col md={9} style={{ width: "80%" }}>
          <div className="resourcesHeader">
            <Row
              style={{
                height: "74px",
                boxShadow: "0px 3px 6px #B4B3B329",
                position: "relative",
                left: "12px",
                width: "100%",
              }}
            >
              <Col md={9}>
                <h4>Notification</h4>
              </Col>
              <Col md={3} className="teacherRoutingDD">
              <Select placeholder="Select Grade" options={roleOptions} onChange={e => handleRoleChange(e)} isSearchable={false} />
              </Col>
            </Row>

            {
              <div>
                {notificationData?.notifications?.map((notification, indx) => {
                  console.log("notification - ", notification);
                  return (
                    <fieldset>
                      <Row className="lessonData">
                        <Col md={1} style={{ textAlign: "left" }}>
                          {hideResponse?.includes(
                            notification?.notification_id
                          ) ? (
                            <FaAngleUp
                              style={{
                                height: "25px",
                                width: "25px",
                                color: "blue",
                              }}
                              onClick={() =>
                                hideResponseHandler(
                                  notification?.notification_id
                                )
                              }
                            />
                          ) : (
                            <FaAngleDown
                              style={{
                                height: "25px",
                                width: "25px",
                                color: "blue",
                              }}
                              onClick={() =>
                                showResponseHandler(
                                  notification?.notification_id
                                )
                              }
                            />
                          )}
                        </Col>

                        <Col
                          md={11}
                          className={
                            !hideResponse.includes(
                              notification?.notification_id
                            )
                              ? "noticeStyle"
                              : "noticeStyleExpanded"
                          }
                        >
                          {
                            <h6 className="noticeHeader">
                              {notification?.operation}
                            </h6>
                          }

                          {/* <p className="noticeTime">
                                {moment(notification?.published_at).format(
                                  "DD-MMM-YYYY"
                                )}
                              </p> */}

                          {hideResponse.includes(
                            notification?.notification_id
                          ) && (
                            <Row>
                              <Col md={12}>
                                <h6 className="descriptionHeader">
                                  Description :
                                </h6>
                                <p className="descriptionData">
                                  {notification?.notification_info}
                                </p>
                              </Col>
                            </Row>
                          )}
                        </Col>
                        {/* <Row>
                            <Col md={12}>
                              <h6>Description :</h6>
                              <p>{notice?.notice_data}</p>
                            </Col>
                          </Row> */}
                      </Row>
                    </fieldset>
                  );
                })}
              </div>
              //   );
              // })
            }
          </div>
        </Col>
      </Row>
    </>
  );
};

export default NotificationsForTeacher;
