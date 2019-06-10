var timeLeft = 0;
    var begin

function startTimer()  {
   if(document.getElementById("txtHours").value == ""){
      document.getElementById("txtHours").value = "0";
   }

   if(document.getElementById("txtMinutes").value == ""){
      document.getElementById("txtMinutes").value = "0";
   }

   if(document.getElementById("txtSeconds").value == ""){
      document.getElementById("txtSeconds").value = "0";
   }

   var hours   = parseInt(document.getElementById("txtHours").value);
   var minutes = parseInt(document.getElementById("txtMinutes").value);
   var seconds = parseInt(document.getElementById("txtSeconds").value);

   timeLeft = (hours * 3600) + (minutes * 60) + seconds;

  begin=setInterval("countDown()",1000);
}

function countDown()  {
var hoursLeft   = 0;
   var minutesLeft = 0;
   var secondsLeft = 0;
   var remainder   = 0;

 timeLeft = timeLeft-1;

    if(timeLeft >= 0){
  hoursLeft = Math.floor(timeLeft/3600);
  remainder = timeLeft%3600;

  minutesLeft = Math.floor(remainder/60);
  remainder   = remainder%60;

  secondsLeft = remainder;
             document.getElementById('cellHours').innerHTML = hoursLeft;
 document.getElementById('cellMinutes').innerHTML = minutesLeft;
 document.getElementById('cellSeconds').innerHTML = secondsLeft;    
    } else {
     clearInterval(begin);
    } 

    function resetTimer() {
        var hours = 0;
        var minutes = 0;
        var seconds = 0;
    };
}