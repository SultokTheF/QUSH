const intToTime = (timeInSec: number): string => {
  const minutes = timeInSec % 60;
  const hours = Math.floor(timeInSec / 60); // Using Math.floor for integer division

  // Use template literals for string concatenation
  const formattedHours = hours < 10 ? `0${hours}` : `${hours}`;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;

  return `${formattedHours}:${formattedMinutes}`;
};


const timeToInt = (time: string): number => {
  const [hoursStr, minutesStr] = time.split(":");
  const hours = parseInt(hoursStr);
  const minutes = parseInt(minutesStr);

  if (isNaN(hours) || isNaN(minutes)) {
    throw new Error("Invalid time format");
  }

  return hours * 60 + minutes;
};

export { intToTime, timeToInt };
