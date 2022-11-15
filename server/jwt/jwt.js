const jwt = require("jsonwebtoken");

module.exports = function generateToken(payload) {
    return new Promise(
        (resolve, reject) => {
            jwt.sign(
                payload,
                'Yasuo',
                {
                    algorithm: "HS256",
                    expiresIn: "7d",
                    issuer: "issuer"
                }, 
                (error, token) => {
                    if(error) reject(error);
                    console.log(token);
                    resolve(token);
                }
            );
        }
    );
};