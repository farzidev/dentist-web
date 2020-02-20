import React, { useState } from "react";
import { Button, Collapse } from "react-bootstrap";
import ScrollableTabs from "../BookNowPopUp/ScrollableTabs/ScrollableTabs";
import "./CollapsableBooking.css";

export default function CollapsableBooking() {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <Button
        className="test-button"
        size="sm"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        Book&nbsp;Now
      </Button>
      <Collapse in={open}>
        <div>
          <ScrollableTabs />
        </div>
      </Collapse>
    </React.Fragment>
  );
}
