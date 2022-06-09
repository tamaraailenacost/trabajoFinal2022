const ADMIN = true;

const isAdmin = (req, res, next) => {
    if (ADMIN) {
        next();
    } else {
        res
            .status(401)
            .json({
                error: -1,
                description: `ruta ${req.path} metodo ${req.method} not authorized`,
            })
    }
};


module.exports = { isAdmin };