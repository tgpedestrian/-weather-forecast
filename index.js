let weather =[];
const userCounty = document.querySelector('#userCounty');
const county = document.querySelector('#county');
const wx = document.querySelector('#wx');
const at = document.querySelector('#at');
const pop = document.querySelector('#pop');
const minT = document.querySelector('#minT');
const maxT = document.querySelector('#maxT');
const unit = document.querySelector('#unit');
const popNum = document.querySelector('#popNum');
const iconCity = document.querySelector('.iconCity');
const imgdiv = document.querySelector('.imgdiv');


// //先轉 JOSN
// Abc.addEventListener('click',()=>{
//     //建立一個body
//     //postman ===>>>     
//     let body ={
//         "abc_id" : "A001",
//         "abc_name" : "Tim"

//     }   
//     fetch('https://localhost:8080/???????????'),{
//     method: "post",
//     headers:{
//         "Content-Type" : "application/json",

//     },
//     body:JSON.stringify(body)
// })
// .then(function(respons){
//     return respons.json();
// })
// .then(function(data){
//     weather =data;
// })
// .then(function(err){
//     console.log(err);
// })
// })



fetch('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-DCC0C06B-91ED-46CC-8B80-5B4962AB8508')
.then(function(respons){
    return respons.json();
})
.then(function(data){
    weather =data;
    console.log(data);
})
.then(function(err){
    console.log(err);
})



userCounty.addEventListener('change',function(i){

    let selectedCounty = i.target.value;
    let selectedLocation = weather.records.location.find(function(event){
        return event.locationName === selectedCounty;
    })
    console.log(selectedLocation.weatherElement[1].time[0].parameter.parameterName);
    if(selectedLocation){
        // county.innerText = selectedLocation.locationName;
        // wx.innerText = selectedLocation.weatherElement[0].time[0].parameter.parameterName;
        // minT.innerText = selectedLocation.weatherElement[2].time[0].parameter.parameterName;
        // maxT.innerText = selectedLocation.weatherElement[4].time[0].parameter.parameterName;
        // unit.innerText = selectedLocation.weatherElement[4].time[0].parameter.parameterUnit;
        county.innerHTML = `${selectedLocation.locationName}`;
        popNum.innerHTML=`降雨機率 : ${selectedLocation.weatherElement[1].time[0].parameter.parameterName}%`;
        wx.innerHTML = `${selectedLocation.weatherElement[0].time[0].parameter.parameterName}`;
        at.innerHTML = `${selectedLocation.weatherElement[2].time[0].parameter.parameterName}~${selectedLocation.weatherElement[4].time[0].parameter.parameterName}°${selectedLocation.weatherElement[4].time[0].parameter.parameterUnit} `;
        if(selectedLocation.weatherElement[0].time[0].parameter.parameterName === "晴時多雲"){
            iconCity.innerHTML=`<i class="fa-solid fa-cloud-sun"></i>`;
        }else if(selectedLocation.weatherElement[0].time[0].parameter.parameterName === "多雲時陰"){
            iconCity.innerHTML=`<i class="fa-solid fa-cloud-bolt"></i>`;
        }else if(selectedLocation.weatherElement[0].time[0].parameter.parameterName === "陰短暫雨"){
            iconCity.innerHTML=`<i class="fa-solid fa-cloud-rain"></i>`;
        }else if(selectedLocation.weatherElement[0].time[0].parameter.parameterName === "多雲"){
            iconCity.innerHTML=`<i class="fa-solid fa-cloud"></i>`;
        }else if(selectedLocation.weatherElement[0].time[0].parameter.parameterName === "陰時多雲短暫雨"){
            iconCity.innerHTML=`<i class="fa-solid fa-cloud-rain"></i>`;
        }else if(selectedLocation.weatherElement[0].time[0].parameter.parameterName === "晴天"){
            iconCity.innerHTML=`<i class="fa-solid fa-sun"></i>`;
        }

        
    }else{
        county.innerText = '';
        wx.innerText = '';
        minT.innerText ='';
        maxT.innerText = '';
        unit.innerText = '';
        popNum.innerText='';

    }



    
    
})

imgdiv.addEventListener('click',function(i){
     window.location.href="./anotherWeather.html"
})