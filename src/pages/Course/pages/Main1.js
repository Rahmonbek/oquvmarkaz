import React from 'react'

import styles from "../css/Main.module.css";
// import styles from "../css/MainTwo.module.css";
import { Container, Form } from "react-bootstrap";
import "video-react/dist/video-react.css"; // import css





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

export default function Main1() {


  return (
<div>
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
</Container>

</div>

            
      
    )
}

