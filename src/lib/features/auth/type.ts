export interface TokenType {
  refreshToken: string;
  token: string;
}

export interface ResLoginData {
  email: string;
  id: number;
  name: string | null;
  role: 'Customer' | 'Admin';
  token: TokenType;
}

export interface ResponseData<T> {
  data: T;
  errorType: string | null;
  isSuccess: boolean;
  message: string | null;
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
