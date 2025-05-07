import { verifyToken } from "./utils/token.js";

function isLoggedInAPI(req, res, next) {
    const token  = req.cookies?.token;
if(!token){
    res.status(401).json({error:"You need to log in to access"});
}
const result = verifyToken(token);
console.log("token verified",result);
if(result){
    req.user = {
        user_id: result.user_id,
        role: result.role
    }
    // podemos alargar el token y la cookie cada vez que entramos
    next();
}else{
    res.status(401).json({error:"You need to log in to access"});
}
}


export {
    isLoggedInAPI
}