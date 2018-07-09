import { BASE_URL } from "./fetchConfig";
import { postData } from "../helper/fetchHelper";
import { delay } from "../helper/asyncHelper";

const url = `${BASE_URL}/restaurants`;

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
      await delay(2000);
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
  },
  async getDetail(placeId, filters) {
    try {
      return await postData(`${url}/detail`, {
        placeId,
        filters
      });
    } catch (error) {
      throw new Error(error);
    }
  },
  async getPhoto(photoId, maxWidth) {
    try {
      return await postData(`${url}/photo`, {
        photoId,
        maxWidth
      });
    } catch (error) {
      throw new Error(error);
    }
  },
  async getPhotos(photos, maxWidth) {
    try {
      return await postData(`${url}/photos`, {
        photos,
        maxWidth
      });
    } catch (error) {
      throw new Error(error);
    }
  }
};
