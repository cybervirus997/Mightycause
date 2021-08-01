import React, { useState, useEffect } from "react";
import styled from "styled-components";

import ExploreIcon from "@material-ui/icons/Explore";
import SearchIcon from "@material-ui/icons/Search";
import StarsIcon from "@material-ui/icons/Stars";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import axios from "axios";
import HelpIcon from "@material-ui/icons/Help";
//import { DataUsage, FreeBreakfastOutlined } from "@material-ui/icons";
import { useRef } from "react";

const Wrapper = styled.div`
  width: 100%;
  top: 0;
  background-color: #e9e9e9;
  text-align: center;
  padding-bottom: 10%;
`;


const Heading = styled.div`
  width: 50%;

  margin: auto;
  align-items: center;
  display: flex;
  margin-top: 50px;

  h1 {
    font-size: 50px;
    text-align: start;
    color: #494d59;
  }
  p {
    color: #494d59;
  }
  h1,
  p {
    margin: 2.5%;
  }
  div:nth-child(1) {
  }
  div:nth-child(2) {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    width: 45%;

    margin-left: 120px;
    background-color: #ffffff;
    height: 6vw;
    display: flex;
    align-items: center;
    padding: 20px;
  }
  div:nth-child(2):hover {
    border: 2px solid blue;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    transition: transform 0.3s ease;
  }

  div:nth-child(2) > div:nth-child(1) {
    width: 35%;
  }

  div:nth-child(2) > div:nth-child(1) > img {
    width: 50%;
  }

  div:nth-child(2) > div {
    width: 220px;
  }

  div:nth-child(2) > span {
    width: 260px;
    margin-left: 20px;
  }
  h4,
  p {
    margin: 0;
  }
  h4 {
    font-weight: 400;
  }
  div:nth-child(2) > span > p {
    font-weight: bolder;
  }
`;



// ------------------------
const DonateNav = styled.div`
  width: 100%;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
`;
const Icons = styled.div`
  /* margin-left: 20px; */
`;

const Logo = styled.div`
  /* margin-left: 750px; */
  margin-top: 20px;
`;

const Search = styled.div`
  position: relative;
  height: 50px;

  /* margin-left: 600px; */
  .icon_s {
    color: #6188ff;
  }
  .icon_s:hover {
    color: white;
  }

  .btn {
    background-color: #e9e9e9;
    border: 0;
    cursor: pointer;
    font-size: 24px;

    top: 1.8;
    left: 0;
    height: 55px;
    width: 55px;

    color: white;
  }
  .btn:hover {
    background: #6188ff;
    border-radius: 50%;
    color: white;
  }
`;

const Profile = styled.div`
  /* margin-left: 100px; */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6%;
`;
// ---------

const Form = styled.form``;








const FormInner = styled.div`
  padding: 1% 0;
  width: 60%;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  margin: auto;

  margin-top: 50px;
  background-color: white;
div{
  display:flex;
  justify-content:center;
}
div>div{
  margin-left:20px;
}

  input {
    width: 20px;
   
  }
`;


const Input = styled.div`
  margin-top: 25px;
  input {
    width: 70%;
    border: none;
    outline: none;
    border-bottom: 2px solid grey;
  }
  label{
    width:100%;
 
  }

`;

const Buttondiv = styled.div`
  margin-top: 20px;
  margin-left: 15px;
  button {
    margin-left: 20px;
    padding: 1% 4%;
    border: 2px solid #6188ff;
    background-color: white;
    color: #6188ff;
    border-radius: 5px;
  }

  button:hover {
    background-color: #6188ff;
    color: white;
  }
`;




const FormMiddle = styled.div`
  padding: 1% 0;
  width: 60%;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  margin: auto;

  margin-top: 50px;
  background-color: white;

 
`;
const CHECKBOX = styled.div`
/* display: flex; */


`;




const FormLast = styled.div`
  padding: 1.5% 0;
  width: 60%;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  margin: auto;

  margin: auto;
  margin-top: 50px;

  background-color: white;




  div:nth-child(1) {
    display: grid;
    justify-content: center;
    grid-template-columns:48% 50%;
  
      padding:0% 3%;

  }




 div:nth-child(1) >div:nth-child(1) select{
height:1.5vw;
width:200%;
border:none;
border-bottom:1px solid black;
}
 div:nth-child(1) >div:nth-child(2){
  display:flex;
}


 div:nth-child(2) {
    display: grid;
    justify-content: center;
    grid-template-columns:100%;

      padding:0% 3%;

  }
  div:nth-child(2) >div input{

width:200%;
border:none;
border-bottom:1px solid black;
}


 div:nth-child(3) {
    display: grid;
    justify-content: center;
    grid-template-columns:50% 48%;

      padding:0% 3%;

  }
   

 div:nth-child(3) >div:nth-child(2) select{
height:1.5vw;
width:100%;
border:none;
border-bottom:1px solid black;
}
 div:nth-child(3) >div:nth-child(1) input{

width:180%;
border:none;
border-bottom:1px solid black;
}

 div:nth-child(4) {
    display: grid;
    /* justify-content: center; */
    grid-template-columns:48% 50%;

      padding:0% 3%;

  }


 div:nth-child(4) >div:nth-child(1) select{
height:1.5vw;
width:210%;
border:none;
border-bottom:1px solid black;
}
 div:nth-child(4) >div:nth-child(2) input{

width:92%;
border:none;
border-bottom:1px solid black;
}
 
`;


const BUTTON = styled.div`
  input {
    width: 250px;
    height: 3.5vw;
    border-radius: 30px;
    background-color: #6188ff;
    color: white;
    font-size: 25px;
    border: none;
  }
  input:hover {
    background-color: #003efa;
  }
`;

const Outer = styled.div`
  position: fixed;
  top: 70px;
  right: 60px;
  width: 11%;
`;

const Inner = styled.div`
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  background-color: white;
  height: 5vw;
  border-radius: 10px;

  input {
    border: none;
    border-bottom: 1px solid blue;
    outline: none;
    margin-top: 20px;
  }
`;

const Total = styled.div`
  margin-top: 50px;
  h1 {
    font-size: 55px;
    font-weight: 400;
  }
`;









const Donation = () => {
  // const initial = {
  //   price: "",
  //   hide: false,
  //   dedication: false,
  //   hidename: false,
  //   card: "",
  //   cardnumber: "",
  //   year: "",
  //   cvv: "",
  //   bill: "",
  //   city: "",
  //   pin: "",
  //   donation: "",
  //   country: "",
  //   state: "",
  // };
  const [search, setSearch] = useState(false);
  const [formdata, setFormdata] = useState({});
  const [buttonClick, setButtonClick] = useState("");
  const [slide, setSlide] = useState(true);
  const [totalval, setTotalval] = useState("0.00");
  const [finalData, setFinalData] = useState({ name: "", email: "" });
  const [mydata, setMyData] = useState();
  const myemail = useRef();
  const Myid = useRef();
  const title = useRef();
  const evt = useRef();
  const currentTitle = useRef();
  const currentElement = useRef();
  // const [check, setCheck] = useState()
  // console.log(mydata, "mydata");
// console.log(formdata,"formdata")
  const LogingFun = async () => {
    let { data } = await axios.get("http://localhost:3002/login/1");
    myemail.current = data.email;
    setFinalData(data);
  };

  LogingFun();

  const handleOnchange1 = () => {
    setSlide(!slide);
  };

  const onMybutton = (val) => {
    // console.log(val);
    setTotalval(val);
    setButtonClick(val);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleOnchange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormdata({ ...formdata, [name]: type === "checkbox" ? checked : value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // alert("djsf");
    console.log(formdata, "formdata")
    // addData();
  
  };

  const addData = async () => {
    // console.log(formdata, "formdata");
    // console.log(title.current, "this is title");

    // var events = [];
    // events = { ...formdata };
    // let Detail = { ...mydata, ...events };
    // console.log(Detail, mydata);
    let a = evt.current;

    for (var i = 0; i < a.length; i++) {
      if (a[i].title === currentTitle.current) {
        a[i] = { ...a[i], ...formdata, price: buttonClick };
        break;
      }
    }

    console.log(
      evt.current,
      currentElement.current,
      mydata,
      a,
      buttonClick,
      currentTitle.current,
      "current"
    );
    let details = { ...mydata };
    details.events = a;

    await axios.patch(`http://localhost:3002/userData/${Myid.current}`, details);
  };

  const getData = async () => {
    let { data } = await axios.get(`http://localhost:3002/userData`);

    setMyData(data);
    // console.log(data, "this is the real onlle");

    for (let i = 0; i < data.length; i++) {
      // console.log(myemail, "this is emsail");
      if (myemail.current === data[i].email) {
        // console.log(data[i], "data1[i]");
        Myid.current = data[i].id;
        currentTitle.current = data[i].currentTitle;
        evt.current = data[i].events;
        // console.log(evt.current, "evt");
        for (var j = 0; j < evt.current.length; j++) {
          if (evt.current[j].title === currentTitle.current) {
            currentElement.current = evt.current[j];
            break;
          }

          title.current = evt.current[j].title;
          // console.log(title.current, "this is title");
        }
        // console.log(title.current);

        setMyData(data[i]);
        break;
      }
    }
    // console.log(data);

    setFinalData({ name: data.name, email: data.email });
  };
  return (
    <Wrapper>
      <DonateNav>
        <Icons>
          <ExploreIcon style={{ color: "#6188FF" }} />
        </Icons>
        <Link to="/">
          <Logo className="lodo_div">
            <img src="./image/Mightcauselogo.png" alt="Logo" />
          </Logo>
        </Link>

        <Profile>
          <Search>
            <button onClick={() => setSearch(!search)} className="btn">
              <SearchIcon className="icon_s" />
            </button>
            {search && (
              <Outer>
                <Inner>
                  <label htmlFor="">Search</label>
                  <br />
                  <input type="text" placeholder="search..." />
                </Inner>
              </Outer>
            )}
          </Search>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </Profile>
      </DonateNav>
      <Heading>
        <div>
          <h1>Donate</h1>
          <p>You're making a donation to Anima Christi Retreats Inc</p>
        </div>
        <div>
          <div>
            <img src="https://www.mightycause.com/images/gold_size_220x220.png" alt="" />
          </div>

          <span>
            <h4>ORGANIZATION</h4>
            <br />
            <p>
              Anima Christi Retreats Inc <StarsIcon style={{ color: "blue", marginTop: "2px" }} />
            </p>
          </span>
        </div>
      </Heading>





      <Form onSubmit={handleSubmit}>
        <FormInner>
          <div>
            <div>
            
              <input onChange={handleOnchange1} type="radio" name="one" />
              One-time donation
            </div>
            <div>
              <input onChange={handleOnchange1} type="radio" name="one" />
              Monthly donation
            </div>
          </div>
            
          {slide ? (
            <Buttondiv>
              <button onClick={() => onMybutton(25)}>$ 25</button>
              <button onClick={() => onMybutton(50)}>$ 50</button>
              <button onClick={() => onMybutton(75)}>$ 75</button>
              <button onClick={() => onMybutton(100)}>$ 100</button>
            </Buttondiv>
          ) : (
            <Buttondiv>
              <button onClick={() => onMybutton(25)}>$ 25/month</button>
              <button onClick={() => onMybutton(50)}>$ 50/month</button>
              <button onClick={() => onMybutton(75)}>$ 75/month</button>
              <button onClick={() => onMybutton(100)}>$ 100/month</button>
            </Buttondiv>
          )}

         

          <Input>
         
          <label>$ <input  onChange={handleOnchange} name="price" type="text" />month</label>
         
          </Input>


          <CHECKBOX>
            <input onChange={handleOnchange} type="checkbox" name="hide" />
            <label>Hide amount from public display</label>
            <HelpIcon style={{ fontSize: "20px", marginLeft: "2px" }} />
          </CHECKBOX>

          <CHECKBOX>
            <input onChange={handleOnchange} type="checkbox" name="dedication"/>
            <label>Add a dedication</label>
            <HelpIcon style={{ fontSize: "20px", marginLeft: "2px" }} />
          </CHECKBOX>
        </FormInner>
        

        <FormMiddle>
          <div>
            <param>
              {/* You're Logged in as {finalData.name} ({finalData.email})). */}
              You're Logged in as Pawan patidar Pawanpatidar21@gmail.com
            </param>
            <p> Not Pawan Patidar? Log out.</p>
         </div>
          
        
         

          <CHECKBOX>
         
              <input onChange={handleOnchange} type="checkbox" name="hidename" />
           
          
            <label>Hide my name from public display</label>
              <HelpIcon style={{ fontSize: "20px", marginLeft: "2px" }} /> 
          </CHECKBOX>

   
        </FormMiddle>

        <FormLast>
          <div>
            <div>
            
              <label htmlFor="">
                Payment Method
                <select onChange={handleOnchange} name="card" id="">
                  <option value="">Select Card</option>
                  <option value="mastercard">Mastercard</option>
                  <option value="ru-pay">Rupay</option>
                </select>
              </label>
             </div>

            
              <div>
              <label >
                Card Number
                  <input
                    onChange={handleOnchange}
                    type="number"
                    name="cardnumber"
                    placeholder="Card Number"
                   
                  />
              </label>
              <label htmlFor="">
                MM/YY
                  <input
                    onChange={handleOnchange}
                    type="number"
                    name="year"
                    placeholder="MM/YY"
                
                  />
              </label>
              <label htmlFor="">
                CVV
                <input
                  onChange={handleOnchange}
                  type="number"
                  name="cvv"
                  placeholder="CVV"

                />
              </label>
               
              
              </div>
            </div>
       
         
          <div>
            <div>
              <label htmlFor="">
                Bill
                <input
                  onChange={handleOnchange}
                  name="bill"
                  type="text"
                  placeholder="Bill Address"

                />
              </label>
         </div>
          </div>




        

          <div>
            <div>
              <label htmlFor="">
                City         
              <input
                onChange={handleOnchange}
                name="city"
                type="text"
                placeholder="City"
            
                />
              </label>
            </div>

            <div>
           
            <label htmlFor="">
                state
              <select onChange={handleOnchange}  name="state">
                <option value="">select state</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                </select>
              </label>
            </div>
          </div>

          <div>
            <div>
              <label>Country 
            

              <select onChange={handleOnchange} name="country">
                <option value="">select country</option>
                <option value="United State">United State</option>
                <option value="India">India</option>
                <option value="Bhutan">Bhutan</option>
                </select>
              </label>
            </div>

            <div>
              <label htmlFor="">
                Pin
            
              <input
                onChange={handleOnchange}
                type="number"
                name="pin"
              
                placeholder="ZIP/Post Code"
                /></label>
              
            </div>
          </div>
        </FormLast>

        <Total>
          <h1>Total</h1>
          <h1>${totalval}</h1>
          <CHECKBOX>
            <input
              onChange={handleOnchange}
              type="checkbox"
              name="donation"

            />
            <label>
             
              Cover fees so Anima Christi Retreats Inc gets my full donation
            </label>
            <HelpIcon />
          </CHECKBOX>
          {/* <Link to="/"> */}
            <BUTTON
              // onClick={() => {
              //   alert("Thanks For Your Valuable Donation");
              // }}
            >
              <input type="submit" value={`Pay$${totalval}`} />
            </BUTTON>
          {/* </Link> */}
        </Total>


      </Form>
    </Wrapper>
  );
};

export default Donation;
