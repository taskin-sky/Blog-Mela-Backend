import express from 'express';
import UserController from '../controllers/user.controller.js';
import dashboardController from '../controllers/dashboard.controller.js';
import { validateUser } from '../middlewares/validation.middleware.js';

const router = express.Router();

// User Routes
router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.post('/logout', UserController.logout);

// router.get('/dashboard', validateUser, dashboardController.dashboard);

export default router;
