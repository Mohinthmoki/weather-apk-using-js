const api="https://api.openweathermap.org/data/2.5/weather"
const api_key="8714245d1f3a7e9ecebfcdd0efe89dfd"

let cityname=document.querySelector("#cities")
let btn=document.querySelector(".btn")
let temp=document.querySelector(".temp")
let des=document.querySelector(".description")
let city=document.querySelector(".city")

btn.addEventListener('click',()=>{
    let location=cityname.value
    if(location)
        {
            findweather(location)
            document.querySelector('.main').style.display='block'
        }

        else{
            alert("Please Enter a City")
            document.querySelector('.main').style.display='none'
        }
        
       
})
function findweather(location){
    const url=`${api}?q=${location}&appid=${api_key}&unites=metric`
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
    
        city.textContent=data.name;
        temp.textContent=`${Math.round(data.main.temp - 273.15)}°C`;
        des.textContent=data.weather[0].description
        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;
        document.querySelector("#iii").src=`${iconUrl}`
    })
    .catch(err=>{
        console.log("Error fethching weather data:",err)
    })
    
}
