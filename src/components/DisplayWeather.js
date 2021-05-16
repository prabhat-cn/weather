import React from 'react'
import DispWeatherCss from './displayweather.module.css'


const DisplayWeather = (props) => {
    console.log('props', props);
    const {data} = props;

    const iconUrl = `http://openweathermap.org/img/wn/` + `${data.cod != 404 ? data.weather[0].icon : null}` + '.png';

    return (
        <div className={DispWeatherCss.displayweather}>
            {
                data.cod != 404 ? (
                    <>
                    
            <div className={DispWeatherCss.maincard}>
                <span className={DispWeatherCss.cardtitle}>
                    {data.name}, {data.sys.country}
                </span>
                <span className={DispWeatherCss.cardsubtitle}>
                    As of {new Date().toLocaleTimeString()}
                </span>
                <h1>{Math.floor(data.main.temp - 273.15)}
                <sup>o</sup>C</h1>
                <span className={DispWeatherCss.weathermain}>
                    {data.weather[0].main}
                </span>
                <img src={iconUrl} alt={data.name} className={DispWeatherCss.weathericon}/>
                <span className={DispWeatherCss.weatherdescription}>
                    {data.weather[0].description}
                </span>
            </div>

            <div className={DispWeatherCss.weatherdetails}>
                <section className={DispWeatherCss.section1}>
                    <table>
                        <tr>
                            <td>
                                <h4>High/Low</h4>
                            </td>
                            <td>
                                <span>
                                {Math.floor(data.main.temp_max - 273.15)}/ {Math.floor(data.main.temp_min - 273.15)}
                                </span>
                                <sup>o</sup>C
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h4>Humidity</h4>
                            </td>
                            <td>
                                <span>
                                {data.main.humidity}
                                </span>%
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h4>Pressure</h4>
                            </td>
                            <td>
                                <span>
                                {data.main.pressure}
                                </span> hPa
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h4>Visibility</h4>
                            </td>
                            <td>
                                <span>
                                {data.visibility / 1000}
                                </span> Km
                            </td>
                        </tr>
                    </table>

                </section>

                <section className={DispWeatherCss.section2}>
                    <table>
                        <tr>
                            <td>
                                <h4>Wind</h4>
                            </td>
                            <td>
                                <span>
                                {Math.floor(data.wind.speed * 18/5)}
                                </span> Km/hr
                            </td>
                            <td>
                                {data.wind.deg}
                                <sup>o</sup>C
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h4>Wind Direction</h4>
                            </td>
                            <td>
                                <span>
                                {data.wind.deg}
                                <sup>o</sup> deg
                                </span>
                            </td>
                            <td>
                                {data.wind.deg}
                                <sup>o</sup>C
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h4>Sunrise</h4>
                            </td>
                            <td>
                                {/*  make new time format */}
                                <span>
                                {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h4>Sunset</h4>
                            </td>
                            <td>
                            <span>
                                {new Date(data.sys.sunset * 1000).toLocaleTimeString()}
                                </span>
                            </td>
                        </tr>
                    </table>

                </section>
            
            
            </div>
        
                    </>
                ) : (
                    <div className={DispWeatherCss.maincard}>
                    <h2>{data.message}</h2>
                    </div>
                )
            }
            </div>
    )
}

export default DisplayWeather
