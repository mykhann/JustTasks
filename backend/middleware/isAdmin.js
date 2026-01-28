const isAdmin = (req, res, next) => {
    const user = req.user
    if (user.role !== "admin") {
        return res.status(401).json({
            message: "You are not authorized",
            success: false
        })
    }
    next()
}
export default isAdmin