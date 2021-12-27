import { getConnection, getRepository, Repository } from "typeorm";
import { User } from "../../entity/User";

export class AuthManager {
  private authRepository: Repository<User>;
  constructor() {
    this.authRepository = getRepository(User);
  }

  public async findUserForRegister(
    username: string,
    email: string
  ): Promise<User> {
    return this.authRepository
      .createQueryBuilder("user")
      .where("username = :username OR email = :email", { username, email })
      .getOne();
  }
  public async findUserForLogin(usernameOrEmail: string): Promise<User> {
    return this.authRepository
      .createQueryBuilder("user")
      .where("username = :usernameOrEmail OR email = :usernameOrEmail", {
        usernameOrEmail,
      })
      .getOne();
  }
  public async register(data): Promise<User> {
    return this.authRepository.save(data);
  }
}
