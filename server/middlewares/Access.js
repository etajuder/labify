import jwt from 'jsonwebtoken';

class Access {

  static init(req, res, next) {
    req.secret = process.env.SECRET;
    next();
  }

  static verifyToken(req, res, next) {
    const token = req.headers.authorization || req.headers['x-access-token'];
    if (!token) {
      res.status(401).send({ message: 'UnAuthorized Access' });
    } else {
      jwt.verify(token, req.secret, (err, decoded) => {
        if (err) {
          return res.status(401).send({ message: 'Could not verify that student' });
        }
        req.decoded = decoded;
        next()
      });
    }
  }

}
export default Access;
