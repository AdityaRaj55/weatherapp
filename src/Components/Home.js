import React from "react";
import './Home.css';
function Home(){
    return(
    <div className="d-flex justify-content-center bg-white content-container" style={{height: "500px"}}>
        <div className="align-self-center" style={{color: "black"}}>
            <h1 className="brand-font d-inline pr-3"> Weather</h1>
            <i className="fa fa-cloud fa-3x"></i>
            <p>Free Weather App</p>
        </div>

    </div>
        // <div className="home">
        //     <h1>Free Weather App</h1>
        // </div>
    );
}
export default Home;