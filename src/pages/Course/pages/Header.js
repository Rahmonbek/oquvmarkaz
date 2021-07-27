import React, { Component } from "react";

import style from "../css/Header.module.css";
export default class Header extends Component {
  render() {
    return (
      <div>
        <div className={style.header}>
          <div className={style.headerText}>
            <p>PDP</p>
            <h6>Storm</h6>
            <i class="fa fa-bolt"></i>
          </div>
          <div className={style.dropdown}>
            <button
              class="btn  dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              BARCHA KURSLAR
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a>Offine</a>
              </li>
              <li>
                <a>Online</a>
              </li>
              <li>
                <a>Kunduzgi</a>
              </li>
              <li>
                <a>Kechgi</a>
              </li>
            </ul>
          </div>
          <div className={style.til}>
            <button
              class="btn  dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              UZBEK
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a>Uzbek</a>
              </li>
              <li>
                <a>Russian</a>
              </li>
              <li>
                <a>English</a>
              </li>
            </ul>
          </div>
          <button
            type="button"
            class="btn btn-primary btn-lg"
            style={{
              position: "absolute",
              width: "97px",
              height: "28px",
              fontSize: "12px",
              right: "165px",
              top: "16px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            KIRISH
          </button>
        </div>
      </div>
    );
  }
}
