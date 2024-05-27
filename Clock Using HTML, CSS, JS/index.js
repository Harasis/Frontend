setInterval(() => {
  d = new Date();
  htime = d.getHours();
  mtime = d.getMinutes();
  stime = d.getSeconds();

  hrotation = 30 * htime + mtime / 2;
  mrotation = 6 * mtime;
  srotation = 6 * stime;

  second.style.transform = `rotate(${srotation}deg)`;
  minute.style.transform = `rotate(${mrotation}deg)`;
  hour.style.transform = `rotate(${hrotation}deg)`;
}, 1000);
