import { post } from "../../../../config/AxiosConfig";
import { LoginRequestBody, LoginResponse } from "../../constants/AuthInterfaces";

export interface AuthRepository {
    loginUser(requestBody : LoginRequestBody): Promise<LoginResponse>;
  }
  
export class AuthRepositoryImpl implements AuthRepository {

    loginUser(requestBody : LoginRequestBody): Promise<LoginResponse> {
        return post(this.generateLoginUrl(), requestBody)
    }


  generateLoginUrl() {
    return '/login';
  }


  private static INSTANCE: AuthRepository;
  static getInstance(): AuthRepository {
    if (this.INSTANCE) {
      return this.INSTANCE;
    }
    this.INSTANCE = new AuthRepositoryImpl();
    return this.INSTANCE;
  }

}

