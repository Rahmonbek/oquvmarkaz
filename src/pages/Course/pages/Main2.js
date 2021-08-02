import React from 'react'
import styles from "../css/Main.module.css";
// import styles from "../css/MainTwo.module.css";
import { Form } from "react-bootstrap";
import "video-react/dist/video-react.css"; // import css
import videos from "../images/videos.png";
import { Player, BigPlayButton } from "video-react";

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


export default function Main2() {
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


</div>
        </div>
    )
}
