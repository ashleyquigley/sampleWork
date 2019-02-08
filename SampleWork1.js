
//Task
//Query the api for monthly data based on a reset day. In this case, the data will reset on the 25th of each month. 

var resetDate = 25;
var today = moment().startOf('day');

//check if today is after the reset day
var previousMonth = moment().date(resetDate).startOf('day');

if(today.diff(previousMonth, 'days', true) < 0){
  //not quite the reset day
  start = previousMonth.subtract(1, 'month').startOf('day').unix();
  end = today.unix();
  
}else if(today.diff(previousMonth, 'days', true) > 0){
  //past the reset day
  start = previousMonth.startOf('day').unix();
  end = today.unix();
  
}else{
  //today is the reset day
  start = today.startOf('day').unix();
  end = today.unix();
}