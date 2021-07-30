import React from "react";
import { Container } from "react-bootstrap";
import styles from "../../Css/Menu.module.css";
import { Player, BigPlayButton } from "video-react";
import Videos from "../../Img/Videos.jpg";

import "video-react/dist/video-react.css"; // import css
import { withStyles } from "@material-ui/core/styles";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import { FiCopy } from "react-icons/fi";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { IoShareSocialOutline } from "react-icons/io5";
import { Form } from "react-bootstrap";
import { FaTelegramPlane, FaFacebookF } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import person from "../../Img/Person2.png";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import AccordionGroup from "./AccordionGroup";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
} from "react-router-dom";
import Applicions from "./About/Applicions";
import Download from "./About/Download";
import Tasks from "./About/Tasks";
import QuestionAnswer from "./About/QuestionAnswer";
import { IoIosWarning } from "react-icons/io";

const labels = {
  0.1: "0.1",
  0.2: "0.2",
  0.3: "0.3",
  0.4: "0.4",
  0.5: " 0.5",
  0.6: " 0.6",
  0.7: " 0.7",
  0.8: " 0.8",
  0.9: " 0.9",
  1: "1",
  1.1: "1.1",
  1.2: "1.2",
  1.3: "1.3",
  1.4: "1.4",
  1.5: "1.5",
  1.6: "1.6",
  1.7: "1.7",
  1.8: "1.8",
  1.9: "1.9",
  2: "2",
  2.1: "2.1",
  2.2: "2.2",
  2.3: "2.3",
  2.4: "2.4",
  2.5: "2.5",
  2.6: "2.6",
  2.7: "2.7",
  2.8: "2.8",
  2.9: "2.9",
  3: "3",
  3.1: "3.1",
  3.2: "3.2",
  3.3: "3.3",
  3.4: "3.4",
  3.5: "3.5",
  3.6: "3.6",
  3.7: "3.7",
  3.8: "3.8",
  3.9: "3.9",
  4: "4",
  4.1: "4.1",
  4.2: "4.2",
  4.3: "4.3",
  4.4: "4.4",
  4.5: "4.5",
  4.6: "4.6",
  4.7: "4.7",
  4.8: "4.8",
  4.9: "4.9",
  5: "5",
};

const useStyles = makeStyles({
  root: {
    width: 200,
    display: "flex",
    alignItems: "center",
  },
});

export default function MenuBar() {
  const [join, setJoin] = React.useState(true);
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  const classes = useStyles();

  return (
    <div className={styles.BodyMenu}>
      <Container fluid>
        <div className={styles.BodyMenuFluid}>
          <div className={styles.CourseVideo}>
            <div>
              <Player
                poster={Videos}
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
              >
                <BigPlayButton position="center" />
              </Player>
            </div>
            <div>
              <div className={styles.ItemsGroup}>
                <div className={styles.ItemSGroupChild}>
                  <p className={styles.ItemsGroupText}>
                    Raspberry Pi dasturlash asoslari
                  </p>
                  <p>
                    {" "}
                    <div className={classes.root}>
                      <Rating
                        className={styles.ItemsGroupRate}
                        name="hover-feedback"
                        value={value}
                        precision={0.1}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                        onChangeActive={(event, newHover) => {
                          setHover(newHover);
                        }}
                      />
                      {value !== null && (
                        <Box className={styles.ItemsGroupRateResult} ml={2}>
                          {labels[hover !== -1 ? hover : value]}
                        </Box>
                      )}
                    </div>
                  </p>
                  <p className={styles.ItemsGroupShowed}>(534)</p>
                </div>

                <div className={styles.ShareMe}>
                  <Button
                    style={{ backgroundColor: "#FFFFFF", marginTop: "5px" }}
                    className={styles.ButtonLeft}
                  >
                    <p className={styles.ButtonLeftIcon}>
                      <AiOutlineLeft />
                    </p>
                    <p className={styles.ButtonLeftText}>Oldingi Dars</p>
                  </Button>
                  <Button
                    style={{
                      backgroundColor: "#FFFFFF",
                      ButtonLeft: "20px",
                      marginTop: "5px",
                    }}
                    className={styles.ButtonRight}
                  >
                    <p className={styles.ButtonRightText}>Keyingi Dars</p>
                    <p className={styles.ButtonRightIcon}>
                      <AiOutlineRight />
                    </p>
                  </Button>
                </div>
              </div>
              <div className={styles.PersonalGRoup}>
                <p>
                  {" "}
                  <img
                    className={styles.PersonalImg}
                    class="img-fluid"
                    src={person}
                  />{" "}
                </p>
                <p className={styles.PersonalName}>Muhammad Jumayev</p>
                <p className={styles.JoinRegistration}>
                  {join ? (
                    <button
                      className={styles.JoinMe}
                      onClick={() => setJoin(false)}
                    >
                      <p>Obuna bo'lish</p>
                    </button>
                  ) : (
                    <button
                      className={styles.JoinedMe}
                      onClick={() => setJoin(true)}
                    >
                      <p>A'zolikni bekor qilish</p>
                    </button>
                  )}
                </p>
              </div>
            </div>
            <div>
              <Router>
                <div>
                  <div className={styles.NavbarMenuRouter}>
                    <div className={styles.NavbarMenuRouterFirst}>
                      <nav>
                        <ul  style={{
                                listStyleType: "none",
                                textDecoration: "none",
                                color: "#9DA7BB",
                              }}  className={styles.NavbarMenuRouterUl}>
                          <li>
                            <NavLink
                              className={styles.NavbarMenuRouterUlLi}
                              activeClassName={styles.studMe}
                              style={{
                                listStyleType: "none",
                                textDecoration: "none",
                                color: "#9DA7BB",
                              }}
                              to="/"
                            >
                              Savol-javoblar
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              className={styles.NavbarMenuRouterUlLi}
                              activeClassName={styles.studMe}
                              style={{
                                listStyleType: "none",
                                textDecoration: "none",
                                color: "#9DA7BB",
                              }}
                              to="/tasks"
                            >
                              Vazifalar
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              className={styles.NavbarMenuRouterUlLi}
                              activeClassName={styles.studMe}
                              style={{
                                listStyleType: "none",
                                textDecoration: "none",
                                color: "#9DA7BB",
                              }}
                              to="/applicions"
                            >
                              Qo'llanmalar
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              className={styles.NavbarMenuRouterUlLi}
                              activeClassName={styles.studMe}
                              style={{
                                listStyleType: "none",
                                textDecoration: "none",
                                color: "#9DA7BB",
                                marginTop:'30px'
                              }}
                              to="/download"
                            >
                              Ko'chirib olish uchun
                            </NavLink>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <div 
                    className={styles.WarningMe}
                    ><p                     className={styles.WarningMeIcon}
                    ><IoIosWarning/></p><p                     className={styles.WarningMeText}
                    >Qoidalar</p></div>
                  </div>

                  {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <div className={styles.SwitchMe}>

            
                  <Switch >
                    <Route path="/download">
                      <Download />
                    </Route>
                    <Route path="/applicions">
                      <Applicions />
                    </Route>
                    <Route path="/tasks">
                      <Tasks />
                    </Route>
                    <Route path="/">
                      <QuestionAnswer />
                    </Route>
                  </Switch>
                  </div>
                </div>
              </Router>
            </div>
          </div>

          <div className={styles.CourseList}>
            <div className={styles.CourseTitle}>
              <p className={styles.CourseTitleName}>
                Raspberry Pi dasturlash asoslari
              </p>
              <b />
              <p className={styles.CourseTitleHajmi}>
                <p>24 ta video</p>
                <p>38 soat</p>
              </p>
            </div>
            <AccordionGroup />
          </div>
        </div>
      </Container>
    </div>
  );
}
