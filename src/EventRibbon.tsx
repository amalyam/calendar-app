import { Box } from "@mui/system";

export default function EventRibbon({
  eventName,
  index,
}: {
  eventName: string;
  index: number;
}) {
  /* TODO return a different ribbon for each event in the eventList 
    - map over all events, creating a new Box component for each one
  */

  return (
    <Box
      key={index}
      sx={{
        bgcolor: "blue",
        color: "white",
        p: 1,
        mt: 1,
        borderRadius: "4px",
        fontSize: "0.8rem",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        textAlign: "left",
      }}
    >
      {eventName}
    </Box>
  );
}
