import jwt from "jsonwebtoken"

const verifyToken = async (req , res) => {
    try {
        const token = req.cookies.jwt

        if(!token) {
            res.status(401).json({
                success: false,
                message: 'No token'
            })
        }

        const decoded = jwt.verify(token , process.env.JWT_SECRET)

        res.status(200).json({
            success: true, 
            id: decoded.id,
            email: decoded.email
        })
        

    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({
                success: false,
                message: 'Token expired'
            })
        }
        
        res.status(401).json({
            success: false,
            message: 'Invalid token'
        })
    }
}
export default verifyToken