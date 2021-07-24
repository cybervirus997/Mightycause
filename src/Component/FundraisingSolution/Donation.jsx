import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import ExploreIcon from '@material-ui/icons/Explore';
import SearchIcon from '@material-ui/icons/Search';
import StarsIcon from '@material-ui/icons/Stars';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import axios from 'axios';
import HelpIcon from '@material-ui/icons/Help';

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




const Form = styled.form``;




const FormInner = styled.div`
  padding: 1% 0;
  width: 50%;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  margin: auto;

  margin-top: 50px;
  background-color: white;

label {
  line-height: 18px;

}
input {
  width: 13px;
  height: 18px;
  font-size: 12px;
  line-height: 12px;
}

`;
const DonateNav = styled.div`
  display: flex;
  align-items: center;
`;
const Icons = styled.div`
  margin-left: 20px;
`;

const Logo = styled.div`

margin-left: 750px;
margin-top: 20px;

`

const Search = styled.div`
  position: relative;
  height: 50px;

  margin-left: 600px;
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
    position: absolute;
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
  margin-left: 100px;
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

const Input = styled.div`
margin-top: 25px;
input{
width:60%;
border: none;
outline: none;
border-bottom:2px solid grey;
}
label{
  border-bottom:2px solid grey;
  padding-bottom:1px;
 
}


`
const CHECKBOX = styled.div`


margin-top:15px;
label {
  line-height: 18px;
  
}
input {
  width: 13px;
  height: 18px;
  font-size: 12px;
  line-height: 12px;
}
`

const FormMiddle = styled.div`
  padding: 1% 0;
  width: 50%;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  margin: auto;

  margin-top: 50px;
  background-color: white;
  label {
    display: inline;
  }
`;




const FormLast = styled.div`
  padding: 2% 0;
  width: 50%;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  margin: auto;
  justify-content: center;
  margin: auto;
  margin-top: 50px;
  background-color: white;
  justify-items: center;


  span{

    display: flex;
  }

span>div:nth-child(1) select{
width:300px;
border: none;
border-bottom: 1.5px solid grey;
outline:none;
}

span>div:nth-child(1) label{
  margin-left: -180px;
}
span:nth-child(2) input{
  margin-top: 10px;
  width:857px;
  border-bottom: 1.5px solid grey;
}

span:nth-child(3)>div:nth-child(1) input{
  border-bottom: 1.5px solid grey;
  margin-top: 21px;
width:420px;
}

span:nth-child(3)>div:nth-child(2) select{
width:300px;
margin-left: 10px;
border: none;
border-bottom: 1.5px solid grey;
outline:none;
width:420px;
}

span:nth-child(3)>div:nth-child(2) label{
margin-left:-370px;
}
span:nth-child(4)>div:nth-child(2) input{
  margin-left: 10px;
  margin-top: 22px;
width:420px;
border-bottom: 1.5px solid grey;
}

span:nth-child(4)>div:nth-child(1) select{
width:300px;
border: none;
border-bottom: 1.5px solid grey;
outline:none;
width:420px;
}
 span:nth-child(4)>div:nth-child(1) label{
margin-left:-350px;
}
`;
const Credential = styled.div`
input{
  width: 160px;
  margin-left:5px;
  margin-top:21px;
  border-bottom:1.5px solid grey;
}




`;
const Wrapper2 = styled.div`
  display: flex;
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
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
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
margin-top:50px;
h1{
  font-size: 55px;
  font-weight: 400;
}
`
const Donation = () => {
  const [search, setSearch] = useState(false);
  const [formdata, setFormdata] = useState({});
  const [buttonClick, setButtonClick] = useState('');
  const [slide, setSlide] = useState(true);
  const [totalval, setTotalval] = useState("0.00")
  const [finalData, setFinalData] = useState({ name: "", email: "" })
  const [mydata,setMyData] = useState()
  // const [check, setCheck] = useState()

  const handleOnchange1 = () => {
    setSlide(!slide);
  };

  const onMybutton = (val) => {
    console.log(val)
    setTotalval(val)
    setButtonClick(val);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleOnchange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormdata({ ...formdata, "price": buttonClick, [name]: type === 'checkbox' ? checked : value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    addData();
    
    
  };

  const addData = async (id) => {
    const events = {};
    events.animal = { ...formdata };
    let B = { ...mydata }
    B.events.animal= {...formdata}
  
    await axios.patch(`http://localhost:3002/userData/1`, B);
  };

  const getData = async () => {
    let { data } = await axios.get(`http://localhost:3002/userData/1`);
    console.log(data);
    setMyData(data)
    setFinalData({ name: data.name,email:data.email})
  };
  return (
    <Wrapper>
      <DonateNav>
        <Icons>
          <ExploreIcon style={{ color: '#6188FF' }} />
        </Icons>
        <Link to='/'>
          <Logo className='lodo_div'>
            <img src='./image/Mightcauselogo.png' alt='Logo' />
          </Logo>
        </Link>
        <Search>
          <button onClick={() => setSearch(!search)} className='btn'>
            <SearchIcon className='icon_s' />
          </button>
          {search && (
            <Outer>
              <Inner>
                <label htmlFor=''>Search</label>
                <br />
                <input type='text' placeholder='search...' />
              </Inner>
            </Outer>
          )}
        </Search>
        <Profile>
          <Avatar alt='Cindy Baker' src='/static/images/avatar/3.jpg' />
        </Profile>
      </DonateNav>
      <Heading>
        <div>
          <h1>Donate</h1>
          <p>You're making a donation to Anima Christi Retreats Inc</p>
        </div>
        <div>
          <div>
            <img
              src='https://www.mightycause.com/images/gold_size_220x220.png'
              alt=''
            />
          </div>

          <span>
            <h4>ORGANIZATION</h4>
            <br />
            <p>
              Anima Christi Retreats Inc{' '}
              <StarsIcon style={{ color: 'blue', marginTop: '2px' }} />
            </p>
          </span>
        </div>
      </Heading>

      <Form onSubmit={handleSubmit}>
        <FormInner>
          <div>


            <span>  <input onChange={handleOnchange1} type='radio' name='one' />
              One-time donation</span>
            <input onChange={handleOnchange1} type='radio' name='one' />
            <span>Monthly donation</span>
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
            <label>$</label>
            <input
              onChange={handleOnchange}
              name='price'
              type='text'
              value={buttonClick}
            />
            <label>month</label>
          </Input>
          <CHECKBOX>

            <label><input onChange={handleOnchange} type="checkbox" name="hide" />Hide amount from public display </label><HelpIcon/>

          </CHECKBOX>

          <CHECKBOX>

            <label><input onChange={handleOnchange} type="checkbox" name="dedication" />Add a dedication</label><HelpIcon />

          </CHECKBOX>




        </FormInner>
        <FormMiddle>
          <h4>You're Logged in as {finalData.name} ({finalData.email})).</h4>
          <h4> Not {finalData.name}? Log out.</h4>


          <CHECKBOX>

            <label><input onChange={handleOnchange} type="checkbox" name="hidename" />Hide my name from public display</label><HelpIcon />

          </CHECKBOX>
        </FormMiddle>

        <FormLast>
          <span>
            <div>
              <label>Payment Method</label>
              <br />
              <select onChange={handleOnchange} name="card" id="">
                <option value="">Select Card</option>
                <option value="mastercard">Mastercard</option>
                <option value="ru-pay">Rupay</option>
              </select>
              {/* <input name='card' onChange={handleOnchange} type='text' /> */}
            </div>

            <div>
              <Wrapper2>
                <Credential>


                  <input
                    onChange={handleOnchange}
                    type='number'
                    name='cardnumber'
                    placeholder='Card Number'
                  />
                </Credential>
                <Credential>

                  <input
                    onChange={handleOnchange}
                    type='number'
                    name='year'
                    placeholder='MM/YY'
                  />
                </Credential>
                <Credential>

                  <input
                    onChange={handleOnchange}
                    type='number'
                    name='cvv'
                    placeholder='CVV'
                  />
                </Credential>
              </Wrapper2>
            </div>
          </span>
          <span>

            <input
              onChange={handleOnchange}
              name='bill'
              type='text'
              placeholder='Bill Address'
            />
          </span>

          <span>
            <div>
              <input
                onChange={handleOnchange}
                name='city'
                type='text'
                placeholder='City'
              />
            </div>

            <div>
              <label>State</label>
              <br />
              <select onChange={handleOnchange} name='state'>
                <option value='mp'>Madhya Pradesh</option>
                <option value='up'>Up</option>
              </select>
            </div>
          </span>

          <span>
            <div>
              <label>Country</label>
              <br />

              <select onChange={handleOnchange} name='country'>
                <option value='unitedstate'>United State</option>
                <option value='Bhutan'>Bhutan</option>
              </select>
            </div>

            <div>
              <input
                onChange={handleOnchange}
                type='number'
                name='pin'
                placeholder='ZIP/Post Code'
              />
            </div>
          </span>
        </FormLast>

        <Total>
          <h1>Total</h1>
          <h1>${totalval}</h1>
          <CHECKBOX>

            <label><input onChange={handleOnchange} type="checkbox" name="donation" /> Cover fees so Anima Christi Retreats Inc gets my full donation</label><HelpIcon />
         

          </CHECKBOX>
          <BUTTON>
            <input type='submit' value={`Pay$${totalval}`} />
          </BUTTON>
        </Total>

        {/* <CHECKBOX>
          <input onChange={handleOnchange} name='donation' type='checkbox' />{' '}
          <span>
            Cover fees so Anima Christi Retreats Inc gets my full donation
          </span>
        </CHECKBOX> */}


      </Form>
    </Wrapper>
  );
};

export default Donation;

