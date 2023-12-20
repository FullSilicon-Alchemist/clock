let hr_string = document.getElementById("hr");
let min_string = document.getElementById("min");
let sec_string = document.getElementById("sec");
let day_string = document.getElementById("day");
function fun(){
    let date = new Date();
    //for seconds
    let seconds = date.getSeconds();
    if(seconds<10){
        sec_string.innerHTML = "0" + seconds;
    }
    else{
        sec_string.innerHTML = seconds;
    }
    //for minutes
    let minutes = date.getMinutes();
    if(minutes<10){
        min_string.innerHTML = "0" + minutes + " : ";
    }
    else{
        min_string.innerHTML = minutes + " : ";
    }
    //for hours
    let hours = date.getHours();
    if(hours<10){
        hr_string.innerHTML = "0" + hours + " : ";
    }
    else{
        hr_string.innerHTML = hours + " : ";
    }
    if(hours>12){
        hours = hours-12;
        hr_string.innerHTML = hours + " : ";
    }
    //for day
    let day = date.getDay();
    if(day==1){
        day_string.innerHTML = "Mon";
    }
    else if(day==2){
        day_string.innerHTML = "Tue";
    }
    else if(day==3){
        day_string.innerHTML = "Wed";
    }
    else if(day==4){
        day_string.innerHTML = "Thu";
    }
    else if(day==5){
        day_string.innerHTML = "Fri";
    }
    else if(day==6){
        day_string.innerHTML = "Sat";
    }
    else{
        day_string.innerHTML = "Sun";
    }
}
setInterval("fun()",1000);