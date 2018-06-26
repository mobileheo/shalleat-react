import { BASE_URL } from "./fetchConfig";
import { getData, postData } from "../helper/fetchHelper";

export default {
  async signIn(user) {
    try {
      const newUser = await postData(`${BASE_URL}/users/signin`, user);
      return newUser;
    } catch (error) {
      throw new Error(error);
    }
  },

  async signUp(user) {
    try {
      const newUser = await postData(`${BASE_URL}/users/signup`, user);
      return newUser;
    } catch (error) {
      throw new Error(error);
    }
  },

  async signOut() {
    try {
      const signOutMessage = await getData(`${BASE_URL}/users/signup`, user);
      return signOutMessage;
    } catch (error) {
      throw new Error(error);
    }
  }
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
