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

