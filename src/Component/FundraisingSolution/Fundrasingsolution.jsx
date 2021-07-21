import React from 'react'

import styled from 'styled-components'



const MainPage = styled.div`

width:100%;
margin-left:10px;



`
const WholeDiv = styled.div`
padding:5% 0%;
margin-top:20px;

.List_div{

        width:80%;
    margin:auto;
    margin-top:20px;
    justify-content:center;
  
    
}


.List_div>ul>li{
    list-style: none;
    font-size:22px;
    font-weight:bold;
    
}
.Icon-size{
    width:20%;
    margin:auto;
}

.para_1{

    width:80%;
    margin:auto;
    margin-top:20px;
}
.para_1>p{
    font-size:20px;
    font-size:22px;
}

.para_2{
  
    width:80%;
    margin:auto;
    margin-top:22px;
}
.para_2>p{
    font-size:20px;
}

.Card_div{
    display:flex;
    margin:auto;
    justify-content:center;
    margin-top:20px;
  
    height: 100%;
}
.Card_div>div:nth-child(1){
width:60%;

}
.Card_div>div:nth-child(1)>img{

    height: 100%;
}
.Card_div>div:nth-child(2){
width:30%;
background-color:white;

margin-left:-25px;
}

.Card_div>div:nth-child(2)>h4,p{
  margin:0
  
}
.Progress_bar {
width: 80%;
  background-color:grey;
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
  margin-top:10px;
}
.Progress_bar_inner>p{
  
}

.Down_panel{

    margin-top: 50px;

}
.Down_panel>ul>li{
    font-size: 20px;
}

.fund_raise_btn > button {
  background-color: #6188ff;
  color: #fff;
  padding: 3% 18%;
  border: none;
  cursor: pointer;
}

@media only screen and (max-width: 720px) {

.Card_div{
    display:flex;
    margin:auto;
    justify-content:center;
    margin-left:-40px;
    margin-top:40px;

    height: 100%;
    
}
.Card_div>div:nth-child(1){
width:42%;

}
.Card_div>div:nth-child(2){
width:35%;
background-color:white;

margin-left:-55px;
}

.fund_raise_btn > button {
  background-color: #6188ff;
  width:90%;
  color: #fff;
  padding: 3% 18%;
  border: none;
  margin-top: 40px;
  cursor: pointer;
}

}

`

const Fundrasingsolution = (props) => {
    return (
        <>






            <MainPage >


                <div style={{ fontSize: "22px", fontWeight: "bolder", marginBottom: "-13px" }}>{props.fund}</div>



                <WholeDiv style={{ background: `${props.bg}` }} >


                    <div className="Icon-size">
                        <svg class="svg-inline--fa fa-donate fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="donate" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 416c114.9 0 208-93.1 208-208S370.9 0 256 0 48 93.1 48 208s93.1 208 208 208zM233.8 97.4V80.6c0-9.2 7.4-16.6 16.6-16.6h11.1c9.2 0 16.6 7.4 16.6 16.6v17c15.5.8 30.5 6.1 43 15.4 5.6 4.1 6.2 12.3 1.2 17.1L306 145.6c-3.8 3.7-9.5 3.8-14 1-5.4-3.4-11.4-5.1-17.8-5.1h-38.9c-9 0-16.3 8.2-16.3 18.3 0 8.2 5 15.5 12.1 17.6l62.3 18.7c25.7 7.7 43.7 32.4 43.7 60.1 0 34-26.4 61.5-59.1 62.4v16.8c0 9.2-7.4 16.6-16.6 16.6h-11.1c-9.2 0-16.6-7.4-16.6-16.6v-17c-15.5-.8-30.5-6.1-43-15.4-5.6-4.1-6.2-12.3-1.2-17.1l16.3-15.5c3.8-3.7 9.5-3.8 14-1 5.4 3.4 11.4 5.1 17.8 5.1h38.9c9 0 16.3-8.2 16.3-18.3 0-8.2-5-15.5-12.1-17.6l-62.3-18.7c-25.7-7.7-43.7-32.4-43.7-60.1.1-34 26.4-61.5 59.1-62.4zM480 352h-32.5c-19.6 26-44.6 47.7-73 64h63.8c5.3 0 9.6 3.6 9.6 8v16c0 4.4-4.3 8-9.6 8H73.6c-5.3 0-9.6-3.6-9.6-8v-16c0-4.4 4.3-8 9.6-8h63.8c-28.4-16.3-53.3-38-73-64H32c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32z"></path></svg>
                    </div>
                    <div className="List_div">
                        <ul>
                            <li>
                                Set a goal
                            </li>
                            <li>
                                Tell a story
                            </li>
                            <li>
                                Share with the world
                            </li>
                        </ul>
                    </div>
                    <div className="para_1">
                        <p>{props.text1}</p>
                    </div>
                    <div>

                    </div>

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
                                <div className="Progress_bar_inner" >
                                    <p>{props.card_bar}</p>
                                </div>

                            </div>
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
                        <button>{props.btn}</button>
                    </div>
                </WholeDiv>

                <div>






                </div>
            </MainPage>



        </>
    )
}

export default Fundrasingsolution
