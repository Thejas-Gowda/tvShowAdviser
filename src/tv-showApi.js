import axios from "axios";
import { Fake_Object, Fake_Recommendation } from "./Fake_Object";
import { BASE_URL, Authorization, Base_image } from "./config";

const options = {
  headers: {
    accept: "application/json",
    Authorization: Authorization,
  },
};
export class TVShowApi {
  static async fetchPopular() {
    // const response = await axios.get(`${BASE_URL}tv/popular`, options);
    // console.log("api res", response.data.results);
    // return response.data.results;
    return Fake_Object;
  }
  static async fetchPopularRecommendations(tvShowId) {
    console.log("api ht");
    const response = await axios.get(
      `${BASE_URL}tv/${tvShowId}/recommendations`,
      options
    );
    console.log("api res", response.data.results);
    return response.data.results;
    // return Fake_Recommendation;
  }
  static async fetchByTitle(title) {
    console.log("api ht");
    const response = await axios.get(
      `${BASE_URL}search/tv?query=${title}`,
      options
    );
    console.log("api search", response.data.results);
    return response.data.results;
    // return Fake_Recommendation;
  }
}
