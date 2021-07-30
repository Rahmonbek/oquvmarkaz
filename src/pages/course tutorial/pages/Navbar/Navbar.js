import React from "react";
import styles from "../../Css/Navbar.module.css";
import { Container } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Group from "../../Img/Group.png";
import Person from "../../Img/Person.png";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

export default function Navbar() {
  const [icons, setIcons] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  return (
    <div className={styles.NavbarMenu}>
      <Container>
        <div className={styles.root}>
          <div>
            <img src={Group} class="img-fluid" />
          </div>
          <div className={styles.PersonalCabinet}>
            <div className={styles.PersonalCabinetImg}>
              <img src={Person} />
            </div>
            <div className={styles.PersonalCabinetText}>
              <p className={styles.PersonalCabinetTextGroup}>
                <p className={styles.PersonalCabinetName}>Toraey Ja'farbek</p>
                <p>Oddiy foydalanuvchi</p>
              </p>
              <p className={styles.PersonalCabinetIcon}>
                {icons ? (
                  <button
                    className={styles.ButtonUpIcons}
                    onClick={() => setIcons(false)}
                  >
                    {" "}
                    <i>
                      <BsChevronDown />
                    </i>
                  </button>
                ) : (
                  <button
                    className={styles.ButtonUpIcons}
                    onClick={() => setIcons(true)}
                  >
                    <i>
                      <BsChevronUp />
                    </i>
                    <div className={styles.IconText}>
                      Bu foydalanuvchi  Yangi  qo'shilgan <br/> <p style={{display:'flex', marginLeft:'45px'}}><p  style={{ fontWeight: "600" }}>Maqomi:</p> <p>Student</p></p> 
                     <p style={{display:'flex', marginLeft:'45px', marginTop:'-20px'}}><p  style={{ fontWeight: "600" }}>Name:</p> <p>Toraev Ja'farbek</p></p> 
                     <p style={{display:'flex', marginLeft:'45px', marginTop:'-20px'}}><p  style={{ fontWeight: "600" }}>Yoshi:</p> <p>21</p></p> 
                    </div>
                  </button> 
                )}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
