import dayjs, { Dayjs } from "dayjs";
import { CalendarEvent, CalendarEventStorage } from "./CalendarEvent";

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

const randomRange = (start: number, end: number) =>
  Math.floor(Math.random() * (end - start)) + start;

const randomWords = (length: number = 1): string => {
  const words = lorem.split(" ");
  let start = randomRange(0, words.length);
  let end = start + length;
  const word = words.slice(start, end).join(" ");
  return word;
};

const sampleEvent = (start: string, end: string = start): CalendarEvent => ({
  eventName: randomWords(3),
  startDateTime: dayjs(start),
  endDateTime: dayjs(end),
  location: randomWords(),
  description: randomWords(5),
});

const sampleEvent1: CalendarEventStorage = {
  allTimeEvents: [],
  events: {
    2023: {
      yearEvents: [],
      events: {
        7: {
          monthEvents: [],
          events: {
            5: [
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
  allTimeEvents: [],
  events: {
    2023: {
      yearEvents: [
        // {
        //   eventName: "Learning Code Year",
        //   startDateTime: dayjs("1/1/2023"),
        //   endDateTime: dayjs("12/25/23"),
        //   location: "NYC",
        //   description: "learn to code",
        // },
      ],
      events: {
        7: {
          monthEvents: [sampleEvent("8/8/23", "8/11/23")],
          events: {
            5: [sampleEvent("8/5/23")],
          },
        },
      },
    },
  },
};

export { sampleEvent1, sampleEvent2 };
