import { Dayjs } from "dayjs";

export interface CalendarEventStorage {
  [year: number]: {
    [month: number]: {
      [day: number]: CalendarEvent[];
    };
  };
}

export interface CalendarEvent {
  eventName: string;
  startDateTime: Dayjs;
  endDateTime: Dayjs;
  location: string;
  description: string;
}
