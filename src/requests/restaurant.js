import { BASE_URL } from "./fetchConfig";
import { postData } from "../helper/fetchHelper";
import { delay } from "../helper/asyncHelper";

const url = `${BASE_URL}/restaurants`;
let timerId;

export default {
  async findNearby(filters) {
    try {
      return await postData(`${url}/all`, filters);
    } catch (error) {
      throw new Error(error);
    }
  },
  async getNextRests(pageToken) {
    try {
      // clearTimeout(timerId);
      timerId = await delay(4000);
      console.log(timerId);
      return await postData(`${url}/next`, pageToken);
    } catch (error) {
      throw new Error(error);
    }
  },
  async getSchedule(placeId, filters) {
    try {
      return await postData(`${url}/schedule`, {
        placeId,
        filters
      });
    } catch (error) {
      throw new Error(error);
    }
  }
};
