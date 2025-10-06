import express from "express";
import {
  allOrders,
  placeOrderRazorpay,
  placeOrderStripe,
  updateStatus,
  userOrders,
  placeOrder,
  verifyStripe,
} from "../controllers/orderController.js";
import adminAuth from "../middleware/adminAuth.js";
import authUser from "../middleware/auth.js";

const orderRouter = express.Router();

//ADMIN AUTH ROUTE
orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateStatus);

//PAYMENT GATEWAY
orderRouter.post("/place", authUser, placeOrder);
orderRouter.post("/stripe", authUser, placeOrderStripe);
orderRouter.post("/razorpay", authUser, placeOrderRazorpay);

//USER FEATURES
orderRouter.post("/userOrders", authUser, userOrders);

//VERIFY PAYMENT
orderRouter.post("/verifyStripe", authUser, verifyStripe);
export default orderRouter;
