function formatDuration(seconds) {
  let time = {};
  let length = 0;

  time.year = 0;
  time.day = Math.floor(seconds / 86400);
  seconds -= time.day * 86400;

  if (time.day > 365) {
    time.year = Math.floor(time.day / 365);
    time.day -= time.year * 365;
  }

  time.hour = Math.floor(seconds / 3600);
  seconds -= time.hour * 3600;
  time.minute = Math.floor(seconds / 60);
  seconds -= time.minute * 60;

  time.second = seconds;

  let result = '';

  for (const value of Object.values(time)) {
    if (value > 0)
      length++;
  }

  let index = 0;

  for (const key of Object.keys(time)) {
    if (time[key] > 0) {

      if (index > 0) {
        if (index === length - 1)
          result += ' and ';
        else
          result += ', ';
      }

      result += `${time[key]} ${key}`;

      if (time[key] > 1)
        result += 's';

      index++;
    }
  }

  return (result === '') ? 'now' : result;
}


console.log(formatDuration(36008 * 3604 + 544));
console.log(formatDuration(60));
console.log(formatDuration(5));
console.log(formatDuration(3606));
console.log(formatDuration(0));
