import express from 'express';
import {
  authUser,
  getUserById,
  getUsers,
  deleteUser,
  registerUser,
  updateUser,
} from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';
const router = express.Router();

router.route('/').get(getUsers).post(registerUser);
router.route('/login').post(authUser);

router
  .route('/:id')
  .get(protect, getUserById)
  .put(protect, updateUser)
  .delete(protect, deleteUser);

export default router;
