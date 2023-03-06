import axios from 'axios'

const apiInstance = axios.create();

apiInstance.interceptors.request.use(async(config) => {
    const token = JSON.parse(localStorage.getItem('UserData'))
    const tokenId = token.token
    config.headers = {
        'x-access-tokens': tokenId
    }
    console.log(config)
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

export {
    // loginUser,
    createMasterRoutine,
    getMasterRoutineData,
    viewLogBook
}