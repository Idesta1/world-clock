
function updateTime() {

let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTime = moment().tz("America/Los_Angeles");
losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss:[<small>]A[</small>]");




let parisElement = document.querySelector("#paris");
let parisTimeElement = parisElement.querySelector(".time");
let parisDateElement = parisElement.querySelector(".date");
let parisTime = moment().tz("Europe/Paris");

parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
parisTimeElement.innerHTML = parisTime.format("h:mm:ss: [<small>]A[</small>]");

}

updateTime();
setInterval(updateTime, 1000);