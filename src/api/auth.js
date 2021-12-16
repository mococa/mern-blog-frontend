import { request } from ".";

export class AuthAPI {
  static async login({ username, password }) {
    return request.post("/auth/sign-in", { username, password });
  }
  static async register({
    username,
    email,
    password,
    passwordConfirmation,
    profilePicture,
  }) {
    return request.post("/auth/sign-up", {
      username,
      email,
      password,
      passwordConfirmation,
      profilePicture,
    });
  }
}
