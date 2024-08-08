import { TLogin } from "../lib/types";
import { api } from "./base";

class AuthApi {
  async login(value: TLogin) {
    const data = await api.post("api/login", {
      email: value.email,
      password: value.password,
    });
    return data;
  }
}

export const authApi = new AuthApi();
