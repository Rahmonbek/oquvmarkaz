import React from "react";
import { BsArrowDown } from "react-icons/bs";
import styles from "../../../Css/Download.module.css";

export default function Download() {
  return (
    <div>
      <div className={styles.AppVazefalar}>
        <div className={styles.AppVazefalarIcons}>
          <i>
            <BsArrowDown />
          </i>
        </div>
        <div className={styles.AppVazefalarText}>
          <p style={{ fontWeight: "600" }}>intellij idea.exe</p>
          <p style={{ color: "#9DA7BB" }}>510 MB | 25.06.2019</p>
        </div>
      </div>
      <div className={styles.AppVazefalar}>
        <div className={styles.AppVazefalarIcons}>
          <i>
            <BsArrowDown />
          </i>
        </div>
        <div className={styles.AppVazefalarText}>
          <p style={{ fontWeight: "600" }}>JAVA bo’yicha kitob.pdf</p>
          <p style={{ color: "#9DA7BB" }}>4.0 MB | 20.06.2019</p>
        </div>
      </div>
      <div className={styles.AppVazefalar}>
        <div className={styles.AppVazefalarIcons}>
          <i>
            <BsArrowDown />
          </i>
        </div>
        <div className={styles.AppVazefalarText}>
          <p style={{ fontWeight: "600" }}>Malumotlar ketma-ketligi.docx</p>
          <p style={{ color: "#9DA7BB" }}>7.2 MB | 15.06.2019</p>
        </div>
      </div>
    </div>
  );
}
