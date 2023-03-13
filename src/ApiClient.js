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

const viewMasterRoutine = (day) => {
    return apiInstance.get(`/view_master_routine?day=${day}`)
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

const viewAttendanceReport = (grade, section, userType) => {
    return apiInstance.get(`/view_attendance_report?grade_id=${grade}&section_id=${section}&year=2022&user_type=${userType}`)
}

const getLessonPlan= (grade, section, subject) => {
    return apiInstance.get(`/view_lesson_plan?grade_id=${grade}&section_id=${section}&subject_id=${subject}`)
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
    getLessonPlan
}