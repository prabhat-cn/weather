import React, {useState} from 'react'
import DisplayWeather from './DisplayWeather';
import weatherCss from './weather.module.css'



const Weather = () => {

    
    const [weather, setWeather] = useState([])

    const [form, setForm] = useState({
        // name: "value"
        city: "",
        country: "",
    });
    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if(name == 'city') {
            setForm({...form, city:value})
        }
        if(name == 'country') {
            setForm({...form, country:value})
        }
        console.log('place->', form.city, form.country)
    };

    
    // Weather API KEY from"https://home.openweathermap.org/api_keys"
    const API_KEY = '4ea7c0f18316381db22a81b92f2fd507';
    const API_URL = process.env.REACT_APP_API

    //  fetch data from api async
    const weatherData = async (e) => {
        e.preventDefault();
        if(form.city == ""){
            alert('Add Values');
        } else{
            const data = await fetch(`${API_URL}/data/2.5/weather?q=${form.city},${form.country}&appid=${API_KEY}`).then((res) => res.json()).then((wData) => wData);

            setWeather({
                data : data,
            });
        }
    }



    return (
        <div className={weatherCss.weather}> 
            <span className={weatherCss.title}>Weather App</span>
            <br/>
            <form >
                <input 
                type="text" 
                name="city" 
                placeholder="City" 
                onChange={(e)=> handleChange(e)}/>

                &nbsp; &nbsp;&nbsp;&nbsp; 

                <input 
                type="text" 
                name="country" 
                placeholder="Country" 
                onChange={(e)=> handleChange(e)}/>
                <button 
                className={weatherCss.getweather}
                onClick={(e)=> weatherData(e)}>Submit</button>
            </form>
            {/* {console.log(weather)} */}
            {
                weather.data != undefined ? (
                    
                    <div>
                        <DisplayWeather data={weather.data} /> 
                    </div>
                ) : null
            }
            
        </div>
    )
}

export default Weather
