import { Dayjs } from "dayjs";

export interface CalendarEventStorage {
  allTimeEvents: CalendarEvent[];
  events: {
    [year: number]: {
      yearEvents: CalendarEvent[];
      events: {
        [month: number]: {
          monthEvents: CalendarEvent[];
          events: {
            [day: number]: CalendarEvent[];
          };
        };
      };
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
