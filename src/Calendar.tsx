import { useState } from "react";
import { Container, Paper, Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import dayjs from "dayjs";

/* TODO const [events, changeEvents] = useState({}); <NewEventWindow /> under [+] Button*/

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

export default function Calendar() {
  const [anchorDate, setAnchorDate] = useState(today.startOf("month"));

  return (
    <Container>
      <div>
        {/*TODO fit button size to arrows, add spacing*/}
        <Button variant="contained" onClick={() => setAnchorDate(today)}>
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

          return (
            <Grid xs={12 / 7}>
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
                      : date.month() !== today.month()
                      ? "grey"
                      : "",
                }}
              >
                {date.date() === 1 ? date.format("MMM D") : date.date()}
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
