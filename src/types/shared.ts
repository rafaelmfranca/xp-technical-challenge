export type LoginPayload = {
  email: string;
  password: string;
};

export type AuthContextData = {
  isAuthenticated: boolean;
  error: string;
  handleLogin: (payload: LoginPayload) => Promise<void>;
};
