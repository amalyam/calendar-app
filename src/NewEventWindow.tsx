import { useState } from "react";
import { Popper, Box, Button, TextField, Typography } from "@mui/material";
import { DateTimeField } from "@mui/x-date-pickers/DateTimeField";

/* TODO style popper more clearly*/
/*All day checkbox*/
/*DateTimePicker start*/ /*DateTimePicker end*/
/*repeat options*/
/*add error prop for event name, etc */

export default function NewEventWindow() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <div className="new-task">
      <Button variant="contained" onClick={handleClick}>
        +
      </Button>
      <Popper
        id={id}
        open={open}
        placement="bottom-start"
        disablePortal={true}
        anchorEl={anchorEl}
        modifiers={[
          {
            name: "flip",
            enabled: false,
            options: {
              altBoundary: true,
              rootBoundary: "document",
              padding: 8,
            },
          },
          {
            name: "preventOverflow",
            enabled: true,
            options: {
              altAxis: true,
              altBoundary: true,
              tether: true,
              rootBoundary: "document",
              padding: 8,
            },
          },
        ]}
      >
        <Box component="form" sx={{ border: 1, p: 1, bgcolor: "white" }}>
          <div>
            <Typography variant="h3">New Event</Typography>
          </div>
          <div>
            <TextField id="event-name" label="Event Name"></TextField>
          </div>
          <div>
            <DateTimeField label="start" />
          </div>
          <div>
            <DateTimeField label="end" />
          </div>
          <div>
            <TextField id="description" label="Description">
              Description
            </TextField>
          </div>
          <div>
            <TextField id="location" label="Location">
              Location
            </TextField>
          </div>
        </Box>
      </Popper>
    </div>
  );
}
