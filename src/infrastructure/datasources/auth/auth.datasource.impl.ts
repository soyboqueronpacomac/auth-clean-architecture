import { CustomError, UserEntity, type AuthDatasource, type RegisterUserDto } from "../../../domain";

export class AuthDatasourceImpl implements AuthDatasource{
    async register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
        const { name, email, password} = registerUserDto;
        try {
            //TODO: verificar si el correo existe
            //TODO: Hash de contraseña
            // mapear la respuesta de nuestra entidad
            return new UserEntity(
                '1',
                name,
                email,
                password,
                ['ADMiN_ROLE']
            )
            
        } catch (error) {
            if (error instanceof CustomError) {
                throw error
            }
            throw CustomError.internalServer();
        }
    }

}