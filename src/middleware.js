import { verifyToken } from "./utils/token.js";

function isLoggedInAPI(req, res, next) {
    const authorization = req.headers.authorization;
    console.log("authorization", authorization);
    if (!authorization) {
        res.status(401).json({ error: "You need to log in to access" });
    }
    let token = authorization.split(" ");
    token = token.pop();
    const result = verifyToken(token);
    console.log("token verified", result);
    if (result) {
        req.user = {
            user_id: result.user_id
        }
        next();
    } else {
        res.status(401).json({ error: "You need to log in to access" });
    }
}

export {
    isLoggedInAPI
}