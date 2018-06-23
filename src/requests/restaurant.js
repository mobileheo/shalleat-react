import { BASE_URL } from "./fetchConfig";
import { postData } from "./fetch";

const url = `${BASE_URL}/restaurnats`;

export default {
  async findNearby(filters) {
    try {
      const restaurnats = await postData(`${url}/all`, filters);
      return restaurnats;
    } catch (error) {
      throw new Error(error);
    }
  }
};
