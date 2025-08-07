import express from "express";
import {login,logout,signup, getAuthUser, onboard}  from "../controllers/auth.controller.js"
import { protectRoute } from "../middleware/auth.middleware.js";
const router=express.Router();
router.post("/signup",signup)
router.post("/login",login)
router.post("/logout",logout)
router.get("/me", protectRoute, getAuthUser)
router.post("/onboarding", protectRoute, onboard)
export default router;