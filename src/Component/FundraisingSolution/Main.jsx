import React from 'react'
import Fundrasingsolution from './Fundrasingsolution'

import styled from 'styled-components'
import { Navbar } from './Navbar'

const Wrapper = styled.div`
/* display:flex;
width:70%;
margin:auto;
margin-top:60px; */

display: grid;
width: 70%;
grid-template-columns: 33% 33% 33%;
margin:auto;
column-gap: 1%;
margin-top: 70px;


@media only screen and (max-width: 720px) {
    grid-template-columns: 100%;
    width: 100%;
}

`
const Heading = styled.div`
margin-top: 150px;
h1{
    font-size: 65px;
    color:#6188ff;
}
p{
    font-size: 20px;
    color:grey;
}
h1,p{
    margin: 0;
}
`

const Main = () => {
    return (
        <div>
            <Navbar />

            <Heading >
                <h1>Fundraising Solutions</h1>
                <p>Best in Class Tools for Raising Money Online.</p>
            </Heading>


            <Wrapper>
                <Fundrasingsolution
                    fund="Fundraisers"
                    text1="Crowdfunding in its purest form Fundraisers give you a powerful, customizable webpage for collecting donations online."
                    text2="Raise money for nonprofit organizationsor personal causes (yourself or someone else).Nonprofit funds flow directly to the organizatioin. personal funds can be collected in any UWS bank account"

                    card_image="./image/image1.png"
                    card_fund="FUNDRAISER"
                    card_head="Your Amazing Course"
                    card_bar="$ 4,357"
                    list1="Set and tracking your fundraising goal"
                    list2="Customnize your page to fit your style"
                    list3="Tell your story with rich text,image,video, and more."
                    btn="START A FUNDRAISER"
                    bg="radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)"

                //     background: rgb(131,58,180);
                // background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(207,129,77,1) 0%, rgba(241,94,31,1) 45%, rgba(252,176,69,1) 100%);



                />
                <Fundrasingsolution

                    fund="Teams"
                    text1="The simplest way to funraise together.bring multiple fundraisers together in one ploace. Help[ each other help an amazing cause]."
                    text2="Track the fundraising progress of all members at the same time with members at the same time with powerful leaderboard features.Foster friendly competition between Team members, or  compete against other Teams by joining your Team to an Event"
                    card_image="./image/image2.png"
                    card_fund="Team"
                    card_head="Hateno Community Team"

                    card_bar="27 MEMBERS"
                    list1="Real-time leaderboard ranking of member progress"
                    list2="Customizable team page with goal"
                    list3="Team general fund"
                    btn="CREATE A TEAM"
                    bg="linear-gradient(to top left, #33ccff 0%, #66ffff 100%)"
                />
                <Fundrasingsolution

                    fund="Events"
                    text1="The best way to allow Teams and Fundraisers to compete with each other on largest scale ,all in the name of doing good"
                    text2="Power better fundraising nand messaging tools, and track participants throungh real-time leaderboards.Grow your nedxt run ,walk ,gala or peer-to-peer fundraising compaign with modern, use-friendly tools."
                    card_image="./image/image2.png"
                    card_fund="EVENT"
                    card_head="Childrens Hospitals Benefit"

                    card_bar="$ 8590"
                    list1="Customizable branded events  website"
                    list2="Manage and message participents"
                    list3="Recognize Sponsers and partners."
                    btn="CREATE AN EVENT"
                    bg="linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(207,129,77,1) 0%, rgba(241,94,31,1) 45%, rgba(252,176,69,1) 100%)"


                />
            </Wrapper>

        </div>
    )
}

export default Main
