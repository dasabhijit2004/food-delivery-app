import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET || 'supersecretkey'; // use env in production

export function generateJWT(user) {
  const payload = {
    id: user._id,
    email: user.email,
    name: user.name,
  };

  return jwt.sign(payload, SECRET_KEY, { expiresIn: '7d' }); // expires in 7 days
}

export function verifyJWT(token) {
  return jwt.verify(token, SECRET_KEY);
}
