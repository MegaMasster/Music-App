class AuthErrorHandler {

    static handlerSignUpError (error) {
        if (error.status === 409) {
            return "The user already exists. Please log in."
        } else if (error.status === 408) {
            return "Server is busy, please try again later."
        } else if (error.status === 400) {
            return "Invalid credentials"
        } else {
            return "Server error. Try again later."
        }
    }

}
export default AuthErrorHandler