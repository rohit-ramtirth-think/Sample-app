
import { LoginRequestBody, LoginResponse } from "../../constants/AuthInterfaces";
import { AuthRepositoryImpl } from "../repository/AuthRepository";


export interface AuthService {
  loginUser(username: string, password: string): Promise<LoginResponse>;
}

export class AuthServiceImpl implements AuthService {

  constructor(
    private authRepository = AuthRepositoryImpl.getInstance(),
  ) { }

  loginUser(username: string, password: string): Promise<LoginResponse> {
    const requestBody : LoginRequestBody = {username,password};
    return this.authRepository.loginUser(requestBody);
  }




  private static INSTANCE: AuthService;
  static getInstance(): AuthService {
    if (this.INSTANCE) {
      return this.INSTANCE;
    }
    this.INSTANCE = new AuthServiceImpl();
    return this.INSTANCE;
  }
}
