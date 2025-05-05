import axios from "axios";
import Constants from "expo-constants";
import { Event } from "../types/events";

const API_URL = Constants.expoConfig?.extra?.MOCK_API_URL;

export const loginApi = async (name: string, password: string) => {
  try {
    const response = await axios.get(`${API_URL}/user/user`);

    const users = response.data;
    console.log("users ", users);
    const user = users.find(
      (user: { name: string; password: string }) =>
        user.name === name && user.password === password
    );
    console.log("user", user);

    return user;
  } catch (error) {
    throw new Error("Login failed");
  }
};

export const signupApi = async (name: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/user/user`, {
      name,
      password,
    });
    return response.data;
  } catch (error) {
    throw new Error("Signup failed");
  }
};

export const postUserEventApi = async (userId: string, event: Event) => {
  try {
    const response = await axios.post(`${API_URL}/user/user/${userId}`, {
      event,
    });
    return response.data;
  } catch (error) {
    throw new Error("Post event failed");
  }
};
