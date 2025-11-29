import { api } from "./apiConfig"

export const authApi = {

    signUp: async (userData) => {
        const response = await api.post("/api/auth/signup" , userData)
        return response
    },

    verifyEmail: async (data) => {
        const response = await api.post("/api/auth/verify-email" , data)
        return response
    },

    verifyToken: async () => {
        const response = await api.get("/api/auth/verifyToken")
        return response
    }

}