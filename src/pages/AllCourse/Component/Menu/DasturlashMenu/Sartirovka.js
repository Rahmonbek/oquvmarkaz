import React from "react";
import ReactStars from "react-rating-stars-component";
import { Container, Form, Flex } from "react-bootstrap";
import styles from "../../../Css/Sartirovka.module.css";

export default function Sartirovka() {
  const [item, setItem] = React.useState(false);

  const handleOpen = () => {
    setItem(true);
  };
  const handleClose = () => {
    setItem(false);
  };

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div>
      <Container>
        <div  className={styles.filters}>
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
                    <input type="checkbox" value="Other" name="gender" />{" "}
                    <p>Eng baland narx</p>
                  </div>
                  <div className={styles.FilterSelect}>
                    {" "}
                    <input type="checkbox" value="Other" name="gender" />
                    <p> Eng past narx</p>
                  </div>
                  <div className={styles.FilterSelect}>
                    {" "}
                    <input type="checkbox" value="Other" name="gender" />{" "}
                    <p>A-Z bo'yicha</p>
                  </div>
                  <div className={styles.FilterSelect}>
                    {" "}
                    <input type="checkbox" value="Other" name="gender" />{" "}
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
             
          </div>
        </div>
      </Container>
    </div>
  );
}
