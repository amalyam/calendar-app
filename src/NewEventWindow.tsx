import React, { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { Popper, Box, Button, TextField, Typography } from "@mui/material";
import { DateTimeField } from "@mui/x-date-pickers/DateTimeField";

/* TODO style popper more clearly*/
/*All day checkbox*/
/*DateTimePicker start*/ /*DateTimePicker end*/
/*repeat options*/
/*add error prop for event name, etc */

export default function NewEventWindow({
  onSave,
}: {
  onSave: (newEvent: CalendarEvent) => void;
}) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;
  const now = dayjs();

  const [eventName, setEventName] = useState("");
  const [startDateTime, setStartDateTime] = useState(dayjs());
  const [endDateTime, setEndDateTime] = useState(now.hour(now.hour() + 1));
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

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
            <TextField
              id="event-name"
              label="Event Name"
              value={eventName}
              onChange={(event) => setEventName(event.target.value)}
              required
            />
          </div>
          <div>
            <DateTimeField
              label="start"
              value={startDateTime}
              onChange={(event) => setStartDateTime(startDateTime)}
              format="l LT"
              required
            />
          </div>
          <div>
            <DateTimeField
              label="end"
              value={endDateTime}
              onChange={(event) => setEndDateTime(endDateTime)}
              format="l LT"
              required
            />
          </div>
          <div>
            <TextField
              id="description"
              label="Description"
              value={description}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setDescription(event.target.value)
              }
            >
              Description
            </TextField>
          </div>
          <div>
            <TextField
              id="location"
              label="Location"
              value={location}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setLocation(event.target.value)
              }
            >
              Location
            </TextField>
          </div>
          <div>
            <Button variant="outlined" onClick={() => setAnchorEl(null)}>
              close
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                onSave();
                setAnchorEl(null);
              }}
            >
              save
            </Button>
          </div>
        </Box>
      </Popper>
    </div>
  );
}
