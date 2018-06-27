import { BASE_URL } from "./fetchConfig";
import { postData } from "../helper/fetchHelper";

const url = `${BASE_URL}/restaurants`;

export default {
  async findNearby(filters) {
    try {
      const restaurants = await postData(`${url}/all`, filters);
      return restaurants;
    } catch (error) {
      throw new Error(error);
    }
  },
  async getSchedule(placeId, filters) {
    try {
      const restaurants = await postData(`${url}/schedule`, {
        placeId,
        filters
      });
      return restaurants;
    } catch (error) {
      throw new Error(error);
    }
  }
};
