import { BASE_URL } from "./fetchConfig";
import { postData } from "./fetch";

const url = `${BASE_URL}/restaurants`;

export default {
  async findNearby(filters) {
    try {
      const restaurants = await postData(`${url}/all`, filters);
      return restaurants;
    } catch (error) {
      throw new Error(error);
    }
  }
};
