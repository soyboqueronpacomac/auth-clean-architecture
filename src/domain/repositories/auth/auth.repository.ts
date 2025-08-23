import type { RegisterUserDto } from "../../dtos/auth/register-user.dto";
import type { UserEntity } from "../../entities/UserEntity";

export abstract class AuthRepository {
    // TODO: login

    abstract register( registerUserDto : RegisterUserDto): Promise<UserEntity>
}