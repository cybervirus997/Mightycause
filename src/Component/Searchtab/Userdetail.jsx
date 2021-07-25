import React from "react";
import styles from "./Searchpage.module.css";
import CustomizedProgressBars from "./Progressbar";



export default class FetchRandomUser extends React.Component {
  state = {
    loading: true,
    person: null
    };
    
//https://api.betterplace.org/de/api_v4/fundraising_events.json  old api
    //https://api.unsplash.com/search/photos/?client_id=8xwcHlLBuGpqJ6rO4VtZpfDpaKRwahwbLxvqDV-0Zpo&query='war'
  async componentDidMount() {
    const url = "http://localhost:3002/mainData";
    const response = await fetch(url);
      const data = await response.json();
      console.log(data[1]);
      let sub = 0;
    // this.setState({ person: data.data[Math.round(Math.random()*20)], loading: false });
      
        this.setState({ person: data[Math.round(Math.random()*(data.length))], loading: false });
       
    }

    

    render() {

      if (this.state.loading) {
                
          
          return <div className={styles["loading"]}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
          </div>    
        // return <div className={styles["loading"]}>   
      ;
    }

    if (!this.state.person) {
        return <div className={styles["loading"]}>
            <div style={{textAlign: "center"}}>
                <span class="material-icons-outlined">hourglass_bottom</span> <br />
                <p>Waiting for response</p>
                <p>hold on a bit</p>
              </div>
              <div></div>
              <div></div>
              <div></div>
              
          </div>  ;
    }

      
    return (
        <>
            
            <div className={styles["card-main-body"]}>
                
                <div className={styles["img-hover-zoom"]}>
                    {/* < img src={this.state.person.urls.regular} alt="" className={styles["userdetail-image"]} /> */}
                    < img src={this.state.person.image} alt="" className={styles["userdetail-image"]} />
                    {/* < img src={this.state.person.contact.picture.links[1].href} alt="" className={styles["userdetail-image"]} /> */}
                </div>

                <div className={styles["card-Fund-tag"]}>
                    <p><span><svg _ngcontent-clientapp-c258="" class="svg-inline--fa fa-donate fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="donate" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 416c114.9 0 208-93.1 208-208S370.9 0 256 0 48 93.1 48 208s93.1 208 208 208zM233.8 97.4V80.6c0-9.2 7.4-16.6 16.6-16.6h11.1c9.2 0 16.6 7.4 16.6 16.6v17c15.5.8 30.5 6.1 43 15.4 5.6 4.1 6.2 12.3 1.2 17.1L306 145.6c-3.8 3.7-9.5 3.8-14 1-5.4-3.4-11.4-5.1-17.8-5.1h-38.9c-9 0-16.3 8.2-16.3 18.3 0 8.2 5 15.5 12.1 17.6l62.3 18.7c25.7 7.7 43.7 32.4 43.7 60.1 0 34-26.4 61.5-59.1 62.4v16.8c0 9.2-7.4 16.6-16.6 16.6h-11.1c-9.2 0-16.6-7.4-16.6-16.6v-17c-15.5-.8-30.5-6.1-43-15.4-5.6-4.1-6.2-12.3-1.2-17.1l16.3-15.5c3.8-3.7 9.5-3.8 14-1 5.4 3.4 11.4 5.1 17.8 5.1h38.9c9 0 16.3-8.2 16.3-18.3 0-8.2-5-15.5-12.1-17.6l-62.3-18.7c-25.7-7.7-43.7-32.4-43.7-60.1.1-34 26.4-61.5 59.1-62.4zM480 352h-32.5c-19.6 26-44.6 47.7-73 64h63.8c5.3 0 9.6 3.6 9.6 8v16c0 4.4-4.3 8-9.6 8H73.6c-5.3 0-9.6-3.6-9.6-8v-16c0-4.4 4.3-8 9.6-8h63.8c-28.4-16.3-53.3-38-73-64H32c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32z"></path></svg></span>Fundraiser</p>
                </div>

                <div className={styles["card-fundraiser-heading"]}>
                    <p>{this.state.person.name}</p>
                </div>

                <div className={styles["card-fundraiser-progress-bar"]}>
                    <CustomizedProgressBars calculation={this.state.person.percentage} />
                    {/* reminder
                    done */}
                </div>

                <div className={styles["card-fundraiser-raised-money"]}>
                    <p>${this.state.person.moneyRaised}RAISED</p>
                </div>
            </div>


        
            </>
    );
  }
}

// Math.round(Math.random() * 100)