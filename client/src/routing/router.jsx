import { lazy , Suspense } from "react"
import { BrowserRouter , Routes , Route , Navigate } from "react-router-dom"

import { ROUTES } from "./routes"
import PublicRoute from "./guards/PublicRoute"
import ProtectedRoute from "./guards/ProtectedRoute"

const SignInPage = lazy(() => import("../pages/authPages/SignInPage"))
const SignUpPage = lazy(() => import("../pages/authPages/SignUpPage"))
const ForgotPassPage = lazy(() => import("../pages/authPages/ForgotPassPage"))
const NotFoundPage = lazy(() => import("../pages/errorPages/NotFoundPage"))
const IndexPage = lazy(() => import("../pages/indexPage/IndexPage"))
const VerifyEmailPage = lazy(() => import("../pages/authPages/VerifyEmailPage"))

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
                            <PublicRoute>
                                <SignInPage />
                            </PublicRoute>
                        }
                    />

                    <Route
                        path={ROUTES.SIGN_UP}
                        element = {
                            <PublicRoute>
                                <SignUpPage />  
                            </PublicRoute>
                        }
                    />

                    <Route
                        path={ROUTES.FORGOT}
                        element = {
                            <PublicRoute>
                                <ForgotPassPage />
                            </PublicRoute>
                        }
                    />
                    
                    <Route
                        path={ROUTES.VERIFY_EMAIL}
                        element = {
                            <ProtectedRoute>
                                <VerifyEmailPage />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path={ROUTES.INDEX}
                        element={
                            <ProtectedRoute>
                                <IndexPage />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="*"
                        element={
                            <NotFoundPage />
                        }
                    />

                </Routes>

            </Suspense>

        </BrowserRouter>
    )
}
export default Router