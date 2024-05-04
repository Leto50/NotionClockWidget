function updateTime() {
    moment.locale('ja');
    var dateInfo = new Date();
   
  
   /* time */
    var hr,
      _min = (dateInfo.getMinutes() < 10) ? "0" + dateInfo.getMinutes() : dateInfo.getMinutes(),
      sec = (dateInfo.getSeconds() < 10) ? "0" + dateInfo.getSeconds() : dateInfo.getSeconds(),
      ampm = (dateInfo.getHours() >= 12) ? "PM" : "AM";
    
  
  // replace 0 with 12 at midnight, subtract 12 from hour if 13–23
    if (dateInfo.getHours() == 0) {
      hr = 12;
    } else if (dateInfo.getHours() > 12) {
      hr = dateInfo.getHours() - 12;
    } else {
      hr = dateInfo.getHours();
    }
  
    var currentTime = hr + ":" + _min + ":" + sec;
    
  
  // print time
    document.getElementsByClassName("hms")[0].innerHTML = moment().format('hh : mm : ss');
    // document.getElementById("h").innerHTML = moment().format('hh : ');
    // document.getElementById("m").innerHTML = moment().format('mm : ');
    // document.getElementById("s").innerHTML = moment().format('ss');
    document.getElementsByClassName("ampm")[0].innerHTML = moment().format('A');
    document.getElementsByClassName("date")[0].innerHTML = moment().format('YYYY年MM月DD日');
  
    
  // Add date & Month (javascript)  
  };
  
  // print time and date once, then update them every second
  updateTime();
  setInterval(function() {
    updateTime()
  }, 1000);
