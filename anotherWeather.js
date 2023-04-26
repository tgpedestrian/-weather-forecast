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

const county1 = document.querySelector('#county1');
const wx1 = document.querySelector('#wx1');
const at1 = document.querySelector('#at1');
const popNum1 = document.querySelector('#popNum1');
const iconCity1 = document.querySelector('.iconCity1');

const county2 = document.querySelector('#county2');
const wx2 = document.querySelector('#wx2');
const at2 = document.querySelector('#at2');
const popNum2 = document.querySelector('#popNum2');
const iconCity2 = document.querySelector('.iconCity2');

const county3 = document.querySelector('#county3');
const wx3 = document.querySelector('#wx3');
const at3 = document.querySelector('#at3');
const popNum3 = document.querySelector('#popNum3');
const iconCity3 = document.querySelector('.iconCity3');

const county4 = document.querySelector('#county4');
const wx4 = document.querySelector('#wx4');
const at4 = document.querySelector('#at4');
const popNum4 = document.querySelector('#popNum4');
const iconCity4 = document.querySelector('.iconCity4');

const county5 = document.querySelector('#county5');
const wx5 = document.querySelector('#wx5');
const at5 = document.querySelector('#at5');
const popNum5 = document.querySelector('#popNum5');
const iconCity5 = document.querySelector('.iconCity5');

const county6 = document.querySelector('#county3');
const wx6 = document.querySelector('#wx6');
const at6 = document.querySelector('#at6');
const popNum6 = document.querySelector('#popNum6');
const iconCity6 = document.querySelector('.iconCity6');

const county7 = document.querySelector('#county7');
const wx7 = document.querySelector('#wx7');
const at7 = document.querySelector('#at7');
const popNum7 = document.querySelector('#popNum7');
const iconCity7 = document.querySelector('.iconCity7');


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
//     body:Json.stringify({body})
// }
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



// fetch('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-DCC0C06B-91ED-46CC-8B80-5B4962AB8508')
// .then(function(respons){
//     return respons.json();
// })
// .then(function(data){
//     weather =data;

//     // userCounty.value = "嘉義市";
//     // userCounty.dispatchEvent(new Event('change'));
//     console.log(data);
// })
// .then(function(err){
//     console.log(err);
// })
window.onload = function() {
    fetch('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-DCC0C06B-91ED-46CC-8B80-5B4962AB8508')
      .then(function(respons){
        return respons.json();
      })
      .then(function(data){
        weather = data;
        console.log(data);
      })
      .then(function(err){
        console.log(err);
      })
  }


document.addEventListener('click',function(i){




    // let selectedLocation = weather.records.location.find(function(event){
    //     return event.locationName === selectedCounty;
    // })
    // console.log(selectedLocation.weatherElement[1].time[0].parameter.parameterName);
    // if(selectedLocation){
        // county.innerText = selectedLocation.locationName;
        // wx.innerText = selectedLocation.weatherElement[0].time[0].parameter.parameterName;
        // minT.innerText = selectedLocation.weatherElement[2].time[0].parameter.parameterName;
        // maxT.innerText = selectedLocation.weatherElement[4].time[0].parameter.parameterName;
        // unit.innerText = selectedLocation.weatherElement[4].time[0].parameter.parameterUnit;
        // popNum.innerHTML=`降雨機率 : ${weather.records.location.selectedLocation.weatherElement[1].time[0].parameter.parameterName}%`;
        // wx.innerHTML = `${weather.records.location.selectedLocation.weatherElement[0].time[0].parameter.parameterName}`;
        // at.innerHTML = `${weather.records.location.selectedLocation.weatherElement[2].time[0].parameter.parameterName}~${selectedLocation.weatherElement[4].time[0].parameter.parameterName}°${selectedLocation.weatherElement[4].time[0].parameter.parameterUnit} `;
    
        county.innerHTML = `${weather.records.location[5].locationName}`;
        wx.innerHTML = `${weather.records.location[5].weatherElement[0].time[0].parameter.parameterName}`;
        at.innerHTML = `${weather.records.location[5].weatherElement[2].time[0].parameter.parameterName}~${weather.records.location[0].weatherElement[4].time[0].parameter.parameterName}°${weather.records.location[0].weatherElement[4].time[0].parameter.parameterUnit} `;
        popNum.innerHTML=`降雨機率 : ${weather.records.location[5].weatherElement[1].time[0].parameter.parameterName}%`;

        if(weather.records.location[5].weatherElement[0].time[0].parameter.parameterName === "晴時多雲"){
            iconCity.innerHTML=`<i class="fa-solid fa-cloud-sun"></i>`;
        }else if(weather.records.location[5].weatherElement[0].time[0].parameter.parameterName === "多雲時陰"){
            iconCity.innerHTML=`<i class="fa-solid fa-cloud-bolt"></i>`;
        }else if(weather.records.location[5].weatherElement[0].time[0].parameter.parameterName === "陰短暫雨"){
            iconCity.innerHTML=`<i class="fa-solid fa-cloud-rain"></i>`;
        }else if(weather.records.location[5].weatherElement[0].time[0].parameter.parameterName === "多雲"){
            iconCity.innerHTML=`<i class="fa-solid fa-cloud"></i>`;
        }else if(weather.records.location[5].weatherElement[0].time[0].parameter.parameterName === "陰時多雲短暫雨"){
            iconCity.innerHTML=`<i class="fa-solid fa-cloud-rain"></i>`;
        }else if(weather.records.location[5].weatherElement[0].time[0].parameter.parameterName === "晴天"){
            iconCity.innerHTML=`<i class="fa-solid fa-sun"></i>`;
        }else if(weather.records.location[5].weatherElement[0].time[0].parameter.parameterName === "陰天"){
            iconCity.innerHTML=`<i class="fa-solid fa-cloud"></i>`;
        }

        county1.innerHTML = `${weather.records.location[4].locationName}`;
        wx1.innerHTML = `${weather.records.location[4].weatherElement[0].time[0].parameter.parameterName}`;
        at1.innerHTML = `${weather.records.location[4].weatherElement[2].time[0].parameter.parameterName}~${weather.records.location[0].weatherElement[4].time[0].parameter.parameterName}°${weather.records.location[0].weatherElement[4].time[0].parameter.parameterUnit} `;
        popNum1.innerHTML=`降雨機率 : ${weather.records.location[4].weatherElement[1].time[0].parameter.parameterName}%`;
        
        if(weather.records.location[4].weatherElement[0].time[0].parameter.parameterName === "晴時多雲"){
            iconCity1.innerHTML=`<i class="fa-solid fa-cloud-sun"></i>`;
        }else if(weather.records.location[4].weatherElement[0].time[0].parameter.parameterName === "多雲時陰"){
            iconCity1.innerHTML=`<i class="fa-solid fa-cloud-bolt"></i>`;
        }else if(weather.records.location[4].weatherElement[0].time[0].parameter.parameterName === "陰短暫雨"){
            iconCity1.innerHTML=`<i class="fa-solid fa-cloud-rain"></i>`;
        }else if(weather.records.location[4].weatherElement[0].time[0].parameter.parameterName === "多雲"){
            iconCity1.innerHTML=`<i class="fa-solid fa-cloud"></i>`;
        }else if(weather.records.location[4].weatherElement[0].time[0].parameter.parameterName === "陰時多雲短暫雨"){
            iconCity1.innerHTML=`<i class="fa-solid fa-cloud-rain"></i>`;
        }else if(weather.records.location[4 ].weatherElement[0].time[0].parameter.parameterName === "晴天"){
            iconCity1.innerHTML=`<i class="fa-solid fa-sun"></i>`;
        }else if(weather.records.location[4 ].weatherElement[0].time[0].parameter.parameterName === "陰時多雲"){
            iconCity1.innerHTML=`<i class="fa-solid fa-cloud-bolt"></i>`;
        }else if(weather.records.location[4].weatherElement[0].time[0].parameter.parameterName === "陰天"){
            iconCity1.innerHTML=`<i class="fa-solid fa-cloud"></i>`;
        }

        county2.innerHTML = `${weather.records.location[11].locationName}`;
        wx2.innerHTML = `${weather.records.location[11].weatherElement[0].time[0].parameter.parameterName}`;
        at2.innerHTML = `${weather.records.location[11].weatherElement[2].time[0].parameter.parameterName}~${weather.records.location[0].weatherElement[4].time[0].parameter.parameterName}°${weather.records.location[0].weatherElement[4].time[0].parameter.parameterUnit} `;
        popNum2.innerHTML=`降雨機率 : ${weather.records.location[11].weatherElement[1].time[0].parameter.parameterName}%`;
        
        if(weather.records.location[11].weatherElement[0].time[0].parameter.parameterName === "晴時多雲"){
            iconCity2.innerHTML=`<i class="fa-solid fa-cloud-sun"></i>`;
        }else if(weather.records.location[11].weatherElement[0].time[0].parameter.parameterName === "多雲時陰"){
            iconCity2.innerHTML=`<i class="fa-solid fa-cloud-bolt"></i>`;
        }else if(weather.records.location[11].weatherElement[0].time[0].parameter.parameterName === "陰短暫雨"){
            iconCity2.innerHTML=`<i class="fa-solid fa-cloud-rain"></i>`;
        }else if(weather.records.location[11].weatherElement[0].time[0].parameter.parameterName === "多雲"){
            iconCity2.innerHTML=`<i class="fa-solid fa-cloud"></i>`;
        }else if(weather.records.location[11].weatherElement[0].time[0].parameter.parameterName === "陰時多雲短暫雨"){
            iconCity2.innerHTML=`<i class="fa-solid fa-cloud-rain"></i>`;
        }else if(weather.records.location[11].weatherElement[0].time[0].parameter.parameterName === "晴天"){
            iconCity2.innerHTML=`<i class="fa-solid fa-sun"></i>`;
        }else if(weather.records.location[11].weatherElement[0].time[0].parameter.parameterName === "陰時多雲"){
            iconCity2.innerHTML=`<i class="fa-solid fa-cloud-bolt"></i>`;
        }else if(weather.records.location[11].weatherElement[0].time[0].parameter.parameterName === "陰天"){
            iconCity2.innerHTML=`<i class="fa-solid fa-cloud"></i>`;
        }

        county3.innerHTML = `${weather.records.location[15].locationName}`;
        wx3.innerHTML = `${weather.records.location[15].weatherElement[0].time[0].parameter.parameterName}`;
        at3.innerHTML = `${weather.records.location[15].weatherElement[2].time[0].parameter.parameterName}~${weather.records.location[0].weatherElement[4].time[0].parameter.parameterName}°${weather.records.location[0].weatherElement[4].time[0].parameter.parameterUnit} `;
        popNum3.innerHTML=`降雨機率 : ${weather.records.location[15].weatherElement[1].time[0].parameter.parameterName}%`;
        
        if(weather.records.location[15].weatherElement[0].time[0].parameter.parameterName === "晴時多雲"){
            iconCity3.innerHTML=`<i class="fa-solid fa-cloud-sun"></i>`;
        }else if(weather.records.location[15].weatherElement[0].time[0].parameter.parameterName === "多雲時陰"){
            iconCity3.innerHTML=`<i class="fa-solid fa-cloud-bolt"></i>`;
        }else if(weather.records.location[15].weatherElement[0].time[0].parameter.parameterName === "陰短暫雨"){
            iconCity3.innerHTML=`<i class="fa-solid fa-cloud-rain"></i>`;
        }else if(weather.records.location[15].weatherElement[0].time[0].parameter.parameterName === "多雲"){
            iconCity3.innerHTML=`<i class="fa-solid fa-cloud"></i>`;
        }else if(weather.records.location[15].weatherElement[0].time[0].parameter.parameterName === "陰時多雲短暫雨"){
            iconCity3.innerHTML=`<i class="fa-solid fa-cloud-rain"></i>`;
        }else if(weather.records.location[15].weatherElement[0].time[0].parameter.parameterName === "晴天"){
            iconCity3.innerHTML=`<i class="fa-solid fa-sun"></i>`;
        }else if(weather.records.location[15].weatherElement[0].time[0].parameter.parameterName === "陰時多雲"){
            iconCity3.innerHTML=`<i class="fa-solid fa-cloud-bolt"></i>`;
        }else if(weather.records.location[15].weatherElement[0].time[0].parameter.parameterName === "陰天"){
            iconCity3.innerHTML=`<i class="fa-solid fa-cloud"></i>`;
        }

        county4.innerHTML = `${weather.records.location[7].locationName}`;
        wx4.innerHTML = `${weather.records.location[7].weatherElement[0].time[0].parameter.parameterName}`;
        at4.innerHTML = `${weather.records.location[7].weatherElement[2].time[0].parameter.parameterName}~${weather.records.location[0].weatherElement[4].time[0].parameter.parameterName}°${weather.records.location[0].weatherElement[4].time[0].parameter.parameterUnit} `;
        popNum4.innerHTML=`降雨機率 : ${weather.records.location[7].weatherElement[1].time[0].parameter.parameterName}%`;
        
        if(weather.records.location[7].weatherElement[0].time[0].parameter.parameterName === "晴時多雲"){
            iconCity4.innerHTML=`<i class="fa-solid fa-cloud-sun"></i>`;
        }else if(weather.records.location[7].weatherElement[0].time[0].parameter.parameterName === "多雲時陰"){
            iconCity4.innerHTML=`<i class="fa-solid fa-cloud-bolt"></i>`;
        }else if(weather.records.location[7].weatherElement[0].time[0].parameter.parameterName === "陰短暫雨"){
            iconCity4.innerHTML=`<i class="fa-solid fa-cloud-rain"></i>`;
        }else if(weather.records.location[7].weatherElement[0].time[0].parameter.parameterName === "多雲"){
            iconCity4.innerHTML=`<i class="fa-solid fa-cloud"></i>`;
        }else if(weather.records.location[7].weatherElement[0].time[0].parameter.parameterName === "陰時多雲短暫雨"){
            iconCity4.innerHTML=`<i class="fa-solid fa-cloud-rain"></i>`;
        }else if(weather.records.location[7].weatherElement[0].time[0].parameter.parameterName === "晴天"){
            iconCity4.innerHTML=`<i class="fa-solid fa-sun"></i>`;
        }else if(weather.records.location[7].weatherElement[0].time[0].parameter.parameterName === "陰時多雲"){
            iconCity4.innerHTML=`<i class="fa-solid fa-cloud-bolt"></i>`;
        }else if(weather.records.location[7].weatherElement[0].time[0].parameter.parameterName === "陰天"){
            iconCity4.innerHTML=`<i class="fa-solid fa-cloud"></i>`;
        }

        county5.innerHTML = `${weather.records.location[10].locationName}`;
        wx5.innerHTML = `${weather.records.location[10].weatherElement[0].time[0].parameter.parameterName}`;
        at5.innerHTML = `${weather.records.location[10].weatherElement[2].time[0].parameter.parameterName}~${weather.records.location[0].weatherElement[4].time[0].parameter.parameterName}°${weather.records.location[0].weatherElement[4].time[0].parameter.parameterUnit} `;
        popNum5.innerHTML=`降雨機率 : ${weather.records.location[10].weatherElement[1].time[0].parameter.parameterName}%`;
        
        if(weather.records.location[10].weatherElement[0].time[0].parameter.parameterName === "晴時多雲"){
            iconCity5.innerHTML=`<i class="fa-solid fa-cloud-sun"></i>`;
        }else if(weather.records.location[10].weatherElement[0].time[0].parameter.parameterName === "多雲時陰"){
            iconCity5.innerHTML=`<i class="fa-solid fa-cloud-bolt"></i>`;
        }else if(weather.records.location[10].weatherElement[0].time[0].parameter.parameterName === "陰短暫雨"){
            iconCity5.innerHTML=`<i class="fa-solid fa-cloud-rain"></i>`;
        }else if(weather.records.location[10].weatherElement[0].time[0].parameter.parameterName === "多雲"){
            iconCity5.innerHTML=`<i class="fa-solid fa-cloud"></i>`;
        }else if(weather.records.location[10].weatherElement[0].time[0].parameter.parameterName === "陰時多雲短暫雨"){
            iconCity5.innerHTML=`<i class="fa-solid fa-cloud-rain"></i>`;
        }else if(weather.records.location[10].weatherElement[0].time[0].parameter.parameterName === "晴天"){
            iconCity5.innerHTML=`<i class="fa-solid fa-sun"></i>`;
        }else if(weather.records.location[10].weatherElement[0].time[0].parameter.parameterName === "陰時多雲"){
            iconCity5.innerHTML=`<i class="fa-solid fa-cloud-bolt"></i>`;
        }else if(weather.records.location[10].weatherElement[0].time[0].parameter.parameterName === "陰天"){
            iconCity5.innerHTML=`<i class="fa-solid fa-cloud"></i>`;
        }

        county6.innerHTML = `${weather.records.location[12].locationName}`;
        wx6.innerHTML = `${weather.records.location[12].weatherElement[0].time[0].parameter.parameterName}`;
        at6.innerHTML = `${weather.records.location[12].weatherElement[2].time[0].parameter.parameterName}~${weather.records.location[0].weatherElement[4].time[0].parameter.parameterName}°${weather.records.location[0].weatherElement[4].time[0].parameter.parameterUnit} `;
        popNum6.innerHTML=`降雨機率 : ${weather.records.location[12].weatherElement[1].time[0].parameter.parameterName}%`;
        
        if(weather.records.location[12].weatherElement[0].time[0].parameter.parameterName === "晴時多雲"){
            iconCity6.innerHTML=`<i class="fa-solid fa-cloud-sun"></i>`;
        }else if(weather.records.location[12].weatherElement[0].time[0].parameter.parameterName === "多雲時陰"){
            iconCity6.innerHTML=`<i class="fa-solid fa-cloud-bolt"></i>`;
        }else if(weather.records.location[12].weatherElement[0].time[0].parameter.parameterName === "陰短暫雨"){
            iconCity6.innerHTML=`<i class="fa-solid fa-cloud-rain"></i>`;
        }else if(weather.records.location[12].weatherElement[0].time[0].parameter.parameterName === "多雲"){
            iconCity6.innerHTML=`<i class="fa-solid fa-cloud"></i>`;
        }else if(weather.records.location[12].weatherElement[0].time[0].parameter.parameterName === "陰時多雲短暫雨"){
            iconCity6.innerHTML=`<i class="fa-solid fa-cloud-rain"></i>`;
        }else if(weather.records.location[12].weatherElement[0].time[0].parameter.parameterName === "晴天"){
            iconCity6.innerHTML=`<i class="fa-solid fa-sun"></i>`;
        }else if(weather.records.location[12].weatherElement[0].time[0].parameter.parameterName === "陰時多雲"){
            iconCity6.innerHTML=`<i class="fa-solid fa-cloud-bolt"></i>`;
        }else if(weather.records.location[12].weatherElement[0].time[0].parameter.parameterName === "陰天"){
            iconCity6.innerHTML=`<i class="fa-solid fa-cloud"></i>`;
        }

        county7.innerHTML = `${weather.records.location[19].locationName}`;
        wx7.innerHTML = `${weather.records.location[19].weatherElement[0].time[0].parameter.parameterName}`;
        at7.innerHTML = `${weather.records.location[19].weatherElement[2].time[0].parameter.parameterName}~${weather.records.location[0].weatherElement[4].time[0].parameter.parameterName}°${weather.records.location[0].weatherElement[4].time[0].parameter.parameterUnit} `;
        popNum7.innerHTML=`降雨機率 : ${weather.records.location[19].weatherElement[1].time[0].parameter.parameterName}%`;
        
        if(weather.records.location[19].weatherElement[0].time[0].parameter.parameterName === "晴時多雲"){
            iconCity7.innerHTML=`<i class="fa-solid fa-cloud-sun"></i>`;
        }else if(weather.records.location[19].weatherElement[0].time[0].parameter.parameterName === "多雲時陰"){
            iconCity7.innerHTML=`<i class="fa-solid fa-cloud-bolt"></i>`;
        }else if(weather.records.location[19].weatherElement[0].time[0].parameter.parameterName === "陰短暫雨"){
            iconCity7.innerHTML=`<i class="fa-solid fa-cloud-rain"></i>`;
        }else if(weather.records.location[19].weatherElement[0].time[0].parameter.parameterName === "多雲"){
            iconCity7.innerHTML=`<i class="fa-solid fa-cloud"></i>`;
        }else if(weather.records.location[19].weatherElement[0].time[0].parameter.parameterName === "陰時多雲短暫雨"){
            iconCity7.innerHTML=`<i class="fa-solid fa-cloud-rain"></i>`;
        }else if(weather.records.location[19].weatherElement[0].time[0].parameter.parameterName === "晴天"){
            iconCity7.innerHTML=`<i class="fa-solid fa-sun"></i>`;
        }else if(weather.records.location[19].weatherElement[0].time[0].parameter.parameterName === "陰時多雲"){
            iconCity7.innerHTML=`<i class="fa-solid fa-cloud-bolt"></i>`;
        }else if(weather.records.location[19].weatherElement[0].time[0].parameter.parameterName === "陰天"){
            iconCity7.innerHTML=`<i class="fa-solid fa-cloud"></i>`;
        }
        
    



    
    
})

imgdiv.addEventListener('click',function(i){
     window.location.href="index.html"
})
