import React from "react";
function Result(props) {
    // console.log(props.weatherData)
    // const {weatherData: data}=props;
    // setTimeout(()=>{
    // console.log(props.city)
    // console.log(props.description)
    function ktoc(data) {
        if (data)
            return (data - 273.15).toFixed(2);
        else
            return ''
    }
    function getdata(data) {
        if (data) {
            const date = new Date(data * 1000);
            return date.toTimeString();
        }
        else {
            return ''
        }
    }
    // },500)
    return (
        <div>
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">
                                <img src="sgsfgsfgfg" alt =""></img>
                                {props.city} ( {ktoc(props.temp)}° C)<span className="p1-2">{props.description}</span>

                            </h4>
                            <div className="row">
                                <div className="col">
                                    <div className="row">
                                        <table className="table">
                                            <tbody>
                                                <tr>
                                                    <th>Feels like</th>
                                                    <td>{ktoc(props.temp)}</td>
                                                </tr>
                                                <tr>
                                                    <th>Min temp.</th>
                                                    <td>{props.minTemp}</td>
                                                </tr>
                                                <tr>
                                                    <th>Max temp.</th>
                                                    <td>{props.maxTemp}</td>
                                                </tr>
                                                <tr>
                                                    <th>Sun Rise</th>
                                                    <td>{getdata(props.sunRise)}</td>
                                                </tr>
                                                <tr>
                                                    <th>Sun Set</th>
                                                    <td>{getdata(props.sunSet)}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Result;