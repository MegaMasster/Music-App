import { create } from "zustand"

const useAuthStore = create(
    ( set ) => ({
        isLoading: false,
        // forgot
        isSendingEmail: false, 
        userEmail: null,

        setLoading: (loadingState) => set({isLoading: loadingState}),
        setIsSendingEmail: (isSendingEmailState) => set({isSendingEmail: isSendingEmailState}),
        setUserEmail: (email) => set({userEmail: email})
    })
)
export default useAuthStore