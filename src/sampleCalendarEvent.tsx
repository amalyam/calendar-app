import dayjs from "dayjs";
import { CalendarEventStorage } from "./CalendarEvent";

const sampleEvent1: CalendarEventStorage = {
  allTimeEvents: [],
  events: {
    2023: {
      yearEvents: [],
      events: {
        0: {
          monthEvents: [],
          events: {
            6: [
              {
                eventName: "Learn about arrays",
                startDateTime: dayjs("8/5/23"),
                endDateTime: dayjs("8/5/23"),
                location: "Online",
                description: "learn about arrays",
              },
            ],
          },
        },
      },
    },
  },
};

const sampleEvent2 = {
  allTimeEvents: [
    {
      eventName: "Covid",
      startDateTime: dayjs("3/20/2020"),
      endDateTime: dayjs("7/27/23"),
      location: "Earth",
      description: "ccccovid-19",
    },
  ],
  events: {
    2023: {
      yearEvents: [
        {
          eventName: "Learning Code Year",
          startDateTime: dayjs("1/1/2023"),
          endDateTime: dayjs("12/25/23"),
          location: "NYC",
          description: "learn to code",
        },
      ],
      events: {
        0: {
          monthEvents: [],
          events: {
            6: [
              {
                eventName: "Arrays",
                startDateTime: dayjs("6/6/23"),
                endDateTime: dayjs("6/6/23"),
                location: "Online",
                description: "learn about arrays",
              },
            ],
          },
        },
      },
    },
  },
};

export { sampleEvent1, sampleEvent2 };
