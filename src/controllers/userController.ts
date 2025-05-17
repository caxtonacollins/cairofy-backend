import { Request, Response } from 'express';
import userService from '../services/userService';
import { CreateUserDto } from '../types/user.t';

class UserController {
  /**
   * Create a new user
   * @route POST /api/users
   */
  async createUser(req: Request, res: Response) {
    try {
      const userData: CreateUserDto = req.body;

      if (!userData) {
        return res.status(400).json({ error: 'User data is required' });
      }

      // Check if wallet address is provided
      if (!userData.walletAddress) {
        return res.status(400).json({ error: 'Wallet address is required' });
      }

      // Check if user with this wallet address already exists
      const exists = await userService.userExists(userData.walletAddress);
      if (exists) {
        return res.status(409).json({ error: 'User with this wallet address already exists' });
      }

      const user = await userService.createUser(userData);
      return res.status(201).json(user);
    } catch (error) {
      console.error('Error creating user:', error);
      return res.status(500).json({ error: 'Failed to create user' });
    }
  }

}

export default new UserController();