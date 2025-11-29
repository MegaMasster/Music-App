import express from "express"
const router = express.Router()

import { signUp , verifyEmail } from "../controllers/userControllers.js"
import verifyToken from "../middleware/authMiddleware.js"

router.post("/signup" , signUp)
router.post("/verify-email" , verifyEmail)
router.get("/verifyToken" , verifyToken)

export default router