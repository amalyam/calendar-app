import { useState } from "react";
import { Container, Paper } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";

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

function calculateMonthLastDate(anchorDate: Date): number {
  // calculate the last day of the current month
  // (how many days there are in the current month)

  const nextMonthFirstDayUTC = calculateMonthFirstDay(anchorDate, 1).valueOf();
  const lastDay = new Date(nextMonthFirstDayUTC - 1);
  const lastDayDate = lastDay.getDate();

  return lastDayDate;
}

export default function Calendar() {
  const [anchorDate, setAnchorDate] = useState(new Date());

  const firstWeekdayValue: number = calculateFirstWeekday(anchorDate).getDay();
  const lastDayDate: number = calculateMonthLastDate(
    calculateFirstWeekday(anchorDate)
  );

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
        <Button variant="contained" onClick={() => setAnchorDate(new Date())}>
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
          const day = index - firstWeekdayValue + 1;
          return (
            <Grid xs={12 / 7}>
              <Paper variant="outlined" square sx={{ height: 100 }}>
                {day < 1 || day > lastDayDate ? "" : day}
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
