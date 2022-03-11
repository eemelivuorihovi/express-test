const authenticateToken = (req, res, next) => {
    let auth = req.headers["authorization"];
    if (auth && auth === "mysecrettoken") {
        next();
    }
    else {
        res.sendStatus(403);
    }
};

module.exports = authenticateToken;