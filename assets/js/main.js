// Homepage page countdown timer
(() => {
  const pad = n => String(n).padStart(2, "0");

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-countdown]").forEach(root => {
      const target = new Date(root.dataset.target);
      const get = u => root.querySelector(`[data-unit="${u}"]`);
      const el = { d:get("days"), h:get("hours"), m:get("minutes"), s:get("seconds") };

      const render = () => {
        let diff = target - new Date();
        if (diff < 0) diff = 0;

        const sec = Math.floor(diff / 1000);
        const days = Math.floor(sec / 86400);
        const hours = Math.floor((sec % 86400) / 3600);
        const mins = Math.floor((sec % 3600) / 60);
        const secs = sec % 60;

        if (el.d) el.d.textContent = pad(days);
        if (el.h) el.h.textContent = pad(hours);
        if (el.m) el.m.textContent = pad(mins);
        if (el.s) el.s.textContent = pad(secs);

        if (diff === 0) clearInterval(timer);
      };

      render();
      const timer = setInterval(render, 1000);
    });
  });
})();