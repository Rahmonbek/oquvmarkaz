import React from "react";
import styles from "../../Css/FooterMenuDi.module.css";
import click from "../../Img/click.png";
import payme from "../../Img/payme.png";
import upay from "../../Img/upay.png";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link, Router } from "react-router-dom";

export default function FooterMenuDi() {
  return (
    <div>
      <div className={styles.headers}>
        <Container>
          <Row className={styles.navbar}>
            <Col>
              <ul className={styles.ulGroup}>
                <li>
                  <li>
                    <br />
                  </li>
                  <h4>Asosiy</h4>
                </li>
                <li>
                  <br />
                </li>
                <li>Loyiha haqida</li>
                <li>Kurslar</li>
                <li>Mentorlarga</li>
                <li>Ommoviy oferta</li>
                <li>Maxfiylik siyosati</li>

                <div className={styles.iconSites}>
                  <p>
                    <i class="fab fa-telegram-plane"></i>
                  </p>
                  <p>
                    <i id={styles.fSites} class="fab fa-facebook-f"></i>
                  </p>
                  <p>
                    <i id={styles.iSites} class="fab fa-instagram"></i>
                  </p>
                  <p>
                    <i class="fab fa-youtube"></i>
                  </p>
                </div>
              </ul>
            </Col>
            <Col>
              <ul className={styles.ulGroup}>
                <li>
                  <li>
                    <br />
                  </li>
                  <h4>Qo'shimcha</h4>
                </li>
                <li>
                  <br />
                </li>
                <li>Bizning jamoa</li>
                <li>Biz bilan hamkorlik</li>
                <li>Bu qanday ishlaydi ?</li>
              </ul>
            </Col>
            <Col>
              <ul className={styles.ulGroup}>
                <li>
                  <li>
                    <br />
                  </li>
                  <h4>Qo'llab quvvatlash</h4>
                </li>
                <li>
                  <br />
                </li>
                <li>Eng ko'p beriladigan savollar</li>
                <li>Kontakt</li>
              </ul>
            </Col>
            <Col>
              <ul className={styles.ulGroup}>
                <li>
                  <li>
                    <br />
                  </li>
                  <h4>To'lov turlari</h4>
                </li>
                <li>
                  <br />
                </li>
                <li>
                  <div className={styles.payGroup}>
                    <a href="https://payme.uz/home/main">
                      <img src={payme} />
                    </a>
                    <a href="https://click.uz/uz">
                      <img src={click} />
                    </a>
                    <a href="https://upay.uz/">
                      <img src={upay} />
                    </a>
                  </div>
                </li>
                <div className={styles.manzil}>
                  <p>
                    100011, Toshkent sh. Shayxontohur tum.,
                    <br /> Zarqaynar ko'ch., 3B-uy
                  </p>
                  <Button type="button">
                    <a href="https://pdp.uz/">Biz bilan aloqa</a>
                  </Button>
                </div>
              </ul>
            </Col>

            <div className={styles.footerText}>
              <p>
                © 2019 storm.uz | Personel Development Process LLC | Foydalanish
                shartlari{" "}
              </p>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
}
