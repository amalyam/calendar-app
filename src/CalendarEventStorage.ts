import { Dayjs } from "dayjs";
import { CalendarEvent } from "./CalendarEvent";
import { sampleEvent2 } from "./sampleCalendarEvent";

export default class CalendarEventStorage {
  private allTimeEvents: CalendarEvent[] = sampleEvent2.allTimeEvents;
  private events: {
    [year: number]:
      | {
          yearEvents: CalendarEvent[];
          events: {
            [month: number]: {
              monthEvents: CalendarEvent[];
              events: {
                [day: number]: CalendarEvent[];
              };
            };
          };
        }
      | undefined;
  } = sampleEvent2.events;

  getEventsOnDate(date: Dayjs): CalendarEvent[] {
    const yearEvents = this.events[date.year()];
    const monthEvents = yearEvents?.events[date.month()];

    return monthEvents?.events[date.date()] ?? [];
  }

  getAllTimeEvents(): CalendarEvent[] {
    return this.allTimeEvents;
  }

  getYearEvents(date: Dayjs): CalendarEvent[] {
    return this.events[date.year()]?.yearEvents ?? [];
  }

  getMonthEvents(date: Dayjs): CalendarEvent[] {
    return this.events[date.year()]?.events[date.month()]?.monthEvents ?? [];
  }
}
