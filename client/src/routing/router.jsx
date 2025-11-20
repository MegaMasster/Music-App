import { lazy , Suspense } from "react"
import { BrowserRouter , Routes , Route , Navigate } from "react-router-dom"

import { ROUTES } from "./routes"

const SignInPage = lazy(() => import("../pages/authPages/SignInPage"))
const SignUpPage = lazy(() => import("../pages/authPages/SignUpPage"))
const ForgotPassPage = lazy(() => import("../pages/authPages/ForgotPassPage"))

const Router = () => { 

    return (
        <BrowserRouter>

            <Suspense fallback={null}>

                <Routes>

                    <Route 
                        path = {ROUTES.ROOT} 
                        element = { <Navigate to={ROUTES.SIGN_IN}/> }
                    />

                    <Route
                        path = {ROUTES.SIGN_IN}
                        element = { 
                            <SignInPage />
                        }
                    />

                    <Route
                        path={ROUTES.SIGN_UP}
                        element = {
                            <SignUpPage />
                        }
                    />

                    <Route
                        path={ROUTES.FORGOT}
                        element = {
                            <ForgotPassPage />
                        }
                    />

                </Routes>

            </Suspense>

        </BrowserRouter>
    )
}
export default Router