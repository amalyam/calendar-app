import { useState } from "react";
import { List, ListItem, IconButton, ListItemText } from "@mui/material";

export default function TaskList() {
  const [tasks, setTasks] = useState<string[]>([]);

  return (
    <div className="task-box">
      <div className="task-list">
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {tasks.map((task: string) => (
            <ListItem
              key={task}
              disableGutters
              secondaryAction={
                <IconButton aria-label="comment">
                  {/* TODO: figure out icons */}
                </IconButton>
              }
            >
              <ListItemText primary={`Line item ${task}`} />
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
}
