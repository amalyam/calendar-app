import { Box } from "@mui/system";
import { CalendarEvent } from "./CalendarEvent";

export default function EventRibbon({
  eventList = [],
}: {
  eventList: CalendarEvent[];
}) {
  /* TODO return a different ribbon for each event in the eventList 
    - map over all events, creating a new Box component for each one
  */

  const eventRibbons = eventList.map((event, index) => (
    <Box key={index} sx={{ bgcolor: "blue", color: "white", p: 4 }}>
      {event.eventName}
    </Box>
  ));
  return <>{eventRibbons}</>;
}
