export interface IAuthState {
  authError: any;
}

export interface ICredentials {
  password: string;
  email: string;
}

export interface ILoginProps{
  login,
  authError
}
