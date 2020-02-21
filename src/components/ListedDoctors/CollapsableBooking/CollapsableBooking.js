import React, { useState } from "react";
import { Button, Collapse } from "react-bootstrap";
import ScrollableTabs from "../BookNowPopUp/ScrollableTabs/ScrollableTabs";
import "./CollapsableBooking.css";

export default function CollapsableBooking() {
  const [open, setOpen] = useState(false);

  // const removeButton = () => {
  //   document.getElementById("book-now-card-btn-id").style.display = "none";
  // };

  return (
    <React.Fragment>
      <div className="book-now-card-btn-container" id="book-now-card-btn-id">
        <Button
          className={!open ? "test-button" : "test-button-hide"}
          size="md"
          onClick={() => {
            setOpen(!open);
            // removeButton();
          }}
          aria-expanded={open}
        >
          Book&nbsp;Now
        </Button>
      </div>
      <Collapse in={open}>
        <div>
          <ScrollableTabs />
        </div>
      </Collapse>
    </React.Fragment>
  );
}
