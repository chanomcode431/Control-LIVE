let duration = 60; // วินาที (1 นาที)
let remaining = duration;
let interval = null;

const timerEl = document.getElementById("timer");

function formatTime(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function startTimer() {
  if (interval) return;

  interval = setInterval(() => {
    remaining--;
    timerEl.textContent = formatTime(remaining);

    if (remaining <= 0) {
      stopTimer();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
  interval = null;
}

function resetTimer() {
  stopTimer();
  remaining = duration;
  timerEl.textContent = formatTime(remaining);
}

// คีย์ลัด
document.addEventListener("keydown", (e) => {
  if (e.key === " ") startTimer();      // Space = เริ่ม
  if (e.key === "r") resetTimer();      // R = รีเซ็ต
  if (e.key === "s") stopTimer();       // S = หยุด
});
