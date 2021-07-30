import React from "react";
import styles from "../../../Css/QuestionAnswer.module.css";
import { HiReply } from "react-icons/hi";
import {Form,Button} from 'react-bootstrap'
import { FaRegComment } from "react-icons/fa";

const PersonInform = [
  {
    id: 1,
    img: "https://lh3.googleusercontent.com/3bBecPSDwDuRnUW77uU_eCse4-qwz3aS0B0Xp_wcyCtA0meVUUtR3KYq5dWrIURR9BW72eE=s40",
    name: "To’rayev Jafarbek",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i ncididunt ut labore et dolore magna aliqua. Diam maecenas sed enim ut sem viverra aliquet eget sit. Nisl nisi scelerisque eu ultrices vitae auctor eu augue ut.       ",
    reply: "Javob berish",
    time: "16-iyul. 2019 ",
  },
  {
    id: 2,
    img: "https://lh3.googleusercontent.com/3bBecPSDwDuRnUW77uU_eCse4-qwz3aS0B0Xp_wcyCtA0meVUUtR3KYq5dWrIURR9BW72eE=s40",
    name: "To’rayev Jafarbek",

    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i ncididunt ut labore et dolore magna aliqua. Diam maecenas sed enim ut sem viverra aliquet eget sit. Nisl nisi scelerisque eu ultrices vitae auctor eu augue ut.       ",
    reply: "Javob berish",
    time: "16-iyul. 2019 ",
  },
  {
    id: 3,
    img: "https://lh3.googleusercontent.com/3bBecPSDwDuRnUW77uU_eCse4-qwz3aS0B0Xp_wcyCtA0meVUUtR3KYq5dWrIURR9BW72eE=s40",
    name: "To’rayev Jafarbek",

    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i ncididunt ut labore et dolore magna aliqua. Diam maecenas sed enim ut sem viverra aliquet eget sit. Nisl nisi scelerisque eu ultrices vitae auctor eu augue ut.       ",
    reply: "Javob berish",
    time: "16-iyul. 2019 ",
  },
  {
    id: 4,
    img: "https://lh3.googleusercontent.com/3bBecPSDwDuRnUW77uU_eCse4-qwz3aS0B0Xp_wcyCtA0meVUUtR3KYq5dWrIURR9BW72eE=s40",
    name: "To’rayev Jafarbek",

    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i ncididunt ut labore et dolore magna aliqua. Diam maecenas sed enim ut sem viverra aliquet eget sit. Nisl nisi scelerisque eu ultrices vitae auctor eu augue ut.       ",
    reply: "Javob berish",
    time: "16-iyul. 2019 ",
  },
  {
    id: 5,
    img: "https://lh3.googleusercontent.com/3bBecPSDwDuRnUW77uU_eCse4-qwz3aS0B0Xp_wcyCtA0meVUUtR3KYq5dWrIURR9BW72eE=s40",
    name: "To’rayev Jafarbek",

    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i ncididunt ut labore et dolore magna aliqua. Diam maecenas sed enim ut sem viverra aliquet eget sit. Nisl nisi scelerisque eu ultrices vitae auctor eu augue ut.       ",
    reply: "Javob berish",
    time: "16-iyul. 2019 ",
  },
];
export default function QuestionAnswer() {
  return (
    <div id={styles.BlaBlaBla}>
      <div className={styles.PersonOverFlov}>
        {PersonInform.map((F) => (
          <div className={styles.PersonCommentRead}>
            <div className={styles.PersonCommentImg}>
              <img src={F.img} />
            </div>
            <div classname={styles.PersonCommentText}>
              <p className={styles.PersonCommentName}>{F.name}</p>
              <p className={styles.PersonCommentOpinion}>{F.title}</p>
              <p className={styles.PersonCommentReply}>
                <p className={styles.PersonCommentIcons}>
                  <HiReply />{" "}
                </p>
                <p className={styles.PersonCommentIconsName}>{F.reply}</p>
                <p className={styles.PersonCommentIconsTime}>{F.time}</p>
              </p>
            </div> 
          </div>
        ))}
      </div>

      <div className={styles.PersonCommentWrite}>
        <div>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <div rows={2} type="text" className={styles.PersonCommentWriteMe} >
                  <p style={{marginLeft:'40px',color:'#9DA7BB',}}><FaRegComment/></p>
                  <p style={{marginLeft:'20px', color:'#9DA7BB'}}>Sharhingiz</p>
              </div>
            </Form.Group>
          </Form>
        </div>
        <div className={styles.PersonCommentButtonGroup}>
            <Button className={styles.PersonCommentExit}>Bekor Qilish</Button>
            <Button className={styles.PersonCommentSend}>Jo'natish</Button>

            
        </div>
       
      </div>
    </div>
  );
}
