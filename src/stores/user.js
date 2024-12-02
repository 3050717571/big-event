import { useGetInfoService } from "@/api/user"
import { defineStore } from "pinia" 
import {ref} from 'vue'

export const useUserStore = defineStore(
    'big-user',
    ()=>{
        const token = ref('')
        const settoken = (t) => (token.value = t)
        const outtoken = () => token.value = ''

        const user = ref({})
        const getUser =async () =>{
            const res = await useGetInfoService()
            user.value= res.data.data
        }
        const setUser = (obj) =>user.value = obj
        return {
        token,settoken,outtoken,user,getUser,setUser
        }
    },
    {
        persist:true
    }
)