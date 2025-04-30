export interface Event {
  name: string;
  time: Date;
  location: string;
  description: string;
  speakers: [];
  price: number;
  image: string;
  capacity: number;
  spots: number;
  id: string;
  createdAt: Date;
}

export interface EventStore {
  events: Event[] | null;
  isLoading: boolean;
  error: string | null;
  getEvent: () => Promise<void>;
}
