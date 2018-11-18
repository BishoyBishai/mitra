export interface IAuthState {
  authError: any;
  uid:string;
}

export interface ICredentials {
  password: string;
  email: string;
}

export interface ILoginProps {
  login;
  authError;
}

export interface IUSer extends ICredentials {
  displayName: string;
}
