import { useState } from "react";
import { Container, Paper, Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import dayjs, { Dayjs } from "dayjs";
import NewEventWindow from "./NewEventWindow";
import { CalendarEvent } from "./CalendarEvent";
import CalendarEventStorage from "./CalendarEventStorage";
import EventRibbon from "./EventRibbon";
import { palette } from "@mui/system";
import { sampleEvent1 } from "./sampleCalendarEvent";

/* TODO
generateMultiDayEventRibbons() helper func
*/

const today = dayjs();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function generateEventRibbons(eventList: CalendarEvent[]) {
  return eventList.map((event, index) => (
    <EventRibbon eventName={event.eventName} index={index} />
  ));
}

export default function Calendar() {
  const [anchorDate, setAnchorDate] = useState(today.startOf("month"));
  const [storage, changeStorage] = useState<CalendarEventStorage>(
    new CalendarEventStorage()
  );

  return (
    <Container>
      <div>
        <Button
          variant="contained"
          onClick={() => setAnchorDate(today.startOf("month"))}
        >
          Today
        </Button>
        <Button
          variant="outlined"
          onClick={() => setAnchorDate(anchorDate.subtract(1, "month"))}
        >
          &lt;
        </Button>
        {`${months[anchorDate.month()]} ${anchorDate.year()}`}
        <Button
          variant="outlined"
          onClick={() => setAnchorDate(anchorDate.add(1, "month"))}
        >
          &gt;
        </Button>
        <NewEventWindow onSave={(event) => window.alert(event)} />
      </div>
      <Grid container spacing={0}>
        {[
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ].map((day) => (
          <Grid xs={12 / 7}>
            <Paper variant="outlined" square>
              {day}
            </Paper>
          </Grid>
        ))}
        {[...new Array(42)].map((_, index) => {
          const dayIndex = index - anchorDate.day();
          const date = anchorDate.add(dayIndex, "day");

          const allTimeEvents = storage.getAllTimeEvents();
          const yearEvents = storage.getYearEvents(date);
          const monthEvents = storage.getMonthEvents(date);
          const dayEvents = storage.getEventsOnDate(date);

          return (
            <Grid key={index} xs={12 / 7}>
              <Paper
                variant="outlined"
                square
                sx={{
                  height: 100,
                  fontWeight:
                    date.valueOf() === today.valueOf() ? "bold" : "normal",
                  color:
                    date.valueOf() === today.valueOf()
                      ? "blue"
                      : date.month() !== anchorDate.month()
                      ? "grey"
                      : "",
                }}
              >
                <>
                  {date.date() === 1 ? date.format("MMM D") : date.date()}
                  {allTimeEvents ? generateEventRibbons(allTimeEvents) : ""}
                  {yearEvents ? generateEventRibbons(yearEvents) : ""}
                  {monthEvents.map((event, index) => {
                    if (
                      date >= event.startDateTime &&
                      date <= event.endDateTime
                    ) {
                      return (
                        <EventRibbon
                          eventName={event.eventName}
                          index={index}
                        />
                      );
                    }
                    return null;
                  })}
                  {dayEvents.map((event, index) => (
                    <EventRibbon eventName={event.eventName} index={index} />
                  ))}
                </>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
