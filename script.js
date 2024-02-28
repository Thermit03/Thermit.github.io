function updateCountdown() {
  const birthday = new Date("2025-02-28T00:00:00+08:00");
  const now = new Date();
  const timeDiff = birthday - now;
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = (timeDiff % (1000 * 60)) / 1000;
  document.getElementById("countdown").textContent = `${days}天 ${hours}小时 ${minutes}分 ${seconds.toFixed(3)}秒`;
}

setInterval(updateCountdown, 1);
