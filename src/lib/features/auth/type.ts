export interface TokenType {
  refreshToken: string;
  token: string;
}

export interface ResLoginData {
  token: string;
  role: 'Admin' | 'User';
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

export interface SignUpRes {
  isSuccess: boolean;
  message: string;
  statusCode: number;
  errorType: null | string;
}
