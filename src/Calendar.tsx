import { Container, Paper } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

export default function Calendar() {
  const today = new Date();
  const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
  const firstDayValue = firstDay.getDay();

  const nextMonthFirstDay = new Date(
    firstDay.getFullYear(),
    firstDay.getMonth() + 1,
    1
  );

  const nextMonthFirstDayUTC = nextMonthFirstDay.valueOf();
  const lastDay = new Date(nextMonthFirstDayUTC - 1);
  const lastDayDate = lastDay.getDate();

  return (
    <Container>
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
          const day = index - firstDayValue + 1;
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
