import { API } from "../controller/axios-instance";

export const ActivitieSearchLocation = async (query: string) => {
  try {
    const res = await API.get(
      `/attraction/searchLocation?query=${query}&languagecode=en-us`
    );

    console.log("Destination search result:", res.data);

    return res.data.data.products || [];
  } catch (error) {
    console.error("Error fetching destinations:", error);
    throw error;
  }
};

export const ActivitiesSearchAttractions = async (id: string) => {
  try {
    const res = await API.get(`/attraction/searchAttractions?id=${id}`);

    return res.data.data || [];
  } catch (error) {
    console.error("Error fetching destinations:", error);
    throw error;
  }
};

export const FlightSearch = async (query: string) => {
  try {
    const res = await API.get(
      `https://booking-com15.p.rapidapi.com/api/v1/flights/searchDestination?query=${query}`
    );

    return res.data.data || [];
  } catch (error) {
    console.error("Error fetching destinations:", error);
    throw error;
  }
};

export const HotelsSearch = async (query: string) => {
  try {
    const res = await API.get(
      `https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination?query=${query}`
    );

    return res.data.data || [];
  } catch (error) {
    console.error("Error fetching destinations:", error);
    throw error;
  }
};
