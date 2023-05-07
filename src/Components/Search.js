import React from "react";
export default function Search (props){
    // constructor(props){
    //     super(props);
    //     this.props=props;
    // }
    // render(){
        // console.log(props.city)
        return(
            <div className="row">
                <div className="col-lg-5">
                    <div className="form-group">
                        <label htmlFor="">Type City Name</label>
                        <input
                        type="text"
                        className="form-control"
                        name="city"
                        value={props.city}
                        onChange={props.change}
                        id="city"
                        aria-describedby="helpid"
                        placeholder="City name...">
                        </input>
                    </div>
                </div>
                <div className="col-lg-1 text-center">
                    <label htmlFor=""></label>
                    <h5>or</h5>
                </div>
                <div className="col-lg-5">
                    <div className="form-group">
                        <label htmlFor="">Get Co-ordinate</label>
                        <button className="btn fa fa-crosshairs" onClick={props.getLocation}><img src="src\Components\th.jpg" alt="get location"></img></button>
                        <div className="row">
                            <div className="bg-dark text-white rounded pt-1 pl-1 pr-1">
                                Lat:
                            </div>
                            <input
                            type="number"
                            step="any"
                            className="form-control col mr-1"
                            name="lat"
                            value={props.lat}
                            onChange={props.change}
                            id="lat"
                            aria-describedby="helpid"
                            placeholder=""></input>
                            <div className="bg-dark text-white rounded pt-1 pl-1 pr-1">
                                Lon:
                            </div>
                            <input
                            type="number"
                            step="any"
                            className="form-control col mr-1"
                            name="lon"
                            value={props.lon}
                            onChange={props.change}
                            id="lat"
                            aria-describedby="helpid"
                            placeholder=""></input>
                        </div>
                    </div>
                </div>
                <div className="col-lg-1">
                    <label htmlFor="">Search</label>
                    <button onClick={props.search} className="btn btn-primary fa fa-search"><img src="image.png" alt="search"></img></button>
                </div>
            </div>
        );
    }
// }
// export default Search;





// import React from "react";
// import './Search.css';
// function Search() {
//     var x=document.getElementById("demo");
//     function getlocation(){
//         if(navigator.geolocation){
//             navigator.geoolocation.getCurrentPosition(showPostion);
//         }
//         else{
//             x.innerHTML="Geolocation is not supported by browser";
//         }
//     }
//     // function showPostion(position){
//     //     x.innerHTML = "Latitude: " + position.coords.latitude + 
//     //     "<br>Longitude: " + position.coords.longitude;
//     //   }    }
//     return (<div className="form">
//         {/* <h1 className="abx">kajghkgfajh</h1> */}
//         <form >
//             <div className="mb-3 ">
//                 <label htmlFor="exampleInputEmail1" className="form-label">City</label>
//                 <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
//                 {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
//             </div>
//         </form>
//         <h5 >or</h5>
//         <div><h5>click on the button below to get your location</h5>
//         <button onClick={getlocation()}>Get location</button></div>
//         <p id="demo"></p>
//         <div className="input-group mb-3 ">
//             <div className="input-group-prepend">
//                 <span className="input-group-text" id="inputGroup-sizing-default">lat</span>
//             </div>
//             <input type="text" className="-control" style={{display:"Inline"}} aria-label="Default" aria-describedby="inputGroup-sizing-default" />
//         </div>
//         <div className="input-group mb-3 ">
//             <div className="input-group-prepend">
//                 <span className="input-group-text" id="inputGroup-sizing-default">log</span>
//             </div>
//             <input type="text" className="-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
//         </div><button type="button" class="btn btn-primary">Search</button>
//     </div>);
// }
// export default Search;