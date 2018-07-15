import { BASE_URL } from "./fetchConfig";
import { getData, postData } from "../helper/fetchHelper";

export default {
  async signIn(user) {
    try {
      // console.log(user);
      const { currentUser, token } = await postData(
        `${BASE_URL}/users/signin`,
        user
      );
      // document.cookie = `ShallEat=${"fdgdfg"}; Max-Age=3600; HttpOnly; Secure`;
      // document.cookie = "ShallEat=hello; Max-Age=3600; HttpOnly; Secure";

      document.cookie = `ShallEat=${token}`;

      // console.log(currentUser, token);
      return currentUser;
      // return signedInUser;
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
      const signOutMessage = await getData(`${BASE_URL}/users/signout`);
      return signOutMessage;
    } catch (error) {
      throw new Error(error);
    }
  },

  async current() {
    try {
      const currentUser = await getData(`${BASE_URL}/users/current_user`);
      return currentUser;
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
