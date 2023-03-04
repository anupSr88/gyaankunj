import axios from 'axios'

const apiInstance = axios.create();

apiInstance.interceptors.request.use((config) => {
    const token = JSON.parse(localStorage.getItem('UserData'))
    config.params['auth'] = token.token
    console.log(config)
    return config;
})

const loginUser = (data) => {
    return apiInstance.post(`/login`, data)
}

const createMasterRoutine = (data) => {
    return apiInstance.post(
        `/save_master_routine`, data
    )
}

const getMasterRoutineData = () => {
    return apiInstance.get(`/create_master_routine`)
}

export {
    loginUser,
    createMasterRoutine,
    getMasterRoutineData
}