import { create } from "zustand";
import { loginApi, signupApi } from "../services/authService";

interface AuthStore {
  user: { id: string; email: string; name: string } | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
  login: (name: string, password: string) => Promise<void>;
  signup: (name: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>((set: any) => ({
  user: null,
  token: null,
  isLoading: false,
  error: null,

  login: async (name: string, password: string) => {
    set({ isLoading: true, error: null });
    try {
      const user = await loginApi(name, password);
      console.log("login store", user);

      if (!user) {
        set({ error: "Invalid email or password", isLoading: false });
        return;
      }
      set({ user, token: "mock-token", isLoading: false });
      return user;
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
    }
  },
  signup: async (name: string, password: string) => {
    set({ isLoading: true, error: null });
    try {
      const response = await signupApi(name, password);

      if (response.status !== 200) {
        const data = response.data;
        set({ user: data.user, token: data.token, isLoading: false });
      }
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
    }
  },
  logout: () => {
    set({ user: null, token: null });
  },
}));
