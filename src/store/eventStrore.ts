import { create } from "zustand";

import { getEventsApi } from "../services/eventsService";
import { EventStore } from "../types/events";

export const useEventsStore = create<EventStore>((set: any) => ({
  events: null,
  isLoading: false,
  error: null,

  getEvent: async () => {
    set({ isLoading: true, error: null });
    try {
      const events = await getEventsApi();

      if (!events) {
        set({ error: "Invalid email or password", isLoading: false });
        return;
      }

      set({ events, isLoading: false });
      return;
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
    }
  },
}));
