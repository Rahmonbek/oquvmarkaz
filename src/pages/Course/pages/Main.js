import React from "react";
import styles from "../css/Main.module.css";
// import styles from "../css/MainTwo.module.css";
import { Container, Form } from "react-bootstrap";
import "video-react/dist/video-react.css"; // import css
import videos from "../images/videos.png";
import { Player, BigPlayButton } from "video-react";
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
import { FaTelegramPlane, FaFacebookF } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import person from "../images/person.png";
import Asking from "./about/Asking";
import Comment from "./about/Comment";
import CourseAbout from "./about/CourseAbout";
import WhatLearning from "./about/WhatLearning";
import Card1 from './Function/Card1'
import { Navbar, Nav } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
} from "react-router-dom";
const useStyles = makeStyles({
  root: {
    width: 200,
    display: "flex",
    alignItems: "center",
  },
});

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
const CourseList = [
  {
    id: 1,
    img: "https://lh3.googleusercontent.com/COZwDu2hn4yHFr04zMfJS2z6_VIkbgzyukJ-lV8f_jHAT00cmiwEt9yl2yuC4E2gcMUl3A=s70",
    title: "RESTful API-larni yaratish bo’yicha amaliy topshiriqlar      ",
    smallText: "Lorem ipsum dolor sit amet, consectetur dolor sit amet. . . .",
  },
  {
    id: 2,
    img: "https://lh3.googleusercontent.com/YSHYJi176-ynoIy3JSQ3f3SnflZycQ0h817zU6ztAQ3jCiNZO4XcsQ9YCUbvFDKLY_t7=s70",
    title: `Ishlab chiquvchilar uchun AWS: ECS va ko'p mintaqali yuklarni. .
    `,
    smallText: "Lorem ipsum dolor sit amet, consectetur dolor sit amet. . . .",
  },
  {
    id: 3,
    img: "https://lh3.googleusercontent.com/0cJpX793suEWPclb9hC4mlRCzfkfdyVBh_Sv80BEdKl-2TibwiR44t4DYJBrSQ8a-KiNOQ=s70",
    title: `iOS bo’yicha dastulash kurslari
    `,
    smallText: "Lorem ipsum dolor sit amet, consectetur dolor sit amet. . . .",
  },
  {
    id: 4,
    img: "https://lh3.googleusercontent.com/y2xjXOzUl9BlWRd2ooReOPL0UlLJJD_5VD_DcuWQ1SfhJ_XIglTkB8uz3aLP2O_U5xup6w=s70",
    title: "RESTful API-larni yaratish bo’yicha amaliy topshiriqlar    ",
    smallText: "Lorem ipsum dolor sit amet, consectetur dolor sit amet. . . .",
  },
  {
    id: 5,
    img: "https://lh3.googleusercontent.com/COZwDu2hn4yHFr04zMfJS2z6_VIkbgzyukJ-lV8f_jHAT00cmiwEt9yl2yuC4E2gcMUl3A=s70",
    title: `RESTful API-larni yaratish bo’yicha amaliy topshiriqlar     `,
    smallText: "Lorem ipsum dolor sit amet, consectetur dolor sit amet. . . .",
  },
  {
    id: 6,
    img: "https://lh3.googleusercontent.com/YSHYJi176-ynoIy3JSQ3f3SnflZycQ0h817zU6ztAQ3jCiNZO4XcsQ9YCUbvFDKLY_t7=s70",
    title: `Ishlab chiquvchilar uchun AWS: ECS va ko'p mintaqali yuklarni. .`,
    smallText: "Lorem ipsum dolor sit amet, consectetur dolor sit amet. . . .",
  },
  {
    id: 7,
    img: "https://lh3.googleusercontent.com/0cJpX793suEWPclb9hC4mlRCzfkfdyVBh_Sv80BEdKl-2TibwiR44t4DYJBrSQ8a-KiNOQ=s70",
    title: "iOS bo’yicha dastulash kurslari ",
    smallText: "Lorem ipsum dolor sit amet, consectetur dolor sit amet. . . .",
  },
  {
    id: 8,
    img: "https://lh3.googleusercontent.com/y2xjXOzUl9BlWRd2ooReOPL0UlLJJD_5VD_DcuWQ1SfhJ_XIglTkB8uz3aLP2O_U5xup6w=s70",
    title: "RESTful API-larni yaratish bo’yicha amaliy topshiriqlar    ",
    smallText: "Lorem ipsum dolor sit amet, consectetur dolor sit amet. . . .",
  },
  {
    id: 9,
    img: "https://lh3.googleusercontent.com/YSHYJi176-ynoIy3JSQ3f3SnflZycQ0h817zU6ztAQ3jCiNZO4XcsQ9YCUbvFDKLY_t7=s70",
    title: `Ishlab chiquvchilar uchun AWS: ECS va ko'p mintaqali yuklarni. .
    `,
    smallText: "Lorem ipsum dolor sit amet, consectetur dolor sit amet. . . .",
  },
];

export default function FirstBody() {
  const [join, setJoin] = React.useState(true);
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.Body}>
      <Container fluid className={styles.FirsBulim}>
        <div className={styles.CourseList}>
          <div className={styles.CourseSearch}>
            <Form.Group className={styles.CourseSearchIcon}>
              <Form.Control
                type="search"
                placeholder="Qanday kurs o'rganmoqchisiz ?"
                class="fas fa-search"
              />
            </Form.Group>{" "}
          </div>
          <div
            className={styles.BlaBlaBla}
            style={{ backgroundColor: "#FFFFFF" }}
          >
            <div className={styles.SimiliarSearch}>
              <button className={styles.SimiliarSearchButtons} type="button">
                #Dizayn
              </button>
              <button className={styles.SimiliarSearchButtons} type="button">
                #Marketing
              </button>
              <button className={styles.SimiliarSearchButtons} type="button">
                #Biznes
              </button>
              <button className={styles.SimiliarSearchButtons} type="button">
                #Web
              </button>
              <button className={styles.SimiliarSearchButtons} type="button">
                #Buxgalteriya
              </button>
              <button className={styles.SimiliarSearchButtons} type="button">
                #Salomatlik
              </button>
              <button className={styles.SimiliarSearchButtons} type="button">
                #Dasturlash
              </button>
            </div>
            <div>
              <Container fluid>
                <p className={styles.BigTextPragram}>DASTURLASH</p>
                {CourseList.map((D) => (
                  <div className={styles.SmallListGroup}>
                    <div>
                      <p className={styles.SmallListImg}>
                        <img
                          id={styles.Rasm}
                          className="img-fluid"
                          src={D.img}
                        />
                      </p>
                    </div>
                    <div>
                      <p className={styles.SmallListTextBig}>{D.title}</p>
                      <p className={styles.SmallListTextSmall}>{D.smallText}</p>
                    </div>
                  </div>
                ))}
              </Container>
            </div>
          </div>
        </div>

        {/* Bu ikkinchi qism yani Router lar ishlatilgan joy */}

        <div className={styles.SecondBulim}>
          <div className={styles.HeadBody}>
            <div>
              <div className={styles.HeadBodyVideos}>
                <Player
                  poster={videos}
                  className={styles.Videos}
                  class="fluid"
                  src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                >
                  <BigPlayButton position="center" />
                </Player>
              </div>
              <div>
                <div className={styles.ItemsGroup}>
                  <div className={styles.RootMe}>
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
                  <div className={styles.RootShare}>
                    <p>
                      <div className={styles.ShareMe}>
                        <Button
                          className={styles.ShareMeButton}
                          style={{ backgroundColor: "#FFFFFF" }}
                          aria-controls="customized-menu"
                          aria-haspopup="true"
                          variant="contained"
                          color="primary"
                          onClick={handleClick}
                        >
                          <i className={styles.ShareMeIcon}>
                            <IoShareSocialOutline />
                          </i>{" "}
                          <p className={styles.ShareMeIconText}>Ulashish</p>{" "}
                        </Button>
                        <Menu
                          className={styles.ShareMeMenyu}
                          id="customized-menu"
                          anchorEl={anchorEl}
                          keepMounted
                          open={Boolean(anchorEl)}
                          onClose={handleClose}
                        >
                          <MenuItem>
                            <Form.Group
                              className="mb-3"
                              controlId="formBasicPassword"
                            >
                              <Form.Label className={styles.ShareMeUrl}>
                                Kurs url manzili:
                              </Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="https://www.storm.uz/share/e"
                              />
                            </Form.Group>
                          </MenuItem>

                          <div className={styles.IconsGroup}>
                            <div className={styles.IconsGroupTg}>
                              {" "}
                              <i className={styles.IconMe}>
                                <FaTelegramPlane />
                              </i>
                            </div>
                            <div className={styles.IconsGroupFc}>
                              {" "}
                              <i className={styles.IconMe}>
                                <FaFacebookF />
                              </i>
                            </div>
                            <div className={styles.IconsGroupEm}>
                              {" "}
                              <i className={styles.IconMe}>
                                <GoMail />
                              </i>
                            </div>
                            <div className={styles.IconsGroupCp}>
                              <i className={styles.IconMe}>
                                <FiCopy />
                              </i>
                            </div>
                          </div>
                        </Menu>
                      </div>
                    </p>
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
            </div>
            <div>
              <Router>
                <div>
                  <Navbar className={styles.RouterMenu}>
                    <Container fluid>
                      <Navbar.Toggle aria-controls="basic-navbar-nav" />
                      <Navbar.Collapse id="basic-navbar-nav">
                        <Nav id={styles.navId} className="me-auto">
                          <div className={styles.RouterLi}>
                            <Nav.Link>
                              <NavLink
                                className={styles.linked}
                                style={{
                                  textDecoration: "none",
                                  color: "#969696",
                                }}
                                activeClassName={{
                                  color: "#000000",
                                }}
                                to="/about"
                              >
                                <p className={styles.TextMe}> Kurs haqida</p>
                              </NavLink>
                            </Nav.Link>
                          </div>
                          <div className={styles.RouterLi}>
                            <Nav.Link>
                              <NavLink
                                className={styles.linked}
                                style={{
                                  textDecoration: "none",
                                  color: "#969696",
                                }}
                                activeClassName={{
                                  color: "#000000",
                                }}
                                to="/comment"
                              >
                                <p className={styles.TextMe}> Sharhlar</p>
                              </NavLink>
                            </Nav.Link>
                          </div>
                          <div className={styles.RouterLi}>
                            <Nav.Link>
                              <NavLink
                                className={styles.linked}
                                style={{
                                  textDecoration: "none",
                                  color: "#969696",
                                }}
                                activeClassName={{
                                  color: "#000000",
                                }}
                                to="/asking"
                              >
                                <p className={styles.TextMe}> Talablar</p>
                              </NavLink>
                            </Nav.Link>
                          </div>
                          <div className={styles.RouterLi}>
                            <Nav.Link>
                              <NavLink
                                className={styles.linked}
                                style={{
                                  textDecoration: "none",
                                  color: "#969696",
                                }}
                                activeClassName={{
                                  color: "#000000",
                                }}
                                to="/whatlearn"
                              >
                                <p className={styles.TextMe}>
                                  {" "}
                                  Nimalarni bilib olasiz
                                </p>
                              </NavLink>
                            </Nav.Link>
                          </div>
                        </Nav>
                      </Navbar.Collapse>
                    </Container>
                  </Navbar>
                  {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                  <Switch>
                    <Route path="/whatlearn">
                      <WhatLearning />
                    </Route>
                    <Route path="/asking">
                      <Asking />
                    </Route>
                    <Route path="/comment">
                      <Comment />
                    </Route>
                    <Route path="/about">
                      <CourseAbout />
                    </Route>
                  </Switch>
                </div>
              </Router>
            </div>
          </div>
        </div>

        {/* Bu uchunchi bulak hisoblanadi Yani kurslarni sotib oladigan qismidir */}

        <div className={styles.ThirdBulim}>
         

        <Card1/>
        </div>
      </Container>
    </div>
  );
}
