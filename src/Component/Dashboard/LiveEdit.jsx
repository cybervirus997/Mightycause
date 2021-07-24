import styles from "./LiveEdit.module.css";
import styled from "styled-components";
import { Nav } from "../Home/Nav";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Footer from "../Home/Footer";

function LiveEdit({ data }) {
  const [width, setWidth] = useState(window.innerWidth);
  window.addEventListener("resize", handleResize);
  function handleResize() {
    setWidth(window.innerWidth);
    // console.log("no");
  }
  const Progress = styled.div`
    width: ${Number((data.raised / data.donationTarget) * 100)}%;
    background: rgb(118, 152, 255);
    position: absolute;
    height: 100%;
    border-radius: 18px;
  `;
  const [popC, setPopC] = useState(false);

  return (
    <>
      {popC && (
        <div className={styles.pop}>
          <div className={styles.popCategory}>
            <span
              onClick={() => {
                setPopC(!popC);
              }}
              class="material-icons-round"
            >
              close
            </span>
          </div>
        </div>
      )}

      {width < 600 && <Nav />}
      <div className={styles.Con}>
        <div className={styles.content}>
          <div className={styles.account}></div>
          <div>
            <button className={styles.category}>{data.category}</button>
            <span class="material-icons-outlined">mode_edit</span>
            <span
              onClick={() => {
                setPopC(!popC);
              }}
              class="material-icons-outlined"
            >
              mode_edit
            </span>
          </div>
          <div>
            <div className={styles.imgDiv}>
              <div className={styles.pic}>
                <img src={data.img} alt="" />
              </div>
              <span class=" material-icons-outlined ">mode_edit</span>
            </div>
            <div className={styles.title}>
              <div>
                <h1>
                  {data.title} <span class="material-icons-outlined">mode_edit</span>
                </h1>
              </div>
            </div>
            <div className={styles.org}>
              <p>An Event for - {data.orgainsation}</p>
            </div>
          </div>
          <div>
            <button className={styles.editTheme}>
              <span class=" material-icons-outlined ">mode_edit</span>Edit Theme
            </button>
          </div>
        </div>
        <div className={styles.eventProgress}>
          <div>
            <h1>{`$ ${data.raised} raised`}</h1>
            <p>
              FUNDRAISING DEADLINE <span class="material-icons-outlined">mode_edit</span>
            </p>
          </div>
          <div>
            <div className={styles.progressBarCon}>
              <Progress />
              <p>{`$ ${data.donationTarget} GOAL`}</p>
            </div>
            <span class="material-icons-outlined">mode_edit</span>
          </div>
          <div className={styles.lastbutton}>
            <Link to="/Donation">
              <button className={styles.donate}>DONATE</button>
            </Link>
            <button>JOIN THIS EVENT</button>
          </div>
        </div>
      </div>
      <div className={styles.lastInfor}>
        <div className={styles.one}>
          <div className={styles.support}>
            <div>
              <h2>WHO WE SUPPORT</h2>
              <p>PROCEEDS GO TO 1 ORGANIZATION</p>
            </div>
            <button className={styles.donate}>DONATE</button>
          </div>
        </div>
        <div className={styles.user}>
          <div>
            <h1>Event & ORGANIZER INFO</h1>
            <p>GET THE DETAILS</p>
          </div>
          <div className={styles.userDetail}>
            <div>
              <h2>Event Organiser</h2>
              <p>{`${data.email}`}</p>
            </div>
            <div>
              <p>{`Created on -${data.date} dsfsfsffs`} </p>
              <p>{`Fundraising deadline ${data.deadline}`}dsfsfdf</p>
              <p>{`Fundraising Target ${data.donationTarget}`}sdfsf</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  );
}
export { LiveEdit };
