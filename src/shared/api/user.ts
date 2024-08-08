import { api } from "./base";

class UserApi {
  async user(userId?: string | undefined | null) {
    const data = await api.get("api/users", { params: { userId } });

    return data;
  }

  async userUpdate(value: FormData) {
    const data = await api.put("api/update-user", value, {
      headers: {
        "Content-Type": "applicatoin/x-www-form-urlencoded",
      },
    });

    return data;
  }
}

export const userApi = new UserApi();
