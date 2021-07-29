import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Button } from "react-bootstrap";

export default function FuncThree() {
  const [checked, setChecked] = React.useState(false);
  let message;
  if (checked) {
    message = (
      <Button style={{ margin: "24px 24px 24px 24px" }} variant="primary">
        sotib olish | 150.000 uzs
      </Button>
    );
  } else {
    message = <p> </p>;
  }

  return (
    <>
      <Accordion style={{ backgroundColor: " #F1F2F6" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions1-content"
          id="additional-actions1-header"
        >
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={
              <Checkbox onChange={(e) => setChecked(e.currentTarget.checked)} />
            }
            label=" OOP dasturlash asoslari"
          ></FormControlLabel>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="textSecondary">
            <div
              style={{
                display: "flex",
                paddingLeft: "20px",
                paddingTop: "34px",
              }}
            >
              <div style={{ display: "block" }}>
                <h6 style={{ opacity: "0.7" }}>kurs narxlari</h6>
                <h3 style={{ fontWeight: "600" }}>
                  150.000
                  <span
                    sytle={{
                      fontSize: "14px",
                      textAlign: "left",
                      fontWeight: "200",
                    }}
                  >
                    {" "}
                    uzs
                  </span>
                </h3>
              </div>
              <div style={{ display: "block", paddingLeft: "43px" }}>
                <h6 style={{ opacity: "0.7" }}>Kurs hajmi</h6>
                <h3 style={{ fontWeight: "600" }}>38 soat</h3>
              </div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <div>{message}</div>
    </>
  );
}
