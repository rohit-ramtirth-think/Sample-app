import { AuthServiceImpl } from "../services/AuthService"

export interface AuthInteractor {
  initialState(): any
  loginUser(username: string, password: string): any
}

export class AuthInteractorImpl implements AuthInteractor {
  constructor(
    private authService = AuthServiceImpl.getInstance(),
  ) { }

  loginUser(username: string, password: string) {
    return this.authService.loginUser(username, password);
  }


  initialState() {
    return {
      loading: false,
      error: false,
      loggedIn: false,
      loginData: null,
    }
  }

  private static INSTANCE: AuthInteractor;
  static getInstance(): AuthInteractor {
    if (this.INSTANCE) {
      return this.INSTANCE;
    }
    this.INSTANCE = new AuthInteractorImpl();
    return this.INSTANCE;
  }
}