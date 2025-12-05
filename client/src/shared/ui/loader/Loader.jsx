import useAuthStore from "../../stores/useAuthStore"

const Loader = () => {
    
    const {
        isLoading
    } = useAuthStore()

    return (
        <>
            {isLoading && (
                <div className="fixed inset-0 bg-opacity-5 backdrop-blur-md flex justify-center items-center z-50">
                    <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
            )}
        </>
    )
}
export default Loader