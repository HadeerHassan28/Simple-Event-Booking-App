import axios from "axios";
import Constants from "expo-constants";

const API_URL = Constants.expoConfig?.extra?.MOCK_API_URL;

export const getEventsApi = async () => {
  try {
    const response = await axios.get(`${API_URL}/user/events`);

    const events = response.data;

    return events;
  } catch (error) {
    throw new Error("Login failed");
  }
};
