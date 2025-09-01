/*
 * Clock script for the gradient clock.
 *
 * This script displays the current time in 12‑hour format with no
 * leading zero on the hour. The clock updates every second. The
 * CSS handles the responsive scaling of the text, so no additional
 * sizing logic is required here.
 */

function updateTime() {
  const clock = document.getElementById('clock');
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  hours = hours % 12;
  if (hours === 0) hours = 12;
  const minuteStr = minutes < 10 ? '0' + minutes : String(minutes);
  clock.textContent = `${hours}:${minuteStr}`;
}

window.addEventListener('load', updateTime);
window.addEventListener('resize', updateTime);
setInterval(updateTime, 1000);