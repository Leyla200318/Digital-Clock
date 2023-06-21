function displaytime(){
    var datetime= new Date();
    var hrs=datetime.getHours();
    var sec= datetime.getSeconds();
    var min= datetime.getMinutes();
    var session= document.getElementById('Anti')
    if(hrs>=12){
       session.innerHTML='PM'
    }
    else{
  session.innerHTML='AM'    }
    document.getElementById('hours').innerHTML=hrs;
    document.getElementById('minutes').innerHTML=min;
    document.getElementById('seconds').innerHTML=sec;
}
setInterval(displaytime,1000);