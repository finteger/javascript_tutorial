/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Todd Nash 
   Date: 2025-06-02

*/



//Display the time left until New Years Eve Bash
document.getElementById("days").textContent = `dd`;
document.getElementById("hrs").textContent = `hh`;
document.getElementById("mins").textContent = `mm`;
document.getElementById("secs").textContent = `ss`;

//Store current date & time
var currentDay = new Date();
var dateStr = currentDay.toLocaleDateString();
var timeStr = currentDay.toLocaleTimeString();

//Displays current date & time
document.getElementById("dateNow").innerHTML = 
dateStr + "<br />" + timeStr;

//Calculate the days until New Years Bash
var newYear = new Date('January 1st, 2025');
var nextYear = currentDay.getFullYear() + 1;
newYear.setFullYear(nextYear);
var daysLeft = (newYear - currentDay)/(1000*60*60*24);


//Calculate the hours left in the current day
var hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;


//Display the time left until New Years Eve
document.getElementById("days").textContent = Math.floor(daysLeft);
document.getElementById("hrs").textContent = Math.floor(hrsLeft);