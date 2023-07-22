const intToTime = ( timeInSec ) => {
  let minutes = timeInSec % 60;
  let hours = parseInt( timeInSec / 60 ).toString();

  if( parseInt( timeInSec / 60 ) < 10 ) {
      hours = "0" + hours;
  }
  
  if( timeInSec % 60 < 10 ) {
      minutes = "0" + minutes;
  }

  return hours + ":" + minutes;
}

const timeToInt = ( time ) => {
  const hours = time[0] + time[1];
  const minutes = time[3] + time[4];

  return parseInt( hours ) * 60 + parseInt( minutes );
}

export { intToTime, timeToInt };