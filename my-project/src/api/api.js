import *as axios from 'axios'

const getApi= axios.create({
    baseURL:"https://social-network.samuraijs.com/api/1.0",
    withCredentials:true,
    headers:{"API-KEY":"c825a155-ef09-4638-8803-d67f2d17a06c"}
})


export const loginAPI={
    authMeApi(){
        return getApi.get(`/auth/me`).then(response=>response)
    },
    logInApi(email, password, rememberMe, captcha){
        return getApi.post(`/auth/login`,{email, password, rememberMe, captcha}).then(response=>response)
    },
    logAuthApi(){
        return getApi.delete(`/auth/login`).then(response=>response)
    }
}


export const usersAPI={
    getUsersApi(currentPage, pageSize){
        return getApi.get(`/users?page=${currentPage}&count=${pageSize}`)
    },
    followApi(userId){
        return getApi.post(`/follow/${userId}`).then(response=>response)
    },
    unfollowApi(userId){
        return getApi.delete(`/follow/${userId}`).then(response=>response)
    }
}


export const profileAPI={
    getProfileApi(userId){
        return getApi.get(`/profile/${userId}`).then(response=>response)
    },
    getProfileInfoApi(profile){
        return getApi.put(`/profile`,profile).then(response=>response)
    },
    getProfileStatusApi(userId){
        return getApi.get(`/profile/status/${userId}`).then(response=>response)
    },
    updateProfileStatusApi(status){
        return getApi.put(`/profile/status`,{status}).then(response=>response)
    },
    getProfilePhotoApi(photo){
        const formData = new FormData()
        formData.append("image", photo)
        return getApi.put(`/profile/photo`,formData,{
            headers: {
                'Content-Type': 'multipart/form-data'
              }
       
        })
    }
}


export const securityAPI ={
    getCaptchaUrlApi(){
        return getApi.get(`/security/get-captcha-url`).then(response=>response)
    }
}