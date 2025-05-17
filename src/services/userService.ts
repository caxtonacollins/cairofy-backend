import prisma from "../utils/prisma";
import { CreateUserDto, UpdateUserDto, User } from "../types/user.t";

class UserService {
  private prisma: typeof prisma;

  constructor() {
    this.prisma = prisma;
  }

  /**
   * Create a new user
   */
  async createUser(data: CreateUserDto): Promise<User> {
    return this.prisma.user.create({
      data: {
        walletAddress: data.walletAddress,
        username: data.username,
        email: data.email,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
  }

  /**
 * Check if a user exists by wallet address
 * Useful for authentication
 */
  async userExists(walletAddress: string): Promise<boolean> {
    const count = await this.prisma.user.count({
      where: { walletAddress },
    });
    return count > 0;
  }
}

const userService = new UserService();
export { UserService };
export default userService;