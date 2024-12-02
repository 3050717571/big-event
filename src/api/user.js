import request from '@/utils/request'

export const userRegisterService = ({username,password,repassword})=>{
    request.post('/api/reg',{username,password,repassword})
}
export const userLoginService = ({ username, password }) =>
       request.post('api/login', { username, password })
 


export const useGetInfoService = () => {
 const res=   request.get('/my/userinfo')
 return res
    
}

// export const useGetInfoService = async () => {
//     try {
//         const response = await axios.get('/my/userinfo');  // 发起请求
//         return response;  // 返回完整的响应对象
//     } catch (error) {
//         console.error('请求失败:', error);
//         throw error;  // 如果请求失败，抛出错误
//     }
// }


// export const useGetInfoService = async () => {
//     try {
//         const response = await request.get('/my/userinfo');  // 使用封装的 request
//         return response;  // 返回完整的响应对象
//     } catch (error) {
//         console.error('请求失败:', error);
//         throw error;  // 如果请求失败，抛出错误
//     }
// }


export const userUpdateInfoService = ({ id, nickname, email }) =>
    request.put('/my/userinfo', { id, nickname, email })

//上传头像

export const userUploadAvatarService = (avatar) => request.patch('/my/update/avatar', { avatar })

//修改密码

export const userUpdatePassService = ({ old_pwd, new_pwd, re_pwd }) =>
    request.patch('/my/updatepwd', { old_pwd, new_pwd, re_pwd })