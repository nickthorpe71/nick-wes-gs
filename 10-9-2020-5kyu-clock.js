function humanReadable(seconds) {
  const hr = String(Math.floor(seconds / 3600)).padStart(2, '0');
  const min = String(Math.floor((seconds - (hr * 3600)) / 60)).padStart(2, '0');
  const sec = String(Math.floor(seconds - hr * 3600 - min * 60)).padStart(2, '0');

  return `${hr}:${min}:${sec}`;
}


console.log(humanReadable(69438));