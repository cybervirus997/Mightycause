import React from 'react'
import Fundrasingsolution from './Fundrasingsolution'

import styled from 'styled-components'
import { Navbarch } from './Navbarch'

const Wrapper = styled.div`
/* display:flex;
width:70%;
margin:auto;
margin-top:60px; */
text-align: center;

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
text-align: center;
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
            <Navbarch />

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
                    svg={<svg class="svg-inline--fa fa-donate fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="donate" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 416c114.9 0 208-93.1 208-208S370.9 0 256 0 48 93.1 48 208s93.1 208 208 208zM233.8 97.4V80.6c0-9.2 7.4-16.6 16.6-16.6h11.1c9.2 0 16.6 7.4 16.6 16.6v17c15.5.8 30.5 6.1 43 15.4 5.6 4.1 6.2 12.3 1.2 17.1L306 145.6c-3.8 3.7-9.5 3.8-14 1-5.4-3.4-11.4-5.1-17.8-5.1h-38.9c-9 0-16.3 8.2-16.3 18.3 0 8.2 5 15.5 12.1 17.6l62.3 18.7c25.7 7.7 43.7 32.4 43.7 60.1 0 34-26.4 61.5-59.1 62.4v16.8c0 9.2-7.4 16.6-16.6 16.6h-11.1c-9.2 0-16.6-7.4-16.6-16.6v-17c-15.5-.8-30.5-6.1-43-15.4-5.6-4.1-6.2-12.3-1.2-17.1l16.3-15.5c3.8-3.7 9.5-3.8 14-1 5.4 3.4 11.4 5.1 17.8 5.1h38.9c9 0 16.3-8.2 16.3-18.3 0-8.2-5-15.5-12.1-17.6l-62.3-18.7c-25.7-7.7-43.7-32.4-43.7-60.1.1-34 26.4-61.5 59.1-62.4zM480 352h-32.5c-19.6 26-44.6 47.7-73 64h63.8c5.3 0 9.6 3.6 9.6 8v16c0 4.4-4.3 8-9.6 8H73.6c-5.3 0-9.6-3.6-9.6-8v-16c0-4.4 4.3-8 9.6-8h63.8c-28.4-16.3-53.3-38-73-64H32c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32z"></path></svg>}
                    svg1={<svg style={{ background: "linear-gradient(to top right, #cc00ff 0%, #ff6699 100%);", fill: "#D0A5F4" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 406 45"><defs><style>
                    </style><linearGradient id="linear-gradient" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#688eff"></stop><stop offset="1" stop-color="#ffafef"></stop></linearGradient></defs><path class="cls-1" d="M2915-11269l45-45,45,45,45-45,44,45,45-45,45,45,45-45,45,45,45-45h2" transform="translate(-2915 11314)"></path></svg>}




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

                    svg={<svg class="svg-inline--fa fa-users-class fa-w-20" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="users-class" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M256 288c0 35.35 28.66 64 64 64 35.35 0 64-28.65 64-64s-28.65-64-64-64c-35.34 0-64 28.65-64 64zm224 0c0 35.35 28.66 64 64 64 35.35 0 64-28.65 64-64s-28.65-64-64-64c-35.34 0-64 28.65-64 64zM96 352c35.35 0 64-28.65 64-64s-28.65-64-64-64c-35.34 0-64 28.65-64 64s28.66 64 64 64zm480 32h-64c-35.34 0-64 28.65-64 64v32c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32v-32c0-35.35-28.66-64-64-64zm-224 0h-64c-35.34 0-64 28.65-64 64v32c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32v-32c0-35.35-28.66-64-64-64zm-224 0H64c-35.34 0-64 28.65-64 64v32c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32v-32c0-35.35-28.66-64-64-64zM96 64h448v128c24.68 0 46.98 9.62 64 24.97V49.59C608 22.25 586.47 0 560 0H80C53.53 0 32 22.25 32 49.59v167.38C49.02 201.62 71.33 192 96 192V64z"></path></svg>}

                    svg1={<svg style={{ background: "linear-gradient(to top left, #33ccff 0%, #66ffff 100%)", fill:"#75FBD1" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 406 45"><defs><style>
                    </style><linearGradient id="linear-gradient" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#688eff"></stop><stop offset="1" stop-color="#ffafef"></stop></linearGradient></defs><path class="cls-1" d="M2915-11269l45-45,45,45,45-45,44,45,45-45,45,45,45-45,45,45,45-45h2" transform="translate(-2915 11314)"></path></svg>}
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
                    svg={<svg class="svg-inline--fa fa-flag-checkered fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="flag-checkered" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M243.2 189.9V258c26.1 5.9 49.3 15.6 73.6 22.3v-68.2c-26-5.8-49.4-15.5-73.6-22.2zm223.3-123c-34.3 15.9-76.5 31.9-117 31.9C296 98.8 251.7 64 184.3 64c-25 0-47.3 4.4-68 12 2.8-7.3 4.1-15.2 3.6-23.6C118.1 24 94.8 1.2 66.3 0 34.3-1.3 8 24.3 8 56c0 19 9.5 35.8 24 45.9V488c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24v-94.4c28.3-12.1 63.6-22.1 114.4-22.1 53.6 0 97.8 34.8 165.2 34.8 48.2 0 86.7-16.3 122.5-40.9 8.7-6 13.8-15.8 13.8-26.4V95.9c.1-23.3-24.2-38.8-45.4-29zM169.6 325.5c-25.8 2.7-50 8.2-73.6 16.6v-70.5c26.2-9.3 47.5-15 73.6-17.4zM464 191c-23.6 9.8-46.3 19.5-73.6 23.9V286c24.8-3.4 51.4-11.8 73.6-26v70.5c-25.1 16.1-48.5 24.7-73.6 27.1V286c-27 3.7-47.9 1.5-73.6-5.6v67.4c-23.9-7.4-47.3-16.7-73.6-21.3V258c-19.7-4.4-40.8-6.8-73.6-3.8v-70c-22.4 3.1-44.6 10.2-73.6 20.9v-70.5c33.2-12.2 50.1-19.8 73.6-22v71.6c27-3.7 48.4-1.3 73.6 5.7v-67.4c23.7 7.4 47.2 16.7 73.6 21.3v68.4c23.7 5.3 47.6 6.9 73.6 2.7V143c27-4.8 52.3-13.6 73.6-22.5z"></path></svg>}
                    svg1={<svg style={{ background: "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(207,129,77,1) 0%, rgba(241,94,31,1) 45%, rgba(252,176,69,1) 100%)", fill:"#FFCF36" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 406 45"><defs><style>
                    </style><linearGradient id="linear-gradient" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#688eff"></stop><stop offset="1" stop-color="#ffafef"></stop></linearGradient></defs><path class="cls-1" d="M2915-11269l45-45,45,45,45-45,44,45,45-45,45,45,45-45,45,45,45-45h2" transform="translate(-2915 11314)"></path></svg>}
                />
            </Wrapper>

        </div>
    )
}

export default Main
