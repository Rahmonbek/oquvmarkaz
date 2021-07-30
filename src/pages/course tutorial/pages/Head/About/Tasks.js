import React from "react";
import styles from "../../../Css/Tasks.module.css";

import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { AiOutlineArrowDown } from "react-icons/ai";
import { AiOutlineCheck,AiOutlineClose } from "react-icons/ai";
import { BsArrowRepeat } from "react-icons/bs";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

export default function Tasks() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          aria-label="Expand"
          aria-controls="additional-actions1-content"
          id="additional-actions1-header"
        >
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={<Checkbox />}
          />
          <div className={styles.DownloadButtonGroup}>
            <div className={styles.DownloadButton}>
              <i className={styles.iconsgroup}>
                <AiOutlineArrowDown />
              </i>
            </div>
            <div>
              <p style={{ marginTop: "10px", marginLeft: "20px" }}>
                O’zgaruvchilar bo’yicha vazifalar.txt
              </p>
              <p style={{ marginLeft: "20px", color: "#9DA7BB" }}>
                5.1 MB | 25.06.2019
              </p>
            </div>
          </div>
          <div className={styles.SendMessagesMe}>Jo’natilgan fayl</div>
          <p className={styles.SendMessageCheck}><AiOutlineCheck/></p>
        </AccordionSummary>
        
      </Accordion>
      
      <Accordion>
        <AccordionSummary
          aria-label="Expand"
          aria-controls="additional-actions2-content"
          id="additional-actions2-header"
        >
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={<Checkbox />}
          />
            <div className={styles.DownloadButtonGroup}>
            <div className={styles.DownloadButton}>
              <i className={styles.iconsgroup}>
                <AiOutlineArrowDown />
              </i>
            </div>
            <div>
              <p style={{ marginTop: "10px", marginLeft: "20px" }}>
                O’zgaruvchilar bo’yicha vazifalar.txt
              </p>
              <p style={{ marginLeft: "20px", color: "#9DA7BB" }}>
                5.1 MB | 25.06.2019
              </p>
            </div>
          </div>
          <div className={styles.SendMessagesMe}>Jo’natilgan fayl</div>
          <p className={styles.SendMessageCheck} style={{color:'#FF004A'}}><AiOutlineClose/></p>

        </AccordionSummary>
        
      </Accordion>

      <Accordion>
        <AccordionSummary
          aria-label="Expand"
          aria-controls="additional-actions2-content"
          id="additional-actions2-header"
        >
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={<Checkbox />}
          />
            <div className={styles.DownloadButtonGroup}>
            <div className={styles.DownloadButton}>
              <i className={styles.iconsgroup}>
                <AiOutlineArrowDown />
              </i>
            </div>
            <div>
              <p style={{ marginTop: "10px", marginLeft: "20px" }}>
                O’zgaruvchilar bo’yicha vazifalar.txt
              </p>
              <p style={{ marginLeft: "20px", color: "#9DA7BB" }}>
                5.1 MB | 25.06.2019
              </p>
            </div>
          </div>
          <div className={styles.SendMessagesMe}>Jo’natilgan fayl</div>
          <p className={styles.SendMessageCheck} style={{color:'#FFD401'}}><BsArrowRepeat/></p>

        </AccordionSummary>
       
      </Accordion>

      <Accordion>
        <AccordionSummary
          aria-label="Expand"
          aria-controls="additional-actions2-content"
          id="additional-actions2-header"
        >
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={<Checkbox />}
          />
            <div className={styles.DownloadButtonGroup}>
            <div className={styles.DownloadButton}>
              <i className={styles.iconsgroup}>
                <AiOutlineArrowDown />
              </i>
            </div>
            <div>
              <p style={{ marginTop: "10px", marginLeft: "20px" }}>
                O’zgaruvchilar bo’yicha vazifalar.txt
              </p>
              <p style={{ marginLeft: "20px", color: "#9DA7BB" }}>
                5.1 MB | 25.06.2019
              </p>
            </div>
          </div>
          <div className={styles.SendMessagesMe}>Jo’natilgan fayl</div>
          <p className={styles.SendMessageCheck}><AiOutlineCheck/></p>

        </AccordionSummary>
       
      </Accordion>

      <Accordion>
        <AccordionSummary
        
          aria-label="Expand"
          aria-controls="additional-actions2-content"
          id="additional-actions2-header"
        >
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={<Checkbox />}
          />
            <div className={styles.DownloadButtonGroup}>
            <div className={styles.DownloadButton}>
              <i className={styles.iconsgroup}>
                <AiOutlineArrowDown />
              </i>
            </div>
            <div>
              <p style={{ marginTop: "10px", marginLeft: "20px" }}>
                O’zgaruvchilar bo’yicha vazifalar.txt
              </p>
              <p style={{ marginLeft: "20px", color: "#9DA7BB" }}>
                5.1 MB | 25.06.2019
              </p>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="textSecondary">
            The focus event of the nested action will propagate up and also
            focus the accordion unless you explicitly stop it.
          </Typography>
        </AccordionDetails>
      </Accordion>
    
    </div>
  );
}
