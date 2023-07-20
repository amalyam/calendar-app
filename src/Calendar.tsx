import { useState } from "react";
import { Container, Paper } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";

const now = new Date();
const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

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

function calculateFirstWeekday(anchorDate: Date): Date {
  // calculate first day of current month

  const firstWeekday = new Date(
    anchorDate.getFullYear(),
    anchorDate.getMonth(),
    1
  );

  return firstWeekday;
}

function calculateMonthFirstDay(anchorDate: Date, offset: number) {
  return new Date(anchorDate.getFullYear(), anchorDate.getMonth() + offset, 1);
}

export default function Calendar() {
  const [anchorDate, setAnchorDate] = useState(today);

  const firstWeekdayValue: number = calculateFirstWeekday(anchorDate).getDay();

  function changeMonth(direction: -1 | 1) {
    setAnchorDate(calculateMonthFirstDay(anchorDate, direction));
  }

  return (
    <Container>
      <div>
        {/*TODO fit button size to arrows, add spacing*/}
        <Button variant="outlined" onClick={() => changeMonth(-1)}>
          &lt;
        </Button>
        {`${months[anchorDate.getMonth()]} ${anchorDate.getFullYear()}`}
        <Button variant="outlined" onClick={() => changeMonth(1)}>
          &gt;
        </Button>
        <Button variant="contained" onClick={() => setAnchorDate(today)}>
          Today
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
          const dayIndex = index - firstWeekdayValue + 1;
          const date = new Date(
            today.getFullYear(),
            today.getMonth(),
            dayIndex
          );

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
                      : date.getMonth() !== today.getMonth()
                      ? "grey"
                      : "",
                }}
              >
                {date.getDate()}
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
