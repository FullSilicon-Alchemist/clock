let min_needle = document.getElementById("min_needle");
let hr_needle = document.getElementById("hr_needle");
let sec_needle = document.getElementById("sec_needle");

let fun_analog = () => {
    let date = new Date();
    console.log(date);
    let seconds = date.getSeconds();
    sec_needle.style.transform =   `rotate(${(seconds * 6) + 0.5}deg)`;
    let minutes = date.getMinutes();
    min_needle.style.transform = `rotate(${(minutes * 6) + 1}deg)`;
    let hours = date.getHours();
    hr_needle.style.transform = `rotate(${(hours * 30) + 3}deg)`;
}

setInterval("fun_analog()",1000);