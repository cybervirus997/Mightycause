import React from "react";
import { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import styled from "styled-components";

const MainPage = styled.div`
  width: 100%;
  margin-left: 10px;
`;
const WholeDiv = styled.div`
  padding: 5% 0%;
  margin-top: 20px;

  .List_div {
    width: 80%;
    margin: auto;
    margin-top: 20px;
    justify-content: center;
  }

  .List_div > ul > li {
    list-style: none;
    font-size: 20px;
    font-weight: bold;
     color:#364C8E;
  }
  .Icon-size {
    width: 20%;
    margin: auto;
  }

  .para_1 {
    width: 80%;
    margin: auto;
    margin-top: 20px;
  }
  .para_1 > p {
    font-size: 20px;
    font-size: 18px;
    color:#01158C;
  }

  .para_2 {
    width: 80%;
    margin: auto;
    margin-top: 22px;
  }
  .para_2 > p {
    font-size: 18px;
       color:#01158C;
   
  }

  .Card_div {
    display: flex;
    margin: auto;
    justify-content: center;
    margin-top: 20px;

    height: 100%;
  }
  .Card_div > div:nth-child(1) {
    width: 60%;
  }
  .Card_div > div:nth-child(1) > img {
    height: 100%;
  }
  .Card_div > div:nth-child(2) {
    width: 37%;
    background-color: white;

    margin-left: -25px;
  }

  .Card_div > div:nth-child(2) > h4,
  p {
    margin: 0;
  }
  .Progress_bar {
    width: 80%;
    background-color: grey;
    margin: auto;
  }
  .Progress_bar > div > p {
    font-size: 12px;
  }
  .Progress_bar_inner {
    height: 4px;
    width: 70%;
    background-color: #6188ff;
    margin-bottom: 1px;
    margin: auto;
    margin-top: 10px;
  }
  .Progress_bar_inner > p {
  }

  .Down_panel {
    margin-top: 50px;
    margin-left: 20px;
    padding: 0 2%;
  }
  .Down_panel > ul > li {
    font-size: 19px;
  }

  .fund_raise_btn > button {
    background-color: #6188ff;
    color: #fff;
    padding: 3% 18%;
    border: none;
    cursor: pointer;
    margin-top: 40px;
  }

  @media only screen and (max-width: 720px) {
    .Card_div {
      display: flex;
      margin: auto;
      justify-content: center;
      margin-left: -40px;
      margin-top: 40px;

      height: 100%;
    }
    .Card_div > div:nth-child(1) {
      width: 42%;
    }
    .Card_div > div:nth-child(2) {
      width: 35%;
      background-color: white;

      margin-left: -55px;
    }

    .fund_raise_btn > button {
      background-color: #6188ff;
      width: 90%;
      color: #fff;
      padding: 3% 18%;
      border: none;
      margin-top: 40px;
      cursor: pointer;
    }
  }
`;

const mybutton = {
  background: "#6188ff",
  color: "#fff",
  padding: "3% 18%",
  border: "none",
  cursor: "pointer",
  marginTop: "40px",
};

const Fundrasingsolution = (props) => {
  const [isAuth, setAuth] = useState(true);
  const handleClick = () => {
    alert("Login Please");
  };
  return (
    <>
      <MainPage>
        <div
          style={{
            fontSize: "22px",
            fontWeight: "bolder",
            marginBottom: "-13px",
          }}
        >
          {props.fund}
        </div>

        <WholeDiv style={{ background: `${props.bg}` }}>
          <div className="Icon-size">{props.svg} </div>
          <div className="List_div">
            <ul>
              <li>Set a goal</li>
              <li>Tell a story</li>
              <li>Share with the world</li>
            </ul>
          </div>
          <div className="para_1">
            <p>{props.text1}</p>
          </div>
          <div>{props.svg1}</div>
          <div></div>

          <div className="para_2">
            <p>{props.text2}</p>
          </div>

          <div className="Card_div">
            <div>
              <img src={props.card_image} alt="" />
            </div>

            <div>
              <h4>{props.card_fund}</h4>
              <p>{props.card_head}</p>
              <div className="Progress_bar">
                <div className="Progress_bar_inner"></div>
              </div>
              <p>{props.card_bar}</p>
            </div>
          </div>

          <div className="Down_panel">
            <h3>SIMPLE,POWERFUL,FEATURES</h3>
            <ul>
              <li>{props.list1}</li>
              <li>{props.list2}</li>
              <li>{props.list3}</li>
            </ul>
          </div>
          <div className="fund_raise_btn">
            {!isAuth ? (
              <button onClick={handleClick}>{props.btn}</button>
            ) : (
              <Link to="/dashboard/live">
                <button style={mybutton}>{props.btn}</button>
              </Link>
            )}
          </div>
        </WholeDiv>

        <div></div>
      </MainPage>
    </>
  );
};

export default Fundrasingsolution;
