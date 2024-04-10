const currentDate = new Date;
const day = Number(currentDate.toLocaleDateString('en-GB', {        
    day: '2-digit'
      }));
const month = Number(currentDate.toLocaleDateString("en-GB",{ 
    month: "numeric"
}));
console.log(day);
console.log(month);

function otherPlanetDate(period){
    let otherPlanetYear=2024;
    let inEarthDays = ((30*month + day)/period)*365;
    if(inEarthDays > 365){
        inEarthDays =inEarthDays -365;
        otherPlanetYear = 2024 + Math.ceil(inEarthDays / 365);
    }
    console.log(inEarthDays);
    let otherPlanetMonths = Math.ceil(inEarthDays / 30);
    let otherPlanetDays = Math.floor(inEarthDays - Math.floor(inEarthDays /30)*30);
    console.log(inEarthDays);
    return "The date on other planet is " + otherPlanetDays+"/"+otherPlanetMonths+"/"+otherPlanetYear;
};
console.log(otherPlanetDate(89));

