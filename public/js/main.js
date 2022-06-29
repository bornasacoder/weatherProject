const cityname = document.getElementById('cityname');
const submitbtn = document.getElementById('submitbtn');
const city_name = document.getElementById('city_name');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');
const datahide =document.querySelector('.middle_layer');

const getInfo = async(event) =>{
    event.preventDefault();
    let cityval = cityname.value;
    if(cityval === ''){
       city_name.innerText = `Please write the name before search`;
       datahide.classList.add('data_hide');
  }else{
    try{
    let url =   `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=e3283c051f314384d7e42399422e2605`
     const response =  await fetch(url);    
     const data = await response.json();    
     const arrData = [data];


     city_name.innerText = `${arrData[0].name},${arrData[0].sys.country} `;
     temp_real_val.innerText = Math.round(arrData[0].main.temp - 273.01);
    //  temp_status.innerText = arrData[0].weather[0].main;
   const tempMood = arrData[0].weather[0].main;
     console.log(tempMood);
    // condition to check sunny and cloudy
    if(tempMood === "Clear"){
        temp_status.innerHTML = "<i class='fa-solid fa-sun' style='color: #eccc68;'></i>";
    }else if(tempMood ==="Clouds"){
        temp_status.innerHTML =  "<i class='fa-solid fa-cloud' style='color: #f1f2f6'></i>";
    }else if(tempMood === "Rain"){
        temp_status.innerHTML = "<i class='fa-solid fa-cloud-rain' style='color: #a4b0be'></i>"
    }else{
    temp_status.innerHTML = "<i class='fa-solid fa-sun' style='color: #eccc68'></i>";
    } 
    datahide.classList.remove('data_hide');


    }catch(err){
     city_name.innerText = `Please enter the city name properly`;
     datahide.classList.add('data_hide');

    }
}
}
submitbtn.addEventListener('click', getInfo);