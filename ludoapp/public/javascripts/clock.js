function format_time_string(num) {
    return ( num < 10 ? "0" : "" ) + num;
  }

var start = new Date;    

setInterval(function() {
  var total_seconds = (new Date - start) / 1000;   
  total_seconds = total_seconds % 3600;

  var minutes = Math.floor(total_seconds / 60);
  total_seconds = total_seconds % 60;

  var seconds = Math.floor(total_seconds);

  
  minutes = format_time_string(minutes);
  seconds = format_time_string(seconds);

  var currentTimeString = minutes + ":" + seconds;

  $('div.timeelapsed h3').text("Time elapsed: " + currentTimeString);
}, 1000);