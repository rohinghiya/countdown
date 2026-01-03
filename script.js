const target = new Date("August 2, 2026 07:52:00").getTime();
const el = document.getElementById("countdown");

function tick() {
  const now = Date.now();
  const diff = target - now;

  if (diff <= 0) {
    el.textContent = "00d 00h 00m 00s";
    return;
  }

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  el.textContent =
    `${d}d ${h.toString().padStart(2, "0")}h ` +
    `${m.toString().padStart(2, "0")}m ` +
    `${s.toString().padStart(2, "0")}s`;
}

tick();
setInterval(tick, 1000);
