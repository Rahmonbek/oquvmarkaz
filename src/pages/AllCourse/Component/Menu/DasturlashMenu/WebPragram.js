import React from "react";
import ReactStars from "react-rating-stars-component";
import styles from "../../../Css/WebPragram.module.css";
import { Container, Row, Col, Card, NavLink } from "react-bootstrap";
import Loader from "react-loader-spinner";



const CourseInformation = [
  {
    id: 1,
    img: "https://cdn.lynda.com/course/2803424/2803424-637490903807699961-16x9.jpg",
    title:
      "Ishlab chiquvchilar uchun AWS: ECS va ko'p mintaqali yuklarni muvozanatlash",
    smallText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo incididunt ut labore et dolore magna aliqua. Lacus interdum tempus risus, proin  . . .",
    time: "38 soat",
    price: "250.000 ",
  },
  {
    id: 2,
    img: "https://cdn.lynda.com/course/5007872/5007872-1556560369911-16x9.jpg",
    title: `Raspberry Pi dasturlash  \n asoslari`,
    smallText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo incididunt ut labore et dolore magna aliqua. Lacus interdum tempus risus, proin  . . .",
    time: "38 soat",
    price: "250.000 ",
  },
  {
    id: 3,
    img: "data:image/jpeg;base64,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",
    title: `RESTful API-larni yaratish bo’yicha \n amaliy topshiriqlar`,
    smallText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo incididunt ut labore et dolore magna aliqua. Lacus interdum tempus risus, proin  . . .",
    time: "38 soat",
    price: "250.000 ",
  },
  {
    id: 4,
    img: "data:image/jpeg;base64,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",
    title: "AWS Devops: GitLab-dan AWS Fargate-ga doimiy Docker joylashtirish",
    smallText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo incididunt ut labore et dolore magna aliqua. Lacus interdum tempus risus, proin  . . .",
    time: "38 soat",
    price: "250.000 ",
  },
  {
    id: 5,
    img: "https://cdn.lynda.com/course/633856/633856-636519729598625764-16x9.jpg",
    title: `iOS bo’yicha dastulash \n kurslari`,
    smallText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo incididunt ut labore et dolore magna aliqua. Lacus interdum tempus risus, proin  . . .",
    time: "38 soat",
    price: "250.000 ",
  },
  {
    id: 6,
    img: "https://i87.fastpic.ru/big/2019/0726/98/230451e828da6704a79a6abafc908198.jpg",
    title: `Autentifikatsiya bilan Vue va tugunli \n dasturlarni qurish`,
    smallText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo incididunt ut labore et dolore magna aliqua. Lacus interdum tempus risus, proin  . . .",
    time: "38 soat",
    price: "250.000 ",
  },
  {
    id: 7,
    img: "https://cdn.lynda.com/course/2811718/2811718-1563476868916-16x9.jpg",
    title:
      "Ishlab chiquvchilar uchun AWS: Lambdas bilan PayPal to'lovlarini qayta ishlash",
    smallText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo incididunt ut labore et dolore magna aliqua. Lacus interdum tempus risus, proin  . . .",
    time: "38 soat",
    price: "250.000 ",
  },
  {
    id: 8,
    img: "https://slideplayer.com/98/17010501/big_thumb.jpg",
    title: "Angular va Spring boot 2 yordamida reaktiv dastur yaratish",
    smallText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo incididunt ut labore et dolore magna aliqua. Lacus interdum tempus risus, proin  . . .",
    time: "38 soat",
    price: "250.000 ",
  },
];

export default function WebPragram() {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  const [item, setItem] = React.useState(false);
  const [type, setType] = React.useState();
 

  const handleOpen = () => {
    setItem(true);
  };
  const handleClose = () => {
    setItem(false);
  };

  return (
    <div className={styles.WebTagSplice}>
      <div>
        <div>
          <Container>
            <div className={styles.filters}>
              <div>
                <button
                  className={styles.FilterButton}
                  onClick={handleOpen}
                  onDoubleClick={handleClose}
                  type="button"
                >
                  Filter
                  <i class="fas fa-angle-down"></i>
                </button>

                {item ? (
                  <div className={styles.FilterGroup}>
                    <div className={styles.FilterGroupFirst}>
                      <h5>Tartiblash turlari</h5>
                      <br />
                      <div className={styles.FilterSelect}>
                        <input type="checkbox" value="Male" name="gender" />
                        <p activeColor="#1344A4"> Yangi kurslar</p>
                      </div>
                      <div className={styles.FilterSelect}>
                        <input type="checkbox" value="Female" name="gender" />{" "}
                        <p>Ko'p ko'rilganlar</p>
                      </div>
                      <div className={styles.FilterSelect}>
                        {" "}
                        <input
                          type="checkbox"
                          value="Other"
                          name="gender"
                        />{" "}
                        <p>Eng baland narx</p>
                      </div>
                      <div className={styles.FilterSelect}>
                        {" "}
                        <input type="checkbox" value="Other" name="gender" />
                        <p> Eng past narx</p>
                      </div>
                      <div className={styles.FilterSelect}>
                        {" "}
                        <input
                          type="checkbox"
                          value="Other"
                          name="gender"
                        />{" "}
                        <p>A-Z bo'yicha</p>
                      </div>
                      <div className={styles.FilterSelect}>
                        {" "}
                        <input
                          type="checkbox"
                          value="Other"
                          name="gender"
                        />{" "}
                        <p>Z-A bo'yicha</p>
                      </div>
                    </div>
                    <div className={styles.FilterGroupSecond}>
                      <h5>Reyting bo'yicha</h5>
                                <br />
                      <div className={styles.FilterSelectSecond}>
                        <input type="checkbox" value="Male" name="gender" />
                        <p className={styles.star}>
                          <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            activeColor="#ffd700"
                          />
                        </p>
                        <p>5.0</p>
                      </div>
                      <div className={styles.FilterSelectSecond}>
                        <input type="checkbox" value="Male" name="gender" />
                        <p className={styles.star}>
                          <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            activeColor="#ffd700"
                          />
                        </p>
                        <p>4.0 dan yuqori</p>
                      </div>
                      <div className={styles.FilterSelectSecond}>
                        <input type="checkbox" value="Male" name="gender" />
                        <p className={styles.star}>
                          <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            activeColor="#ffd700"
                          />
                        </p>
                        <p>3.0 dan yuqori</p>
                      </div>
                      <div className={styles.FilterSelectSecond}>
                        <input type="checkbox" value="Male" name="gender" />
                        <p className={styles.star}>
                          <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            activeColor="#ffd700"
                          />
                        </p>
                        <p>3.0 dan past</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
              <div className={styles.listtocard}>
                <div onClick={() => setType(true)} type="button">
                  <NavLink
                    className={styles.CardTo} 
                    style={{ color: '#9DA7BB'}}   
                    activeStyle={{color:'#010101'}}
                    activeClassName={styles.StyleCardActive}
                    >
                     <i class="fas fa-th"></i>
                    
                  </NavLink>
                </div>
                <div onClick={() => setType(false)}  type="button">
                  {" "}
                  <NavLink
                  className={styles.ListTo}
                  style={{ color: '#9DA7BB'}}   
                  activeStyle={{color:'#010101'}}>
                   <i class="fas fa-th-large"></i>
                  </NavLink>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <Container>
        {type ? ( 
          <div>
            <div className={styles.WebBody}>
              <div className={styles.List}>
                <Row>
                  <Col>
                    {CourseInformation.map((D) => (
                      <div className={styles.ListOne}>
                        <p className={styles.ListOneImg}>
                          <img
                            src={D.img}
                            id={styles.Rasm}
                            className="img-fluid"
                          />
                        </p>
                        <div className={styles.ListOneText}>
                          <p className={styles.ListOneTextBold}>{D.title}</p>
                          <p className={styles.ListOneTextSmall}>
                            {D.smallText}
                          </p>
                          <div className={styles.TagSection}>
                            <p>
                              <ul className={styles.CourseSize}>
                                <li>Kurs hajmi</li>
                                <li>{D.time}</li>
                              </ul>
                            </p>
                            <p>
                              <ul className={styles.CoursePrice}>
                                <li>Kurs narxi</li>
                                <li id={styles.price}>
                                  <p className={styles.CoursePriceText}>
                                    {D.price}
                                  </p>
                                  <p className={styles.uzs}>.UZS</p>
                                </li>
                              </ul>
                            </p>
                            <p className={styles.staring}>
                              <p>
                                <ReactStars
                                  className={styles.starin}
                                  count={5}
                                  onChange={ratingChanged}
                                  size={24}
                                  activeColor="#ffd700"
                                />
                              </p>
                              <p>4.1</p>
                              <p>(524)</p>
                            </p>
                          </div>
                        </div>
                        <div className={styles.IconNext}>
                          <i class="fas fa-arrow-right"></i>
                        </div>
                      </div>
                    ))}
                  </Col>
                </Row>
              </div>
            </div>
            
          </div> 
        ) : (
          <div className={styles.WebBody}>
            <div className={styles.CardStyles}>
              {CourseInformation.map((k) => (
                <Card
                  className={styles.Cards}
                  style={{ width: "350px", height: "400px" }}
                >
                  <Card.Img
                    styles={{ width: "350px", height: "180px" }}
                    className="img-fluid"
                    src={k.img}
                  />
                  <Card.Body>
                    <Card.Title className={styles.CardBoldtext}>
                      {k.title}
                    </Card.Title>
                    <Card.Text>
                      <div className={styles.StarWithPrice}>
                        <div className={styles.CardTagSection}>
                          <p className={styles.staring}>
                            <p>
                              <ReactStars
                                className={styles.starin}
                                count={5}
                                onChange={ratingChanged}
                                size={24}
                                activeColor="#ffd700"
                              />
                            </p>
                            <p>4.1</p>
                            <p>(524)</p>
                          </p>
                        </div>
                        <div className={styles.CardPrice}>
                          <p>
                            <ul className={styles.CourseSize}>
                              <li>Kurs hajmi</li>
                              <li>{k.time}</li>
                            </ul>
                          </p>
                          <p>
                            <ul className={styles.CoursePrice}>
                              <li>Kurs narxi</li>
                              <li id={styles.price}>
                                <p className={styles.CoursePriceText}>
                                  {k.price}
                                </p>
                                <p className={styles.uzs}>.UZS</p>
                              </li>
                            </ul>
                          </p>
                          <div className={styles.CardIconNext}>
                            <i class="fas fa-arrow-right"></i>
                          </div>
                        </div>{" "}
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </div>
        )}
        
        <div className={styles.loaderSpinner}>
      <Loader
        type="TailSpin"
        color="#00BFFF"
        height={40}
        width={40}
        timeout={3000} //3 secs
        
        
      />
      
      </div>

      </Container>
    
    </div>
  
 );
}
