import axios from 'axios'

const apiInstance = axios.create();

apiInstance.interceptors.request.use(async(config) => {
    const token = JSON.parse(localStorage.getItem('UserData'))
    const tokenId = token.token
    config.headers = {
        'x-access-tokens': tokenId
    }
    // console.log(config)
    return config;
})

// const loginUser = (data) => {
//     return apiInstance.post(`/login`, data)
// }

const createMasterRoutine = (data) => {
    return apiInstance.post(
        `/save_master_routine`, data
    )
}

const getMasterRoutineData = () => {
    return apiInstance.get(`/create_master_routine`)
}

const viewLogBook = (date, grade, section) => {
    return apiInstance.get(`/view_log_book?date=${date}&grade_id=${grade}&section_id=${section}`)
}

const viewMasterRoutine = (day, grade) => {
    return apiInstance.get(`/view_master_routine?day=${day}&grade_id=${grade}`)
}

const attendanceOverview = (grade, section) => {
    return apiInstance.get(`/get_attendance_overview?grade_id=${grade}&section_id=${section}`)
}

const getReports= (grade, section, userType) => {
    return apiInstance.get(`/view_report?grade_id=${grade}&section_id=${section}&user_type=${userType}`)
}

const getResources= (grade, section, subject) => {
    return apiInstance.get(`/get_content?grade_id=${grade}&section_id=${section}&subject_id=${subject}`)
}

const getGradeDetails = () => {
    return apiInstance.get(`/get_all_grade_details`)
}

const saveLessonPlan = (data) => {
    return apiInstance.post(`/save_lesson_plan`, data)
}

const viewAttendanceReport = (grade, section, year, userType) => {
    return apiInstance.get(`/view_attendance_report?grade_id=${grade}&section_id=${section}&year=${year}&user_type=${userType}`)
}

const getLessonPlan= (teacher) => {
    return apiInstance.get(`/view_teacher_lesson_plan?teacher_id=${teacher}`)
}

const getLessonPlanMetadata= (grade, section) => {
    return apiInstance.get(`/get_lesson_plan_metadata?grade_id=${grade}&section_id=${section}`)
}

const fetchAllSubjects = () => {
    return apiInstance.get(`/get_all_subjects`)
}

const getTeacherRoutine = (userId, day) => {
    return apiInstance.get(`/view_teacher_routine?userid=${userId}&day=${day}`)
}

const viewStudentAttendance = (grade, section, month) => {
    return apiInstance.get(`/get_student_attendance?grade_id=${grade}&section_id=${section}&month_id=${month}`)
}

const getAllStudentsData = (grade, section) => {
    return apiInstance.get(`/get_all_students?grade_id=${grade}&section_id=${section}`)
}

const viewAllNotice = (userId) => {
    return apiInstance.get(`/view_all_notices?user_id=${userId}`)
}

const viewNotice = (role) => {
    return apiInstance.get(`/view_notice?role=${role}`)
}


const saveNotice = (noticeData) => {
    return apiInstance.post(`/save_notice`, noticeData)
}

const publishNotice = (noticeDataToPublish) => {
    return apiInstance.post(`/publish_notice`, noticeDataToPublish)
}

const createLogBook = (data) => {
    return apiInstance.post(`/save_log_book`, data)
}

const studentAssignmentList = (student) => {
    return apiInstance.get(`/get_student_assignments_list?student_id=${student}`)
}

const studentRoutine = (grade, year) => {
    return apiInstance.get(`/view_class_routine?grade_id=${grade}&year=${year}`)
}

const saveAttendance = (attendanceData) => {
    return apiInstance.post(`/save_attendance_data`, attendanceData)
}

const getTeachersData = () => {
    return apiInstance.get(`/get_all_teachers`)
}

export {
    // loginUser,
    createMasterRoutine,
    getMasterRoutineData,
    viewLogBook,
    viewMasterRoutine,
    attendanceOverview,
    getReports,
    getResources,
    getGradeDetails,
    saveLessonPlan,
    viewAttendanceReport,
    getLessonPlan,
    fetchAllSubjects,
    getTeacherRoutine,
    viewStudentAttendance,
    getAllStudentsData,
    viewAllNotice,
    saveNotice,
    publishNotice,
    createLogBook,
    studentAssignmentList,
    studentRoutine,
    viewNotice,
    saveAttendance,
    getLessonPlanMetadata,
    getTeachersData
}