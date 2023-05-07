import React, { Component } from 'react';
import Search from "./Search";
import Result from "./Result";
import axios from "axios";
class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: "",
            lat: "",
            lon: "",
            temp: "",
            description: "",
            minTemp: "",
            maxTemp: "",
            sunRise: "",
            sunSet: "",
            // weatherData: null
        }
    }
    searchHandler = () => {
        // if (this.state.lat == "" && this.state.lon == "") {
            // console.log(this.state.city)
            axios.get('http://api.openweathermap.org/geo/1.0/direct?q=' + this.state.city + '&appid=34dfeda4a2cf9c967d12d45f33c37035')
                .then((result) => {
                    // console.log(result.data[0].lat)
                    this.setState({
                        lat: result.data[0].lat,
                        lon: result.data[0].lon,

                    },()=>{

                        axios.get('https://api.openweathermap.org/data/2.5/weather?lat=' + this.state.lat + '&lon=' + this.state.lon + '&appid=34dfeda4a2cf9c967d12d45f33c37035')
                            .then((result) => {
                                this.setState({
                                    city: result.data.name,
                                    temp: result.data.main.temp,
                                    description: result.data.weather.description,
                                    minTemp: result.data.main.temp_min,
                                    maxTemp: result.data.main.temp_max,
                                    sunRise: result.data.sys.sunrise,
                                    sunSet: result.data.sys.sunset,
                                    // weatherData:result.data
                                })
                                // console.log(result)
                            })
                            .catch((error) => { console.log(error) })
                    })
                    // console.log(this.state.lat)
                })
                .catch((error) => {
                    console.log(error);
                });
            // setTimeout(() => {
                // if(this.componentDidUpdate){
                // }
            // }, 1000);

        // }
        // else {
        //     this.setState({
        //         city: "",
        //         // lat: "",
        //         // lon: "",
        //         temp: "",
        //         description: "",
        //         minTemp: "",
        //         maxTemp: "",
        //         sunRise: "",
        //         sunSet: "",
        //         // weatherData: null,
        //     });
        //     // setTimeout(() => {

        //     axios.get('https://api.openweathermap.org/data/2.5/weather?lat=' + this.state.lat + '&lon=' + this.state.lon + '&appid=ed4d60572f124b2cd6cd0fbdf721c05f')
        //         .then((result) => {
        //             this.setState({
        //                 city: result.data.name,
        //                 temp: result.data.main.temp,
        //                 description: result.data.weather.description,
        //                 minTemp: result.data.main.temp_min,
        //                 maxTemp: result.data.main.temp_max,
        //                 sunRise: result.data.sys.sunrise,
        //                 sunSet: result.data.sys.sunset,
        //                 // weatherData:result.data
        //             })
        //             // console.log(result)
        //         })
        //         .catch((error) => { console.log(error) })
        //     // },);
        // }

    }
    changeHandler = (event) => {
        const name = event.target.name;
        if (name === "city") {
            this.setState({
                city: event.target.value
            });
        } else if (name === "lat") {
            this.setState({
                lat: event.target.value
            });
        }
        else if (name === "lon") {
            this.setState({
                lon: event.target.value
            });
        }
    }
    locationHandler = () => {
        this.setState({
            city: "",
            // lat: "",
            // lon: "",
            temp: "",
            description: "",
            minTemp: "",
            maxTemp: "",
            sunRise: "",
            sunSet: "",
            // weatherData: null,
        });
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (result) => {
                    // setTimeout(() => {
                    this.setState({
                        lat: result.coords.latitude,
                        lon: result.coords.longitude,
                    });
                    setTimeout(() => {
                        //     // console.log(this.state.lat)
                        //     // console.log(this.state.lon)
                        //     // console.log(this.state.lat)
                        axios.get('https://api.openweathermap.org/data/2.5/weather?lat=' + this.state.lat + '&lon=' + this.state.lon + '&appid=34dfeda4a2cf9c967d12d45f33c37035')
                            .then((result) => {
                                this.setState({
                                    // lat:result.data.lat,
                                    // lon:result.data.lon,
                                    city: result.data.name,
                                    temp: result.data.main.temp,
                                    description: result.data.weather.description,
                                    minTemp: result.data.main.temp_min,
                                    maxTemp: result.data.main.temp_max,
                                    sunRise: result.data.sys.sunrise,
                                    sunSet: result.data.sys.sunset,
                                    // weatherData:result.data
                                })
                                // console.log(result)
                            })
                            .catch((error) => { console.log(error) })

                    },);
                    // },500);
                },
                (error) => {
                    console.log(error)
                })
        }
    }
    render() {
        return (
            <div className='abc'>
                <Search
                    change={this.changeHandler}
                    getLocation={this.locationHandler}
                    city={this.state.city}
                    lat={this.state.lat}
                    lon={this.state.lon}
                    search={this.searchHandler}
                // weatherdata={this.state.weatherData}
                ></Search>
                <Result
                    city={this.state.city}
                    temp={this.state.temp}
                    description={this.state.description}
                    minTemp={this.state.minTemp}
                    maxTemp={this.state.maxTemp}
                    sunRise={this.state.sunRise}
                    sunSet={this.state.sunSet}
                // weatherData={this.state.weatherData}
                ></Result>
            </div >
        );
    }
}
export default Weather;