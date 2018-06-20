import { BASE_URL } from "./fetchConfig";
import { postData } from "./fetch";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json"
};

export default {
  async signIn(user) {
    try {
      const newUser = await postData(`${BASE_URL}/users/signin`, user);
      return newUser;
    } catch (error) {
      throw new Error(error);
    }
  }

  // async signUp(user) {
  //   try {
  //     const res = await fetch(
  //       `${BASE_URL}/users/signup`,
  //       fetchObj("POST", user)
  //     );
  //     console.log(res);
  //     const { token } = await res.json();
  //     return token;
  //   } catch (error) {
  //     throw new Error(error);
  //   }
  // },
  // async secret() {
  //   try {
  //     const res = await fetch(`${BASE_URL}/users/secret`, {
  //       headers,
  //       credentials: "include"
  //     });
  //     const secret = await res.json();

  //     return secret;
  //   } catch (error) {
  //     throw new Error(error);
  //   }
  // }
};
