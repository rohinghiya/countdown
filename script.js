const countdownEl = document.getElementById("countdown");
const viewsEl = document.getElementById("views");
const target = new Date("August 2, 2026 07:52:00").getTime();

/* Countdown */
function tick() {
  const now = Date.now();
  const diff = target - now;

  if (diff <= 0) {
    countdownEl.textContent = "00d 00h 00m 00s";
    return;
  }

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  countdownEl.textContent =
    `${d}d ${h.toString().padStart(2, "0")}h ` +
    `${m.toString().padStart(2, "0")}m ` +
    `${s.toString().padStart(2, "0")}s`;
}

/* Global view counter */
async function updateViews() {
  try {
    const res = await fetch("https://view-counter.yourname.workers.dev");
    const data = await res.json();
    viewsEl.textContent = `view count: ${data.views}`;
  } catch {
    viewsEl.textContent = "view count: —";
  }
}

/* Initialize */
tick();
updateViews();
setInterval(tick, 1000);
