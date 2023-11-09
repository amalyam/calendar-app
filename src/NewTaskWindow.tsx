import Popper from "@mui/material/Popper";

export default function newTaskWindow() {
  return (
    <div className="new-task">
      <Popper
        open={false}
        placement="top-start"
        disablePortal={true}
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
        {/*  */}
      </Popper>
    </div>
  );
}
