document.write("Hello, My name is Yerbol. <br \/> My group is CS-2121. <br \/>");
const d = new Date();
document.write("Year: " + d.getFullYear() + "<br \/>");

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[d.getDay()];
document.write("Today is: " + day + "<br \/>");

document.write("Date: " + d.getDate() + "<br \/>");

document.write("Month: " + (d.getMonth() + 1) + "<br \/>");

document.write("Current time is: " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + "<br \/>");

let a = 365 * 3;
let y = 2024 - d.getFullYear();
let m = 11 - d.getMonth();
let q = 31 - d.getDate();
document.write(q + m * 31 + y * 365 + " days left until the freedom! <br \/>");


function mult(){
  fr = document.getElementById('x').value;
  sc = document.getElementById('y').value;
  var p;
  p = document.getElementById('answer');
  p.innerHTML = fr * sc;
}

function div(){
  fr = document.getElementById('x').value;
  sc = document.getElementById('y').value;
  var p;
  p = document.getElementById('answer');
  p.innerHTML = fr / sc;
}
