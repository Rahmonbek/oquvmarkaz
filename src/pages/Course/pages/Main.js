import React, { Component } from "react";
import pi from "../images/pi.png";
import ios1 from "../images/ios1.png";
import ios2 from "../images/ios2.png";
import ios3 from "../images/ios3.png";
import ellips1 from "../images/ellips1.png";
import ellips2 from "../images/ellips2.png";
import ellips3 from "../images/ellips3.png";
import ellips4 from "../images/ellips4.png";
import rasmcha from "../images/rasmcha.png";
import style from "../css/Main.module.css";
export default class Main extends Component {
  render() {
    const video = "https://youtu.be/9sb_zuHGmY4";
    return (
      <div>
        <div className={style.main}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3">
                <form>
                  <input
                    style={{
                      marginTop: "24px",
                      fontSize: "14px",
                      width: "330px",
                      height: "40px",
                    }}
                    class="form-control me-2"
                    type="search"
                    placeholder="Qanday kurs o'rganmoqchisiz"
                    aria-label="Search"
                  />
                </form>
                <div className={style.kurslar}>
                  <div className="container-fluid">
                    <div className="row">
                      <button
                        class="btn"
                        type="button"
                        style={{
                          width: "70px",
                          height: "25px",
                          marginTop: "12px",
                        }}
                      >
                        #Dizayn
                      </button>
                      <button
                        class="btn"
                        type="button"
                        style={{
                          width: "87px",
                          height: "25px",
                          marginTop: "12px",
                          marginLeft: "10px",
                        }}
                      >
                        #Marketing
                      </button>
                      <button
                        class="btn"
                        type="button"
                        style={{
                          width: "67px",
                          height: "25px",
                          marginTop: "12px",
                          marginLeft: "10px",
                        }}
                      >
                        #Biznes
                      </button>
                      <button
                        class="btn"
                        type="button"
                        style={{
                          width: "48px",
                          height: "25px",
                          marginTop: "12px",
                          marginLeft: "10px",
                        }}
                      >
                        #Web
                      </button>
                      <button
                        class="btn"
                        type="button"
                        style={{
                          width: "101px",
                          height: "25px",
                          marginTop: "10px",
                        }}
                      >
                        #Buxgalteriya
                      </button>
                      <button
                        class="btn"
                        type="button"
                        style={{
                          width: "88px",
                          height: "25px",
                          marginTop: "10px",
                          marginLeft: "10px",
                        }}
                      >
                        #Salomatlik
                      </button>
                      <button
                        class="btn"
                        type="button"
                        style={{
                          width: "93px",
                          height: "25px",
                          marginTop: "10px",
                          marginLeft: "10px",
                        }}
                      >
                        #Dasturlash
                      </button>
                    </div>
                  </div>
                  <h3
                    style={{
                      fontSize: "14px",
                      marginLeft: "16px",
                      marginTop: "18px",
                    }}
                  >
                    DASTURLASH{" "}
                  </h3>
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className={style.card}>
                          <div className={style.cardImg}>
                            <img src={ios1} />
                          </div>
                          <div className={style.cardText}>
                            <h5>
                              RESTful API-larni yaratish
                              <br /> bo’yicha amaliy topshiriqlar
                            </h5>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              <br /> dolor sit amet. . . .
                            </p>
                            <div className={style.chiziq}></div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className={style.card}>
                          <div className={style.cardImg}>
                            <img src={ios2} />
                          </div>
                          <div className={style.cardText}>
                            <h5>
                              Ishlab chiquvchilar uchun AWS:
                              <br /> ECS va ko'p mintaqali yuklarni. .{" "}
                            </h5>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              <br /> dolor sit amet. . . .
                            </p>
                            <div className={style.chiziq}></div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className={style.card}>
                          <div className={style.cardImg}>
                            <img src={ios3} />
                          </div>
                          <div className={style.cardText}>
                            <h5>
                              iOS bo’yicha dastulash
                              <br /> kurslari
                            </h5>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              <br /> dolor sit amet. . . .
                            </p>
                            <div className={style.chiziq}></div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className={style.card}>
                          <div className={style.cardImg}>
                            <img src={ios2} />
                          </div>
                          <div className={style.cardText}>
                            <h5>
                              RESTful API-larni yaratish
                              <br /> bo’yicha amaliy topshiriqlar
                            </h5>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              <br /> dolor sit amet. . . .
                            </p>
                            <div className={style.chiziq}></div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className={style.card}>
                          <div className={style.cardImg}>
                            <img src={ios3} />
                          </div>
                          <div className={style.cardText}>
                            <h5>
                              RESTful API-larni yaratish
                              <br /> bo’yicha amaliy topshiriqlar
                            </h5>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              <br /> dolor sit amet. . . .
                            </p>
                            <div className={style.chiziq}></div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className={style.card}>
                          <div className={style.cardImg}>
                            <img src={ios1} />
                          </div>
                          <div className={style.cardText}>
                            <h5>
                              Ishlab chiquvchilar uchun AWS:
                              <br /> ECS va ko'p mintaqali yuklarni. .
                            </h5>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              <br /> dolor sit amet. . . .
                            </p>
                            <div className={style.chiziq}></div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className={style.card}>
                          <div className={style.cardImg}>
                            <img src={ios3} />
                          </div>
                          <div className={style.cardText}>
                            <h5>
                              iOS bo’yicha dastulash
                              <br /> kurslari
                            </h5>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              <br /> dolor sit amet. . . .
                            </p>
                            <div className={style.chiziq}></div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className={style.card}>
                          <div className={style.cardImg}>
                            <img src={ios2} />
                          </div>
                          <div className={style.cardText}>
                            <h5>
                              RESTful API-larni yaratish
                              <br /> bo’yicha amaliy topshiriqlar
                            </h5>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              <br /> dolor sit amet. . . .
                            </p>
                            <div className={style.chiziq}></div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className={style.card}>
                          <div className={style.cardImg}>
                            <img src={ios1} />
                          </div>
                          <div className={style.cardText}>
                            <h5>
                              Ishlab chiquvchilar uchun AWS:
                              <br /> ECS va ko'p mintaqali yuklarni. .
                            </h5>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              <br /> dolor sit amet. . . .
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className={style.imgLarge}>
                  <img src={pi} />
                </div>
                <div className={style.rate}>
                  <h1>Raspberry Pi dasturlash asoslari</h1>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i style={{ color: "#9DA7BB" }} class="fa fa-star"></i>
                  <h2>4.1</h2>
                  <p>(524)</p>
                  <div className={style.share}>
                    <i class="fa fa-share-alt"></i>
                    <a>Ulashish</a>
                  </div>
                </div>
                <div className={style.follow}>
                  <img src={rasmcha} />
                  <p>Muhammad Jumayev</p>
                  <div className={style.obuna}>
                    <a style={{ color: "white" }}>Obuna bo'lish</a>
                  </div>
                </div>
              </div>

              <div className="col-lg-3">
                <div className={style.info}>
                  <div className={style.bt}>
                    <button
                      class="btn"
                      type="button"
                      style={{
                        width: "94px",
                        height: "22px",
                        marginLeft: "24px",
                        backgroundColor: "#10C8A0",
                        color: "white",
                        fontSize: "14px",
                        borderRadius: "2px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      Dasturlash
                    </button>
                  </div>
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className={style.infoText}>
                          <p>Kurs narxi</p>
                          <h2>250.000</h2>
                          <h4>UZS</h4>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className={style.infoText}>
                          <p>Kurs hajmi</p>
                          <h2>38 soat</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h1
                    style={{
                      fontSize: "16px",
                      marginLeft: "24px",
                      marginTop: "51px",
                    }}
                  >
                    Kurs bo’limlari:
                  </h1>
                </div>

                <div className={style.courses}>
                  <div className={style.courseText}>
                    <h4>Boshqa Mentorlar</h4>
                  </div>
                  <div className={style.strelka1}>
                    <i class="fa fa-arrow-left"></i>
                  </div>
                  <div className={style.strelka2}>
                    <i class="fa fa-arrow-right"></i>
                  </div>
                  <div className={style.chiziq2}></div>
                  <div className={style.rasmlar}>
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className={style.rasm1}>
                            <img src={ellips1} />
                            <div className={style.text4}>
                              <b>Bessie Watson</b>
                              <p>Arxitektor</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className={style.rasm2}>
                            <img src={ellips2} />
                            <div className={style.text4}>
                              <b>Arlene Hawkins</b>
                              <p>Dasturchi</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className={style.rasm3}>
                            <img src={ellips3} />
                            <div className={style.text4}>
                              <b>Philip Pena</b>
                              <p>Dizayner</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className={style.rasm4}>
                            <img src={ellips4} />
                            <div className={style.text4}>
                              <b>Soham Alexander</b>
                              <p>Dizayner</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={style.all}>
                      <a href="#">Barchasini ko’rish</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
