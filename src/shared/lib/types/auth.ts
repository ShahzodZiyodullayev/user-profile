export interface TLogin {
  email: string;
  password: string;
}

export type TSession = {
  userId: string | null;
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
};
