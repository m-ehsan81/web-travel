export interface TokenType {
  refreshToken: string;
  token: string;
}

export interface ResLoginData {
  token: string;
  refreshToken: string;
}

export interface ResponseData<T> {
  data: T;
  isSuccess: boolean;
  detail: string | null;
  statusCode: number;
}

export interface LoginBody {
  email: string;
  password: string;
  isPersistent: boolean;
}

export interface SignUpBody {
  email: string;
  password: string;
  rePassword: string;
}
