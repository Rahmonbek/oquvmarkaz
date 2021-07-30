import React from "react";
import styles from "../../Css/AccordionGroup.module.css";

import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { BsClock ,BsClockHistory,BsClockFill} from "react-icons/bs";
import { BsUnlock } from "react-icons/bs";

import { FiLock } from "react-icons/fi";

const CardStyleInform = [
  {
    id: 1,
    img: "https://lh3.googleusercontent.com/_-uDLvGarMR0SjI2dHjB_mBWVw2FphiL6rY5tOMZk_hX-IoyOftF-Qx-zF5b5oKd1Wg9qg=s100",
    title: "1.1 Boshlang’ich o’zgaruvchilar haqida ma’lumot",
    time: "01:07:15",
  },
  {
    id: 2,
    img: "https://lh3.googleusercontent.com/x0HGEVEvwXDhV1Np9lFJ3Vr-tLrYTroGLDRBJG6KpAFr9rPh4m1A5l0pF76_DjQaHdYU=s100",
    title: "1.2 O’zgaruvchilar orasidagi. Ular haqida  ma’lumot ",
    time: "01:07:15",
  },
  {
    id: 3,
    img: "https://lh3.googleusercontent.com/ZiZQYV3JeganPoC1eB6d-iTDcLSaUKU1992p1FiUGnOlw1cmNUqr5woSFmO73hQ6Re2Pkw=s100",
    title: "1.3 Int va Float tiplari farqlari    ",
    time: "01:07:15",
  },
  {
    id: 4,
    img: "https://lh3.googleusercontent.com/YgXU5zOcxqLxw6JCyruHdhFeVDiW_Rex50gtF-ufdmZzpFIUzktCaO93qj0STkjO6pEAzw=s100",
    title: "1.4 Boolean haqida to’liq ma’lumot    ",
    time: "01:07:15",
  },
  {
    id: 5,
    img: "https://lh3.googleusercontent.com/Flw9nmEdCLQijzkt73FPOFTglAgl73M4xt3h7ebprvyUPoFINZbCTGM-A3ryyAkIAll17w=s100",
    title: "1.5 Turli mantiqiy amallar (1-qism)    ",
    time: "01:07:15",
  },
  {
    id: 6,
    img: "https://lh3.googleusercontent.com/Flw9nmEdCLQijzkt73FPOFTglAgl73M4xt3h7ebprvyUPoFINZbCTGM-A3ryyAkIAll17w=s100",
    title: "1.5 Turli mantiqiy amallar (2-qism)    ",
    time: "01:07:15",
  },
];
const CardStyleInform3 = [
  {
    id: 1,
    img: "https://lh3.googleusercontent.com/Hwp_jJlQqPOYT0FaJwfMfzeM5J3HzXPuKM0x43HLC2LDa-Xi9uasqA_bG9nZV3vo4FT54Q=s100",
    title: "3.1 OOP dasturlashga kirish ",
    time: "01:07:15",
  },
  {
    id: 2,
    img: "https://lh3.googleusercontent.com/30J6E_51sSjJ7-NL87iuwgroGppoNjvFR0GEVFv24Htq10pmG0wgvc1rDV0XIQbMk_lgpA=s100",
    title: "3.2 OPP da class lar tushunchasi  ",
    time: "01:07:15",
  },
  {
    id: 3,
    img: "https://lh3.googleusercontent.com/Yk3EFtswXCkxAeP7Y9NR7VfzGhAiZyA2S44A-X8sdXmWfxVNDGTiWQBezjsWzH4-iLEQ1WE=s100",
    title: "3.3 Polifarmizim haqida ma’lumot ",
    time: "01:07:15",
  },
  {
    id: 4,
    img: "https://lh3.googleusercontent.com/vqKQdddr7avZ_1yGPwaWlYLs-3fNKHeQfDr8mVKYA9Pbkh-3atf-oJTOZG-i9kdRbE8SgQ=s100",
    title: "3.4 Inkapsulyatsiya haqida ma’lumot  ",
    time: "01:07:15",
  },
];

export default function AccordionGroup() {
  const [lock, setLock] = React.useState(true);

  return (
    <div>
      <div className={styles.AccordionHeadmenu}>
        <Accordion style={{ backgroundColor: "#F9F9F9" }}>
          <AccordionSummary
            style={{ backgroundColor: "#F0F1F5" }}
            className={styles.AccordionGroupMe}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography style={{marginTop:'15px'}}  className={styles.heading}>
              1. Dasturlashga kirish va o’rnatish jarayoni
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {CardStyleInform.map((F) => (
                <div className={styles.CardStylesMe}>
                  <div className={styles.CardStylesMeImg}>
                    <img
                      classname={styles.CardRasm}
                      class="img-fluid"
                      src={F.img}
                    />
                  </div>
                  <div className={styles.CardStylesMeText}>
                    <p className={styles.CardStyleTitle}>{F.title}</p>
                    <p className={styles.CardStyleIconTime}>
                      <i>
                        <BsClock />
                      </i>
                      {F.time}
                    </p>
                  </div>
                </div>
              ))}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ backgroundColor: "#F9F9F9" }}>
          <AccordionSummary
            style={{ backgroundColor: "#F0F1F5" }}
            className={styles.AccordionGroupMe}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography style={{marginTop:'15px'}} className={styles.heading}>
              2. Dasturda oddiy amallar bilan ishlash
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {CardStyleInform.map((F) => (
                <div className={styles.CardStylesMe}>
                  <div className={styles.CardStylesMeImg}>
                    <img
                      classname={styles.CardRasm}
                      class="img-fluid"
                      src={F.img}
                    />
                  </div>
                  <div className={styles.CardStylesMeText}>
                    <p className={styles.CardStyleTitle}>{F.title}</p>
                    <p className={styles.CardStyleIconTime}>
                      <i>
                        <BsClockFill />
                      </i>
                      {F.time}
                    </p>
                  </div>
                </div>
              ))}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion  style={{ backgroundColor: "#F9F9F9" }}>
          <AccordionSummary
            style={{ backgroundColor: "#F0F1F5" }}
            className={styles.AccordionGroupMe}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography style={{marginTop:'15px'}}  className={styles.heading}>
              3. OOP dasturlash asoslari
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {CardStyleInform3.map((F) => (
                <div className={styles.CardStylesMeThree}>
                  <div className={styles.CardStylesMeImgThree}>
                    <img
                      classname={styles.CardRasmThree}
                      class="img-fluid"
                      src={F.img}
                    />
                  </div>
                  <div className={styles.CardStylesMeTextThree}>
                    <p className={styles.CardStyleTitleThree}>{F.title}</p>
                    <p className={styles.CardStyleIconTimeThree}>
                      <i >
                        <BsClockHistory />
                      </i>
                      <p style={{marginLeft:"10px", marginTop:"7px"}}>{F.time}</p>
                    </p>
                  </div>
                  <div className={styles.BLock}>
                    {lock ? (
                      <div className={styles.BLockMeFalse} onClick={()=>setLock(false)}>
                        <FiLock />
                      </div>
                    ) : (
                      <div className={styles.BLockMeTrue}  onClick={()=>setLock(true)}>
                        {" "}
                        <BsUnlock />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
