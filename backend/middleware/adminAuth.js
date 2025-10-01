import jwt from "jsonwebtoken";

const adminAuth = (req, res, next) => {
  try {
    // Use lowercase header key for reliability
    const token = req.headers["token"];
    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "User is not authorized" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Make sure token payload contains email
    if (!decoded.email || decoded.email !== process.env.ADMIN_EMAIL) {
      return res
        .status(403)
        .json({ success: false, message: "User not authorized" });
    }

    req.user = decoded; // optional: store decoded user in request
    next();
  } catch (error) {
    console.log(error);
    res
      .status(401)
      .json({ success: false, message: "Invalid or expired token" });
  }
};

export default adminAuth;
